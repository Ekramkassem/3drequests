const fs = require('fs');
const path = require('path');

const htmlDir = 'C:/Users/YOSIF/Downloads/New folder (8)';
const portfolioAssetsDir = 'public/portfolio_assets';
const characterAssetsDir = 'public/character_assets';
const extractedDir = 'public/extracted_assets';

if (!fs.existsSync(extractedDir)) {
  fs.mkdirSync(extractedDir, { recursive: true });
}

// 1. Index high-res PRJ folders
const prjFolderMap = {};
if (fs.existsSync(portfolioAssetsDir)) {
  fs.readdirSync(portfolioAssetsDir).forEach(dir => {
    const match = dir.match(/^(PRJ-\d+)/i);
    if (match) {
      const prjId = match[1].toUpperCase();
      const files = fs.readdirSync(path.join(portfolioAssetsDir, dir))
        .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
        .sort()
        .map(f => `/portfolio_assets/${dir}/${f}`);
      prjFolderMap[prjId] = { dir, files };
    }
  });
}

// 2. Index high-res CH folders
const chFolderMap = {};
if (fs.existsSync(characterAssetsDir)) {
  fs.readdirSync(characterAssetsDir).forEach(dir => {
    const match = dir.match(/^(CH-\d+)/i);
    if (match) {
      const chId = match[1].toUpperCase();
      const files = fs.readdirSync(path.join(characterAssetsDir, dir))
        .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
        .sort()
        .map(f => `/character_assets/${dir}/${f}`);
      chFolderMap[chId] = { dir, files };
    }
  });
}

// Helper to evaluate JS objects from HTML
function loadProjectsFromHtml(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const match = text.match(/const\s+PROJECTS\s*=\s*(\[[\s\S]*?\]);\s*(const|function|window|\n\s*let)/i);
  if (!match) return [];
  try {
    const fn = new Function('return ' + match[1]);
    return fn();
  } catch (err) {
    console.error(`Error parsing ${filePath}:`, err.message);
    return [];
  }
}

