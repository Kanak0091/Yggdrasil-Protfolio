/* ==========================================================================
   YGGDRASIL — Interactive Norse Mythology Realm-Map Portfolio
   Three.js r128 (non-module build) · Procedural realms · Custom orbit & flight
   FIXED VERSION: the loader always finishes, bloom is optional, and any
   3D failure falls back to the readable text view instead of freezing.
   ========================================================================== */

'use strict';

/* ==========================================================================
   1. RESUME DATA
   ========================================================================== */
const RESUME = {
  owner: {
    name: 'Kanak Sachin Chaudhary',
    title: 'BCA in Artificial Intelligence & Data Science',
    location: 'Gurugram, Haryana',
    summary: 'BCA in Artificial Intelligence & Data Science candidate at K.R. Mangalam University, Gurugram (Expected: May 2029), building projects across Python, data analytics, anomaly detection, REST APIs, and Linux shell workflows.'
  },
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Python', tier: 'Gold' },
        { name: 'Bash / Shell Scripting', tier: 'Steel' },
        { name: 'SQL (SQLite)', tier: 'Steel' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', tier: 'Steel' },
        { name: 'GitHub', tier: 'Steel' },
        { name: 'VS Code', tier: 'Steel' },
        { name: 'Linux Terminal', tier: 'Steel' },
        { name: 'Postman', tier: 'Iron' },
        { name: 'Microsoft Excel', tier: 'Steel' }
      ]
    },
    {
      category: 'Concepts',
      items: [
        { name: 'File Systems', tier: 'Iron' },
        { name: 'Process Management', tier: 'Iron' },
        { name: 'REST APIs', tier: 'Steel' },
        { name: 'Markdown', tier: 'Iron' },
        { name: 'Data Analytics', tier: 'Gold' },
        { name: 'Prompt Engineering', tier: 'Steel' }
      ]
    }
  ],
  experience: [],
  projects: [
    {
      title: 'CSE103 Lab GitHub Collaboration & API Interaction',
      period: 'November 2026',
      description: 'Configured Git version control workflows, repository structure, and structured Markdown documentation. Automated Linux shell tasks and interacted with REST APIs using command-line tools and Python scripts.',
      tags: ['Python', 'Bash', 'Git', 'REST APIs'],
      url: 'https://github.com/kanak0091/cse103-lab-LAB3'
    },
    {
      title: 'Data Science Capstone Project (Dscapstone)',
      period: 'November 2026',
      description: 'Analysed structured datasets using Python to uncover patterns and generate actionable analytical insights. Developed reproducible data processing workflows and documented findings in a version-controlled repository.',
      tags: ['Python', 'Data Analytics'],
      url: 'https://github.com/kanak0091/Dscapstone'
    },
    {
      title: 'Mule Account Detection Engine',
      period: 'November 2026',
      description: 'Designed an anomaly detection module in a team environment to identify and flag suspicious mule accounts. Implemented transaction pattern screening logic in Python to support financial fraud detection workflows.',
      tags: ['Python', 'Anomaly Detection'],
      url: 'https://github.com/kanak0091'
    }
  ],
  education: [
    {
      degree: 'BCA in Artificial Intelligence & Data Science',
      institution: 'K.R. Mangalam University, Gurugram',
      period: 'Expected: May 2029',
      details: []
    }
  ],
  achievements: [
    {
      title: 'Technical Certifications: Python Fundamentals (ID: OmkKtF-python-ZP9neU), Python Logic & Flow (ID: OmkKtF-python-C8r1xh), SQLite Fundamentals & Beyond the Basics (IDs: BTNRf6-sqlite-oRigJZ, BTNRf6-sqlite-PcA4IJ), AI Prompts Fundamentals (ID: BTNRf6-prompts-g0301x), Excel Fundamentals (ID: BTNRf6-excel-RJobxc)',
      issuer: 'Technical Certifications',
      year: 'July 2026 – August 2026'
    },
    {
      title: 'Industry-Led Workshops: Data Engineering, Analytics & Business Intelligence (October 2026) and Generative AI & RAG Systems with Prompt Engineering (September 2026)',
      issuer: 'K.R. Mangalam University',
      year: 'September 2026 – October 2026'
    },
    {
      title: 'Level 1 Programmer Certification in Computational Thinking',
      issuer: 'StayQrious Neoschool',
      year: ''
    },
    {
      title: 'Dance Teacher Diploma Final & Master of Dance in Bharatanatyam (First Division with Distinction in Practical)',
      issuer: 'Art & Cultural Foundation, Mumbai',
      year: 'May 2025 – May 2026'
    },
    {
      title: 'Extra-Curricular: Deep Data Science Hackathon 3.0',
      issuer: 'K.R. Mangalam University',
      year: 'October 2026'
    },
    {
      title: 'Extra-Curricular: Ncrypt (Nquest) Technical Event Representative (Shalom Presidency School)',
      issuer: 'Delhi Public School, Sushant Lok',
      year: 'December 2022'
    }
  ],
  contact: [
    { label: 'Email', value: '2601060001@krmu.edu.in', href: 'mailto:2601060001@krmu.edu.in' },
    { label: 'Phone', value: '+91-8826798833', href: 'tel:+918826798833' },
    { label: 'LinkedIn', value: 'linkedin.com/in/kanak-chaudhary-bbba52430', href: 'https://linkedin.com/in/kanak-chaudhary-bbba52430' },
    { label: 'GitHub', value: 'github.com/kanak0091', href: 'https://github.com/kanak0091' }
  ]
};

/* ==========================================================================
   2. REALM DEFINITIONS
   ========================================================================== */
const REALMS_CONFIG = [
  { id: 'midgard', index: 0, rune: 'ᛗ', name: 'Midgard', subtitle: 'Realm I · The Home World', navLabel: 'About',
    color: 0x46b884, accentHex: '#46b884', position: [0, 0.8, 7.8], radius: 1.35, cameraOffset: [0, 1.4, 4.4] },
  { id: 'svartalfheim', index: 1, rune: 'ᚲ', name: 'Svartalfheim', subtitle: 'Realm II · The Forge', navLabel: 'Skills',
    color: 0xff6a1a, accentHex: '#ff6a1a', position: [-8.4, -1.6, 4.6], radius: 1.25, cameraOffset: [-2.6, 1.2, 3.8] },
  { id: 'muspelheim', index: 2, rune: 'ᚦ', name: 'Muspelheim', subtitle: 'Realm III · Trials by Fire', navLabel: 'Experience',
    color: 0xff2e14, accentHex: '#ff2e14', position: [-9.2, 2.4, -4.8], radius: 1.38, cameraOffset: [-2.8, 1.5, 4.0] },
  { id: 'asgard', index: 3, rune: 'ᚨ', name: 'Asgard', subtitle: 'Realm IV · Great Deeds', navLabel: 'Projects',
    color: 0xf0c45a, accentHex: '#f0c45a', position: [0, 5.2, -8.8], radius: 1.48, cameraOffset: [0, 1.8, 4.6] },
  { id: 'alfheim', index: 4, rune: 'ᛚ', name: 'Alfheim', subtitle: 'Realm V · Halls of Knowledge', navLabel: 'Education',
    color: 0x7fd6ff, accentHex: '#7fd6ff', position: [8.8, 2.8, -4.4], radius: 1.25, cameraOffset: [2.7, 1.4, 3.9] },
  { id: 'valhalla', index: 5, rune: 'ᛟ', name: 'Valhalla', subtitle: 'Realm VI · Hall of Honor', navLabel: 'Honors',
    color: 0xd6a84a, accentHex: '#d6a84a', position: [8.5, -1.5, 4.5], radius: 1.32, cameraOffset: [2.6, 1.4, 3.9] },
  { id: 'bifrost', index: 6, rune: 'ᚱ', name: 'Bifröst', subtitle: 'Realm VII · The Bridge', navLabel: 'Contact',
    color: 0x9b8cff, accentHex: '#9b8cff', position: [0, -3.6, 10.6], radius: 1.18, cameraOffset: [0, 1.3, 4.2] }
];

