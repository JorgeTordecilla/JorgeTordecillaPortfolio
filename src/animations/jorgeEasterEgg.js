// src/animations/jorgeEasterEgg.js
// Easter egg: type "jorge" (any case) → the 27 cubies explode outward,
// float 1.5 s, then reassemble with spring physics.

import * as THREE from 'three';
import { gsap }   from 'gsap';

const TARGET = 'jorge';

export function initJorgeEasterEgg(rubikCube) {
  let buffer = '';

  document.addEventListener('keydown', (e) => {
    // Ignore modifier-only keys and special keys (length > 1)
    if (e.key.length !== 1) return;

    buffer += e.key.toLowerCase();
    if (buffer.length > TARGET.length) {
      buffer = buffer.slice(-TARGET.length);
    }

    if (buffer === TARGET) {
      buffer = '';
      triggerExplosion(rubikCube);
    }
  });
}

function triggerExplosion(rubikCube) {
  // Guard: block re-entry and mid-rotation trigger
  if (rubikCube._exploding || rubikCube.isAnimating) return;

  rubikCube._exploding = true;
  rubikCube.isAnimating = true; // freeze move queue

  const cubies = rubikCube.cubies;

  // ─ Snapshot current world positions & rotations before we touch anything
  const snapPos = cubies.map(c => ({
    x: c.position.x,
    y: c.position.y,
    z: c.position.z,
  }));
  const snapRot = cubies.map(c => ({
    x: c.rotation.x,
    y: c.rotation.y,
    z: c.rotation.z,
  }));

  // Kill any running tweens on the cubies
  cubies.forEach(c => {
    gsap.killTweensOf(c.position);
    gsap.killTweensOf(c.rotation);
    gsap.killTweensOf(c.scale);
  });

  // ─ Compute explosion target for each cubie
  const explodedPos = cubies.map((_, i) => {
    const p   = snapPos[i];
    const dir = new THREE.Vector3(p.x, p.y, p.z);

    // Center cubie (0,0,0) has no natural direction — pick random one
    if (dir.lengthSq() < 0.01) {
      dir.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
    }
    dir.normalize();

    // Randomise distance (3.5 – 6 units) + perpendicular wobble for organic feel
    const dist   = 3.5 + Math.random() * 2.5;
    const wobble = new THREE.Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5,
    ).normalize().multiplyScalar(0.5 + Math.random() * 0.8);

    dir.multiplyScalar(dist).add(wobble);

    return { x: p.x + dir.x, y: p.y + dir.y, z: p.z + dir.z };
  });

  // ─ Phase 1: EXPLODE (0 – ~0.6 s)
  cubies.forEach((cubie, i) => {
    const delay = i * 0.004 + Math.random() * 0.06; // slight stagger

    gsap.to(cubie.position, {
      x: explodedPos[i].x,
      y: explodedPos[i].y,
      z: explodedPos[i].z,
      duration: 0.55,
      ease: 'power4.out',
      delay,
    });

    // Random spin during flight
    gsap.to(cubie.rotation, {
      x: snapRot[i].x + (Math.random() - 0.5) * Math.PI * 3,
      y: snapRot[i].y + (Math.random() - 0.5) * Math.PI * 3,
      z: snapRot[i].z + (Math.random() - 0.5) * Math.PI * 2,
      duration: 0.55,
      ease: 'power2.out',
      delay,
    });

    // Slight scale punch for each cubie
    gsap.to(cubie.scale, {
      x: 1 + Math.random() * 0.25,
      y: 1 + Math.random() * 0.25,
      z: 1 + Math.random() * 0.25,
      duration: 0.3,
      ease: 'power2.out',
      delay,
    });
  });

  // ─ Phase 2 → 3: float 1.5 s, then REASSEMBLE
  setTimeout(() => {
    cubies.forEach((cubie, i) => {
      const delay = Math.random() * 0.2; // stagger the return

      gsap.to(cubie.position, {
        x: snapPos[i].x,
        y: snapPos[i].y,
        z: snapPos[i].z,
        duration: 0.9,
        ease: 'back.out(1.4)',
        delay,
      });

      gsap.to(cubie.rotation, {
        x: snapRot[i].x,
        y: snapRot[i].y,
        z: snapRot[i].z,
        duration: 0.9,
        ease: 'back.out(1.4)',
        delay,
      });

      gsap.to(cubie.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.55,
        ease: 'power2.out',
        delay,
      });
    });

    // Release locks after the longest possible tween finishes
    // max delay (0.2) + duration (0.9) + small buffer = 1.2 s
    setTimeout(() => {
      rubikCube._exploding  = false;
      rubikCube.isAnimating = false;
      rubikCube._processQueue(); // resume queued scroll moves
    }, 1200);

  }, 1500); // float window
}