// Helper to save base64 image and return public path
function saveBase64Image(dataUri, subFolder, filename) {
  if (!dataUri || !dataUri.startsWith('data:image/')) return '';
  const dir = path.join(extractedDir, subFolder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const extMatch = dataUri.match(/^data:image\/(\w+);base64,/);
  const ext = (extMatch && extMatch[1] === 'png') ? 'png' : 'jpg';
  const cleanFilename = `${filename.replace(/[^a-zA-Z0-9_\-]/g, '_')}.${ext}`;
  const diskPath = path.join(dir, cleanFilename);
  
  if (!fs.existsSync(diskPath)) {
    const base64Data = dataUri.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(diskPath, Buffer.from(base64Data, 'base64'));
  }
  return `/extracted_assets/${subFolder}/${cleanFilename}`;
}

// Map category string to PortfolioCategory
function categorize(sourceCategory, subcategory = '', id = '') {
  const s = (sourceCategory + ' ' + subcategory).toLowerCase();
  
  if (id.startsWith('CH-')) return 'character';
  if (id.startsWith('GM-')) return 'game-assets';
  if (id.startsWith('SC-')) return '3dprint';
  if (id.startsWith('STU-')) return 'animation';
  
  if (s.includes('architect') || s.includes('interior') || s.includes('villa') || s.includes('penthouse') || s.includes('pavilion')) {
    return 'architecture';
  }
  if (s.includes('character') || s.includes('creature') || s.includes('monster') || s.includes('bust') || s.includes('statue') || s.includes('figure')) {
    return 'character';
  }
  if (s.includes('game') || s.includes('weapon') || s.includes('props') || s.includes('pixel') || s.includes('low-poly') || s.includes('diorama') || s.includes('voxel')) {
    return 'game-assets';
  }
  if (s.includes('print') || s.includes('sla') || s.includes('fdm') || s.includes('prototyp') || s.includes('sculpture')) {
    return '3dprint';
  }
  if (s.includes('cgi') || s.includes('motion') || s.includes('advertis') || s.includes('splash') || s.includes('render') || s.includes('cinemat')) {
    return 'animation';
  }
  if (s.includes('robot') || s.includes('aerospace') || s.includes('turbine') || s.includes('cnc') || s.includes('drone') || s.includes('valve') || s.includes('industrial') || s.includes('automotive')) {
    return 'industrial';
  }
  if (s.includes('special') || s.includes('stent') || s.includes('medtech') || s.includes('experimental')) {
    return 'experimental';
  }
  return 'product';
}

const masterProjects = [];

// 1. Process 3drequests_portfolio_catalog (3).html (PRJ-01 to PRJ-82)
console.log('Processing Catalog Projects...');
const catalogRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_portfolio_catalog (3).html`);
catalogRaw.forEach(p => {
  const normId = p.id.toUpperCase();
  let heroImage = '';
  let galleryImages = [];

  // Check if we have high-res assets in public/portfolio_assets
  if (prjFolderMap[normId] && prjFolderMap[normId].files.length > 0) {
    const files = prjFolderMap[normId].files;
    heroImage = files.find(f => f.includes('Hero')) || files[0];
    galleryImages = files;
  } else if (p.images && p.images.length > 0) {
    p.images.forEach((img, idx) => {
      const savedPath = saveBase64Image(img.src, 'catalog', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  const category = categorize(p.category, p.subcategory || '', p.id);
  const featured = p.featured || parseInt(p.id.replace('PRJ-', '')) <= 8;

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: category,
    categoryLabel: p.subcategory || p.category || 'Product Design & Hardware',
    client: p.targetClient || 'Global Commercial Brand',
    year: '2026',
    heroImage: heroImage || '/portfolio_assets/PRJ-01_Aether_Acoustics_Halo_Headphones/PRJ-01_Hero.jpg',
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'Precision 3D asset engineering for commercial showcase and physical manufacturing.',
    creativeRationale: `${p.commercialPurpose || ''} ${p.visualDirection ? 'Visual Direction: ' + p.visualDirection : ''}`.trim(),
    deliverables: p.capabilities ? p.capabilities : [
      'Production-Ready Quad Topology',
      '8K High-Resolution PBR Texture Maps',
      'Fully Configured Real-Time Materials'
    ],
    materials: p.materials ? [p.materials] : ['Hard-Surface Anodized Alloy', 'Specular Glass', 'Procedural Wear Layers'],
    dimensions: p.dimensions || undefined,
    software: ['Blender', 'ZBrush', 'KeyShot', 'Unreal Engine 5'],
    technicalSpecs: {
      polycount: p.technicalChallenge ? `${p.technicalChallenge.slice(0, 30)}...` : '180k–350k Quads',
      topologyType: 'Deformation & Sub-D Quad Flow',
      textureResolution: '8K Vector CMF & PBR Textures',
      engineCompatibility: 'Unreal Engine 5.5, KeyShot, Marmoset, Blender'
    },
    featured: featured
  });
});
console.log(`Loaded ${catalogRaw.length} Catalog projects.`);

// 2. Process Characters (CH-01 to CH-20)
console.log('Processing Character Projects...');
const charRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_character_portfolio.html`);
charRaw.forEach(p => {
  const normId = p.id.toUpperCase();
  let heroImage = '';
  let galleryImages = [];

  if (chFolderMap[normId] && chFolderMap[normId].files.length > 0) {
    const files = chFolderMap[normId].files;
    heroImage = files.find(f => f.includes('View1') || f.includes('Hero')) || files[0];
    galleryImages = files;
  } else if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'characters', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: 'character',
    categoryLabel: p.category || 'Character Design & Sculpting',
    client: p.client || 'Cinematic & AAA Studio',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'High-fidelity character sculpture with anatomical precision and layered detailing.',
    creativeRationale: `${p.purpose || ''} Direction: ${p.direction || ''}`.trim(),
    deliverables: [
      'Sub-D Quad Mesh + Rigging Skeleton',
      '8K UDIM Texture Maps (Skin, Fabric, Metal)',
      'High-Resolution ZBrush ZTL Sculpt Masters'
    ],
    materials: ['Multi-Layer SSS Skin', 'Anodized Carbon Exoskeleton', 'Procedural Woven Weaves'],
    software: ['ZBrush', 'Marvelous Designer', 'Substance Painter', 'Blender'],
    technicalSpecs: {
      polycount: p.challenge ? p.challenge.slice(0, 40) : '85k–150k Quads',
      topologyType: 'Anatomically Accurate Quad Deformation',
      textureResolution: '8K Multi-UDIM Textures',
      engineCompatibility: 'Unreal Engine 5.5, Unity, Maya, Blender'
    },
    featured: ['ch-01', 'ch-02', 'ch-03'].includes(p.id.toLowerCase())
  });
});
console.log(`Loaded ${charRaw.length} Character projects.`);