/* ==========================================================================
   3. GLOBAL STATE (THREE objects are created later, inside init)
   ========================================================================== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const appState = {
  scene: null,
  camera: null,
  renderer: null,
  composer: null,
  bloomPass: null,
  clock: null,
  threeReady: false,
  isPaused: false,
  introComplete: false,
  selectedRealmIndex: -1,
  hoveredRealmIndex: -1,
  realmMeshes: [],
  realmGroups: [],
  bifrostBridges: [],
  worldTreeGroup: null,
  worldTreeLeaves: null,
  particleSystems: [],
  shootingStars: [],
  burstParticles: null,
  orbit: {
    theta: 0.08, phi: 1.22, radius: 21.5,
    targetTheta: 0.08, targetPhi: 1.22, targetRadius: 21.5,
    minRadius: 11, maxRadius: 34, minPhi: 0.45, maxPhi: 2.35,
    isDragging: false, dragDistance: 0, prevX: 0, prevY: 0,
    pinchStartDist: 0, pinchStartRadius: 21.5
  },
  mouseNDC: null,
  parallax: { x: 0, y: 0, targetX: 0, targetY: 0 },
  cameraLookAt: null,
  cameraTargetLookAt: null,
  cameraFlyGoalPos: null,
  isFlyingToRealm: false,
  raycaster: null,
  tmpScale: null,
  tmpProj: null,
  audio: { ctx: null, masterGain: null, isPlaying: false }
};

/* ==========================================================================
   4. INITIALIZATION & PRELOADER
   ========================================================================== */
function init() {
  // 1) Everything that does NOT need Three.js runs first.
  populateStaticBranding();
  buildNavigationAndMinimap();
  buildAccessibleView();
  bindUIEvents();

  // 2) The preloader always runs, so it can never freeze.
  runPreloaderSequence();

  // 3) The 3D scene is optional: if it fails, show the text view.
  try {
    if (typeof THREE === 'undefined') {
      throw new Error('Three.js failed to load (check your internet connection / script URLs).');
    }
    createThreeState();
    setupScene();
    setupPostProcessing();
    createCosmosBackdrop();
    createWorldTree();
    createAllRealms();
    createBurstParticlePool();
    bindSceneEvents();
    appState.threeReady = true;
    animate();
  } catch (err) {
    console.error('3D scene failed to start:', err);
    activateFallbackView();
  }
}

function createThreeState() {
  appState.clock = new THREE.Clock();
  appState.mouseNDC = new THREE.Vector2(99, 99);
  appState.cameraLookAt = new THREE.Vector3(0, 0.5, 0);
  appState.cameraTargetLookAt = new THREE.Vector3(0, 0.5, 0);
  appState.raycaster = new THREE.Raycaster();
  appState.tmpScale = new THREE.Vector3();
  appState.tmpProj = new THREE.Vector3();
}

function activateFallbackView() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('is-hidden');
  const canvasBox = document.getElementById('canvas-container');
  if (canvasBox) canvasBox.style.display = 'none';
  toggleAccessibleView(true);
  const exitBtn = document.getElementById('btn-exit-a11y');
  if (exitBtn) exitBtn.style.display = 'none';
}

function populateStaticBranding() {
  const ownerName = RESUME.owner && RESUME.owner.name ? RESUME.owner.name : 'YGGDRASIL';
  const hudName = document.getElementById('hud-owner-name');
  const a11yName = document.getElementById('a11y-name');
  const a11yRole = document.getElementById('a11y-role');

  if (hudName) hudName.textContent = ownerName.toUpperCase();
  if (a11yName) a11yName.textContent = ownerName;
  if (a11yRole && RESUME.owner && RESUME.owner.title) {
    a11yRole.textContent = RESUME.owner.title;
  }
}

function runPreloaderSequence() {
  const loader = document.getElementById('loader');
  const circle = document.getElementById('loader-circle');
  const percentEl = document.getElementById('loader-percent');
  const runes = document.querySelectorAll('.loader-runes span');
  const circumference = 339.292;

  let progress = 0;
  let finished = false;
  const stepDuration = prefersReducedMotion ? 15 : 28;

  function finish() {
    if (finished) return;
    finished = true;
    if (loader) loader.classList.add('is-hidden');
    triggerIntroCameraRush();
  }

  const timer = window.setInterval(() => {
    progress += prefersReducedMotion ? 20 : Math.floor(Math.random() * 8) + 4;
    if (progress >= 100) {
      progress = 100;
      window.clearInterval(timer);
    }

    const offset = circumference - (progress / 100) * circumference;
    if (circle) circle.style.strokeDashoffset = String(offset);
    if (percentEl) percentEl.textContent = progress + '%';

    const litCount = Math.ceil((progress / 100) * runes.length);
    runes.forEach((r, idx) => {
      if (idx < litCount) r.classList.add('carved');
    });

    if (progress === 100) {
      window.setTimeout(finish, prefersReducedMotion ? 100 : 320);
    }
  }, stepDuration);

  // Safety net: never keep the visitor on the loader for more than 4 seconds.
  window.setTimeout(finish, 4000);
}

function triggerIntroCameraRush() {
  if (!prefersReducedMotion) {
    appState.orbit.radius = 44;
    appState.orbit.phi = 1.48;
    appState.orbit.theta = -0.45;
    appState.orbit.targetRadius = 21.5;
    appState.orbit.targetPhi = 1.22;
    appState.orbit.targetTheta = 0.08;
  }
  appState.introComplete = true;

  const hint = document.getElementById('onboarding-hint');
  if (hint) {
    window.setTimeout(() => hint.classList.add('is-visible'), 550);
    window.setTimeout(() => hint.classList.add('is-dismissed'), 7500);
  }
}

/* ==========================================================================
   5. SCENE, RENDERER & POST-PROCESSING
   ========================================================================== */
