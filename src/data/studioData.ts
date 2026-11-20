import {
  CreativeCapability,
  DetailedService,
  ProjectItem,
  StudioApproachStage,
  TestimonialItem,
} from '../types.ts';
import { MASTER_STUDIO_PROJECTS } from './masterProjects.ts';

export const HERO_SCULPTURE_IMAGE = '/portfolio_assets/PRJ-23_Solstice_Tourbillon_Watch/PRJ-23_Hero.jpg';
export const LIQUID_CHROME_IMAGE = '/portfolio_assets/PRJ-28_Nitro_Zero_Beverage_Splash/PRJ-28_Hero.jpg';
export const CHARACTER_BUST_IMAGE = '/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View1_View_1___Textured_Portrait.jpg';
export const SYNTHESIZER_IMAGE = '/portfolio_assets/PRJ-01_Aether_Acoustics_Halo_Headphones/PRJ-01_Hero.jpg';
export const PAVILION_IMAGE = '/portfolio_assets/PRJ-20_Casa_Maris_Brutalist_Villa/PRJ-20_Twilight_Hero.jpg';
export const LATTICE_IMAGE = '/portfolio_assets/PRJ-29_Voronoi_Gyro_Core_Puzzle/PRJ-29_Assembled_Hero.jpg';
export const CHRONO_ORB_IMAGE = '/portfolio_assets/PRJ-08_Helios_Micro_Turbine/PRJ-08_Exploded_View.jpg';

// 6 Creative Capabilities from Section 04.B
export const CREATIVE_CAPABILITIES: CreativeCapability[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'Product Design & Visualization',
    tagline: 'Tactile physical hardware, precision CMF studies, and photorealistic product cinematography.',
    description:
      'We bring unbuilt consumer hardware, luxury audio gear, and precision physical tools to life with unyielding attention to light refraction, micro-knurling, and parting-line engineering.',
    previewImage: SYNTHESIZER_IMAGE,
    deliverables: ['Manufacturing-Grade NURBS CAD', 'Exploded Mechanical Assemblies', '8K CMF Material Packages'],
    disciplines: ['Consumer Electronics', 'Audio Equipment', 'Tactile Interfaces'],
    featured: true,
  },
  {
    id: 'character-sculpting',
    number: '02',
    title: 'Character Design & Sculpting',
    tagline: 'Avant-garde digital anatomy, sculptural busts, and haute-couture biomechanical forms.',
    description:
      'Sculptural characters and cinematic figures crafted at the intersection of classical anatomy and speculative future form. Rigged and optimized for both AAA real-time engines and gallery-scale 3D bronze casting.',
    previewImage: CHARACTER_BUST_IMAGE,
    deliverables: ['Sub-D Quad Character Meshes', 'Anatomical Deformation Rigs', 'Multi-UDIM 8K Textures'],
    disciplines: ['Cinematic Androids', 'Haute-Couture Avatars', 'Sculptural Busts'],
  },
  {
    id: 'modeling-assets',
    number: '03',
    title: '3D Modeling & Digital Assets',
    tagline: 'Flawless hard-surface topology, modular environment kits, and Nanite-ready hero props.',
    description:
      'Precision topology modeled strictly with clean quad flows and artifact-free curvature bakes. Built to withstand both extreme cinematic close-ups and high-velocity real-time render loops.',
    previewImage: CHRONO_ORB_IMAGE,
    deliverables: ['Nanite & Sub-D Production Assets', 'PBR Metal/Rough Shading Networks', 'LOD0–LOD4 Hierarchies'],
    disciplines: ['Hero Artifacts', 'Interactive Props', 'Modular Kitbashing'],
  },
  {
    id: 'additive-prototyping',
    number: '04',
    title: '3D Printing & Prototyping',
    tagline: 'Micron-accurate lattice topologies, zero-overhang orientation, and watertight manifold solids.',
    description:
      'Generative internal structures and functional prototyping engineered specifically for SLA ceramic resin, SLS nylon, and multi-jet fusion platforms. Guaranteed 100% manifold with zero slicing failures.',
    previewImage: LATTICE_IMAGE,
    deliverables: ['Watertight STL & 3MF Archives', 'FEA Stress & Overhang Audits', 'Micron-Tolerance Assemblies'],
    disciplines: ['SLA Ceramic Resin', 'SLS Industrial Nylon', 'Investment Casting Masters'],
  },
  {
    id: 'animation-motion',
    number: '05',
    title: 'Animation & Motion Design',
    tagline: 'Fluid kinetic physics, molten material transformations, and hypnotic brand motion.',
    description:
      'Kinetic visual poetry engineered to command attention. Molten chrome ribbons, translucent refractive glass simulations, and macro lighting choreography designed for prestige product unveils.',
    previewImage: LIQUID_CHROME_IMAGE,
    deliverables: ['ProRes 4444 Master Sequences', 'Seamless 4K Looping Artworks', 'Physics Particle Caches'],
    disciplines: ['Fluid Simulation', 'Light Choreography', 'Kinetic Product Unveils'],
  },
  {
    id: 'custom-projects',
    number: '06',
    title: 'Custom 3D Projects',
    tagline: 'Bespoke architectural pavilions, museum centerpieces, and experimental digital installations.',
    description:
      'One-of-a-kind spatial propositions and speculative digital sculptures designed for clients who refuse predictable corporate aesthetics. Bespoke from the mathematical spline to the final photon.',
    previewImage: PAVILION_IMAGE,
    deliverables: ['Parametric Spatial Geometry', 'Spectral Raytraced Renderings', 'Physical Fabrication Unfold Plans'],
    disciplines: ['Architectural Pavilions', 'Museum Monoliths', 'Spatial Environments'],
  },
];

