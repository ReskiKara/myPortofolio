import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initialize3DNetwork() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    // No background needed since the CSS has the background glow
    
    // CAMERA SETUP
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 250;

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // CONTROLS (Allow user to move and scroll the layout 3D space)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Disable zoom so it doesn't break page scroll

    // GROUP FOR ROTATION
    const group = new THREE.Group();
    scene.add(group);

    // PARTICLES / NODES SETUP
    const maxParticleCount = 500; // Global Nodes
    const r = 180; // Sphere radius
    const rHalf = r / 2;

    const particlePositions = new Float32Array(maxParticleCount * 3);
    const pMaterial = new THREE.PointsMaterial({
        color: 0x00f0ff,
        size: 2,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: true
    });

    for (let i = 0; i < maxParticleCount; i++) {
        // Random distribute on a sphere surface (Globe Network)
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        // Add a slight random variance to the radius to make the globe layer a bit thick
        const variance = (Math.random() * 15) - 7.5;
        const currentR = rHalf + variance;

        const x = currentR * Math.sin(phi) * Math.cos(theta);
        const y = currentR * Math.sin(phi) * Math.sin(theta);
        const z = currentR * Math.cos(phi);

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
    }

    const pGeometry = new THREE.BufferGeometry();
    pGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Create the particle mesh
    const particleSystem = new THREE.Points(pGeometry, pMaterial);
    group.add(particleSystem);

    // LINES / EDGES SETUP
    // Finding closest nodes to connect lines (Neural Network style)
    const linesPositions = [];
    const minDistance = 28; // Connect logic threshold distance

    for (let i = 0; i < maxParticleCount; i++) {
        for (let j = i + 1; j < maxParticleCount; j++) {
            const dx = particlePositions[i * 3] - particlePositions[j * 3];
            const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
            const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < minDistance) {
                // Add start and end points for the line
                linesPositions.push(
                    particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2],
                    particlePositions[j * 3], particlePositions[j * 3 + 1], particlePositions[j * 3 + 2]
                );
            }
        }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x9d4edd, // Warna Ungu (Purple) sesuai saran Anda
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    group.add(linesMesh);

    // RESIZE HANDLING
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    // ANIMATION LOOP
    function animate() {
        requestAnimationFrame(animate);

        // Slowly rotate the entire network automatically
        group.rotation.y += 0.002;
        group.rotation.x += 0.001;

        controls.update(); // required if damping enabled
        renderer.render(scene, camera);
    }

    animate();
}