function setupScene() {
  const canvas = document.getElementById('realm-canvas');

  appState.scene = new THREE.Scene();
  appState.scene.fog = new THREE.FogExp2(0x07080b, 0.017);

  appState.camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 180);
  appState.camera.position.set(0, 8, 22);

  appState.renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: 'high-performance'
  });
  appState.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  appState.renderer.setSize(window.innerWidth, window.innerHeight);
  appState.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  appState.renderer.toneMappingExposure = 1.15;

  appState.scene.add(new THREE.AmbientLight(0x1c2233, 1.35));

  const treeCoreLight = new THREE.PointLight(0xffaa3b, 3.2, 34, 1.5);
  treeCoreLight.position.set(0, 1.5, 0);
  appState.scene.add(treeCoreLight);

  const frostRimLight = new THREE.DirectionalLight(0x7fd6ff, 1.1);
  frostRimLight.position.set(14, 18, -12);
  appState.scene.add(frostRimLight);

  const emberFillLight = new THREE.DirectionalLight(0xff4a1c, 0.85);
  emberFillLight.position.set(-14, -8, 12);
  appState.scene.add(emberFillLight);
}

function setupPostProcessing() {
  // Bloom is a bonus. If any post-processing script is missing, render normally.
  if (!THREE.EffectComposer || !THREE.RenderPass || !THREE.UnrealBloomPass) {
    console.warn('Post-processing scripts not available — rendering without bloom.');
    appState.composer = null;
    return;
  }
  try {
    const size = new THREE.Vector2(window.innerWidth, window.innerHeight);
    appState.composer = new THREE.EffectComposer(appState.renderer);
    appState.composer.addPass(new THREE.RenderPass(appState.scene, appState.camera));
    appState.bloomPass = new THREE.UnrealBloomPass(size, 0.85, 0.65, 0.24);
    appState.composer.addPass(appState.bloomPass);
  } catch (err) {
    console.warn('Bloom setup failed — rendering without bloom.', err);
    appState.composer = null;
  }
}

/* ==========================================================================
   6. COSMOS BACKDROP
   ========================================================================== */