// 3. Process Game Assets (GM-01 to GM-30)
console.log('Processing Game Asset Projects...');
const gameRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_game_assets_portfolio.html`);
gameRaw.forEach(p => {
  let heroImage = '';
  let galleryImages = [];

  if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'game_assets', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: 'game-assets',
    categoryLabel: p.category || 'Game Assets & Environments',
    client: p.client || 'Interactive & Real-Time Studios',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'Game-ready asset crafted for real-time performance and cinematic visual punch.',
    creativeRationale: `${p.purpose || ''} Direction: ${p.direction || ''}`.trim(),
    deliverables: [
      'Optimized LOD0–LOD4 Mesh Package',
      'PBR Metalness/Roughness 4K Textures',
      'Game Engine Integration Blueprint'
    ],
    materials: ['Bake-Normal Hard Surface', 'PBR Metal & Roughness', 'Sub-Surface Emissive Glass'],
    software: ['Blender', 'Substance 3D Painter', 'ZBrush', 'Unreal Engine 5'],
    technicalSpecs: {
      polycount: p.challenge ? p.challenge.slice(0, 40) : '15k–65k Real-Time Tris',
      topologyType: 'Game-Ready Triangle & Quad Optimization',
      textureResolution: '4K PBR Texture Sets',
      engineCompatibility: 'Unreal Engine 5.5, Unity 6, Godot'
    },
    featured: ['gm-01', 'gm-02', 'gm-10'].includes(p.id.toLowerCase())
  });
});
console.log(`Loaded ${gameRaw.length} Game projects.`);

// 4. Process Industrial Design (ID-01 to ID-20)
console.log('Processing Industrial Design Projects...');
const indRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_industrial_design_portfolio.html`);
indRaw.forEach(p => {
  let heroImage = '';
  let galleryImages = [];

  if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'industrial', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: 'industrial',
    categoryLabel: p.category || 'Product & Industrial Design',
    client: p.client || 'Consumer Hardware Studio',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'Industrial design study exploring ergonomic balance, micro-tolerances, and high-spec finishes.',
    creativeRationale: `${p.purpose || ''} Materials: ${p.materials || ''}`.trim(),
    deliverables: [
      'NURBS STEP Tooling Master',
      'KeyShot Studio Scene with CMF Specs',
      'Exploded Mechanical Assemblies'
    ],
    materials: p.materials ? [p.materials] : ['Brushed 6061 Aluminum', 'Matte Delrin', 'Ceramic Bead Blast'],
    software: ['Rhino 8', 'Fusion 360', 'KeyShot 2026', 'Blender'],
    technicalSpecs: {
      polycount: 'Sub-D Quads / Precision CAD NURBS',
      topologyType: 'Watertight CAD & Quad Boundary Rep',
      textureResolution: '8K Vector CMF Textures',
      engineCompatibility: 'SolidWorks, KeyShot, Rhino, Unreal Engine 5'
    },
    featured: ['id-01', 'id-05'].includes(p.id.toLowerCase())
  });
});
console.log(`Loaded ${indRaw.length} Industrial projects.`);

// 5. Process KeyShot / V-Ray Studio (STU-01 to STU-12)
console.log('Processing Studio KeyShot Projects...');
const stuRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_keyshot_vray_portfolio (1).html`);
stuRaw.forEach(p => {
  let heroImage = '';
  let galleryImages = [];

  if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'studio', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: 'animation',
    categoryLabel: 'KeyShot & V-Ray Studio CGI',
    client: p.client || 'Commercial Advertising & Luxury Agency',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.brief || p.purpose || 'Studio CGI lighting and refractive material study.',
    creativeRationale: `${p.purpose || ''} Lighting: ${p.lighting || ''} Materials: ${p.materials || ''}`.trim(),
    deliverables: [
      'KeyShot 2026 Package (.ksp)',
      'V-Ray Multichannel OpenEXR Renders',
      '8K Ultra-Gloss CMF Study'
    ],
    materials: p.materials ? [p.materials] : ['Specular Chrome', 'Optical Crown Glass', 'Anodized Bronze'],
    software: ['KeyShot', 'V-Ray', 'Cinema 4D', 'Photoshop'],
    technicalSpecs: {
      polycount: '500k–1.2M High-Density CAD Quads',
      topologyType: 'High-Poly Quad Mesh with Displacement',
      textureResolution: '16K HDRI Studio Environments & Procedural CMF',
      engineCompatibility: 'KeyShot, V-Ray, Cinema 4D'
    },
    featured: ['stu-01'].includes(p.id.toLowerCase())
  });
});
console.log(`Loaded ${stuRaw.length} Studio KeyShot projects.`);

// 6. Process Behance / ArtStation (BA-01 to BA-30)
console.log('Processing Behance Projects...');
const baRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_behance_artstation_portfolio (1).html`);
baRaw.forEach(p => {
  let heroImage = '';
  let galleryImages = [];

  if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'behance', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  const cat = categorize(p.category || '', '', p.id);

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: cat,
    categoryLabel: p.category || 'Hard-Surface & Speculative 3D',
    client: p.client || 'Entertainment & Concept Design',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'Speculative design concept engineered with complex hard-surface panelling and biomechanical balance.',
    creativeRationale: `${p.purpose || ''} Direction: ${p.direction || ''}`.trim(),
    deliverables: [
      'Hero High-Poly Concept Mesh',
      'Substance 3D Painted PBR Maps',
      'Cinematic Beauty Frames & Turntable'
    ],
    materials: ['Weathered Ballistic Polymer', 'Damascus Titanium', 'Tactical Cerakote'],
    software: ['Blender', 'ZBrush', 'Substance 3D', 'KeyShot'],
    technicalSpecs: {
      polycount: p.challenge ? p.challenge.slice(0, 40) : '220k Quads',
      topologyType: 'Clean Sub-D Quad Distribution',
      textureResolution: '8K PBR Textures',
      engineCompatibility: 'Unreal Engine 5.5, Blender, Marmoset'
    },
    featured: ['ba-01', 'ba-05'].includes(p.id.toLowerCase())
  });
});
console.log(`Loaded ${baRaw.length} Behance projects.`);