// Master Portfolio Archive with all 217 real studio commissions across all disciplines
export const CURATED_PROJECTS: ProjectItem[] = MASTER_STUDIO_PROJECTS;
export const FEATURED_PROJECTS: ProjectItem[] = MASTER_STUDIO_PROJECTS.filter((p) => p.featured);

// 8 Detailed Services from Section 05
export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'product-modeling',
    number: '01',
    title: 'Product Modeling & Visualization',
    tagline: 'High-end consumer electronics, tactile physical tools, and photorealistic product cinematography.',
    description:
      'We turn industrial concept sketches and engineering CAD files into hyper-realistic 3D visual assets. Every bevel, parting line, and micro-texture is modeled to withstand razor-sharp 8K macro rendering.',
    image: SYNTHESIZER_IMAGE,
    deliverables: ['NURBS STEP/IGES CAD Models', 'Photorealistic 8K Renders', 'Exploded Mechanical Assemblies', 'CMF Finish Documentation'],
    suitableFor: 'Hardware startups, Shopify brands, consumer tech creators, industrial designers',
    timeline: '3–6 business days',
    startingRange: 'From $150',
    softwareStack: ['Rhino 8', 'Fusion 360', 'KeyShot 2026', 'Blender'],
  },
  {
    id: 'character-sculpting-service',
    number: '02',
    title: 'Character Modeling & Digital Sculpting',
    tagline: 'Anatomical precision, speculative creature design, and haute-couture digital figures.',
    description:
      'From stylized editorial avatars to hyper-detailed cinematic creatures. We sculpt expressive forms that bridge artistic beauty with production-ready topology, clean edge loops, and deformation-tested rigging.',
    image: CHARACTER_BUST_IMAGE,
    deliverables: ['High-Resolution ZBrush Sculpt', 'Clean Sub-D Quad Retopology', '8K PBR Texture Maps (UDIM)', 'Cast-Ready Solid Geometry'],
    suitableFor: 'Game studios, collectibles makers, miniatures, VTubers, 3D printing enthusiasts',
    timeline: '3–5 business days',
    startingRange: 'From $180',
    softwareStack: ['ZBrush', 'Blender', 'Substance Painter', 'Marvelous Designer'],
  },
  {
    id: 'industrial-mechanical',
    number: '03',
    title: 'Industrial & Mechanical Design',
    tagline: 'Precision enclosures, DFM injection-molding readiness, and micron-tolerance internal packaging.',
    description:
      'Industrial engineering grounded in real manufacturing physics. We balance aesthetic allure with draft angles, wall-thickness consistency, snap-fit tolerances, and heat-dissipation venting.',
    image: SYNTHESIZER_IMAGE,
    deliverables: ['Production-Grade CAD Assemblies', 'DFM Feasibility Reports', 'Tooling-Ready 2D Drawings', 'Physical Prototyping Files'],
    suitableFor: 'Robotics teams, medical hardware creators, inventors, consumer tech founders',
    timeline: '3–6 business days',
    startingRange: 'From $280',
    softwareStack: ['SolidWorks', 'Rhino 8', 'Fusion 360', 'KeyShot'],
  },
  {
    id: '3d-printing-prototyping',
    number: '04',
    title: '3D Printing & Prototyping',
    tagline: 'Watertight manifold geometry, generative lattice topologies, and zero-fail slicing preparation.',
    description:
      'Dedicated engineering for additive manufacturing. We ensure every micron of geometry is mathematically solid, free from non-manifold geometry or self-intersections, and optimized for minimal support material.',
    image: LATTICE_IMAGE,
    deliverables: ['100% Watertight STL & 3MF Files', 'Generative Infill Architecture', 'Orientation & Slicing Directives', 'Overhang Risk Assessment'],
    suitableFor: 'Additive manufacturing labs, inventors, 3D printing hobbyists, rapid prototypers',
    timeline: '24–48 hours',
    startingRange: 'From $100',
    softwareStack: ['Grasshopper', 'nTopology', 'Materialise Magics', 'Formlabs PreForm'],
  },
  {
    id: 'animation-motion-service',
    number: '05',
    title: 'Animation & Motion Design',
    tagline: 'Cinematic brand films, fluid physics simulations, and kinetic product choreography.',
    description:
      'Bespoke 3D motion design that captivates prospective investors and buyers. Fluid dynamics, magnetic light choreography, and physics-driven simulations calibrated for luxury launches.',
    image: LIQUID_CHROME_IMAGE,
    deliverables: ['ProRes 4444 Master Sequences', 'Seamless 4K Looping Canvas Cuts', 'Original 3D Audio Design', 'Compositing Project Archives'],
    suitableFor: 'Social video ads, Kickstarter campaign hooks, venture-backed launches',
    timeline: '4–7 business days',
    startingRange: 'From $650',
    softwareStack: ['Houdini', 'Octane Render', 'Cinema 4D', 'After Effects'],
  },
  {
    id: 'architectural-visualization',
    number: '06',
    title: 'Architectural & Interior Visualization',
    tagline: 'Parametric structures, sculptural pavilions, and atmospheric twilight spatial storytelling.',
    description:
      'We visualize visionary architectural proposals that stand out on international development boards. Spectral raytraced lighting, physically measured glass refractions, and emotive natural landscape settings.',
    image: PAVILION_IMAGE,
    deliverables: ['8K Daylight & Twilight Stills', 'Parametric Grasshopper Splines', 'BIM-Compatible Geometry', 'Cinematic Drone Fly-Throughs'],
    suitableFor: 'Architects, interior designers, real estate presentations, personal renovations',
    timeline: '3–6 business days',
    startingRange: 'From $550',
    softwareStack: ['Rhino 8', 'Grasshopper', 'Unreal Engine 5.5', 'V-Ray'],
  },
  {
    id: 'game-ready-assets',
    number: '07',
    title: 'Game-Ready 3D Assets',
    tagline: 'AAA Nanite hero props, clean quad topology, and optimized multi-layered PBR materials.',
    description:
      'Hero assets engineered to slot directly into Unreal Engine 5 or modern real-time simulation pipelines. Zero UV stretching, packed texture maps, and hand-tuned LOD transitions.',
    image: CHRONO_ORB_IMAGE,
    deliverables: ['Sub-D Quad FBX & USD Packages', 'LOD0–LOD4 Mesh Chains', 'Packed 8K PBR Material Sets', 'Kinematic Constraints & Colliders'],
    suitableFor: 'Indie game devs, AAA studios, VR/XR spatial apps, metaverse creators',
    timeline: '2–5 business days',
    startingRange: 'From $320',
    softwareStack: ['ZBrush', 'Blender', 'Substance Painter', 'Unreal Engine 5'],
  },
  {
    id: 'custom-3d-production',
    number: '08',
    title: 'Custom 3D Production',
    tagline: 'Experimental digital art, bespoke retail monoliths, and impossible geometries.',
    description:
      'For projects that defy conventional categorization. We partner with visionary founders and artists to develop generative algorithms, interactive spatial installations, and experimental visual artifacts.',
    image: HERO_SCULPTURE_IMAGE,
    deliverables: ['Complete Master 3D Archives', 'Bespoke Computational Shaders', 'Full Commercial IP Assignment', 'Dedicated Senior Production Sprint'],
    suitableFor: 'Inventors, artists, brands, agency overflow production',
    timeline: '3–7 business days',
    startingRange: 'From $490',
    softwareStack: ['Rhino 8', 'Houdini', 'Unreal Engine 5', 'Blender'],
  },
];