function createCosmosBackdrop() {
  const domeGeo = new THREE.SphereGeometry(85, 32, 24);
  const domeMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec3 vWorldPos;
      void main() {
        vec3 dir = normalize(vWorldPos);
        float band = sin(dir.x * 4.5 + uTime * 0.18) * cos(dir.z * 4.0 - uTime * 0.12);
        float horizon = smoothstep(-0.35, 0.55, dir.y);
        vec3 baseVoid = vec3(0.027, 0.031, 0.043);
        vec3 frostAurora = vec3(0.08, 0.24, 0.34) * max(0.0, band) * horizon;
        vec3 emberMist = vec3(0.24, 0.06, 0.03) * max(0.0, -band) * (1.0 - horizon);
        gl_FragColor = vec4(baseVoid + frostAurora + emberMist, 1.0);
      }
    `
  });
  const dome = new THREE.Mesh(domeGeo, domeMat);
  dome.userData.isAuroraDome = true;
  appState.auroraDome = dome;
  appState.scene.add(dome);

  appState.particleSystems.push(
    createParticleLayer(1100, 75, 0xe9e2d0, 0.22, 0.02, 'star'),
    createParticleLayer(420, 44, 0x7fd6ff, 0.26, -0.35, 'snow'),
    createParticleLayer(360, 38, 0xff4a1c, 0.3, 0.45, 'ember')
  );

  const rockGeo = new THREE.DodecahedronGeometry(1, 0);
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x161922, roughness: 0.92, metalness: 0.15 });
  const rockCount = 34;
  const rockInstanced = new THREE.InstancedMesh(rockGeo, rockMat, rockCount);
  const dummy = new THREE.Object3D();

  for (let i = 0; i < rockCount; i++) {
    const angle = (i / rockCount) * Math.PI * 2 + (i % 3) * 0.4;
    const dist = 22 + (i % 7) * 4.2;
    const y = ((i % 9) - 4) * 3.1;
    dummy.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
    dummy.rotation.set(i * 0.7, i * 1.1, i * 0.3);
    const sx = 0.5 + (i % 4) * 0.45;
    const sy = 0.9 + (i % 3) * 0.75;
    dummy.scale.set(sx, sy, sx * 0.85);
    dummy.updateMatrix();
    rockInstanced.setMatrixAt(i, dummy.matrix);
  }
  appState.scene.add(rockInstanced);

  for (let i = 0; i < 3; i++) {
    const streakGeo = new THREE.CylinderGeometry(0.01, 0.07, 3.2, 6);
    streakGeo.rotateZ(Math.PI / 2);
    const streakMat = new THREE.MeshBasicMaterial({
      color: i === 0 ? 0xff6a1a : 0x7fd6ff,
      transparent: true,
      opacity: 0.75
    });
    const meteor = new THREE.Mesh(streakGeo, streakMat);
    resetMeteor(meteor, i * 4);
    appState.scene.add(meteor);
    appState.shootingStars.push(meteor);
  }
}

function createParticleLayer(count, spread, colorHex, size, verticalSpeed, kind) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 2;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: colorHex,
    size: size,
    transparent: true,
    opacity: kind === 'star' ? 0.75 : 0.82,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(geo, mat);
  points.userData = { spread: spread, verticalSpeed: verticalSpeed, kind: kind };
  appState.scene.add(points);
  return points;
}

function resetMeteor(meteor, delayOffset) {
  meteor.position.set(
    -35 - Math.random() * 25 - delayOffset * 6,
    8 + (Math.random() - 0.5) * 18,
    -18 - Math.random() * 24
  );
  meteor.userData.speed = 16 + Math.random() * 10;
  meteor.userData.vy = -1.5 - Math.random() * 2.0;
}

/* ==========================================================================
   7. YGGDRASIL (THE WORLD TREE)
   ========================================================================== */
function createWorldTree() {
  const treeGroup = new THREE.Group();
  treeGroup.position.set(0, -1.2, 0);

  const barkMat = new THREE.MeshStandardMaterial({
    color: 0x261d17,
    emissive: 0x6b3a10,
    emissiveIntensity: 0.45,
    roughness: 0.85,
    metalness: 0.1
  });

  const veinMat = new THREE.MeshBasicMaterial({ color: 0xffb347, transparent: true, opacity: 0.88 });

  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.85, 6.2, 10), barkMat);
  trunk.position.y = 1.6;
  treeGroup.add(trunk);

  const spiralPoints = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const angle = t * Math.PI * 4;
    const r = 0.82 * (1 - t * 0.58);
    spiralPoints.push(new THREE.Vector3(Math.cos(angle) * r, -1.4 + t * 6.0, Math.sin(angle) * r));
  }
  const spiralCurve = new THREE.CatmullRomCurve3(spiralPoints);
  treeGroup.add(new THREE.Mesh(new THREE.TubeGeometry(spiralCurve, 48, 0.045, 6, false), veinMat));

  const branchDirs = [
    [1.8, 5.4, 1.2], [-1.9, 5.2, 1.1], [1.4, 5.6, -1.6],
    [-1.5, 5.5, -1.4], [0.2, 6.1, 1.9], [-0.3, 6.0, -1.8]
  ];
  branchDirs.forEach((dir) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 3.8, 0),
      new THREE.Vector3(dir[0] * 0.55, 4.7, dir[2] * 0.55),
      new THREE.Vector3(dir[0], dir[1], dir[2])
    ]);
    treeGroup.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.11, 6, false), barkMat));
  });

  const rootDirs = [
    [2.2, -2.5, 1.6], [-2.3, -2.6, 1.4], [1.7, -2.4, -2.0], [-1.8, -2.7, -1.7]
  ];
  rootDirs.forEach((dir) => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -1.0, 0),
      new THREE.Vector3(dir[0] * 0.5, -1.9, dir[2] * 0.5),
      new THREE.Vector3(dir[0], dir[1], dir[2])
    ]);
    treeGroup.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.13, 6, false), barkMat));
  });

  const leafCount = 260;
  const leafGeo = new THREE.BufferGeometry();
  const leafPos = new Float32Array(leafCount * 3);
  for (let i = 0; i < leafCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const rad = 0.6 + Math.random() * 3.1;
    leafPos[i * 3] = Math.cos(theta) * rad;
    leafPos[i * 3 + 1] = 4.3 + Math.random() * 2.5;
    leafPos[i * 3 + 2] = Math.sin(theta) * rad;
  }
  leafGeo.setAttribute('position', new THREE.BufferAttribute(leafPos, 3));
  const leafMat = new THREE.PointsMaterial({
    color: 0xffc857,
    size: 0.24,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  appState.worldTreeLeaves = new THREE.Points(leafGeo, leafMat);
  treeGroup.add(appState.worldTreeLeaves);

  appState.worldTreeGroup = treeGroup;
  appState.scene.add(treeGroup);
}

/* ==========================================================================
   8. REALMS & BIFRÖST BRIDGES
   ========================================================================== */
function createAllRealms() {
  const labelsLayer = document.getElementById('realm-labels-layer');

  REALMS_CONFIG.forEach((cfg, idx) => {
    const group = new THREE.Group();
    group.position.set(cfg.position[0], cfg.position[1], cfg.position[2]);
    group.userData = { realmIndex: idx, baseY: cfg.position[1] };

    const coreMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(cfg.radius, 4),
      createRealmShaderMaterial(cfg.id)
    );
    coreMesh.userData = { realmIndex: idx };
    group.add(coreMesh);
    appState.realmMeshes.push(coreMesh);

    const atmoMat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    group.add(new THREE.Mesh(new THREE.SphereGeometry(cfg.radius * 1.22, 24, 24), atmoMat));

    addRealmSignatureFeature(group, cfg);

    appState.scene.add(group);
    appState.realmGroups.push(group);

    const bridge = createBifrostBridge(new THREE.Vector3(0, 1.2, 0), group.position.clone(), cfg.color);
    appState.scene.add(bridge);
    appState.bifrostBridges.push(bridge);

    if (labelsLayer) {
      const labelEl = document.createElement('div');
      labelEl.className = 'realm-float-label';
      labelEl.id = 'realm-label-' + cfg.id;
      labelEl.innerHTML =
        '<span class="rf-rune">' + cfg.rune + '</span>' +
        '<span class="rf-name">' + cfg.name + '</span>' +
        '<span class="rf-sub">' + cfg.navLabel + '</span>';
      labelsLayer.appendChild(labelEl);
    }
  });
}

function createRealmShaderMaterial(realmId) {
  const palettes = {
    midgard: { c1: new THREE.Color(0x164a6e), c2: new THREE.Color(0x3ca370), glow: new THREE.Color(0x7fd6ff) },
    svartalfheim: { c1: new THREE.Color(0x1a181c), c2: new THREE.Color(0x3a2a24), glow: new THREE.Color(0xff5e14) },
    muspelheim: { c1: new THREE.Color(0x260906), c2: new THREE.Color(0x8f1907), glow: new THREE.Color(0xff3b0f) },
    asgard: { c1: new THREE.Color(0xd6a84a), c2: new THREE.Color(0xf4efe2), glow: new THREE.Color(0xffe08a) },
    alfheim: { c1: new THREE.Color(0x1d4e68), c2: new THREE.Color(0x6fd4ff), glow: new THREE.Color(0xb8f0ff) },
    valhalla: { c1: new THREE.Color(0x4a3719), c2: new THREE.Color(0xd6a84a), glow: new THREE.Color(0xffd275) },
    bifrost: { c1: new THREE.Color(0x261d47), c2: new THREE.Color(0x4995d6), glow: new THREE.Color(0xff77aa) }
  };

  const p = palettes[realmId] || palettes.midgard;

  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColorA: { value: p.c1 },
      uColorB: { value: p.c2 },
      uGlowColor: { value: p.glow },
      uHoverBoost: { value: 0 }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPos;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uGlowColor;
      uniform float uHoverBoost;
      varying vec3 vNormal;
      varying vec3 vPos;

      void main() {
        float n = sin(vPos.x * 3.8 + uTime * 0.6) * cos(vPos.y * 3.8 - uTime * 0.4) * sin(vPos.z * 3.8);
        float blend = smoothstep(-0.4, 0.5, n);
        vec3 base = mix(uColorA, uColorB, blend);

        float vein = 1.0 - smoothstep(0.0, 0.14, abs(n));
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.2);

        vec3 finalColor = base + uGlowColor * (vein * 0.55 + fresnel * (0.65 + uHoverBoost * 0.6));
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  });
}

function addRealmSignatureFeature(group, cfg) {
  if (cfg.id === 'valhalla') {
    const shieldGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.05, 12);
    shieldGeo.rotateX(Math.PI / 2);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0xd6a84a,
      emissive: 0x7a5214,
      metalness: 0.8,
      roughness: 0.25
    });
    const shieldRing = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const s = new THREE.Mesh(shieldGeo, shieldMat);
      s.position.set(Math.cos(a) * (cfg.radius + 0.55), 0, Math.sin(a) * (cfg.radius + 0.55));
      s.lookAt(0, 0, 0);
      shieldRing.add(s);
    }
    shieldRing.userData.orbitSpeed = 0.45;
    group.add(shieldRing);
  } else if (cfg.id === 'asgard') {
    const ringGeo = new THREE.TorusGeometry(cfg.radius + 0.45, 0.04, 8, 48);
    ringGeo.rotateX(Math.PI / 2.3);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffe08a }));
    ring.userData.orbitSpeed = -0.25;
    group.add(ring);
  } else if (cfg.id === 'bifrost') {
    const gateGeo = new THREE.TorusGeometry(cfg.radius + 0.42, 0.07, 10, 40, Math.PI * 1.35);
    gateGeo.rotateZ(-Math.PI * 0.175);
    group.add(new THREE.Mesh(gateGeo, new THREE.MeshBasicMaterial({ color: 0x7fd6ff })));
  } else {
    const ringGeo = new THREE.TorusGeometry(cfg.radius + 0.4, 0.025, 6, 36);
    ringGeo.rotateX(Math.PI / 2.6);
    const ringMat = new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.userData.orbitSpeed = 0.2;
    group.add(ring);
  }
}

function createBifrostBridge(startVec, endVec, colorHex) {
  const mid = startVec.clone().lerp(endVec, 0.5);
  mid.y += 1.4;
  const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
  const tubeGeo = new THREE.TubeGeometry(curve, 36, 0.045, 6, false);

  const tubeMat = new THREE.ShaderMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uBaseColor: { value: new THREE.Color(colorHex) },
      uActiveBoost: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uBaseColor;
      uniform float uActiveBoost;
      varying vec2 vUv;

      void main() {
        float pulse = 0.5 + 0.5 * sin(vUv.x * 18.0 - uTime * 3.5);
        vec3 prism = vec3(
          0.5 + 0.5 * sin(vUv.x * 12.0 + uTime),
          0.5 + 0.5 * sin(vUv.x * 12.0 + uTime + 2.09),
          0.5 + 0.5 * sin(vUv.x * 12.0 + uTime + 4.18)
        );
        vec3 col = mix(uBaseColor, prism, 0.42);
        float edgeFade = sin(vUv.x * 3.14159);
        float alpha = edgeFade * (0.28 + pulse * 0.25 + uActiveBoost * 0.45);
        gl_FragColor = vec4(col, alpha);
      }
    `
  });

  return new THREE.Mesh(tubeGeo, tubeMat);
}