// 7. Process Sculpture (SC-01 to SC-10)
console.log('Processing Sculpture Projects...');
const scRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_sculpture_portfolio.html`);
scRaw.forEach(p => {
  let heroImage = '';
  let galleryImages = [];

  if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'sculpture', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: '3dprint',
    categoryLabel: p.category || 'Sculpture & Additive 3D Print',
    client: p.client || 'Fine Art & Collectible Atelier',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'Monumental sculpture tailored for high-tolerance additive manufacturing and museum casting.',
    creativeRationale: `${p.purpose || ''} Pipeline: ${p.pipeline || ''}`.trim(),
    deliverables: [
      'Watertight 100% Manifold STL / 3MF Archives',
      'Keyed & Pegged Multi-Part Print Assembly',
      'High-Resolution ZBrush Dynamesh Masters'
    ],
    materials: p.material ? [p.material] : ['Bronze Cast Slag', 'SLA Ceramic Resin', 'Chavant Clay'],
    software: ['ZBrush', 'Blender', 'PreForm', 'Lychee Slicer'],
    technicalSpecs: {
      polycount: '6M–12M Dynamic Quads / Decimated Manifold Solid',
      topologyType: 'Watertight 100% Manifold Solid Mesh',
      textureResolution: 'Micron-Toleranced Physical Displacement',
      engineCompatibility: 'SLA Formlabs, SLS EOS, ZBrush'
    },
    featured: ['sc-01'].includes(p.id.toLowerCase())
  });
});
console.log(`Loaded ${scRaw.length} Sculpture projects.`);

// 8. Process Monochrome Sculpture (SC-11 to SC-20)
console.log('Processing Monochrome Sculpture Projects...');
const scMonoRaw = loadProjectsFromHtml(`${htmlDir}/3drequests_sculpture_monochrome_portfolio.html`);
scMonoRaw.forEach(p => {
  let heroImage = '';
  let galleryImages = [];

  if (p.views && p.views.length > 0) {
    p.views.forEach((v, idx) => {
      const savedPath = saveBase64Image(v.src, 'sculpture_mono', `${p.id}_view${idx + 1}`);
      if (savedPath) {
        galleryImages.push(savedPath);
        if (!heroImage) heroImage = savedPath;
      }
    });
  }

  masterProjects.push({
    id: p.id.toLowerCase(),
    title: p.name,
    category: '3dprint',
    categoryLabel: p.category || '3D Printing & Physical Fabrication',
    client: 'Fine Art & Physical Casting Studio',
    year: '2026',
    heroImage: heroImage,
    galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
    summary: p.concept || 'Precision digital sculpture optimized for physical casting and additive manufacturing.',
    creativeRationale: `Approach: ${p.approach || ''}. Process: ${p.process || ''}`.trim(),
    deliverables: [
      'Watertight STL & 3MF Slicing Files',
      'Keyed Multi-Section Alignment Pegs',
      'Zero-Overhang Optimized Print Orientation'
    ],
    materials: ['High-Density Grey Ceramic Resin', 'Cire Perdue Lost-Wax Master'],
    software: ['ZBrush', 'Blender', 'Magics', 'KeyShot'],
    technicalSpecs: {
      polycount: 'Watertight Manifold Solid (Zero Intersecting Shells)',
      topologyType: 'Watertight 100% Manifold Shell',
      textureResolution: 'Physical Micro-Cavity Surface Detailing',
      engineCompatibility: 'SLA, SLS, DLP, Investment Casting'
    },
    featured: false
  });
});
console.log(`Loaded ${scMonoRaw.length} Monochrome Sculpture projects.`);

console.log(`\n========================================`);
console.log(`TOTAL MASTER PROJECTS GENERATED: ${masterProjects.length}`);
console.log(`========================================\n`);

// Write out allStudioProjects.ts
const tsContent = `// Auto-generated master dataset with all 214 studio projects across all disciplines
import { ProjectItem } from '../types.ts';

export const ALL_STUDIO_PROJECTS: ProjectItem[] = ${JSON.stringify(masterProjects, null, 2)};
`;

fs.writeFileSync('src/data/allStudioProjects.ts', tsContent, 'utf8');
console.log('Successfully wrote src/data/allStudioProjects.ts!');