// The 4 Studio Approach Stages from Section 04.D
export const STUDIO_APPROACH_STAGES: StudioApproachStage[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Deconstructing intent, tolerances & aesthetic ambition.',
    description:
      'We begin with a deep technical geometry and artistic audit. Understanding functional mechanical constraints, target manufacturing thresholds, polycount budgets, and emotional tone before a single vertex is placed.',
    deliverableSummary: 'Scope Architecture · Tolerance Matrix · Creative Direction Brief',
  },
  {
    number: '02',
    title: 'DESIGN',
    subtitle: 'Iterative parametric sculpting & interactive 3D turntables.',
    description:
      'Translating concepts into bold sculptural forms. We share private, interactive web-based 3D review links, enabling you to inspect geometric silhouettes, chamfer light glints, and curvature continuity from any angle.',
    deliverableSummary: 'Interactive 3D Turntable Links · Silhouette Form Studies · Material Direction',
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Engineering rigor meets uncompromising aesthetic craftsmanship.',
    description:
      'Where artistic vision meets mechanical precision. Meshes are converted to production NURBS surfaces, additive lattices are mathematically stress-checked, and quad edge loops are optimized for seamless rendering.',
    deliverableSummary: 'Micron-Tested CAD / Mesh Assembly · FEA Stress Reports · Master Textures',
  },
  {
    number: '04',
    title: 'DELIVER',
    subtitle: 'Production-ready archives & direct engineering handshakes.',
    description:
      'You receive organized, validated production packages ready for CNC milling, SLA resin printing, or AAA game engines. We provide a direct alignment call with your fabricator or technical art director.',
    deliverableSummary: 'Clean Master Archives · Commercial IP Transfer · Production Support Handshake',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      '3D Requests engineered our tactile audio synthesizer with the finesse of a high-end Swiss watchmaker. The 0.05mm tolerance precision on the knurled controls eliminated an entire tooling re-spin.',
    author: 'Nikolai Lindqvist',
    role: 'VP of Hardware Engineering',
    company: 'Aura Sound Labs (Berlin)',
    outcome: 'Saved 6 weeks of injection-molding tooling cycles',
  },
  {
    quote:
      'The Etherea android sculpture bust was the centerpiece of our digital biennial. The caustics through the smoked glass cranium and the internal gold mechanical skeleton are breathtaking on a gallery scale.',
    author: 'Clara Delacroix',
    role: 'Curatorial Director',
    company: 'Solstice Media Arts (Zurich)',
    outcome: 'Featured in 14 international design publications',
  },
  {
    quote:
      'The topology discipline on our hero cinematic props is unmatched. Clean quad topology, Nanite LODs that loaded instantly into Unreal 5, and zero artifacting on 8K macro camera passes.',
    author: 'Marcus Vance',
    role: 'Technical Art Director',
    company: 'Mythic Vanguard Games (Montreal)',
    outcome: '100% zero cleanup needed inside Unreal Engine 5.5',
  },
];

