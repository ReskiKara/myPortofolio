import * as THREE from 'three';

export function initTongkonan() {
    const container = document.getElementById('tongkonan-canvas');
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        50, container.clientWidth / container.clientHeight, 1, 500
    );
    camera.position.set(40, 25, 80);
    camera.lookAt(0, 5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // =============================================
    // TONGKONAN HOUSE — Wireframe Construction
    // =============================================

    const lineMat = new THREE.LineBasicMaterial({
        color: 0x00ccff, transparent: true, opacity: 0.7
    });
    const accentMat = new THREE.LineBasicMaterial({
        color: 0x9d4edd, transparent: true, opacity: 0.6
    });
    const faintMat = new THREE.LineBasicMaterial({
        color: 0x2266aa, transparent: true, opacity: 0.3
    });

    function addLine(pts, mat) {
        const geo = new THREE.BufferGeometry().setFromPoints(
            pts.map(p => new THREE.Vector3(p[0], p[1], p[2]))
        );
        group.add(new THREE.Line(geo, mat || lineMat));
    }

    // --- BODY (Rectangular base structure) ---
    const bW = 12;  // half-width (x)
    const bH = 10;  // height (y)
    const bD = 22;  // half-depth (z)
    const bY = 8;   // base elevation (on stilts)

    // Bottom frame
    addLine([[-bW, bY, -bD], [bW, bY, -bD], [bW, bY, bD], [-bW, bY, bD], [-bW, bY, -bD]]);
    // Top frame
    addLine([[-bW, bY+bH, -bD], [bW, bY+bH, -bD], [bW, bY+bH, bD], [-bW, bY+bH, bD], [-bW, bY+bH, -bD]]);
    // Vertical pillars
    addLine([[-bW, bY, -bD], [-bW, bY+bH, -bD]]);
    addLine([[bW, bY, -bD], [bW, bY+bH, -bD]]);
    addLine([[bW, bY, bD], [bW, bY+bH, bD]]);
    addLine([[-bW, bY, bD], [-bW, bY+bH, bD]]);

    // --- STILTS (Pillars going down) ---
    const stiltY = 0;
    const stiltPositions = [
        [-bW+2, -bD+3], [-bW+2, 0], [-bW+2, bD-3],
        [bW-2, -bD+3], [bW-2, 0], [bW-2, bD-3]
    ];
    stiltPositions.forEach(([x, z]) => {
        addLine([[x, stiltY, z], [x, bY, z]], faintMat);
        // Small base pad
        addLine([[x-1.5, stiltY, z-1.5], [x+1.5, stiltY, z-1.5],
                 [x+1.5, stiltY, z+1.5], [x-1.5, stiltY, z+1.5],
                 [x-1.5, stiltY, z-1.5]], faintMat);
    });

    // --- ROOF (Iconic Tongkonan curved saddle roof) ---
    const roofPeakY = bY + bH + 12; // peak height
    const roofOverhang = 8;          // overhang beyond body
    const roofCurveUp = 18;          // how much the ends curve up

    // Generate roof ridge curve (the iconic curved line)
    function roofCurve(zNorm) {
        // zNorm: -1 to 1 (front to back)
        // Parabolic curve: high at ends, lower in middle
        const curveFactor = Math.pow(Math.abs(zNorm), 2.2);
        return roofPeakY + curveFactor * roofCurveUp;
    }

    // Roof ridge (center top line - the iconic silhouette)
    const ridgePoints = [];
    const roofLen = bD + roofOverhang;
    for (let i = 0; i <= 30; i++) {
        const t = (i / 30) * 2 - 1; // -1 to 1
        const z = t * roofLen;
        const y = roofCurve(t);
        ridgePoints.push([0, y, z]);
    }
    addLine(ridgePoints, accentMat);

    // Left and right eave curves
    [-1, 1].forEach(side => {
        const eavePoints = [];
        const eaveWidth = bW + 5;
        for (let i = 0; i <= 30; i++) {
            const t = (i / 30) * 2 - 1;
            const z = t * roofLen;
            const y = roofCurve(t) - 6; // eaves are lower than ridge
            eavePoints.push([side * eaveWidth, y, z]);
        }
        addLine(eavePoints, lineMat);

        // Connect eaves to ridge with rafters
        for (let i = 0; i <= 30; i += 5) {
            const t = (i / 30) * 2 - 1;
            const z = t * roofLen;
            const ridgeY = roofCurve(t);
            const eaveY = ridgeY - 6;
            addLine([
                [0, ridgeY, z],
                [side * eaveWidth, eaveY, z]
            ], faintMat);
        }
    });

    // Front and back triangular gable
    [-1, 1].forEach(end => {
        const z = end * roofLen;
        const ridgeY = roofCurve(end);
        const eaveY = ridgeY - 6;
        const eaveW = bW + 5;

        // Triangle: left eave → ridge → right eave
        addLine([
            [-eaveW, eaveY, z],
            [0, ridgeY, z],
            [eaveW, eaveY, z]
        ], lineMat);

        // Connect gable to body walls
        addLine([[-eaveW, eaveY, z], [-bW, bY+bH, end * bD]], faintMat);
        addLine([[eaveW, eaveY, z], [bW, bY+bH, end * bD]], faintMat);
    });

    // --- DECORATIVE DETAILS ---
    // Horizontal body patterns (Toraja carving lines)
    for (let y = bY + 2; y < bY + bH; y += 3) {
        addLine([[-bW, y, -bD], [-bW, y, bD]], faintMat);
        addLine([[bW, y, -bD], [bW, y, bD]], faintMat);
    }

    // Front face cross pattern
    addLine([[-bW, bY, -bD], [bW, bY+bH, -bD]], faintMat);
    addLine([[bW, bY, -bD], [-bW, bY+bH, -bD]], faintMat);

    // --- PLATFORM / LEGO (front porch) ---
    addLine([[-bW-4, bY-1, -bD-4], [bW+4, bY-1, -bD-4],
             [bW+4, bY-1, -bD], [-bW-4, bY-1, -bD],
             [-bW-4, bY-1, -bD-4]], faintMat);

    // =============================================
    // GLOW PARTICLES on structure
    // =============================================
    function makeGlow() {
        const c = document.createElement('canvas');
        c.width = 32; c.height = 32;
        const ctx = c.getContext('2d');
        const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        g.addColorStop(0, 'rgba(0,220,255,1)');
        g.addColorStop(0.3, 'rgba(0,220,255,0.3)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 32, 32);
        return new THREE.CanvasTexture(c);
    }

    // Place glowing dots at key structural points
    const keyPoints = [
        // Corners
        [-bW, bY, -bD], [bW, bY, -bD], [bW, bY, bD], [-bW, bY, bD],
        [-bW, bY+bH, -bD], [bW, bY+bH, -bD], [bW, bY+bH, bD], [-bW, bY+bH, bD],
        // Roof peaks
        [0, roofCurve(-1), -roofLen], [0, roofCurve(1), roofLen],
        [0, roofPeakY, 0],
        // Stilt bases
        ...stiltPositions.map(([x, z]) => [x, stiltY, z])
    ];

    const kpPos = new Float32Array(keyPoints.length * 3);
    keyPoints.forEach((p, i) => {
        kpPos[i*3] = p[0]; kpPos[i*3+1] = p[1]; kpPos[i*3+2] = p[2];
    });

    const kpGeo = new THREE.BufferGeometry();
    kpGeo.setAttribute('position', new THREE.BufferAttribute(kpPos, 3));
    group.add(new THREE.Points(kpGeo, new THREE.PointsMaterial({
        map: makeGlow(),
        color: 0x00f0ff,
        size: 4,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    })));

    // =============================================
    // TEXT LABEL
    // =============================================
    function makeLabel(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 512; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.font = 'bold 30px "Space Grotesk", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#00ccff';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#00ccff';
        ctx.fillText(text, 256, 32);
        ctx.shadowBlur = 3;
        ctx.fillText(text, 256, 32);

        const tex = new THREE.CanvasTexture(canvas);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: tex, transparent: true, opacity: 0.7,
            blending: THREE.AdditiveBlending, depthWrite: false
        }));
        sprite.scale.set(50, 6, 1);
        return sprite;
    }

    const label = makeLabel('TONGKONAN // SOUTH SULAWESI');
    label.position.set(0, -5, 0);
    group.add(label);

    // =============================================
    // RESIZE & ANIMATE
    // =============================================
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.005;

        group.rotation.y += 0.003;

        renderer.render(scene, camera);
    }
    animate();
}