/* ==========================================================================
   9. EMBER BURST EFFECT
   ========================================================================== */
function createBurstParticlePool() {
  const count = 70;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));

  const mat = new THREE.PointsMaterial({
    color: 0xff6a1a,
    size: 0.28,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.userData = {
    velocities: Array.from({ length: count }, () => new THREE.Vector3()),
    life: 0
  };
  appState.burstParticles = points;
  appState.scene.add(points);
}

function triggerRealmSelectionFX(worldPos, colorHex) {
  if (prefersReducedMotion) return;

  document.body.classList.remove('screen-shake');
  void document.body.offsetWidth;
  document.body.classList.add('screen-shake');

  const burst = appState.burstParticles;
  if (!burst) return;
  burst.material.color.setHex(colorHex);
  burst.material.opacity = 1;
  burst.userData.life = 1.0;

  const posAttr = burst.geometry.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    posAttr.setXYZ(i, worldPos.x, worldPos.y, worldPos.z);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = 2.5 + Math.random() * 4.5;
    burst.userData.velocities[i].set(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.cos(phi) * speed,
      Math.sin(phi) * Math.sin(theta) * speed
    );
  }
  posAttr.needsUpdate = true;
}

/* ==========================================================================
   10. UI: NAVIGATION, MINI-MAP, PANEL & ACCESSIBLE VIEW
   ========================================================================== */
function buildNavigationAndMinimap() {
  const navList = document.getElementById('realm-nav-list');
  const minimapNodes = document.getElementById('minimap-nodes');

  REALMS_CONFIG.forEach((cfg, idx) => {
    if (navList) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'realm-nav-btn';
      btn.dataset.realmIndex = String(idx);
      btn.innerHTML =
        '<span class="nav-rune" aria-hidden="true">' + cfg.rune + '</span>' +
        '<span>' + cfg.navLabel + '</span>';
      btn.addEventListener('click', () => selectRealm(idx));
      li.appendChild(btn);
      navList.appendChild(li);
    }

    if (minimapNodes) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'mm-dot';
      dot.dataset.realmIndex = String(idx);
      dot.title = cfg.name + ' — ' + cfg.navLabel;
      dot.setAttribute('aria-label', 'Jump to ' + cfg.name + ': ' + cfg.navLabel);

      const normX = 50 + (cfg.position[0] / 12.5) * 38;
      const normY = 50 + (cfg.position[2] / 12.5) * 38;
      dot.style.left = clamp(normX, 6, 94) + '%';
      dot.style.top = clamp(normY, 6, 94) + '%';
      dot.addEventListener('click', () => selectRealm(idx));
      minimapNodes.appendChild(dot);
    }
  });
}

function selectRealm(index) {
  if (index < 0 || index >= REALMS_CONFIG.length) return;
  const cfg = REALMS_CONFIG[index];
  appState.selectedRealmIndex = index;

  const hint = document.getElementById('onboarding-hint');
  if (hint) hint.classList.add('is-dismissed');

  const counter = document.getElementById('realm-counter');
  const mmCaption = document.getElementById('minimap-caption');
  if (counter) counter.textContent = 'Realm ' + (index + 1) + ' of ' + REALMS_CONFIG.length + ' · ' + cfg.name;
  if (mmCaption) mmCaption.textContent = cfg.name;

  document.querySelectorAll('.realm-nav-btn').forEach((el, idx) => {
    el.classList.toggle('is-active', idx === index);
  });
  document.querySelectorAll('.mm-dot').forEach((el, idx) => {
    el.classList.toggle('is-active', idx === index);
  });
  document.querySelectorAll('.realm-float-label').forEach((el, idx) => {
    el.classList.toggle('is-active', idx === index);
  });

  if (appState.threeReady) {
    appState.bifrostBridges.forEach((bridge, idx) => {
      bridge.material.uniforms.uActiveBoost.value = idx === index ? 1.0 : 0.0;
    });

    const targetGroup = appState.realmGroups[index];
    if (targetGroup) {
      appState.cameraTargetLookAt.copy(targetGroup.position);
      appState.cameraFlyGoalPos = new THREE.Vector3(
        targetGroup.position.x + cfg.cameraOffset[0],
        targetGroup.position.y + cfg.cameraOffset[1],
        targetGroup.position.z + cfg.cameraOffset[2]
      );
      appState.isFlyingToRealm = true;
      triggerRealmSelectionFX(targetGroup.position, cfg.color);
    }
  }

  openRealmPanel(cfg);
}

function returnToOverview() {
  appState.selectedRealmIndex = -1;
  appState.isFlyingToRealm = false;
  appState.cameraFlyGoalPos = null;
  if (appState.cameraTargetLookAt) appState.cameraTargetLookAt.set(0, 0.5, 0);

  const counter = document.getElementById('realm-counter');
  const mmCaption = document.getElementById('minimap-caption');
  if (counter) counter.textContent = 'Overview · ' + REALMS_CONFIG.length + ' Realms';
  if (mmCaption) mmCaption.textContent = 'Seven Realms';

  document.querySelectorAll('.realm-nav-btn, .mm-dot, .realm-float-label').forEach((el) => {
    el.classList.remove('is-active');
  });
  appState.bifrostBridges.forEach((bridge) => {
    bridge.material.uniforms.uActiveBoost.value = 0.0;
  });

  closeRealmPanel();
}

function openRealmPanel(cfg) {
  const panel = document.getElementById('realm-panel');
  const runeEl = document.getElementById('panel-rune');
  const subEl = document.getElementById('panel-subtitle');
  const titleEl = document.getElementById('panel-title');
  const bodyEl = document.getElementById('panel-body');

  if (!panel || !bodyEl) return;

  if (runeEl) runeEl.textContent = cfg.rune;
  if (subEl) subEl.textContent = cfg.subtitle;
  if (titleEl) titleEl.textContent = cfg.name;

  bodyEl.innerHTML = renderRealmContentHTML(cfg.id);
  bodyEl.scrollTop = 0;

  panel.hidden = false;
  requestAnimationFrame(() => {
    panel.classList.add('is-open');
  });
}

