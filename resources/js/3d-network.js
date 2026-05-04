import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initBrainNetwork() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        50, container.clientWidth / container.clientHeight, 1, 1000
    );
    camera.position.set(0, 30, 260);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    const group = new THREE.Group();
    scene.add(group);

    // =============================================
    // GLOW TEXTURE
    // =============================================
    function makeGlow(r, g, b) {
        const c = document.createElement('canvas');
        c.width = 64; c.height = 64;
        const ctx = c.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
        grad.addColorStop(0.3, `rgba(${r},${g},${b},0.4)`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
    }

    const cyanGlow = makeGlow(0, 240, 255);

    // =============================================
    // TEXT LABEL SPRITE GENERATOR
    // =============================================
    function makeLabel(text, color) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.font = 'bold 28px "Space Grotesk", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = color;
        ctx.fillText(text, 128, 32);

        // Second pass for brightness
        ctx.shadowBlur = 4;
        ctx.fillText(text, 128, 32);

        const tex = new THREE.CanvasTexture(canvas);
        const sprite = new THREE.Sprite(
            new THREE.SpriteMaterial({
                map: tex,
                transparent: true,
                opacity: 0.85,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            })
        );
        sprite.scale.set(28, 7, 1);
        return sprite;
    }

    // =============================================
    // BACKGROUND AMBIENT NEURON PARTICLES
    // =============================================
    const ambientCount = 200;
    const ambientPos = new Float32Array(ambientCount * 3);
    for (let i = 0; i < ambientCount; i++) {
        ambientPos[i * 3] = (Math.random() - 0.5) * 350;
        ambientPos[i * 3 + 1] = (Math.random() - 0.5) * 250;
        ambientPos[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }

    const ambientGeo = new THREE.BufferGeometry();
    ambientGeo.setAttribute('position', new THREE.BufferAttribute(ambientPos, 3));
    const ambientMat = new THREE.PointsMaterial({
        map: makeGlow(60, 100, 180),
        color: 0x334466,
        size: 3,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });
    group.add(new THREE.Points(ambientGeo, ambientMat));

    // Background connection lines (sparse)
    const bgLines = [];
    for (let i = 0; i < ambientCount; i++) {
        for (let j = i + 1; j < ambientCount; j++) {
            if (bgLines.length / 6 > 80) break;
            const dx = ambientPos[i*3] - ambientPos[j*3];
            const dy = ambientPos[i*3+1] - ambientPos[j*3+1];
            const dz = ambientPos[i*3+2] - ambientPos[j*3+2];
            if (Math.sqrt(dx*dx + dy*dy + dz*dz) < 40) {
                bgLines.push(
                    ambientPos[i*3], ambientPos[i*3+1], ambientPos[i*3+2],
                    ambientPos[j*3], ambientPos[j*3+1], ambientPos[j*3+2]
                );
            }
        }
    }
    if (bgLines.length > 0) {
        const bgGeo = new THREE.BufferGeometry();
        bgGeo.setAttribute('position', new THREE.Float32BufferAttribute(bgLines, 3));
        group.add(new THREE.LineSegments(bgGeo, new THREE.LineBasicMaterial({
            color: 0x1a2a44, transparent: true, opacity: 0.15,
            blending: THREE.AdditiveBlending
        })));
    }

    // =============================================
    // CNN ARCHITECTURE
    // =============================================
    const layers = [
        { type: 'box', w: 42, h: 42, d: 2,  z: -105, color: 0x00ddff, label: 'INPUT' },
        { type: 'box', w: 36, h: 36, d: 8,  z: -72,  color: 0x2299ff, label: 'CONV2D' },
        { type: 'box', w: 18, h: 18, d: 8,  z: -48,  color: 0x1177cc, label: 'POOL' },
        { type: 'box', w: 14, h: 14, d: 12, z: -22,  color: 0x3388ff, label: 'CONV2D' },
        { type: 'box', w: 7,  h: 7,  d: 12, z: 0,    color: 0x1177cc, label: 'POOL' },
        { type: 'box', w: 5,  h: 5,  d: 16, z: 22,   color: 0x4499ff, label: 'CONV2D' },
        { type: 'box', w: 2,  h: 28, d: 2,  z: 46,   color: 0x7744cc, label: 'FLATTEN' },
        { type: 'dense', n: 28, z: 66,  color: 0x9d4edd, label: 'DENSE_128' },
        { type: 'dense', n: 14, z: 86,  color: 0xc77dff, label: 'DENSE_64' },
        { type: 'dense', n: 4,  z: 108, color: 0x00f0ff, label: 'OUTPUT' },
    ];

    const layerNodes = []; // store node positions per layer for connections

    layers.forEach((layer) => {
        const lg = new THREE.Group();
        lg.position.z = layer.z;

        if (layer.type === 'dense') {
            const spacing = 5.5;
            const startY = -((layer.n - 1) * spacing) / 2;
            const nodes = [];

            for (let i = 0; i < layer.n; i++) {
                const y = startY + i * spacing;

                // Glowing sphere
                const sg = new THREE.SphereGeometry(2, 10, 10);
                const sm = new THREE.MeshBasicMaterial({
                    color: layer.color, transparent: true, opacity: 0.85
                });
                const mesh = new THREE.Mesh(sg, sm);
                mesh.position.set(0, y, 0);
                lg.add(mesh);

                // Soft halo around each node
                const halo = new THREE.Sprite(new THREE.SpriteMaterial({
                    map: makeGlow(
                        (layer.color >> 16) & 255,
                        (layer.color >> 8) & 255,
                        layer.color & 255
                    ),
                    transparent: true,
                    opacity: 0.3,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                }));
                halo.scale.set(8, 8, 1);
                halo.position.set(0, y, 0);
                lg.add(halo);

                nodes.push(new THREE.Vector3(0, y, layer.z));
            }
            layerNodes.push(nodes);

        } else {
            // 3D Box wireframe
            const boxGeo = new THREE.BoxGeometry(layer.d, layer.h, layer.w);

            // Wireframe edges
            const edges = new THREE.EdgesGeometry(boxGeo);
            lg.add(new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
                color: layer.color, transparent: true, opacity: 0.7
            })));

            // Filled faces (very transparent)
            lg.add(new THREE.Mesh(boxGeo, new THREE.MeshBasicMaterial({
                color: layer.color, transparent: true, opacity: 0.06, side: THREE.DoubleSide
            })));

            // Feature map grid on front face
            if (layer.label.includes('CONV') || layer.label === 'INPUT') {
                const gLines = [];
                const step = Math.max(layer.h / 5, 3);
                const hH = layer.h / 2, hW = layer.w / 2;
                const fx = layer.d / 2 + 0.15;

                for (let gy = -hH; gy <= hH; gy += step)
                    gLines.push(fx, gy, -hW, fx, gy, hW);
                for (let gz = -hW; gz <= hW; gz += step)
                    gLines.push(fx, -hH, gz, fx, hH, gz);

                const gGeo = new THREE.BufferGeometry();
                gGeo.setAttribute('position', new THREE.Float32BufferAttribute(gLines, 3));
                lg.add(new THREE.LineSegments(gGeo, new THREE.LineBasicMaterial({
                    color: layer.color, transparent: true, opacity: 0.18
                })));
            }

            // Generate representative nodes for connections
            const nodes = [];
            const nc = Math.min(10, Math.max(4, Math.floor((layer.w * layer.h) / 25)));
            for (let i = 0; i < nc; i++) {
                nodes.push(new THREE.Vector3(
                    (Math.random() - 0.5) * layer.d * 0.7,
                    (Math.random() - 0.5) * layer.h * 0.7,
                    layer.z
                ));
            }
            layerNodes.push(nodes);
        }

        // TEXT LABEL above each layer
        const label = makeLabel(layer.label, '#' + layer.color.toString(16).padStart(6, '0'));
        label.position.set(0, (layer.h || (layer.n ? layer.n * 2.75 : 20)) / 2 + 8, 0);
        lg.add(label);

        group.add(lg);
    });

    // =============================================
    // INTER-LAYER CONNECTIONS
    // =============================================
    for (let l = 0; l < layerNodes.length - 1; l++) {
        const from = layerNodes[l];
        const to = layerNodes[l + 1];
        const cPos = [];
        const maxC = Math.min(from.length * to.length, 50);
        let cnt = 0;

        for (let i = 0; i < from.length && cnt < maxC; i++) {
            for (let j = 0; j < to.length && cnt < maxC; j++) {
                if (Math.random() < 0.45) {
                    cPos.push(from[i].x, from[i].y, from[i].z,
                              to[j].x, to[j].y, to[j].z);
                    cnt++;
                }
            }
        }

        if (cPos.length > 0) {
            const cGeo = new THREE.BufferGeometry();
            cGeo.setAttribute('position', new THREE.Float32BufferAttribute(cPos, 3));
            const t = l / (layerNodes.length - 1);
            const cCol = new THREE.Color().lerpColors(
                new THREE.Color(0x00ccff), new THREE.Color(0x9d4edd), t
            );
            group.add(new THREE.LineSegments(cGeo, new THREE.LineBasicMaterial({
                color: cCol, transparent: true, opacity: 0.1,
                blending: THREE.AdditiveBlending
            })));
        }
    }

    // =============================================
    // DATA FLOW PARTICLES (moving left → right)
    // =============================================
    const flowCount = 80;
    const flowPos = new Float32Array(flowCount * 3);
    const flowSpd = new Float32Array(flowCount);
    const zMin = layers[0].z - 15;
    const zMax = layers[layers.length - 1].z + 15;

    for (let i = 0; i < flowCount; i++) {
        flowPos[i * 3] = (Math.random() - 0.5) * 18;
        flowPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
        flowPos[i * 3 + 2] = zMin + Math.random() * (zMax - zMin);
        flowSpd[i] = 0.25 + Math.random() * 0.55;
    }

    const flowGeo = new THREE.BufferGeometry();
    flowGeo.setAttribute('position', new THREE.BufferAttribute(flowPos, 3));
    const flowMat = new THREE.PointsMaterial({
        map: cyanGlow,
        color: 0x00f0ff,
        size: 5,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });
    group.add(new THREE.Points(flowGeo, flowMat));

    // =============================================
    // RESIZE
    // =============================================
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // =============================================
    // ANIMATION
    // =============================================
    let time = 0;

    function animate() {
        requestAnimationFrame(animate);
        time += 0.006;

        // Gentle oscillation to show 3D depth
        group.rotation.y = Math.sin(time * 0.25) * 0.22;
        group.rotation.x = Math.sin(time * 0.18) * 0.06;

        // Data flow — particles stream through the CNN pipeline
        const fp = flowGeo.attributes.position.array;
        for (let i = 0; i < flowCount; i++) {
            fp[i * 3 + 2] += flowSpd[i];
            if (fp[i * 3 + 2] > zMax) {
                fp[i * 3] = (Math.random() - 0.5) * 18;
                fp[i * 3 + 1] = (Math.random() - 0.5) * 18;
                fp[i * 3 + 2] = zMin;
            }
        }
        flowGeo.attributes.position.needsUpdate = true;

        // Pulse effects
        flowMat.opacity = 0.65 + Math.sin(time * 3) * 0.15;
        flowMat.size = 5 + Math.sin(time * 2.5) * 1;
        ambientMat.opacity = 0.25 + Math.sin(time * 1.5) * 0.08;

        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}