export const STUDIO_PRINCIPLES = [
  {
    title: 'Precision',
    description:
      'Whether defining a 0.02mm injection molding clearance or baking an 8K normal map, precision is non-negotiable. Every vertex, curvature continuity spline, and draft angle serves a deliberate functional purpose.',
  },
  {
    title: 'Creativity',
    description:
      'We reject predictable corporate templates and stock geometry. We develop custom form languages, unexpected material combinations, and cinematic compositions that command commercial attention.',
  },
  {
    title: 'Craft',
    description:
      'True digital craftsmanship bridges computational mathematics with sculptural emotion. We spend hours refining subtle light glints, chamfer highlights, and tactile finishes so your outcomes feel extraordinary.',
  },
];

export const FAQS = [
  {
    question: 'What file formats and source deliverables do you provide?',
    answer:
      'For industrial CAD, we deliver native NURBS STEP (.stp/.step), IGES, and Parasolid (x_t) files. For 3D printing, we provide 100% watertight manifold STL and 3MF files with verified slicing tolerances. For game and motion production, we supply Sub-D quad FBX, USD, OBJ, and Blender (.blend) files with packed 8K PBR maps (Albedo, Normal, Roughness, Metalness, Displacement, AO).',
  },
  {
    question: 'How does the custom design request process work?',
    answer:
      'Click "Submit a Design Request", select your discipline, outline your timeline and budget parameters, and attach any reference sketches. Our principal 3D director reviews your submission within 12 business hours and returns an itemized milestone estimate with an optional 20-minute kickoff alignment call.',
  },
  {
    question: 'Do you execute non-disclosure agreements (NDAs) prior to file sharing?',
    answer:
      'Yes. Over 85% of our commissions involve confidential unreleased consumer hardware, proprietary game IP, or patented mechanical inventions. We execute mutual bilateral NDAs immediately upon intake before reviewing proprietary CAD files or concept documents.',
  },
  {
    question: 'Can you guarantee that 3D print meshes are 100% manifold and print-ready?',
    answer:
      'Yes. Every additive manufacturing file undergoes an automated geometry audit and manual slicing inspection. We guarantee watertight topology, zero non-manifold edges, optimal wall-thickness adherence for your chosen technology (SLA, SLS, MJF, FDM), and zero internal intersecting shells.',
  },
  {
    question: 'What are your typical project turnaround times and pricing tiers?',
    answer:
      'We offer accessible, transparent packages starting at $290 for rapid 3D printing STL models and digital assets (48–72h delivery). Commercial product CAD, e-commerce 4K render suites, and character sculpts typically range from $450 to $1,800 with guaranteed turnaround SLAs. Every project includes 2 free revision rounds, direct director oversight, and 100% commercial IP rights.',
  },
];