function closeRealmPanel() {
  const panel = document.getElementById('realm-panel');
  if (!panel || panel.hidden) return;
  panel.classList.remove('is-open');
  window.setTimeout(() => {
    if (!panel.classList.contains('is-open')) {
      panel.hidden = true;
    }
  }, prefersReducedMotion ? 20 : 380);
}

function renderRealmContentHTML(realmId) {
  const empty = '<div class="empty-realm-note carve-item">Coming soon.</div>';

  switch (realmId) {
    case 'midgard': {
      const o = RESUME.owner || {};
      if (!o.name && !o.summary) return empty;
      return (
        '<article class="profile-card carve-item" style="--stagger:0">' +
          '<h3 class="profile-name">' + escapeHTML(o.name || 'Coming soon') + '</h3>' +
          (o.title ? '<p class="profile-headline">' + escapeHTML(o.title) + '</p>' : '') +
          (o.location ? '<div class="profile-meta"><span>' + escapeHTML(o.location) + '</span></div>' : '') +
          '<p class="profile-summary">' + escapeHTML(o.summary || 'Coming soon.') + '</p>' +
        '</article>'
      );
    }

    case 'svartalfheim': {
      if (!Array.isArray(RESUME.skills) || RESUME.skills.length === 0) return empty;
      return RESUME.skills.map((group, gIdx) => {
        const slots = (group.items || []).map((skill) => {
          const tier = (skill.tier || 'Steel').toLowerCase();
          const tierClass = tier === 'gold' ? 'tier-gold' : tier === 'iron' ? 'tier-iron' : 'tier-steel';
          return (
            '<div class="skill-slot">' +
              '<span class="skill-slot-name">' + escapeHTML(skill.name) + '</span>' +
              '<span class="skill-tier ' + tierClass + '">◆ ' + escapeHTML(skill.tier || 'Steel') + '</span>' +
            '</div>'
          );
        }).join('');
        return (
          '<section class="skill-group carve-item" style="--stagger:' + gIdx + '">' +
            '<h3 class="skill-group-title">' + escapeHTML(group.category || 'Forged Craft') + '</h3>' +
            '<div class="skill-grid">' + slots + '</div>' +
          '</section>'
        );
      }).join('');
    }

    case 'muspelheim': {
      if (!Array.isArray(RESUME.experience) || RESUME.experience.length === 0) return empty;
      const items = RESUME.experience.map((exp, idx) => {
        const bullets = (exp.highlights || []).map((b) => '<li>' + escapeHTML(b) + '</li>').join('');
        return (
          '<article class="timeline-entry carve-item" style="--stagger:' + idx + '">' +
            (exp.period ? '<p class="entry-period">' + escapeHTML(exp.period) + '</p>' : '') +
            '<h3 class="entry-title">' + escapeHTML(exp.role || '') + '</h3>' +
            (exp.company ? '<p class="entry-org">' + escapeHTML(exp.company) + '</p>' : '') +
            (bullets ? '<ul class="entry-bullets">' + bullets + '</ul>' : '') +
          '</article>'
        );
      }).join('');
      return '<div class="realm-timeline">' + items + '</div>';
    }

    case 'asgard': {
      if (!Array.isArray(RESUME.projects) || RESUME.projects.length === 0) return empty;
      const deeds = RESUME.projects.map((proj, idx) => {
        const tags = (proj.tags || []).map((t) => '<span class="deed-tag">' + escapeHTML(t) + '</span>').join('');
        const link = proj.url
          ? '<a class="deed-link" href="' + escapeAttr(proj.url) + '" target="_blank" rel="noopener noreferrer">GitHub ↗</a>'
          : '';
        return (
          '<article class="deed-card carve-item" style="--stagger:' + idx + '">' +
            (proj.period ? '<p class="entry-period">' + escapeHTML(proj.period) + '</p>' : '') +
            '<div class="deed-header">' +
              '<h3 class="deed-title">' + escapeHTML(proj.title || '') + '</h3>' +
              link +
            '</div>' +
            (proj.description ? '<p class="deed-desc">' + escapeHTML(proj.description) + '</p>' : '') +
            (tags ? '<div class="deed-tags">' + tags + '</div>' : '') +
          '</article>'
        );
      }).join('');
      return '<div class="deed-list">' + deeds + '</div>';
    }

    case 'alfheim': {
      if (!Array.isArray(RESUME.education) || RESUME.education.length === 0) return empty;
      const items = RESUME.education.map((edu, idx) => {
        const bullets = (edu.details || []).map((d) => '<li>' + escapeHTML(d) + '</li>').join('');
        return (
          '<article class="timeline-entry carve-item" style="--stagger:' + idx + '">' +
            (edu.period ? '<p class="entry-period">' + escapeHTML(edu.period) + '</p>' : '') +
            '<h3 class="entry-title">' + escapeHTML(edu.degree || '') + '</h3>' +
            (edu.institution ? '<p class="entry-org">' + escapeHTML(edu.institution) + '</p>' : '') +
            (bullets ? '<ul class="entry-bullets">' + bullets + '</ul>' : '') +
          '</article>'
        );
      }).join('');
      return '<div class="realm-timeline is-alfheim">' + items + '</div>';
    }

    case 'valhalla': {
      if (!Array.isArray(RESUME.achievements) || RESUME.achievements.length === 0) return empty;
      const honors = RESUME.achievements.map((item, idx) => {
        const meta = [item.issuer, item.year].filter(Boolean).join(' · ');
        return (
          '<article class="honor-shield carve-item" style="--stagger:' + idx + '">' +
            '<div class="honor-icon" aria-hidden="true">ᛟ</div>' +
            '<div>' +
              '<h3 class="honor-title">' + escapeHTML(item.title || '') + '</h3>' +
              (meta ? '<p class="honor-issuer">' + escapeHTML(meta) + '</p>' : '') +
            '</div>' +
          '</article>'
        );
      }).join('');
      return '<div class="honor-grid">' + honors + '</div>';
    }

    case 'bifrost': {
      if (!Array.isArray(RESUME.contact) || RESUME.contact.length === 0) return empty;
      const ravens = RESUME.contact.map((c, idx) => {
        return (
          '<a class="raven-link carve-item" style="--stagger:' + idx + '" href="' + escapeAttr(c.href || '#') + '" target="_blank" rel="noopener noreferrer">' +
            '<div>' +
              '<p class="raven-label">' + escapeHTML(c.label || 'Raven Dispatch') + '</p>' +
              '<p class="raven-value">' + escapeHTML(c.value || '') + '</p>' +
            '</div>' +
            '<span class="raven-arrow" aria-hidden="true">↗</span>' +
          '</a>'
        );
      }).join('');
      return '<div class="raven-list">' + ravens + '</div>';
    }

    default:
      return empty;
  }
}

