<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1e1633,50:6b4c9a,100:a78bfa&height=165§ion=header&text=YGGDRASIL&fontSize=36&fontColor=f5f3ff&fontAlignY=42&desc=Interactive%203D%20Norse%20Mythology%20Realm-Map%20Portfolio&descAlignY=66&descSize=15&animation=fadeIn" width="100%" alt="Yggdrasil Header" />
</div>

<p align="center">
  <a href="https://kanak0091.github.io/Yggdrasil-Protfolio/"><img src="https://img.shields.io/badge/Live_Demo-Launch_Realm_Map-8b5cf6?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Three.js-r128-a78bfa?style=for-the-badge&logo=threedotjs&logoColor=1e1633" alt="Three.js r128" />
  <img src="https://img.shields.io/badge/Architecture-Zero_Dependencies-c4b5fd?style=for-the-badge" alt="Zero Dependencies" />
</p>

<p align="center"><em>A browser-native 3D cosmos suspended around the World Tree—built with Three.js, custom GLSL shaders, post-processing bloom, and procedural Web Audio synthesis.</em></p>

---

### ᚠ Overview

**Yggdrasil** reimagines a software and data science portfolio as an interactive spatial map of seven Norse realms connected by shimmering Bifröst light-bridges[cite: 1, 6]. Visitors orbit, zoom, and fly smoothly between worlds to inspect background, technical skills, projects, education, certifications, and contact channels[cite: 1, 6].

- **Zero Build Overhead:** Engineered in vanilla HTML5, CSS3, and ES6+ JavaScript—runs directly over `file://` or static hosting such as GitHub Pages[cite: 6].
- **Live Deployment:** [https://kanak0091.github.io/Yggdrasil-Protfolio/](https://kanak0091.github.io/Yggdrasil-Protfolio/)[cite: 6]

---

### ᚢ Architecture of the Seven Realms

| Rune | Realm | Section | Visual Design & Content |
| :---: | :--- | :--- | :--- |
| **ᛗ** | **Midgard** | About Me | Emerald-and-ocean home world featuring profile summary (`Kanak Sachin Chaudhary`, BCA in AI & Data Science, Gurugram)[cite: 1, 6]. |
| **ᚲ** | **Svartalfheim** | Skills | Volcanic forge with glowing magma fissures; technical stack tiered into *Iron*, *Steel*, and *Gold* rune slots[cite: 1, 6]. |
| **ᚦ** | **Muspelheim** | Experience | Molten crimson world dedicated to career milestones and timeline entries[cite: 1, 6]. |
| **ᚨ** | **Asgard** | Projects | Celestial gold-and-white realm showcasing *CSE103 Lab*, *Dscapstone*, and *Mule Account Detection Engine*[cite: 1, 6]. |
| **ᛚ** | **Alfheim** | Education | Cyan-lit realm chronicling academic studies at *K.R. Mangalam University, Gurugram*[cite: 1, 6]. |
| **ᛟ** | **Valhalla** | Honors | Golden hall ringed by floating shields highlighting certifications, workshops, hackathons, and awards[cite: 1, 6]. |
| **ᚱ** | **Bifröst** | Contact | Prismatic light-bridge and gate presenting direct communication links as raven dispatches[cite: 1, 6]. |

---

### ᚦ Technical Highlights & Controls

- **Custom GLSL Shaders & Post-Processing:** Procedural aurora sky dome, three-layer parallax particle systems (stars, frost snow, rising embers), instanced monoliths, ACES Filmic tone mapping, and `UnrealBloomPass`[cite: 6].
- **Procedural Web Audio Engine:** Real-time low-frequency drone and filtered cosmic wind generated via the Web Audio API with zero external audio files[cite: 6].
- **Accessibility First:** Honors `prefers-reduced-motion` and includes a one-click **Text View** reader mode plus a semantic `<noscript>` fallback[cite: 6].

| Input | Action |
| :--- | :--- |
| **Click / Tap Realm** | Smoothly fly camera along the Bifröst and open the realm drawer |
| **Drag / Touch Drag** | Orbit freely around Yggdrasil |
| **Scroll / Pinch** | Zoom in and out with bounded distance limits |
| `ArrowLeft` / `ArrowRight` | Cycle sequentially through all seven realms |
| `Enter` / `Esc` | Open focused realm or return to the full cosmos overview |

---

### ᚨ Repository Structure

```text
Yggdrasil-Protfolio/
├── index.html      # Preloader, HUD overlay, realm drawer, accessible view & Three.js r128 CDN scripts
├── style.css       # Dark obsidian/lavender-accented UI, carved-stone textures & responsive layout
├── script.js       # RESUME configuration object, Three.js scene/shaders, camera flight & Web Audio synth
└── README.md       # Project documentation
```

---

### ᚷ Author

<p align="center">
  <a href="https://kanak0091.github.io/Yggdrasil-Protfolio/"><img src="https://img.shields.io/badge/Portfolio-kanak0091.github.io-7c3aed?style=flat-square&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
  <a href="https://github.com/Kanak0091"><img src="https://img.shields.io/badge/GitHub-Kanak0091-6d28d9?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://linkedin.com/in/kanak-chaudhary-bbba52430"><img src="https://img.shields.io/badge/LinkedIn-Kanak_Chaudhary-8b5cf6?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:2601060001@krmu.edu.in"><img src="https://img.shields.io/badge/Email-2601060001%40krmu.edu.in-a78bfa?style=flat-square&logo=gmail&logoColor=1e1633" alt="Email" /></a>
</p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:a78bfa,50:6b4c9a,100:1e1633&height=95§ion=footer&text=%E1%9A%A0%20%E1%9A%A2%20%E1%9A%A6%20%E1%9A%A8%20%E1%9A%B1%20%E1%9A%B2%20%E1%9A%B7&fontSize=18&fontColor=f5f3ff&animation=twinkling&fontAlignY=72" width="100%" alt="Footer Banner" />
</div>