function buildAccessibleView() {
  const container = document.getElementById('a11y-content');
  if (!container) return;

  container.innerHTML = REALMS_CONFIG.map((cfg) => {
    return (
      '<section class="a11y-section">' +
        '<h2>' + escapeHTML(cfg.rune + ' ' + cfg.name + ' — ' + cfg.navLabel) + '</h2>' +
        renderRealmContentHTML(cfg.id) +
      '</section>'
    );
  }).join('');
}

/* ==========================================================================
   11. WEB AUDIO AMBIENT WIND & DRONE
   ========================================================================== */
function toggleAmbientAudio() {
  const btn = document.getElementById('btn-audio');
  const label = document.getElementById('audio-label');

  if (!appState.audio.ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.0001;
    masterGain.connect(ctx.destination);

    [36.71, 55.0].forEach((freq) => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      filter.type = 'lowpass';
      filter.frequency.value = 135;
      osc.connect(filter);
      filter.connect(masterGain);
      osc.start();
    });

    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 340;
    windFilter.Q.value = 2.4;

    const windGain = ctx.createGain();
    windGain.gain.value = 0.25;

    whiteNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(masterGain);
    whiteNoise.start();

    appState.audio.ctx = ctx;
    appState.audio.masterGain = masterGain;
  }

  const ctx = appState.audio.ctx;
  const masterGain = appState.audio.masterGain;
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  appState.audio.isPlaying = !appState.audio.isPlaying;
  const now = ctx.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setTargetAtTime(appState.audio.isPlaying ? 0.16 : 0.0001, now, 0.35);

  if (btn) btn.setAttribute('aria-pressed', String(appState.audio.isPlaying));
  if (label) label.textContent = appState.audio.isPlaying ? 'Sound: On' : 'Sound: Off';
}

/* ==========================================================================
   12. EVENTS — UI events (no Three.js needed) and scene events (orbit, hover)
   ========================================================================== */
function goPrevRealm() {
  const prev = appState.selectedRealmIndex <= 0 ? REALMS_CONFIG.length - 1 : appState.selectedRealmIndex - 1;
  selectRealm(prev);
}

function goNextRealm() {
  selectRealm((appState.selectedRealmIndex + 1) % REALMS_CONFIG.length);
}

function bindUIEvents() {
  const on = (id, evt, fn) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(evt, fn);
  };

  on('btn-reset-view', 'click', returnToOverview);
  on('btn-close-panel', 'click', returnToOverview);
  on('btn-prev-realm', 'click', goPrevRealm);
  on('btn-next-realm', 'click', goNextRealm);
  on('btn-audio', 'click', toggleAmbientAudio);
  on('btn-a11y-view', 'click', () => toggleAccessibleView(true));
  on('btn-exit-a11y', 'click', () => toggleAccessibleView(false));

  window.addEventListener('keydown', (e) => {
    const a11yView = document.getElementById('accessible-view');
    if (a11yView && !a11yView.hidden) {
      if (e.key === 'Escape') toggleAccessibleView(false);
      return;
    }

    if (e.key === 'Escape') {
      if (appState.selectedRealmIndex !== -1) returnToOverview();
    } else if (e.key === 'ArrowRight') {
      goNextRealm();
    } else if (e.key === 'ArrowLeft') {
      goPrevRealm();
    } else if (e.key === 'Enter' && appState.hoveredRealmIndex !== -1 && appState.selectedRealmIndex === -1) {
      selectRealm(appState.hoveredRealmIndex);
    }
  });
}

function bindSceneEvents() {
  const container = document.getElementById('canvas-container');

  container.addEventListener('pointerdown', (e) => {
    appState.orbit.isDragging = true;
    appState.orbit.dragDistance = 0;
    appState.orbit.prevX = e.clientX;
    appState.orbit.prevY = e.clientY;
  });

  window.addEventListener('pointermove', (e) => {
    appState.mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
    appState.mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
    appState.parallax.targetX = appState.mouseNDC.x * 0.65;
    appState.parallax.targetY = appState.mouseNDC.y * 0.45;

    if (!appState.orbit.isDragging) return;
    const dx = e.clientX - appState.orbit.prevX;
    const dy = e.clientY - appState.orbit.prevY;
    appState.orbit.prevX = e.clientX;
    appState.orbit.prevY = e.clientY;
    appState.orbit.dragDistance += Math.hypot(dx, dy);

    if (appState.orbit.dragDistance > 8 && appState.isFlyingToRealm) {
      appState.isFlyingToRealm = false;
      appState.cameraFlyGoalPos = null;
      appState.cameraTargetLookAt.set(0, 0.5, 0);
    }

    appState.orbit.targetTheta -= dx * 0.0055;
    appState.orbit.targetPhi = clamp(
      appState.orbit.targetPhi - dy * 0.0055,
      appState.orbit.minPhi,
      appState.orbit.maxPhi
    );
  });

  window.addEventListener('pointerup', (e) => {
    const wasClick = appState.orbit.isDragging && appState.orbit.dragDistance < 6;
    appState.orbit.isDragging = false;

    if (wasClick && e.target && e.target.id === 'realm-canvas') {
      if (appState.hoveredRealmIndex !== -1) {
        selectRealm(appState.hoveredRealmIndex);
      }
    }
  });

  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    appState.isFlyingToRealm = false;
    appState.cameraFlyGoalPos = null;
    appState.orbit.targetRadius = clamp(
      appState.orbit.targetRadius + e.deltaY * 0.015,
      appState.orbit.minRadius,
      appState.orbit.maxRadius
    );
  }, { passive: false });

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      appState.orbit.pinchStartDist = getTouchDistance(e.touches);
      appState.orbit.pinchStartRadius = appState.orbit.targetRadius;
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && appState.orbit.pinchStartDist > 0) {
      const currentDist = getTouchDistance(e.touches);
      const scale = appState.orbit.pinchStartDist / currentDist;
      appState.orbit.targetRadius = clamp(
        appState.orbit.pinchStartRadius * scale,
        appState.orbit.minRadius,
        appState.orbit.maxRadius
      );
    }
  }, { passive: true });

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('visibilitychange', () => {
    appState.isPaused = document.hidden;
    if (!appState.isPaused) appState.clock.getDelta();
  });
}

function toggleAccessibleView(show) {
  const a11yView = document.getElementById('accessible-view');
  const btn = document.getElementById('btn-a11y-view');
  if (!a11yView) return;

  a11yView.hidden = !show;
  document.body.classList.toggle('a11y-mode', show);
  if (btn) btn.setAttribute('aria-pressed', String(show));
}

function onWindowResize() {
  if (!appState.camera || !appState.renderer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  appState.camera.aspect = w / h;
  appState.camera.updateProjectionMatrix();
  appState.renderer.setSize(w, h);
  if (appState.composer) appState.composer.setSize(w, h);
}

/* ==========================================================================
   13. MAIN RENDER LOOP
   ========================================================================== */
function animate() {
  requestAnimationFrame(animate);
  if (appState.isPaused) return;

  const dt = Math.min(appState.clock.getDelta(), 0.05);
  const elapsed = appState.clock.getElapsedTime();

  updateCosmosAndTree(dt, elapsed);
  updateRealmsAndHover(dt, elapsed);
  updateCameraPosition(dt);
  updateFloatingLabels();

  if (appState.composer) {
    appState.composer.render();
  } else {
    appState.renderer.render(appState.scene, appState.camera);
  }
}

function updateCosmosAndTree(dt, elapsed) {
  if (appState.auroraDome) {
    appState.auroraDome.material.uniforms.uTime.value = elapsed;
  }

  if (!prefersReducedMotion) {
    appState.particleSystems.forEach((pts) => {
      const spread = pts.userData.spread;
      const verticalSpeed = pts.userData.verticalSpeed;
      pts.rotation.y += dt * 0.012;
      const posAttr = pts.geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        let y = posAttr.getY(i) + verticalSpeed * dt;
        if (y > spread * 0.7) y = -spread * 0.7;
        if (y < -spread * 0.7) y = spread * 0.7;
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;
    });

    appState.shootingStars.forEach((meteor) => {
      meteor.position.x += meteor.userData.speed * dt;
      meteor.position.y += meteor.userData.vy * dt;
      if (meteor.position.x > 42) resetMeteor(meteor, 1);
    });

    if (appState.worldTreeGroup) {
      appState.worldTreeGroup.rotation.y = Math.sin(elapsed * 0.25) * 0.08;
    }
    if (appState.worldTreeLeaves) {
      appState.worldTreeLeaves.rotation.y += dt * 0.18;
    }

    const burst = appState.burstParticles;
    if (burst && burst.userData.life > 0) {
      burst.userData.life -= dt * 1.35;
      burst.material.opacity = Math.max(0, burst.userData.life);
      const posAttr = burst.geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const v = burst.userData.velocities[i];
        posAttr.setXYZ(
          i,
          posAttr.getX(i) + v.x * dt,
          posAttr.getY(i) + v.y * dt,
          posAttr.getZ(i) + v.z * dt
        );
      }
      posAttr.needsUpdate = true;
    }
  }

  appState.bifrostBridges.forEach((bridge) => {
    bridge.material.uniforms.uTime.value = elapsed;
  });
}

function updateRealmsAndHover(dt, elapsed) {
  appState.raycaster.setFromCamera(appState.mouseNDC, appState.camera);
  const hits = appState.raycaster.intersectObjects(appState.realmMeshes, false);
  const newHover = hits.length > 0 ? hits[0].object.userData.realmIndex : -1;

  if (newHover !== appState.hoveredRealmIndex) {
    appState.hoveredRealmIndex = newHover;
    const container = document.getElementById('canvas-container');
    if (container) container.classList.toggle('is-hovering-realm', newHover !== -1);
    document.querySelectorAll('.realm-float-label').forEach((el, idx) => {
      el.classList.toggle('is-hovered', idx === newHover);
    });
  }

  appState.realmGroups.forEach((group, idx) => {
    const coreMesh = appState.realmMeshes[idx];
    const isHovered = idx === appState.hoveredRealmIndex;
    const isSelected = idx === appState.selectedRealmIndex;

    if (!prefersReducedMotion) {
      group.position.y = group.userData.baseY + Math.sin(elapsed * 1.1 + idx * 1.3) * 0.22;
      coreMesh.rotation.y += dt * 0.24;

      group.children.forEach((child) => {
        if (child.userData && child.userData.orbitSpeed) {
          child.rotation.y += dt * child.userData.orbitSpeed;
        }
      });
    }

    const targetScale = isHovered || isSelected ? 1.16 : 1.0;
    appState.tmpScale.set(targetScale, targetScale, targetScale);
    group.scale.lerp(appState.tmpScale, 0.12);

    if (coreMesh.material.uniforms) {
      coreMesh.material.uniforms.uTime.value = elapsed;
      const targetBoost = isHovered || isSelected ? 1.0 : 0.0;
      coreMesh.material.uniforms.uHoverBoost.value +=
        (targetBoost - coreMesh.material.uniforms.uHoverBoost.value) * 0.12;
    }
  });
}

function updateCameraPosition(dt) {
  const damp = prefersReducedMotion ? 1.0 : 1 - Math.exp(-5.5 * dt);

  appState.parallax.x += (appState.parallax.targetX - appState.parallax.x) * damp;
  appState.parallax.y += (appState.parallax.targetY - appState.parallax.y) * damp;

  appState.cameraLookAt.lerp(appState.cameraTargetLookAt, damp);

  if (appState.isFlyingToRealm && appState.cameraFlyGoalPos) {
    const goal = appState.cameraFlyGoalPos.clone();
    if (!prefersReducedMotion) {
      goal.x += appState.parallax.x * 0.5;
      goal.y += appState.parallax.y * 0.5;
    }
    appState.camera.position.lerp(goal, damp);
  } else {
    appState.orbit.theta += (appState.orbit.targetTheta - appState.orbit.theta) * damp;
    appState.orbit.phi += (appState.orbit.targetPhi - appState.orbit.phi) * damp;
    appState.orbit.radius += (appState.orbit.targetRadius - appState.orbit.radius) * damp;

    const r = appState.orbit.radius;
    const phi = appState.orbit.phi;
    const theta = appState.orbit.theta + (prefersReducedMotion ? 0 : appState.parallax.x * 0.08);

    const x = r * Math.sin(phi) * Math.sin(theta);
    const y = r * Math.cos(phi) + (prefersReducedMotion ? 0 : appState.parallax.y * 1.1);
    const z = r * Math.sin(phi) * Math.cos(theta);

    appState.camera.position.set(x, y, z);
  }

  appState.camera.lookAt(appState.cameraLookAt);
}

function updateFloatingLabels() {
  const halfW = window.innerWidth * 0.5;
  const halfH = window.innerHeight * 0.5;
  const projVec = appState.tmpProj;

  REALMS_CONFIG.forEach((cfg, idx) => {
    const labelEl = document.getElementById('realm-label-' + cfg.id);
    const group = appState.realmGroups[idx];
    if (!labelEl || !group) return;

    projVec.copy(group.position);
    projVec.y += cfg.radius + 0.65;
    projVec.project(appState.camera);

    if (projVec.z > 1) {
      labelEl.style.opacity = '0';
      return;
    }

    const screenX = projVec.x * halfW + halfW;
    const screenY = -(projVec.y * halfH) + halfH;
    labelEl.style.opacity = '1';
    labelEl.style.transform = 'translate(-50%, -50%) translate3d(' + screenX.toFixed(1) + 'px, ' + screenY.toFixed(1) + 'px, 0)';
  });
}

/* ==========================================================================
   14. UTILITY HELPERS
   ========================================================================== */
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function getTouchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  const trimmed = String(str).trim();
  if (/^(https?:|mailto:|tel:|#)/i.test(trimmed)) {
    return escapeHTML(trimmed);
  }
  return '#';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}