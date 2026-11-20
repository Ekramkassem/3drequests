// Master unified studio projects archive (contains all 217 client commissions and portfolio works)
import { ProjectItem } from '../types.ts';

export const MASTER_STUDIO_PROJECTS: ProjectItem[] = [
  {
    "id": "prj-01-aether-halo",
    "title": "Aether Acoustics — Halo ANC Studio Headphones",
    "category": "product",
    "categoryLabel": "Product Design & Hardware",
    "client": "Aether Audio Labs",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-01_Aether_Acoustics_Halo_Headphones/PRJ-01_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-01_Aether_Acoustics_Halo_Headphones/PRJ-01_Hero.jpg",
      "/portfolio_assets/PRJ-01_Aether_Acoustics_Halo_Headphones/PRJ-01b_Macro_Hinge.jpg"
    ],
    "summary": "Precision over-ear acoustic monitoring headphones sculpted with titanium gimbal yolks and memory-foam micro-perforations.",
    "creativeRationale": "Engineered for studio reference grade clarity. Features an unibody bead-blasted grade-5 titanium headband, decoupled gimbal articulation with micro-damped detents, and passive acoustic chamber baffling.",
    "deliverables": [
      "NURBS STEP Tooling Masters",
      "KeyShot CMF Spec Archive",
      "Acoustic Cavity Tolerancing",
      "Exploded Animation Sequence"
    ],
    "materials": [
      "Bead-blasted Grade-5 Titanium",
      "Anodized Champagne Gold",
      "Full-Grain Protein Leather"
    ],
    "dimensions": "198 × 174 × 78 mm",
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "342,000 polys (Manufacturing CAD)",
      "topologyType": "NURBS Boundary Rep & Sub-D Quads",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Unreal Engine 5"
    },
    "featured": true
  },
  {
    "id": "prj-02-vespera-espresso",
    "title": "Vespera — Precision Dual-Boiler Espresso Machine",
    "category": "product",
    "categoryLabel": "Product Design & Hardware",
    "client": "Vespera Officina",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-02_Vespera_Espresso_Machine/PRJ-02_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-02_Vespera_Espresso_Machine/PRJ-02_Hero.jpg",
      "/portfolio_assets/PRJ-02_Vespera_Espresso_Machine/PRJ-02b_Alternate_Angle.jpg"
    ],
    "summary": "Commercial-grade domestic espresso architecture with mirror-polished stainless casework, exposed brass group-head, and knurled steam levers.",
    "creativeRationale": "A celebration of thermal mass and tactile mechanical control. Form follows thermal stability, integrating dual PID boilers and satin-finished brass fittings into an architectural brutalist chassis.",
    "deliverables": [
      "Sheet Metal Stamping DXF",
      "SolidWorks Master Assembly",
      "KeyShot CMF Package",
      "Physical Prototype Drawings"
    ],
    "materials": [
      "Mirror 316L Stainless Steel",
      "Brushed Marine Brass",
      "Smoked Quartz Glass"
    ],
    "dimensions": "380 × 310 × 420 mm",
    "software": [
      "SolidWorks",
      "Rhino 8",
      "KeyShot",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "512,000 quads",
      "topologyType": "100% Manifold Manufacturing Assembly",
      "textureResolution": "8K Anisotropic PBR Textures",
      "engineCompatibility": "KeyShot, SolidWorks, Blender"
    },
    "featured": true
  },
  {
    "id": "ch-01-vanguard-recon",
    "title": "Vanguard-09 — Arctic Recon Specialist",
    "category": "character",
    "categoryLabel": "Character Design & Sculpting",
    "client": "Solstice Interactive",
    "year": "2026",
    "heroImage": "/character_assets/CH-01_Vanguard_09___Arctic_Recon_Specialist/CH-01_View1_View_1___Front_3_4_Full_Body.jpg",
    "galleryImages": [
      "/character_assets/CH-01_Vanguard_09___Arctic_Recon_Specialist/CH-01_View1_View_1___Front_3_4_Full_Body.jpg",
      "/character_assets/CH-01_Vanguard_09___Arctic_Recon_Specialist/CH-01_View2_View_2___Rear_Turnaround___Rig.jpg"
    ],
    "summary": "Full-body sub-zero tactical operative featuring modular cold-weather ballistic hardshell armor, insulated thermal under-suit, and communications rig.",
    "creativeRationale": "Designed for AAA cinematic real-time pipelines. Modeled with rigorous hard-surface cloth friction physics in Marvelous Designer, detailed in ZBrush, and textured with multi-tile UDIM weathering.",
    "deliverables": [
      "Sub-D Quad Master FBX",
      "Deformation Skeletal Rig",
      "8K Multi-UDIM Texture Suite",
      "LOD0–LOD4 Mesh Pack"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Thermal Ripstop Gore-Tex",
      "Coated Anti-Glare Polycarbonate"
    ],
    "dimensions": "1.88 m Full Anatomy",
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Unreal Engine 5.5"
    ],
    "technicalSpecs": {
      "polycount": "118,000 quads (LOD0 Game Ready)",
      "topologyType": "Deformation Optimized Quad Flow",
      "textureResolution": "8K UDIM Maps (5 Tiles)",
      "engineCompatibility": "Unreal Engine 5.5, Maya, Blender"
    },
    "featured": true
  },
  {
    "id": "ch-02-alder-cartographer",
    "title": "Alder — Weathered Cartographer Sculptural Bust",
    "category": "character",
    "categoryLabel": "Character Design & Sculpting",
    "client": "Mythos Collectibles",
    "year": "2026",
    "heroImage": "/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View1_View_1___Textured_Portrait.jpg",
    "galleryImages": [
      "/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View1_View_1___Textured_Portrait.jpg",
      "/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View2_View_2___ZBrush_Clay_Sculpt.jpg"
    ],
    "summary": "Fine-art collector portrait bust of a veteran celestial cartographer, featuring micro-wrinkle pore detailing, monocle armature, and cast resin base.",
    "creativeRationale": "Sculpted with classical fine-arts portraiture proportions. Every facial pore, scar, and weathered skin furrow was individually sculpted for both 8K cinematic rendering and gallery-scale 1/4 bronze casting.",
    "deliverables": [
      "ZBrush Master High-Poly Tool",
      "Decimated Watertight STL/OBJ",
      "Substance Painter Material Set",
      "Keyed 3D Print Parts"
    ],
    "materials": [
      "Cast Bronze Patina",
      "Antiqued Optical Glass",
      "Honed Walnut Base"
    ],
    "dimensions": "360 × 240 × 190 mm",
    "software": [
      "ZBrush",
      "Blender",
      "Substance Painter",
      "Octane Render"
    ],
    "technicalSpecs": {
      "polycount": "6.4M Polys (Sculpt) / 280k Sub-D",
      "topologyType": "Fine Art High-Density Sculpt",
      "textureResolution": "8K PBR Subsurface Scattering",
      "engineCompatibility": "ZBrush, Blender, Octane, Formlabs PreForm"
    },
    "featured": true
  },
  {
    "id": "ch-03-kurogane-samurai",
    "title": "Kurogane — Ronin Cyber-Samurai",
    "category": "character",
    "categoryLabel": "Character Design & Sculpting",
    "client": "Kurogane Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-03_Kurogane___Ronin_Cyber_Samurai/CH-03_View1_View_1___Front_3_4_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-03_Kurogane___Ronin_Cyber_Samurai/CH-03_View1_View_1___Front_3_4_Hero.jpg",
      "/character_assets/CH-03_Kurogane___Ronin_Cyber_Samurai/CH-03_View2_View_2___Macro_Helmet___Arm.jpg"
    ],
    "summary": "Futuristic mechanized ronin warrior fusing feudal Japanese kabuto armor plates with carbon-fiber bionic limb replacements and glowing thermal blade.",
    "creativeRationale": "Seamless fusion of cultural heritage silhouette and speculative biomechatronics. Lacquered crimson armor scales articulate over exposed titanium hydraulic muscle fibers.",
    "deliverables": [
      "Game-Ready Nanite Mesh",
      "Full Kinematic Combat Rig",
      "8K Substance Painter Materials",
      "Weapon High-Poly Asset"
    ],
    "materials": [
      "Lacquered Crimson Urushi",
      "Forged Carbon Fiber",
      "Brushed Damascus Titanium"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Substance 3D",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "145,000 quads",
      "topologyType": "Deformation Rig Ready Quad Flow",
      "textureResolution": "8K Multi-UDIM (6 Tiles)",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Maya"
    },
    "featured": true
  },
  {
    "id": "prj-07-atlas-robot",
    "title": "Atlas-6 — Six-Axis Collaborative Factory Robot Arm",
    "category": "industrial",
    "categoryLabel": "Industrial Design & Robotics",
    "client": "Atlas Automation",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-07_Atlas-6_Collaborative_Robot/PRJ-07_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-07_Atlas-6_Collaborative_Robot/PRJ-07_Hero.jpg"
    ],
    "summary": "Compact 6-DOF industrial cobot with integrated torque sensors, capacitive collision skin, and internal cable routing channels.",
    "creativeRationale": "Designed to humanize high-velocity factory automation. Clean, organic unibody radii eliminate pinch points while cast-aluminum arm segments house high-torque harmonic drives.",
    "deliverables": [
      "Production SolidWorks CAD Master",
      "Kinematic URDF Robot Definition",
      "KeyShot Marketing Renders",
      "Joint Exploded Diagrams"
    ],
    "materials": [
      "Die-Cast A380 Aluminum",
      "High-Impact Safety Polymer",
      "Direct-Drive Motors"
    ],
    "software": [
      "SolidWorks",
      "Fusion 360",
      "KeyShot",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "420,000 polys (CAD Master)",
      "topologyType": "NURBS Boundary Representation",
      "textureResolution": "8K Industrial Powder Coat CMF",
      "engineCompatibility": "ROS 2, SolidWorks, KeyShot, Unity"
    },
    "featured": false
  },
  {
    "id": "prj-08-helios-turbine",
    "title": "Helios — Micro Turbine Internal Rotor & Stator",
    "category": "industrial",
    "categoryLabel": "Industrial Design & Engineering",
    "client": "Helios Propulsion Labs",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-08_Helios_Micro_Turbine/PRJ-08_Exploded_View.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-08_Helios_Micro_Turbine/PRJ-08_Exploded_View.jpg",
      "/portfolio_assets/PRJ-08_Helios_Micro_Turbine/PRJ-08b_Section_Cutaway.jpg"
    ],
    "summary": "Exploded technical visualization of an ultra-high RPM micro-gas turbine showcasing ceramic blisk rotors, ceramic bearings, and titanium heat exchanger.",
    "creativeRationale": "Engineered with aerodynamic blade splines and zero-tolerance clearance interfaces. Rendered with spectral raytracing to reveal internal thermal fluid velocity channels.",
    "deliverables": [
      "NURBS STEP Assembly",
      "Technical Cutaway Cinematics",
      "Finite Element Mesh",
      "KeyShot Exploded Animation"
    ],
    "materials": [
      "Inconel 718 Nickel Superalloy",
      "Silicon Nitride Ceramic",
      "Titanium Grade 5"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot",
      "Octane"
    ],
    "technicalSpecs": {
      "polycount": "680,000 polys",
      "topologyType": "Precision Engineering CAD Surface",
      "textureResolution": "Procedural Machined Metal Shaders",
      "engineCompatibility": "SolidWorks, Fusion 360, KeyShot"
    },
    "featured": true
  },
  {
    "id": "prj-16-aegis-carbine",
    "title": "Aegis MkIV — Plasma Carbine Hero Weapon Prop",
    "category": "industrial",
    "categoryLabel": "Game-Ready & Hero Props",
    "client": "Vanguard Studios",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-16_Aegis_MkIV_Plasma_Carbine/PRJ-16_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-16_Aegis_MkIV_Plasma_Carbine/PRJ-16_Hero.jpg"
    ],
    "summary": "Modular sci-fi kinetic energy carbine featuring working battery magazine ejector, holographic optic emitter, and heat-venting barrels.",
    "creativeRationale": "Hard-surface mastery designed for first-person camera perspectives. Every bevel and bolt is modeled with clean quad sub-D flow to ensure artifact-free normal bakes and Nanite LOD0 parity.",
    "deliverables": [
      "Sub-D Quad FBX Master",
      "Substance 3D Smart Material Library",
      "Reload & Firing Rig Animation",
      "Unreal Engine 5.5 Blueprint"
    ],
    "materials": [
      "Cerakote Matte Gunmetal",
      "Anodized Cerulean Heat Sink",
      "Textured Grip Polymer"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance Painter",
      "Marmoset Toolbag"
    ],
    "technicalSpecs": {
      "polycount": "68,400 quads (LOD0)",
      "topologyType": "Clean First-Person Quad Topology",
      "textureResolution": "8K PBR Metallic/Roughness",
      "engineCompatibility": "Unreal Engine 5.5 Nanite, Unity 6"
    },
    "featured": false
  },
  {
    "id": "prj-23-solstice-tourbillon",
    "title": "Solstice — Tourbillon Haute Horlogerie Timepiece",
    "category": "product",
    "categoryLabel": "Product Design & Luxury",
    "client": "Atelier Solstice Genève",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-23_Solstice_Tourbillon_Watch/PRJ-23_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-23_Solstice_Tourbillon_Watch/PRJ-23_Hero.jpg",
      "/portfolio_assets/PRJ-23_Solstice_Tourbillon_Watch/PRJ-23b_Escapement_Macro.jpg"
    ],
    "summary": "Flying tourbillon luxury wristwatch mechanism with hand-beveled titanium bridges, Geneva waves, and sapphire crystal exhibition case.",
    "creativeRationale": "Micro-mechanical masterwork with true-to-life horological tolerances. Every screw, gear pinion, and escapement pallet stone is modeled to sub-micron accuracy for macro cinematography.",
    "deliverables": [
      "Parametric CAD Assembly",
      "Macro KeyShot Video Renders",
      "CMF Haute Horlogerie Book",
      "Exploded Kinematic Simulation"
    ],
    "materials": [
      "Grade 5 Titanium Case",
      "24k Rose Gold Rotor",
      "Synthetic Ruby Pallet Jewels",
      "Anti-Reflective Sapphire"
    ],
    "dimensions": "41 mm Diameter × 11.8 mm Height",
    "software": [
      "Rhino 8",
      "SolidWorks",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "890,000 polys (Kinematic Assembly)",
      "topologyType": "Micron-Tolerance Horological Mesh",
      "textureResolution": "8K Vector CMF & Procedural Metal",
      "engineCompatibility": "KeyShot, SolidWorks, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-28-nitro-splash",
    "title": "Nitro Zero — Dynamic Fluid Dynamics Beverage Simulation",
    "category": "animation",
    "categoryLabel": "Animation & Motion Design",
    "client": "Nitro Beverage Co.",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-28_Nitro_Zero_Beverage_Splash/PRJ-28_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-28_Nitro_Zero_Beverage_Splash/PRJ-28_Hero.jpg"
    ],
    "summary": "Hyper-detailed liquid splash advertising hero visual with micro-droplet air resistance physics, condensation droplets, and refractive lighting.",
    "creativeRationale": "Simulated with custom Houdini FLIP solvers and meshed into high-resolution adaptive isosurfaces. Rendered with spectral raytracing for crystal-clear splash droplets and carbonation bubbles.",
    "deliverables": [
      "ProRes 4444 Master Animation",
      "Alembic Cache Files",
      "4K Print Resolution Stills",
      "Houdini Project Networks"
    ],
    "materials": [
      "Refractive Carbonated Fluid",
      "Frosted Cold Aluminum",
      "Optical Condensation Geometry"
    ],
    "software": [
      "Houdini",
      "Octane Render",
      "Cinema 4D",
      "After Effects"
    ],
    "technicalSpecs": {
      "polycount": "2.4M polygons / frame",
      "topologyType": "Adaptive FLIP Fluid Isosurface",
      "textureResolution": "Procedural Glass & Liquid Shaders",
      "engineCompatibility": "Houdini, C4D, Unreal Engine 5"
    },
    "featured": true
  },
  {
    "id": "prj-26-velvet-pulse",
    "title": "Velvet Pulse — Luxury Fragrance CGI Film",
    "category": "animation",
    "categoryLabel": "Animation & Motion Design",
    "client": "Maison Velvet",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-26_Velvet_Pulse_Fragrance_CGI/PRJ-26_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-26_Velvet_Pulse_Fragrance_CGI/PRJ-26_Hero.jpg"
    ],
    "summary": "Hypnotic commercial launch visual featuring molten obsidian ribbons swirling around an architectural flacon bottle with volumetric caustic caresses.",
    "creativeRationale": "Art-directed motion study exploring tension, slow-motion fluid dynamics, and spectral dispersion in glass. Created for prestige global fragrance campaign reveals.",
    "deliverables": [
      "4K 60FPS Video Masters",
      "Looping WebGL Sequences",
      "Hero Social Cutdowns",
      "Physical Print Billboards"
    ],
    "materials": [
      "Flint Optical Glass",
      "Polished Black Ceramic",
      "Liquid Obsidian Fluid"
    ],
    "software": [
      "Cinema 4D",
      "Houdini",
      "Octane Render",
      "After Effects"
    ],
    "technicalSpecs": {
      "polycount": "1.6M polygons",
      "topologyType": "Dynamic Simulated Deforming Mesh",
      "textureResolution": "Procedural Optical Shaders",
      "engineCompatibility": "C4D, Octane, Unreal 5"
    },
    "featured": false
  },
  {
    "id": "prj-29-voronoi-gyro",
    "title": "Voronoi Gyro-Core — Generative Additive 3D Print Puzzle",
    "category": "3dprint",
    "categoryLabel": "3D Printing & Prototyping",
    "client": "Formlabs Zurich",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-29_Voronoi_Gyro_Core_Puzzle/PRJ-29_Assembled_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-29_Voronoi_Gyro_Core_Puzzle/PRJ-29_Assembled_Hero.jpg",
      "/portfolio_assets/PRJ-29_Voronoi_Gyro_Core_Puzzle/PRJ-29b_Build_Plate_Exploded.jpg"
    ],
    "summary": "Continuous zero-support generative Voronoi kinetic puzzle engineered specifically for SLA ceramic resin and SLS nylon laser sintering.",
    "creativeRationale": "An exploration of generative volumetric lattices with interlocking print-in-place clearances. 100% manifold with verified outward surface normals and zero slicing errors.",
    "deliverables": [
      "Watertight STL & 3MF Build Archives",
      "Direct Slicing Setup Profiles",
      "PreForm Supportless Job Files",
      "FEA Stress Analysis"
    ],
    "materials": [
      "Ceramic-Infused SLA Resin",
      "Industrial SLS PA12 Nylon",
      "Satin Titanium Axle"
    ],
    "dimensions": "140 × 140 × 140 mm",
    "software": [
      "Grasshopper",
      "nTopology",
      "Blender",
      "PreForm"
    ],
    "technicalSpecs": {
      "polycount": "920,000 polys",
      "topologyType": "100% Watertight Manifold Solid",
      "textureResolution": "Physical Micro-Textured Surface",
      "engineCompatibility": "PreForm, Cura, PrusaSlicer, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-30-valkyrie-bust",
    "title": "Valkyrie Sovereign — 1/6 Scale Collectible Resin Maquette",
    "category": "3dprint",
    "categoryLabel": "3D Printing & Collectibles",
    "client": "Apex Statues",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-30_Valkyrie_Resin_Bust/PRJ-30_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-30_Valkyrie_Resin_Bust/PRJ-30_Hero.jpg"
    ],
    "summary": "High-detail collectible figurine bust split into keyed magnetic production parts for industrial vacuum chamber resin casting and hand-painting.",
    "creativeRationale": "Engineered with negative draft angles eliminated for silicone molds. Includes interlocking square keys, concealed drain holes for hollow slush casting, and magnetic joint sockets.",
    "deliverables": [
      "Keyed Production STL/OBJ Parts",
      "Silicone Mold Parting Line Plans",
      "Packaging Blister Tray CAD",
      "Assembly Master Guide"
    ],
    "materials": [
      "High-Toughness SLA Resin",
      "Rare-Earth N52 Neodymium Magnets"
    ],
    "dimensions": "280 mm Height (1/6 Scale)",
    "software": [
      "ZBrush",
      "Blender",
      "Formlabs PreForm",
      "Magics"
    ],
    "technicalSpecs": {
      "polycount": "4.8M Polygons (Production Master)",
      "topologyType": "Keyed Water-Tight Manifold Shells",
      "textureResolution": "Direct Geometry Micro-Detailing",
      "engineCompatibility": "Formlabs PreForm, Lychee, Magics"
    },
    "featured": false
  },
  {
    "id": "prj-20-casa-maris",
    "title": "Casa Maris — Brutalist Cliffside Coastal Villa",
    "category": "experimental",
    "categoryLabel": "Architectural & Spatial",
    "client": "Nordic Coastal Architecture",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-20_Casa_Maris_Brutalist_Villa/PRJ-20_Twilight_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-20_Casa_Maris_Brutalist_Villa/PRJ-20_Twilight_Hero.jpg",
      "/portfolio_assets/PRJ-20_Casa_Maris_Brutalist_Villa/PRJ-20b_Terrace_View.jpg"
    ],
    "summary": "Cantilevered board-formed concrete residence carved into coastal granite sea cliffs, featuring floor-to-ceiling thermal glazing and infinity ocean reflections.",
    "creativeRationale": "Photorealistic architectural visualization study capturing the harsh Nordic twilight. Uses physically accurate sun/sky irradiance models, board-formed concrete grain scans, and realistic ocean wave kinematics.",
    "deliverables": [
      "Full Architectural BIM/NURBS Model",
      "8K Twilight Cinematics",
      "Unreal Engine 5.5 Real-Time Walkthrough",
      "Interior Lighting Calculations"
    ],
    "materials": [
      "Board-Formed Architectural Concrete",
      "Low-Iron Structural Glazing",
      "Brushed Teak Wood",
      "Honed Basalt Stone"
    ],
    "dimensions": "24 × 18 × 9 m Architectural Envelope",
    "software": [
      "Rhino 8",
      "Unreal Engine 5.5",
      "KeyShot",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "1.85M polygons (Nanite Ready)",
      "topologyType": "Optimized Architectural BIM Mesh",
      "textureResolution": "8K Seamless Photogrammetry Scans",
      "engineCompatibility": "Unreal Engine 5.5, 3ds Max, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-03",
    "title": "Lumina Form — Cantilevered OLED Desk Lamp",
    "category": "industrial",
    "categoryLabel": "Furniture & Lighting",
    "client": "Architectural lighting studios & modern office furniture brands",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-03_Lumina_Form_OLED_Lamp/PRJ-03_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-03_Lumina_Form_OLED_Lamp/PRJ-03_Hero.jpg"
    ],
    "summary": "Ultra-thin bent anodized aluminum task lamp with a glowing translucent alabaster diffuser bar.",
    "creativeRationale": "Catalog hero imagery and architectural specifier lookbooks. Visual Direction: Dramatic chiaroscuro studio lighting on dark concrete with warm light falloff.",
    "deliverables": [
      "Subsurface Emission",
      "Minimalist Lighting",
      "Industrial Form"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Subsurface emission through ve...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-04",
    "title": "Solvay Botanicals — Refillable Apothecary Skincare System",
    "category": "industrial",
    "categoryLabel": "Packaging & Consumer Products",
    "client": "Clean beauty, skincare & CPG packaging agencies",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-04_Solvay_Botanicals_Skincare/PRJ-04_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-04_Solvay_Botanicals_Skincare/PRJ-04_Hero.jpg"
    ],
    "summary": "Trio of frosted fluted amber glass apothecary bottles with knurled brushed aluminum magnetic caps.",
    "creativeRationale": "High-converting e-commerce hero banners and retail packaging pre-visualization. Visual Direction: Staggered travertine plinths with sunlit caustic shadows on a warm cream backdrop.",
    "deliverables": [
      "Packaging Viz",
      "Glass Caustics",
      "Procedural Knurling"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Fluted glass refraction, frost...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-05",
    "title": "Kodiak — Modular Portable Power Station",
    "category": "industrial",
    "categoryLabel": "Industrial / Outdoor Consumer Tech",
    "client": "Clean-energy hardware startups & rugged outdoor gear brands",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-05_Kodiak_Power_Station/PRJ-05_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-05_Kodiak_Power_Station/PRJ-05_Hero.jpg"
    ],
    "summary": "Ruggedized charcoal polymer power cube with orange anodized heatsink fins and recessed handles.",
    "creativeRationale": "Crowdfunding launch visuals, Amazon A+ content, and trade-show banners. Visual Direction: Moody dark-slate industrial studio with crisp rim highlights.",
    "deliverables": [
      "Injection-Mold Detailing",
      "Heatsink Geometry",
      "Hard-Surface Shading"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Micro-textured injection-molde...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-06",
    "title": "Zephyr Air — Dual-Stage HEPA Smart Purifier",
    "category": "industrial",
    "categoryLabel": "Smart Home Hardware",
    "client": "IoT smart-home appliance companies",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-06_Zephyr_Air_Smart_Purifier/PRJ-06_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-06_Zephyr_Air_Smart_Purifier/PRJ-06_Hero.jpg"
    ],
    "summary": "Cylindrical perforated ceramic-white aluminum purifier with recessed warm-white ambient LED ring.",
    "creativeRationale": "D2C storefront hero and industrial design validation. Visual Direction: Soft Scandinavian daylight studio on an oak plinth against warm plaster.",
    "deliverables": [
      "Procedural Perforation",
      "Soft Daylight GI",
      "Smart-Home Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Radial gradient perforation ar...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-09",
    "title": "Vortex CNC — 5-Axis Desktop Milling Spindle",
    "category": "industrial",
    "categoryLabel": "Precision Mechanical Components",
    "client": "CNC machinery & precision tooling manufacturers",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-09_Vortex_CNC_Milling_Spindle/PRJ-09_Cutaway_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-09_Vortex_CNC_Milling_Spindle/PRJ-09_Cutaway_Hero.jpg"
    ],
    "summary": "Cutaway render of a high-RPM spindle revealing spiral copper liquid-cooling channels and ceramic bearing stack.",
    "creativeRationale": "Explaining internal thermal engineering in B2B product launches. Visual Direction: High-contrast dark engineering studio with machined chamfer highlights.",
    "deliverables": [
      "Internal Cutaways",
      "Turned Steel Anisotropy",
      "Bearing Detailing"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Boolean-clean section cuts thr...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-10",
    "title": "TerraRover — Autonomous Agricultural Soil-Sampling Drone",
    "category": "3dprint",
    "categoryLabel": "Functional Product Prototypes",
    "client": "AgTech robotics & autonomous field-equipment companies",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-10_TerraRover_Soil_Drone/PRJ-10_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-10_TerraRover_Soil_Drone/PRJ-10_Hero.jpg"
    ],
    "summary": "4-wheel articulated rover with airless treaded tires, solar deck, LiDAR turret, and soil core drill.",
    "creativeRationale": "Pre-production field-environment visualization for Series A fundraising and dealer demos. Visual Direction: Neutral overcast proving-ground lighting on compacted earth.",
    "deliverables": [
      "Prototype Visualization",
      "Weathering & Dust",
      "Mechanical Detailing"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Airless tire spoke geometry, h...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-11",
    "title": "NexValve — Cryogenic High-Pressure Manifold System",
    "category": "industrial",
    "categoryLabel": "Technical Product Visualization",
    "client": "Energy, LNG & industrial fluid-handling manufacturers",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-11_NexValve_Cryo_Manifold/PRJ-11_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-11_NexValve_Cryo_Manifold/PRJ-11_Hero.jpg"
    ],
    "summary": "316L stainless steel multi-port manifold block with brass needle-valve stems, PTFE seals, and cryo frost.",
    "creativeRationale": "Industrial catalog standardization and technical sales engineering. Visual Direction: Clean white-to-gray gradient studio with orthographic-perspective clarity.",
    "deliverables": [
      "316L Steel Shading",
      "Cryogenic Frost FX",
      "Threaded CAD"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Machined toolpath micro-groove...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-12",
    "title": "Kaelen the Chronomancer — Stylized Game Heroine",
    "category": "character",
    "categoryLabel": "Stylized Characters",
    "client": "AA/AAA stylized game studios & animation houses",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-12_Kaelen_the_Chronomancer/PRJ-12_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-12_Kaelen_the_Chronomancer/PRJ-12_Hero.jpg",
      "/portfolio_assets/PRJ-12_Kaelen_the_Chronomancer/PRJ-12b_Turnaround_Sheet.jpg"
    ],
    "summary": "Clockwork navigator in ornate indigo leather coat, engraved brass pauldrons, and glowing astrolabe staff.",
    "creativeRationale": "Hero character vertical slice and production-pipeline proof for game co-development pitches. Visual Direction: Warm key light with cool cyan rim light on a dark slate character turntable.",
    "deliverables": [
      "Stylized Sculpting",
      "PBR Character Texturing",
      "Turnaround Sheets"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Stylized anatomy, layered clot...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-13",
    "title": "Vanguard Recon — Photorealistic Tactical Exo-Medic",
    "category": "character",
    "categoryLabel": "Realistic Characters",
    "client": "AAA game studios, VFX houses & cinematics trailers",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-13_Vanguard_Recon_Exo_Medic/PRJ-13_Hero_Portrait.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-13_Vanguard_Recon_Exo_Medic/PRJ-13_Hero_Portrait.jpg"
    ],
    "summary": "Tactical exo-medic portrait with ballistic exoskeleton collar, micro-weave suit, and amber HUD visor.",
    "creativeRationale": "Cinematic key-art benchmark for photorealistic character outsourcing. Visual Direction: Shallow depth-of-field cinematic studio portrait with warm-cool contrast.",
    "deliverables": [
      "Digital Human SSS",
      "Micro-Weave Fabrics",
      "Cinematic Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Subsurface skin pores, translu...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-14",
    "title": "Ignis Wyrmling — Collector's Resin Statue Maquette",
    "category": "character",
    "categoryLabel": "Collectible Figurines & Creatures",
    "client": "High-end resin statue & collectible maquette publishers",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-14_Ignis_Wyrmling_Maquette/PRJ-14_Painted_Maquette.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-14_Ignis_Wyrmling_Maquette/PRJ-14_Painted_Maquette.jpg",
      "/portfolio_assets/PRJ-14_Ignis_Wyrmling_Maquette/PRJ-14b_Clay_Sculpt.jpg"
    ],
    "summary": "Fantasy fire dragonet perched on jagged obsidian crystal with bronze-patina scales and translucent wings.",
    "creativeRationale": "Pre-production collector solicitation renders paired with digital sculpt validation. Visual Direction: Warm museum plinth lighting on deep charcoal + neutral gray ZBrush clay pass.",
    "deliverables": [
      "Creature Anatomy",
      "Clay Sculpt Presentation",
      "Polystone Patina"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Anatomical scale flow, translu...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": true
  },
  {
    "id": "prj-15",
    "title": "Mochi-Bot & Friends — Vinyl Designer Toy Capsule Series",
    "category": "character",
    "categoryLabel": "Designer Toys",
    "client": "Designer vinyl toy brands, IP licensors & blind-box publishers",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-15_Mochi_Bot_Vinyl_Toys/PRJ-15_Hero_Lineup.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-15_Mochi_Bot_Vinyl_Toys/PRJ-15_Hero_Lineup.jpg"
    ],
    "summary": "Trio of tactile art-toy figurines: glossy astronaut cat, matte mecha-bunny, and flocked bonsai spirit.",
    "creativeRationale": "Blind-box retail launch imagery and manufacturer color-way approval. Visual Direction: Playful pastel studio diorama with softbox lighting and clean geometric arches.",
    "deliverables": [
      "Vinyl & Flocked Shaders",
      "Toy Proportioning",
      "Pastel Art Direction"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Distinct vinyl gloss, soft-tou...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-17",
    "title": "Sunken Astrolabe — Stylized Ancient Temple Diorama",
    "category": "game-assets",
    "categoryLabel": "Stylized Environments",
    "client": "Indie/AA stylized game studios & mobile RPG developers",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-17_Sunken_Astrolabe_Diorama/PRJ-17_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-17_Sunken_Astrolabe_Diorama/PRJ-17_Hero.jpg"
    ],
    "summary": "Floating isometric slice of an overgrown sandstone and carved jade ruin with glowing turquoise pool.",
    "creativeRationale": "Environment art direction benchmark for isometric/action-RPG worlds. Visual Direction: Warm golden-hour sunset lighting with stylized moss, water caustics, and atmospheric dust.",
    "deliverables": [
      "Stylized Environments",
      "Trim-Sheet Sculpting",
      "Water & Foliage Shaders"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Trim-sheet sandstone sculpting...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-18",
    "title": "Sector 7 Cryo-Bay — Modular Sci-Fi Corridor Kit",
    "category": "game-assets",
    "categoryLabel": "Modular Asset Collections",
    "client": "Unreal Engine 5 game studios & sci-fi virtual production teams",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-18_Sector_7_Cryo_Bay_Kit/PRJ-18_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-18_Sector_7_Cryo_Bay_Kit/PRJ-18_Hero.jpg"
    ],
    "summary": "Modular sci-fi spacecraft corridor built from interlocking bulkheads, cryo-pods, and floor grates.",
    "creativeRationale": "Demonstrating grid-snapped modular kitbash architecture and real-time Lumen lighting. Visual Direction: Moody cyan and amber industrial lighting with volumetric floor steam.",
    "deliverables": [
      "Modular Kit Design",
      "UE5 Lumen Lighting",
      "Volumetric Fog"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Frosted cryo-glass silhouettes...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-19",
    "title": "Ironclad Nomad — Post-Apocalyptic Utility Truck",
    "category": "game-assets",
    "categoryLabel": "Realistic Vehicle Assets",
    "client": "Open-world game studios & automotive/film VFX vendors",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-19_Ironclad_Nomad_Truck/PRJ-19_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-19_Ironclad_Nomad_Truck/PRJ-19_Hero.jpg"
    ],
    "summary": "Armored expedition utility truck with welded roll cage, mud-caked tires, roof rack, and weathered paint.",
    "creativeRationale": "Hero vehicle asset showcase for survival/open-world game production. Visual Direction: Dusty golden-hour desert proving-ground backdrop with atmospheric haze.",
    "deliverables": [
      "Hero Vehicle Modeling",
      "Layered Weathering",
      "Desert Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Multi-layered rust, dried mud ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-21",
    "title": "Atelier Nord — Minimalist Japandi Penthouse Living Room",
    "category": "architecture",
    "categoryLabel": "Luxury Interiors",
    "client": "Interior design studios & bespoke furniture/real estate brands",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-21_Atelier_Nord_Japandi_Penthouse/PRJ-21_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-21_Atelier_Nord_Japandi_Penthouse/PRJ-21_Hero.jpg"
    ],
    "summary": "Sunlit double-height penthouse featuring limewash walls, travertine fireplace, bouclé sofa, and oak joinery.",
    "creativeRationale": "Interior design client sign-off and editorial property marketing. Visual Direction: Soft afternoon sunbeams casting crisp window-mullion shadows across warm neutral textures.",
    "deliverables": [
      "Interior ArchViz",
      "Softbox/Sun GI",
      "Tactile Textiles"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Tactile bouclé fabric weave, p...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-22",
    "title": "Kinetix Flagship — Futuristic Retail Experience Store",
    "category": "architecture",
    "categoryLabel": "Commercial Spaces",
    "client": "Retail experience agencies & athletic/fashion flagship brands",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-22_Kinetix_Flagship_Store/PRJ-22_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-22_Kinetix_Flagship_Store/PRJ-22_Hero.jpg"
    ],
    "summary": "Curved pale terrazzo retail space with brushed steel shelving, LED light monoliths, and stone plinths.",
    "creativeRationale": "Retail roll-out pitching and brand-environment visualization. Visual Direction: Clean architectural gallery lighting with subtle motion-blurred shoppers for scale.",
    "deliverables": [
      "Commercial ArchViz",
      "Retail Lighting",
      "Terrazzo & Steel Shaders"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Curved terrazzo aggregate scal...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-24",
    "title": "Aurelia — Emerald-Cut Diamond & Platinum Ring",
    "category": "product",
    "categoryLabel": "Luxury Jewelry",
    "client": "Fine jewelry houses & bespoke bridal e-commerce brands",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-24_Aurelia_Diamond_Ring/PRJ-24_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-24_Aurelia_Diamond_Ring/PRJ-24_Hero.jpg"
    ],
    "summary": "Emerald-cut solitaire diamond with micro-pavé halo set in mirror-polished platinum prongs on dark slate.",
    "creativeRationale": "Replacing macro studio photography across bespoke SKU catalogs ($4.89B 3D jewelry market). Visual Direction: Cartier-style high-contrast studio lighting highlighting spectral rainbow caustics.",
    "deliverables": [
      "Spectral Dispersion",
      "Diamond Caustics",
      "Platinum Polish"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Physically accurate diamond di...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-25",
    "title": "Strata-X — 3D-Knit Carbon-Plate Running Sneaker",
    "category": "product",
    "categoryLabel": "Footwear & Fashion",
    "client": "Performance athletic footwear brands & sportswear agencies",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-25_Strata_X_Running_Sneaker/PRJ-25_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-25_Strata_X_Running_Sneaker/PRJ-25_Hero.jpg"
    ],
    "summary": "Conceptual runner with breathable 3D-knit upper, 3D-printed lattice midsole, and carbon propulsion plate.",
    "creativeRationale": "Footwear colorway exploration, e-commerce 360s, and launch campaign key art. Visual Direction: Dynamic floating 3/4 angle on clean light-gray studio gradient.",
    "deliverables": [
      "Footwear Look-Dev",
      "3D Lattice Midsole",
      "Knit Displacement"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Complex 3D-printed midsole lat...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-27",
    "title": "Kinetic Prism — Abstract Brand Identity Sculpture",
    "category": "animation",
    "categoryLabel": "Abstract CGI & Motion Design",
    "client": "Tech, fintech & SaaS brands commissioning motion systems",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-27_Kinetic_Prism_Abstract_CGI/PRJ-27_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-27_Kinetic_Prism_Abstract_CGI/PRJ-27_Hero.jpg"
    ],
    "summary": "Zero-gravity equilibrium of dichroic glass, chrome spheres, terracotta ceramic arches, and brushed aluminum.",
    "creativeRationale": "Brand visual identity systems, website hero loops, and keynote backdrops. Visual Direction: Vibrant studio caustic light reflections on a warm-gray cyclorama.",
    "deliverables": [
      "Dichroic Thin-Film",
      "Abstract Composition",
      "Motion Keyframing"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Dichroic thin-film interferenc...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-31",
    "title": "CardioFlow — Anatomical Heart & Stent Deployment Model",
    "category": "experimental",
    "categoryLabel": "Medical & Anatomical Visualization",
    "client": "MedTech device startups, pharma agencies & medical educators",
    "year": "2026",
    "heroImage": "/portfolio_assets/PRJ-31_CardioFlow_Heart_Stent/PRJ-31_Hero.jpg",
    "galleryImages": [
      "/portfolio_assets/PRJ-31_CardioFlow_Heart_Stent/PRJ-31_Hero.jpg"
    ],
    "summary": "Translucent glass-like anatomical human heart cutaway revealing coronary arteries and expanding titanium stent.",
    "creativeRationale": "FDA/investor clinical explainers, surgeon training visuals, and MedTech trade shows. Visual Direction: Clean clinical-editorial lighting against a deep-navy gradient.",
    "deliverables": [
      "Anatomical Modeling",
      "Medical Cutaways",
      "Clinical Lighting"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Anatomical vessel accuracy, tr...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-32",
    "title": "HoloGrid — Spatial AR/VR Smart-Factory Digital Twin",
    "category": "experimental",
    "categoryLabel": "AR/VR & Technical Demonstrations",
    "client": "Enterprise spatial-computing, Industry 4.0 & AR/VR platforms",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-32_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-32_view1.jpg"
    ],
    "summary": "Isometric digital-twin cutaway of a semiconductor cleanroom line with cyan wireframe spatial overlays.",
    "creativeRationale": "Enterprise SaaS product demos, Vision Pro/Quest spatial pitches, and IoT dashboards. Visual Direction: Sleek dark-slate studio with Territory Studio-inspired holographic UI geometry.",
    "deliverables": [
      "Digital Twin Modeling",
      "Holographic UI Shaders",
      "Isometric Spatial Viz"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Balancing dense industrial mac...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-33",
    "title": "Aureon — Direct-Drive Audiophile Vinyl Turntable",
    "category": "industrial",
    "categoryLabel": "Audio & Consumer Electronics",
    "client": "Hi-Fi audio brands & boutique industrial design studios",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-33_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-33_view1.jpg"
    ],
    "summary": "Direct-drive turntable with solid American walnut plinth, machined aluminum platter, gimbaled tonearm, and acrylic dust cover.",
    "creativeRationale": "E-commerce PDP hero imagery and Hi-Fi print magazine lookbooks. Visual Direction: 85mm medium-format studio shot under soft north window light with subtle micro-dust.",
    "deliverables": [
      "Hard-Surface CAD",
      "Wood & Brushed Metal",
      "Acrylic Refraction"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Natural walnut pore variation,...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-34",
    "title": "Kurogane — Damascus Steel Chef Knife Duo",
    "category": "industrial",
    "categoryLabel": "Culinary & Consumer Goods",
    "client": "Artisan kitchenware brands & D2C culinary retailers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-34_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-34_view1.jpg"
    ],
    "summary": "Santoku and Petty chef knives with Damascus-folded steel blades and octagonal charred-oak handles on hinoki wood.",
    "creativeRationale": "High-converting product page photography without physical studio shoots. Visual Direction: 90mm macro shot with side window light revealing blade ripple patterns and board knife marks.",
    "deliverables": [
      "Damascus Metal Shader",
      "Macro Still-Life",
      "Wood Grain Detail"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Layered Damascus steel shader,...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-35",
    "title": "Nordic — Matte Charcoal Gooseneck Electric Kettle",
    "category": "industrial",
    "categoryLabel": "Home Appliances",
    "client": "Specialty coffee gear brands & minimalist appliance makers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-35_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-35_view1.jpg"
    ],
    "summary": "Matte powder-coated charcoal gooseneck kettle with turned beechwood handle on dark honed slate.",
    "creativeRationale": "Retail launch imagery and colorway exploration. Visual Direction: 50mm interior shot in warm morning window light with natural slate reflections.",
    "deliverables": [
      "Powder-Coat Texture",
      "Lifestyle Staging",
      "Industrial Form"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Fine powder-coat micro-bump, s...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-36",
    "title": "Cairn — Rugged Modular Action Camera",
    "category": "industrial",
    "categoryLabel": "Consumer Electronics",
    "client": "Outdoor camera startups & rugged consumer hardware brands",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-36_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-36_view1.jpg"
    ],
    "summary": "Compact magnesium-alloy action camera with Torx fasteners, textured rubber grip, and multi-coated wide lens.",
    "creativeRationale": "Crowdfunding campaign visuals and outdoor retail packaging. Visual Direction: 85mm overcast outdoor shot on weathered granite beside a coiled braided USB cable.",
    "deliverables": [
      "Optical Lens Coating",
      "Bead-Blasted Alloy",
      "Outdoor Daylight"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Multi-coated optical glass ref...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-37",
    "title": "Tactile-65 — CNC Olive Aluminum Mechanical Keyboard",
    "category": "industrial",
    "categoryLabel": "Computer Peripherals",
    "client": "Custom peripheral brands & enthusiast hardware startups",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-37_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-37_view1.jpg"
    ],
    "summary": "65% mechanical keyboard with bead-blasted olive aluminum case, brass weight, and blank PBT keycaps on wool felt.",
    "creativeRationale": "Group-buy product renders and colorway configurator assets. Visual Direction: 85mm overhead softbox studio shot on dark gray wool-felt desk mat.",
    "deliverables": [
      "CNC Enclosure CAD",
      "PBT Surface Grain",
      "Studio Softbox"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Subtle PBT keycap surface grai...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-38",
    "title": "Sora — Anodized Silver E-Ink Digital Notebook",
    "category": "industrial",
    "categoryLabel": "Mobile & Productivity Hardware",
    "client": "Productivity hardware companies & industrial design firms",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-38_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-38_view1.jpg"
    ],
    "summary": "Ultra-thin anodized silver e-paper tablet with purely diffuse paper-like screen and graphite stylus on linen.",
    "creativeRationale": "Minimalist launch key art and industrial design portfolio. Visual Direction: 65mm editorial shot in warm afternoon window light on natural beige linen.",
    "deliverables": [
      "Diffuse Display Shader",
      "Chamfered Aluminum",
      "Editorial Light"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Zero-glare diffuse e-ink surfa...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-39",
    "title": "Boreal — Ultralight Titanium Backpacking Stove",
    "category": "industrial",
    "categoryLabel": "Outdoor & Sporting Goods",
    "client": "Technical outdoor gear & camping equipment manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-39_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-39_view1.jpg"
    ],
    "summary": "Folding titanium backpacking stove with heat-tinted pot supports and brass regulator valve on mossy granite.",
    "creativeRationale": "Outdoor e-commerce catalog and technical spec sheets. Visual Direction: 85mm documentary outdoor shot in flat overcast mountain daylight.",
    "deliverables": [
      "Heat-Tinted Titanium",
      "Stamped Metalwork",
      "Overcast Realism"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Authentic heat-temper titanium...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-40",
    "title": "Veloce — Single-Dose Flat-Burr Espresso Grinder",
    "category": "industrial",
    "categoryLabel": "Home Appliances",
    "client": "Specialty coffee equipment startups & industrial designers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-40_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-40_view1.jpg"
    ],
    "summary": "Matte warm-cream aluminum single-dose grinder with walnut lid and stainless dosing cup on oak.",
    "creativeRationale": "D2C launch visuals and industrial design validation. Visual Direction: 65mm north-window studio shot with faint coffee-chaff dust near the chute.",
    "deliverables": [
      "Appliance Look-Dev",
      "Turned Walnut",
      "Micro-Imperfections"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Subtle powder-coat finish, mac...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-41",
    "title": "Chronos — Strain-Wave Harmonic Drive Gearbox Cutaway",
    "category": "industrial",
    "categoryLabel": "Robotics & Precision Engineering",
    "client": "Robotics actuator OEMs & industrial motion-control companies",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-41_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-41_view1.jpg"
    ],
    "summary": "Physical cutaway of a strain-wave harmonic gearbox showing circular spline, flexspline teeth, and wave generator.",
    "creativeRationale": "Technical engineering datasheets and trade-show demonstrator visuals. Visual Direction: 100mm macro shot on a dark rubber metrology mat under overhead light bank.",
    "deliverables": [
      "Precision Gear CAD",
      "Section Cutaways",
      "Metrology Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Precision involute gear tooth ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-42",
    "title": "DeepSea — Subsea ROV Brushless Thruster Unit",
    "category": "industrial",
    "categoryLabel": "Marine & Subsea Engineering",
    "client": "Marine robotics firms & offshore subsea equipment OEMs",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-42_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-42_view1.jpg"
    ],
    "summary": "Shrouded brushless ROV thruster with hard-anodized aluminum duct and cast nickel-aluminum-bronze propeller.",
    "creativeRationale": "B2B technical catalogs and defense/oceanography RFPs. Visual Direction: 85mm workshop photograph on brushed stainless bench under overhead softbox.",
    "deliverables": [
      "Cast Bronze Shader",
      "Marine Anodizing",
      "Industrial Hardware"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Cast bronze micro-pitting, ano...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-43",
    "title": "AeroFoil — Carbon-Fiber UAV Wing Section Cutaway",
    "category": "industrial",
    "categoryLabel": "Aerospace & Defense",
    "client": "UAV/drone startups & aerospace composite manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-43_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-43_view1.jpg"
    ],
    "summary": "Cutaway UAV airfoil showing CNC titanium rib spar, prepreg carbon-fiber skin, and stainless Pitot probe.",
    "creativeRationale": "Aerospace investor decks and composite manufacturing showcases. Visual Direction: 85mm aerospace shop shot on padded sawhorses under diffused overhead bays.",
    "deliverables": [
      "Aerospace Composites",
      "Titanium Rib CAD",
      "Shop-Floor Realism"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Prepreg carbon-weave direction...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-44",
    "title": "MagLev — Semiconductor Wafer Linear Motor Stage",
    "category": "industrial",
    "categoryLabel": "Semiconductor & Metrology",
    "client": "Semiconductor equipment OEMs & precision automation labs",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-44_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-44_view1.jpg"
    ],
    "summary": "Linear motor positioning stage with exposed copper stator coils and ground rails on black granite.",
    "creativeRationale": "Cleanroom equipment sales collateral and technical explainers. Visual Direction: 100mm metrology lab shot under even cleanroom diffusion.",
    "deliverables": [
      "Cleanroom CAD",
      "Copper Coil Detail",
      "Granite Metrology"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Copper coil winding detail, op...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-45",
    "title": "HydroPulse — High-Pressure Desalination Piston Pump",
    "category": "industrial",
    "categoryLabel": "Industrial Fluid Systems",
    "client": "Water-treatment OEMs & industrial process engineering firms",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-45_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-45_view1.jpg"
    ],
    "summary": "Duplex stainless axial piston pump on painted cast-iron skid with brass fittings and sight-glass manifold.",
    "creativeRationale": "Industrial B2B catalogs and plant engineering visualizations. Visual Direction: 85mm studio floor shot under overhead softbox.",
    "deliverables": [
      "Heavy Industrial CAD",
      "Braided Hose Mesh",
      "Cast-Iron Shaders"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Bead-blasted duplex steel, bra...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-46",
    "title": "SolarTrack — Dual-Axis Heliostat Gimbal Drive",
    "category": "industrial",
    "categoryLabel": "Renewable Energy Hardware",
    "client": "Utility-scale solar & concentrated-solar engineering firms",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-46_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-46_view1.jpg"
    ],
    "summary": "Heavy-duty hot-dip galvanized pedestal with cast-aluminum slew-drive worm gear on concrete pad.",
    "creativeRationale": "Engineering proposals and utility-scale project visualizations. Visual Direction: 65mm outdoor test-pad shot in flat overcast daylight.",
    "deliverables": [
      "Galvanized Zinc Shader",
      "Slew-Drive CAD",
      "Field Realism"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Authentic zinc spangle galvani...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-47",
    "title": "OrthoPress — Carbon-Fiber Hydraulic Prosthetic Knee",
    "category": "industrial",
    "categoryLabel": "MedTech & Prosthetics",
    "client": "Prosthetics manufacturers & biomedical engineering startups",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-47_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-47_view1.jpg"
    ],
    "summary": "Polycentric hydraulic prosthetic knee with carbon-fiber frame and 7075-T6 anodized aluminum linkages.",
    "creativeRationale": "Clinical product launches and practitioner training materials. Visual Direction: 90mm MedTech studio shot on matte light-gray surface under side softbox.",
    "deliverables": [
      "MedTech Hardware",
      "Carbon-Fiber Layup",
      "Hydraulic Linkages"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Woven carbon-fiber layup, dark...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-48",
    "title": "Dr. Alistair Vance — Victorian Botanist Explorer",
    "category": "character",
    "categoryLabel": "Realistic Characters",
    "client": "AAA game studios, film VFX & historical documentary productions",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-48_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-48_view1.jpg"
    ],
    "summary": "Unretouched character look-dev portrait in worn herringbone tweed coat, linen collar, and brass spectacles.",
    "creativeRationale": "Digital-human look-dev benchmark for realistic character outsourcing. Visual Direction: 85mm portrait in soft north window light against muted olive-gray backdrop.",
    "deliverables": [
      "Digital Human SSS",
      "Groom & Stray Hairs",
      "Worn Tweed Shader"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Aged skin pores, fine wrinkles...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-49",
    "title": "Abyssal Angler — Natural History Museum Maquette",
    "category": "character",
    "categoryLabel": "Creatures & Museum Sculptures",
    "client": "Natural history museums, film creature shops & science exhibits",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-49_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-49_view1.jpg"
    ],
    "summary": "Physical painted resin maquette of a deep-trench anglerfish mounted on steel armature above slate plinth.",
    "creativeRationale": "Museum exhibit pre-visualization and creature maquette pitching. Visual Direction: 85mm museum spotlight shot with natural wet-gloss skin and translucent teeth.",
    "deliverables": [
      "Creature Sculpting",
      "Wet-Skin Shaders",
      "Museum Staging"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Wet mucous specular variation ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-50",
    "title": "Tengu Ronin — Painted 1:4 Polystone Statue",
    "category": "character",
    "categoryLabel": "Collectible Figurines",
    "client": "Premium 1:4 scale statue studios & IP collectible licensees",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-50_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-50_view1.jpg"
    ],
    "summary": "Hand-painted polystone Tengu warrior in dark-red urushi lacquer armor and indigo hemp robes on cedar plinth.",
    "creativeRationale": "Collector pre-order solicitation and paint-master approval. Visual Direction: 85mm studio shot against dark-gray wall with warm side softbox.",
    "deliverables": [
      "Polystone Paint-Master",
      "Lacquer Armor",
      "Feather Sculpting"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Layered urushi lacquer wear, i...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-51",
    "title": "Pebble & Moss — Stop-Motion Wool-Felt Character",
    "category": "character",
    "categoryLabel": "Stop-Motion & Tactile Animation",
    "client": "Boutique animation studios & children's media IP creators",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-51_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-51_view1.jpg"
    ],
    "summary": "Needle-felted wool woodland character in tiny knitted moss-green vest with wooden buttons on bark set.",
    "creativeRationale": "Look-dev pitch for tactile stop-motion-style animated series. Visual Direction: 100mm macro shot under warm tungsten studio fresnel on miniature bark-and-moss set.",
    "deliverables": [
      "Wool & Felt Groom",
      "Knitwear Geometry",
      "Miniature Scale"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Stray wool fiber grooming, kni...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-52",
    "title": "Aether-Diver — Vintage Brass Bathysphere Suit",
    "category": "character",
    "categoryLabel": "Period & Historical Characters",
    "client": "Historical games, period film VFX & museum digital twins",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-52_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-52_view1.jpg"
    ],
    "summary": "Deep-sea diver in heavy olive-canvas pressure suit, riveted spun-copper helmet, and weighted iron boots.",
    "creativeRationale": "Hero character asset and historical costume look-dev. Visual Direction: 85mm studio sweep shot under soft overhead softbox.",
    "deliverables": [
      "Spun Copper Patina",
      "Heavy Canvas Cloth",
      "Full-Body Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Verdigris copper oxidation, th...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-53",
    "title": "Kitsune Spirit — Celadon Crackle-Glaze Porcelain",
    "category": "character",
    "categoryLabel": "Art Objects & Designer Collectibles",
    "client": "Ceramic art studios, luxury homeware & boutique collectible brands",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-53_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-53_view1.jpg"
    ],
    "summary": "Glazed celadon porcelain fox spirit figurine with kintsugi gold-lacquer repair seams on rough slate.",
    "creativeRationale": "Art-object e-commerce and ceramic glaze R&D visualization. Visual Direction: 90mm macro shot in soft north window light on neutral studio backdrop.",
    "deliverables": [
      "Celadon Crackle Glaze",
      "Kintsugi Gold",
      "Ceramic SSS"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Subsurface porcelain glaze poo...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-54",
    "title": "Navigator's Sextant — Engraved Brass & Mahogany Case",
    "category": "game-assets",
    "categoryLabel": "Hero Game Props",
    "client": "Historical/adventure game studios & prop outsourcing teams",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-54_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-54_view1.jpg"
    ],
    "summary": "Antique engraved brass marine sextant nestled in worn green baize-lined mahogany storage box.",
    "creativeRationale": "AAA hero prop benchmark demonstrating multi-material storytelling. Visual Direction: 85mm side-window shot on aged oak table.",
    "deliverables": [
      "Hero Game Prop",
      "Engraved Brass",
      "Baize & Mahogany"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Tarnished brass vernier scale,...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-55",
    "title": "Outpost-74 — Abandoned Cold-War Radio Bunker",
    "category": "game-assets",
    "categoryLabel": "Realistic Game Environments",
    "client": "First-person shooter & survival game studios",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-55_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-55_view1.jpg"
    ],
    "summary": "Underground concrete radio bunker with peeling olive paint, dusty vacuum-tube racks, and floor debris.",
    "creativeRationale": "Real-time environment art benchmark for UE5 survival titles. Visual Direction: 28mm wide documentary shot lit by dim overcast stairwell daylight.",
    "deliverables": [
      "UE5 Environment",
      "Peeling Paint Decals",
      "Natural Daylight GI"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Layered peeling paint decals, ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-56",
    "title": "Skogheim — Stylized Nordic Apothecary Diorama",
    "category": "game-assets",
    "categoryLabel": "Stylized Environments",
    "client": "Indie/AA RPG studios & stylized mobile game developers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-56_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-56_view1.jpg"
    ],
    "summary": "Miniature timber-and-slate Nordic herbalist cottage with mossy foundation and terracotta porch pots.",
    "creativeRationale": "Art-direction benchmark for stylized isometric RPGs. Visual Direction: 65mm tilt-shift diorama shot on dark-gray studio backdrop.",
    "deliverables": [
      "Stylized Diorama",
      "Weathered Timber",
      "Tilt-Shift Framing"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Hand-sculpted slate shingle va...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-57",
    "title": "Talon UGV — Tracked Bomb-Disposal Robot",
    "category": "game-assets",
    "categoryLabel": "Tactical & Military Assets",
    "client": "Tactical shooter game studios & defense simulation contractors",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-57_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-57_view1.jpg"
    ],
    "summary": "Compact tracked unmanned ground vehicle with hydraulic manipulator arm and dual optical mast.",
    "creativeRationale": "Game-ready vehicle asset & defense-sim visualization. Visual Direction: 50mm overcast gravel test-yard shot with realistic dust in tank treads.",
    "deliverables": [
      "Tracked Vehicle Rig",
      "Hydraulic Detailing",
      "Dust & Scuff PBR"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Articulated track links, hydra...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-58",
    "title": "Palazzo Riva — Modular Venetian Canal Facade Kit",
    "category": "architecture",
    "categoryLabel": "Modular Architectural Kits",
    "client": "Open-world game studios & historical virtual production teams",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-58_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-58_view1.jpg"
    ],
    "summary": "Photogrammetry-grade Venetian facade with peeling ochre plaster, exposed brick, and sage louvered shutters.",
    "creativeRationale": "Modular city-building kit showcase for historical/fantasy games. Visual Direction: 35mm tilt-shift elevation shot in soft overcast morning light.",
    "deliverables": [
      "Modular Facade Kit",
      "Vertex-Blend Plaster",
      "Photogrammetry PBR"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Multi-material plaster-to-bric...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-59",
    "title": "Obsidian Altar & Cast-Bronze Brazier Prop Set",
    "category": "game-assets",
    "categoryLabel": "Dark-Fantasy Props",
    "client": "Action-RPG studios & fantasy environment teams",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-59_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-59_view1.jpg"
    ],
    "summary": "Carved dark basalt altar pedestal paired with soot-blackened tripod bronze brazier on studio gray.",
    "creativeRationale": "Asset-pack look-dev showing silhouette and material contrast. Visual Direction: 85mm overhead softbox studio shot.",
    "deliverables": [
      "Sculpted Stone",
      "Verdigris Bronze",
      "Asset Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Chipped stone edges, verdigris...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-60",
    "title": "Karasu-An — Kyoto Yakisugi Cedar Tea Pavilion",
    "category": "architecture",
    "categoryLabel": "Cultural & Hospitality Architecture",
    "client": "Boutique hospitality architects & landscape architecture studios",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-60_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-60_view1.jpg"
    ],
    "summary": "Charred yakisugi cedar and shoji-screen tea pavilion beside a damp raked-gravel garden in light rain.",
    "creativeRationale": "Architectural competition visualization and hospitality concept pitching. Visual Direction: 35mm tilt-shift rainy-day shot with wet dark slate stepping stones.",
    "deliverables": [
      "Exterior ArchViz",
      "Wet Surface Shaders",
      "Shoji Paper SSS"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Wet-vs-dry roughness maps on s...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-61",
    "title": "Fondazione Brera — Milanese Brutalist Loft Library",
    "category": "architecture",
    "categoryLabel": "Luxury & Editorial Interiors",
    "client": "Luxury residential architects & European interior studios",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-61_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-61_view1.jpg"
    ],
    "summary": "Double-height raw concrete loft with floor-to-ceiling oiled walnut bookshelves and travertine reading table.",
    "creativeRationale": "Editorial interior portfolio and bespoke millwork sign-off. Visual Direction: 24mm tilt-shift interior shot lit by natural overcast overhead skylight.",
    "deliverables": [
      "Interior ArchViz",
      "Overhead Skylight GI",
      "Bespoke Millwork"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Varied cloth-bound book spines...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-62",
    "title": "Fjell — Alpine Larch-Wood A-Frame Cabin",
    "category": "architecture",
    "categoryLabel": "Residential Mountain Architecture",
    "client": "Prefab cabin startups & alpine real-estate developers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-62_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-62_view1.jpg"
    ],
    "summary": "Modest silvering larch-clad cabin with standing-seam zinc roof nestled in snowdrifts at dusk.",
    "creativeRationale": "Pre-fab residential marketing and mountain resort masterplanning. Visual Direction: 35mm quiet winter dusk shot with warm tungsten interior window glow.",
    "deliverables": [
      "Winter ArchViz",
      "Snow Accumulation",
      "Weathered Larch"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Natural snow accumulation on z...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-63",
    "title": "Klang — Oslo Steam-Bent Birch Acoustic Concert Hall",
    "category": "architecture",
    "categoryLabel": "Civic & Cultural Venues",
    "client": "Civic architecture firms & acoustic engineering consultancies",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-63_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-63_view1.jpg"
    ],
    "summary": "Symphonic concert hall with sweeping steam-bent pale birchwood acoustic ribs and charcoal seating.",
    "creativeRationale": "International civic competition boards and acoustic spatial studies. Visual Direction: 24mm wide tilt-shift shot under warm diffused recessed ceiling wash.",
    "deliverables": [
      "Parametric Wood Ribs",
      "Large-Scale Instancing",
      "Civic ArchViz"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Continuous curved birchwood gr...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-64",
    "title": "Dar Zellige — Marrakech Courtyard Riad",
    "category": "architecture",
    "categoryLabel": "Hospitality & Heritage Architecture",
    "client": "Luxury boutique hotels & hospitality interior designers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-64_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-64_view1.jpg"
    ],
    "summary": "Moroccan courtyard riad with hand-cut zellige tilework, carved cedar arches, and calm reflecting pool.",
    "creativeRationale": "Boutique resort pre-development marketing and heritage restoration. Visual Direction: 35mm tilt-shift morning sunlight shot with natural courtyard shadows.",
    "deliverables": [
      "Zellige Tile Shaders",
      "Carved Cedar CAD",
      "Courtyard Sunlight"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Irregular hand-glazed zellige ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-65",
    "title": "Caspian — Cushion Sapphire & Brushed Gold Signet",
    "category": "product",
    "categoryLabel": "Fine Jewelry",
    "client": "Bespoke fine-jewelry houses & luxury men's accessory brands",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-65_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-65_view1.jpg"
    ],
    "summary": "Cushion-cut cornflower sapphire bezel-set in brushed 18k yellow gold resting on porous travertine.",
    "creativeRationale": "E-commerce macro photography replacement for bespoke signet rings. Visual Direction: 100mm macro shot lit by single strip softbox from upper-left.",
    "deliverables": [
      "Gemstone Refraction",
      "Brushed 18k Gold",
      "Macro Jewelry"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Realistic sapphire internal si...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-66",
    "title": "Atelier Cuir — Saddle-Leather Weekender Duffle",
    "category": "product",
    "categoryLabel": "Luxury Leather Goods",
    "client": "Luxury leather-goods maisons & heritage luggage brands",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-66_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-66_view1.jpg"
    ],
    "summary": "Vegetable-tanned cognac saddle-leather weekender with waxed linen stitching and brass hardware on oak.",
    "creativeRationale": "Seasonal lookbook imagery and 3D soft-goods prototyping. Visual Direction: 85mm north-window editorial shot against limewashed wall.",
    "deliverables": [
      "Soft-Goods Modeling",
      "Leather Pull-Up Shader",
      "Saddle Stitching"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Natural leather pull-up crease...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-67",
    "title": "Veridian — Smoked-Acetate & Titanium Eyewear",
    "category": "product",
    "categoryLabel": "Luxury Eyewear",
    "client": "Independent optical brands & luxury eyewear conglomerates",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-67_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-67_view1.jpg"
    ],
    "summary": "Architectural eyeglasses with translucent smoked cellulose acetate frames and exposed titanium wire cores.",
    "creativeRationale": "Optical e-commerce catalogs and seasonal eyewear lookbooks. Visual Direction: 90mm macro shot resting folded on matte limestone in morning light.",
    "deliverables": [
      "Acetate Translucency",
      "Eyewear Hinge CAD",
      "Optical Lens IOR"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Translucent acetate internal c...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-68",
    "title": "Meridian — Patinated CuSn8 Bronze Diver Chronograph",
    "category": "product",
    "categoryLabel": "Luxury Watches",
    "client": "Micro-brand & heritage tool-watch manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-68_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-68_view1.jpg"
    ],
    "summary": "CuSn8 bronze diver chronograph with matte olive dial and woven khaki NATO strap on driftwood.",
    "creativeRationale": "Pre-order Kickstarter/D2C watch campaign imagery. Visual Direction: 100mm macro shot in soft overcast daylight.",
    "deliverables": [
      "Bronze Patina Shader",
      "Woven Nylon Strap",
      "Domed Sapphire"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Natural bronze oxidation, dome...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-69",
    "title": "Nacre — Lost-Wax Cast Gold & Baroque Pearl Cuff",
    "category": "product",
    "categoryLabel": "Sculptural Jewelry",
    "client": "Contemporary fine-jewelry designers & fashion editorials",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-69_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-69_view1.jpg"
    ],
    "summary": "Organic lost-wax cast 18k gold cuff bracelet set with an irregular freshwater baroque pearl on raw linen.",
    "creativeRationale": "Editorial campaign key art and bespoke jewelry e-commerce. Visual Direction: 90mm macro shot in soft window light from the right.",
    "deliverables": [
      "Organic Wax-Cast Gold",
      "Baroque Pearl Nacre",
      "Linen Macro"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Organic wax-cast metal pitting...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-70",
    "title": "Olea — Artisan Extra-Virgin Olive Oil Pour",
    "category": "animation",
    "categoryLabel": "Food & Beverage CGI",
    "client": "Gourmet FMCG brands & culinary advertising agencies",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-70_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-70_view1.jpg"
    ],
    "summary": "Golden-green olive oil pouring from matte stoneware cruet into porcelain dish beside coarse sea salt on slate.",
    "creativeRationale": "Print/digital food-packaging campaigns and editorial culinary ads. Visual Direction: 100mm macro shot lit by crisp directional side window light.",
    "deliverables": [
      "Viscous Fluid Mesh",
      "Salt Crystal Refraction",
      "Stoneware Shader"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Viscous oil stream refraction,...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-71",
    "title": "Tecton — Merino Felt & Charred Cork Acoustic Tiles",
    "category": "architecture",
    "categoryLabel": "Architectural Material Studies",
    "client": "Contract interior brands & architectural material manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-71_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-71_view1.jpg"
    ],
    "summary": "Interlocking acoustic wall tiles in heather-gray merino wool felt, charred expanded cork, and brushed steel.",
    "creativeRationale": "Material-library lookbooks and B2B architectural specifier kits. Visual Direction: 85mm studio shot on matte concrete table under overhead softbox.",
    "deliverables": [
      "Wool Felt Fibers",
      "Expanded Cork",
      "Material Look-Dev"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Dense wool felt fibers, porous...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-72",
    "title": "Uji — Ceremonial Matcha Whisking & Raku Bowl",
    "category": "animation",
    "categoryLabel": "Beverage & Hospitality CGI",
    "client": "Specialty tea/beverage brands & luxury hospitality groups",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-72_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-72_view1.jpg"
    ],
    "summary": "Split-bamboo chasen whisk beside hand-thrown matte black raku bowl of micro-foamed matcha on hinoki tray.",
    "creativeRationale": "Editorial brand storytelling and packaging campaigns. Visual Direction: 90mm macro shot in soft north window light.",
    "deliverables": [
      "Micro-Foam Shader",
      "Raku Glaze Texture",
      "Bamboo Geometry"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Organic tea micro-foam bubbles...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-73",
    "title": "Vetro — Hand-Blown Smoked Glass Carafe & Caustics",
    "category": "animation",
    "categoryLabel": "Tableware & Glassware CGI",
    "client": "Luxury tableware brands & editorial design magazines",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-73_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-73_view1.jpg"
    ],
    "summary": "Hand-blown smoked-gray glass water carafe half-filled with water casting natural caustics on wrinkled linen.",
    "creativeRationale": "Tableware catalog campaigns and glass-caustic look-dev proof. Visual Direction: 85mm late-afternoon window sunlight shot.",
    "deliverables": [
      "Physical Caustics",
      "Hand-Blown Glass",
      "Linen Cloth Sim"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Refractive water meniscus, sub...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-74",
    "title": "Cera — Raw Beeswax & Unglazed Terracotta Candles",
    "category": "animation",
    "categoryLabel": "Home Fragrance & Lifestyle",
    "client": "Home fragrance brands & boutique lifestyle e-commerce",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-74_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-74_view1.jpg"
    ],
    "summary": "Two unglazed terracotta vessels filled with golden beeswax beside tarnished brass snuffer on travertine.",
    "creativeRationale": "Seasonal home-fragrance lookbooks and D2C product pages. Visual Direction: 85mm overcast window shot with natural wax drip and porous clay texture.",
    "deliverables": [
      "Beeswax SSS",
      "Porous Terracotta",
      "Lifestyle Composition"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Subsurface beeswax translucenc...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-75",
    "title": "Gyroid-S — SLS Nylon Lattice Bicycle Saddle",
    "category": "3dprint",
    "categoryLabel": "SLS Additive Manufacturing",
    "client": "Performance cycling brands & SLS additive manufacturing bureaus",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-75_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-75_view1.jpg"
    ],
    "summary": "3D-printed PA12 nylon gyroid-lattice bicycle saddle mounted on brushed titanium rails.",
    "creativeRationale": "Marketing DfAM lattice engineering for sporting goods. Visual Direction: 85mm studio block shot under single overhead softbox.",
    "deliverables": [
      "Gyroid Lattice DfAM",
      "SLS PA12 Texture",
      "Titanium Rails"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Open gyroid cellular lattice g...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-76",
    "title": "HexRealm — FDM Modular Tabletop Terrain Tiles",
    "category": "3dprint",
    "categoryLabel": "Tabletop & FDM Print Products",
    "client": "Tabletop gaming STL publishers & Kickstarter terrain creators",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-76_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-76_view1.jpg"
    ],
    "summary": "Four interlocking FDM-printed rocky cliff and ruin hex terrain tiles in matte ash-gray PLA on cutting mat.",
    "creativeRationale": "STL Kickstarter campaign previews showing real printability. Visual Direction: 85mm workshop shot showing fine horizontal layer lines and dovetail joints.",
    "deliverables": [
      "Support-Free FDM",
      "Dovetail Tolerances",
      "Terrain Sculpting"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Support-free overhang geometry...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-77",
    "title": "AeroNode — DMLS Titanium Aerospace Bracket",
    "category": "3dprint",
    "categoryLabel": "Metal Additive Manufacturing",
    "client": "Aerospace Tier-1 suppliers & metal 3D-printing service bureaus",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-77_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-77_view1.jpg"
    ],
    "summary": "Topology-optimized generative bracket printed via DMLS in Ti-6Al-4V titanium with machined mounting bosses.",
    "creativeRationale": "Industrial metal-AM capability showcases and engineering whitepapers. Visual Direction: 90mm macro shot on brushed steel metrology plate.",
    "deliverables": [
      "Topology Optimization",
      "DMLS Ti-6Al-4V",
      "Post-Machined Bosses"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Organic generative load-path s...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-78",
    "title": "Relief-4C — Multi-Color AMS Topographic Mountain Map",
    "category": "3dprint",
    "categoryLabel": "Multi-Material FDM Production",
    "client": "Custom mapmakers, architecture firms & Bambu AMS print shops",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-78_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-78_view1.jpg"
    ],
    "summary": "Stepped 4-color FDM-printed topographic relief map in terracotta, sage, sand, and chalk-white PLA.",
    "creativeRationale": "Product photography for custom 3D-printed architectural/GIS models. Visual Direction: 65mm birch-workbench shot in soft north window light.",
    "deliverables": [
      "GIS-to-STL Relief",
      "Multi-Color AMS",
      "Stepped Contouring"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "GIS elevation contour slicing ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-79",
    "title": "VertebraFix — Spinal Titanium Pedicle Screw System",
    "category": "experimental",
    "categoryLabel": "Medical Device Visualization",
    "client": "Orthopedic implant manufacturers & surgical training agencies",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-79_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-79_view1.jpg"
    ],
    "summary": "Translucent resin anatomical lumbar spine segment fitted with machined titanium polyaxial pedicle screws and rod.",
    "creativeRationale": "Surgeon training visuals and FDA/regulatory device submissions. Visual Direction: 100mm clinical macro shot on matte light-gray surface under overhead softbox.",
    "deliverables": [
      "Orthopedic CAD",
      "Translucent Bone Resin",
      "Clinical Precision"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Anatomical lumbar morphology, ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-80",
    "title": "TandemPV — Perovskite-Silicon Solar Cell Cross-Section",
    "category": "experimental",
    "categoryLabel": "Scientific & Energy Visualization",
    "client": "Clean-energy R&D labs, universities & scientific publishers",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-80_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-80_view1.jpg"
    ],
    "summary": "Architectural cutaway block of a perovskite-silicon tandem solar cell showing glass, wafer, and copper grid.",
    "creativeRationale": "Scientific journal covers, grant proposals, and clean-tech investor decks. Visual Direction: 90mm macro shot on neutral matte gray under even studio diffusion.",
    "deliverables": [
      "Scientific Strata",
      "Silicon Wafer Texture",
      "Technical Clarity"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Clean multi-strata layer separ...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-81",
    "title": "Horridus — Paleontology Triceratops Skull Reconstruction",
    "category": "experimental",
    "categoryLabel": "Cultural Heritage & Photogrammetry",
    "client": "Natural history museums & archaeological conservation labs",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-81_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-81_view1.jpg"
    ],
    "summary": "Partial fossilized Triceratops skull on steel cradle with missing horn and frill reconstructed in archival resin.",
    "creativeRationale": "Museum conservation planning and digital-twin exhibition catalogs. Visual Direction: 50mm museum conservation lab shot under overhead lighting.",
    "deliverables": [
      "Fossil Photogrammetry",
      "Archival Restoration",
      "Museum Lighting"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Porous mineralized fossil bone...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "prj-82",
    "title": "GridCore — High-Voltage Substation Transformer Cutaway",
    "category": "experimental",
    "categoryLabel": "Energy Infrastructure & Engineering",
    "client": "Power-grid OEMs, electrical utilities & industrial training firms",
    "year": "2026",
    "heroImage": "/extracted_assets/catalog/PRJ-82_view1.jpg",
    "galleryImages": [
      "/extracted_assets/catalog/PRJ-82_view1.jpg"
    ],
    "summary": "Sectioned oil-cooled high-voltage transformer revealing laminated silicon-steel core, copper windings, and bushings.",
    "creativeRationale": "Utility training manuals and heavy-electrical engineering sales decks. Visual Direction: 85mm light-tent cutaway shot on neutral light-gray floor.",
    "deliverables": [
      "Electrical Infrastructure",
      "Multi-Layer Cutaway",
      "Porcelain & Copper"
    ],
    "materials": [
      "Hard-Surface Anodized Alloy",
      "Specular Glass",
      "Procedural Wear Layers"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "KeyShot",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Laminated core sheets, heavy e...",
      "topologyType": "Deformation & Sub-D Quad Flow",
      "textureResolution": "8K Vector CMF & PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, KeyShot, Marmoset, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-01",
    "title": "Vanguard-09 — Arctic Recon Specialist",
    "category": "character",
    "categoryLabel": "Realistic Game Characters & Busts",
    "client": "AAA Tactical Shooter Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-01_Vanguard_09___Arctic_Recon_Specialist/CH-01_View1_View_1___Front_3_4_Full_Body.jpg",
    "galleryImages": [
      "/character_assets/CH-01_Vanguard_09___Arctic_Recon_Specialist/CH-01_View1_View_1___Front_3_4_Full_Body.jpg",
      "/character_assets/CH-01_Vanguard_09___Arctic_Recon_Specialist/CH-01_View2_View_2___Rear_Turnaround___Rig.jpg"
    ],
    "summary": "Full-body winter tactical operator in layered slate-grey Gore-Tex parka, ballistic plate carrier, and snow goggles.",
    "creativeRationale": "Game-ready hero character turnaround demonstrating Marvelous Designer outerwear and modular tactical gear. Direction: Marmoset Toolbag 4 seamless pure black studio cyclorama with crisp rim lighting; 85mm lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Consistent front-to-back MOLLE webbing, ",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": true
  },
  {
    "id": "ch-02",
    "title": "Alder — Weathered Cartographer Bust",
    "category": "character",
    "categoryLabel": "Realistic Game Characters & Busts",
    "client": "Narrative RPG & Cinematic Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View1_View_1___Textured_Portrait.jpg",
    "galleryImages": [
      "/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View1_View_1___Textured_Portrait.jpg",
      "/character_assets/CH-02_Alder___Weathered_Cartographer_Bust/CH-02_View2_View_2___ZBrush_Clay_Sculpt.jpg"
    ],
    "summary": "Hyper-realistic older male portrait bust featuring micro-pore SSS skin, XGen salt-and-pepper beard groom, and indigo linen.",
    "creativeRationale": "Dual-pass digital human lookdev and raw ZBrush sculpting fidelity benchmark. Direction: Arnold chiaroscuro key light on pure black backdrop; 85mm portrait lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Subsurface skin translucency, realistic ",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": true
  },
  {
    "id": "ch-03",
    "title": "Kurogane — Ronin Cyber-Samurai",
    "category": "character",
    "categoryLabel": "Realistic Game Characters & Busts",
    "client": "Action-Adventure Game Publisher",
    "year": "2026",
    "heroImage": "/character_assets/CH-03_Kurogane___Ronin_Cyber_Samurai/CH-03_View1_View_1___Front_3_4_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-03_Kurogane___Ronin_Cyber_Samurai/CH-03_View1_View_1___Front_3_4_Hero.jpg",
      "/character_assets/CH-03_Kurogane___Ronin_Cyber_Samurai/CH-03_View2_View_2___Macro_Helmet___Arm.jpg"
    ],
    "summary": "Neo-feudal warrior combining matte black lacquered lamellar armor, pleated hakama, and an exposed brushed-titanium prosthetic arm.",
    "creativeRationale": "Hero melee character asset showcasing hard-surface armor integration with historical textile tailoring. Direction: Marmoset Toolbag 4 low-key black studio with tight strip-light speculars; 85mm / 100mm macro.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Authentic cord lacing (odoshi) across la",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": true
  },
  {
    "id": "ch-04",
    "title": "Dr. Vega — Orbital EVA Engineer",
    "category": "character",
    "categoryLabel": "Realistic Game Characters & Busts",
    "client": "Sci-Fi Film & Simulation Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-04_Dr__Vega___Orbital_EVA_Engineer/CH-04_View1_View_1___Front_3_4_Full_Suit.jpg",
    "galleryImages": [
      "/character_assets/CH-04_Dr__Vega___Orbital_EVA_Engineer/CH-04_View1_View_1___Front_3_4_Full_Suit.jpg",
      "/character_assets/CH-04_Dr__Vega___Orbital_EVA_Engineer/CH-04_View2_View_2___Rear_PLSS_Backpack.jpg"
    ],
    "summary": "Hard-shell white orbital pressure suit with charcoal articulated joints, gold-tinted visor, and rear PLSS life-support pack.",
    "creativeRationale": "Production-grade aerospace character model for film pre-vis and VR training simulations. Direction: V-Ray pure white studio cyclorama with soft overhead diffusion and clean boot contact shadows.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Umbilical hose routing, pressure-suit se",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-05",
    "title": "Bramble — Stylized Botanist Alchemist",
    "category": "character",
    "categoryLabel": "Stylized Animation & Game Characters",
    "client": "Feature Animation & Stylized RPG Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-05_Bramble___Stylized_Botanist_Alchemist/CH-05_View1_View_1___Front_3_4_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-05_Bramble___Stylized_Botanist_Alchemist/CH-05_View1_View_1___Front_3_4_Hero.jpg",
      "/character_assets/CH-05_Bramble___Stylized_Botanist_Alchemist/CH-05_View2_View_2___Rear_Braid___Satchel.jpg"
    ],
    "summary": "Expressive stylized female botanist with braided auburn hair, olive canvas coat, leather satchel, and glass terrarium staff.",
    "creativeRationale": "Feature-animation-grade stylized character turnaround demonstrating appeal, groom, and prop storytelling. Direction: Arnold three-point studio lighting on pure white cyclorama; 85mm lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Clean stylized facial topology paired wi",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-06",
    "title": "Gideon — Clockwork Guild Artificer",
    "category": "character",
    "categoryLabel": "Stylized Animation & Game Characters",
    "client": "AA Stylized Action Game Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-06_Gideon___Clockwork_Guild_Artificer/CH-06_View1_View_1___Front_3_4_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-06_Gideon___Clockwork_Guild_Artificer/CH-06_View1_View_1___Front_3_4_Hero.jpg",
      "/character_assets/CH-06_Gideon___Clockwork_Guild_Artificer/CH-06_View2_View_2___Side_Rear_Lantern___Rig.jpg"
    ],
    "summary": "Lean stylized inventor with brass folding monocle, stitched leather apron, tool belt, and shoulder-mounted brass lantern.",
    "creativeRationale": "Stylized-realism character showcase emphasizing asymmetrical silhouette and hand-painted/PBR hybrid textures. Direction: Marmoset Toolbag warm key light with cool rim separation on seamless pure black backdrop.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Consistent tool belt pouch layout and me",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-07",
    "title": "Mochi-Kitsune — Stylized Street-Spirit Runner",
    "category": "character",
    "categoryLabel": "Stylized Animation & Game Characters",
    "client": "Competitive Hero-Shooter Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-07_Mochi_Kitsune___Stylized_Street_Spirit_Runner/CH-07_View1_View_1___Front_3_4_Stance.jpg",
    "galleryImages": [
      "/character_assets/CH-07_Mochi_Kitsune___Stylized_Street_Spirit_Runner/CH-07_View1_View_1___Front_3_4_Stance.jpg",
      "/character_assets/CH-07_Mochi_Kitsune___Stylized_Street_Spirit_Runner/CH-07_View2_View_2___Rear_Jacket___Mask.jpg"
    ],
    "summary": "Urban street-runner in matte terracotta windbreaker, cargo joggers, chunky trail sneakers, and carved wooden fox mask.",
    "creativeRationale": "Hero-shooter character skin concept demonstrating modern streetwear tailoring and clean silhouette. Direction: High-key pure white studio cyclorama with crisp softbox highlights; 85mm lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sculpted streetwear folds and chunky sne",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-08",
    "title": "Captain Rook — Stylized Deep-Sea Diver",
    "category": "character",
    "categoryLabel": "Stylized Animation & Game Characters",
    "client": "Indie Adventure & Animation Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-08_Captain_Rook___Stylized_Deep_Sea_Diver/CH-08_View1_View_1___Front_3_4_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-08_Captain_Rook___Stylized_Deep_Sea_Diver/CH-08_View1_View_1___Front_3_4_Hero.jpg",
      "/character_assets/CH-08_Captain_Rook___Stylized_Deep_Sea_Diver/CH-08_View2_View_2___Rear_Helmet___Valves.jpg"
    ],
    "summary": "Bulky heavy-duty vintage diver in riveted copper-and-brass helmet, waterproof olive canvas suit, and weighted boots.",
    "creativeRationale": "Stylized character proportion study balancing heavy metal verdigris patina with thick canvas folds. Direction: Pure white studio cyclorama with soft wrap lighting; 85mm lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Rear air-hose valve fittings, leather cr",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-09",
    "title": "Cinder-Wyrm — Volcanic Drake",
    "category": "character",
    "categoryLabel": "Creature & Monster Design",
    "client": "VFX & AAA Fantasy Game Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-09_Cinder_Wyrm___Volcanic_Drake/CH-09_View1_View_1___Textured_Lookdev.jpg",
    "galleryImages": [
      "/character_assets/CH-09_Cinder_Wyrm___Volcanic_Drake/CH-09_View1_View_1___Textured_Lookdev.jpg",
      "/character_assets/CH-09_Cinder_Wyrm___Volcanic_Drake/CH-09_View2_View_2___ZBrush_Clay_Sculpt.jpg"
    ],
    "summary": "Quadruped winged drake featuring interlocking charcoal obsidian scale plates, leathery wing membranes, and keratin horns.",
    "creativeRationale": "Creature production pipeline proof pairing final Arnold lookdev with raw ZBrush clay sculpt. Direction: Pure black studio with crisp grazing rim light to separate overlapping scale ridges.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Quadruped shoulder/wing-bone anatomy and",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-10",
    "title": "Mycelion — Forest Spore Stalker",
    "category": "character",
    "categoryLabel": "Creature & Monster Design",
    "client": "Dark Fantasy RPG Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-10_Mycelion___Forest_Spore_Stalker/CH-10_View1_View_1___Front_3_4_Full_Body.jpg",
    "galleryImages": [
      "/character_assets/CH-10_Mycelion___Forest_Spore_Stalker/CH-10_View1_View_1___Front_3_4_Full_Body.jpg",
      "/character_assets/CH-10_Mycelion___Forest_Spore_Stalker/CH-10_View2_View_2___Rear_Bark___Fungi.jpg"
    ],
    "summary": "Bipedal botanical creature built from gnarled dark oak bark musculature, shelf-fungi shoulder armor, and moss antlers.",
    "creativeRationale": "Original creature turnaround showcasing organic bark sculpting and layered fungal shaders. Direction: Pure white studio cyclorama with crisp diffused lighting and grounded foot shadows.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Naturalistic root-and-bark anatomical fl",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-11",
    "title": "Vespera — Nocturnal Chimera Hound",
    "category": "character",
    "categoryLabel": "Creature & Monster Design",
    "client": "Creature VFX & Monster-Hunter Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-11_Vespera___Nocturnal_Chimera_Hound/CH-11_View1_View_1___Prowling_3_4_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-11_Vespera___Nocturnal_Chimera_Hound/CH-11_View1_View_1___Prowling_3_4_Hero.jpg",
      "/character_assets/CH-11_Vespera___Nocturnal_Chimera_Hound/CH-11_View2_View_2___Macro_Head___Crest.jpg"
    ],
    "summary": "Sleek predatory quadruped chimera with exposed dark-slate sinew musculature, chitinous spinal crest, and bat-like ears.",
    "creativeRationale": "Anatomical creature study and macro head/ear vascular detail showcase. Direction: Arnold pure black studio with sharp rim lighting; 85mm / 100mm macro optics.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Ecorche-level muscle fiber definition an",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-12",
    "title": "Trench-Leviathan — Abyssal Amphibian",
    "category": "character",
    "categoryLabel": "Creature & Monster Design",
    "client": "Film Prosthetics & Creature Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-12_Trench_Leviathan___Abyssal_Amphibian/CH-12_View1_View_1___Wet_Skin_Lookdev.jpg",
    "galleryImages": [
      "/character_assets/CH-12_Trench_Leviathan___Abyssal_Amphibian/CH-12_View1_View_1___Wet_Skin_Lookdev.jpg",
      "/character_assets/CH-12_Trench_Leviathan___Abyssal_Amphibian/CH-12_View2_View_2___ZBrush_Clay_Sculpt.jpg"
    ],
    "summary": "Deep-ocean humanoid creature bust with translucent fin membranes, barnacle-encrusted carapace shoulders, and wet skin pores.",
    "creativeRationale": "Creature lookdev and clay sculpt presentation for film character development. Direction: Marmoset Toolbag 4 dark studio highlighting wet specular breakup vs matte clay sculpt.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Fin ray translucency and subtle barnacle",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-13",
    "title": "Valkyrie Sovereign — 1/6 Scale Resin Statue",
    "category": "character",
    "categoryLabel": "Collectible Statues & Designer Toys",
    "client": "Luxury Polystone Collectible Publisher",
    "year": "2026",
    "heroImage": "/character_assets/CH-13_Valkyrie_Sovereign___1_6_Scale_Resin_Statue/CH-13_View1_View_1___Painted_Polystone_Master.jpg",
    "galleryImages": [
      "/character_assets/CH-13_Valkyrie_Sovereign___1_6_Scale_Resin_Statue/CH-13_View1_View_1___Painted_Polystone_Master.jpg",
      "/character_assets/CH-13_Valkyrie_Sovereign___1_6_Scale_Resin_Statue/CH-13_View2_View_2___Grey_Resin_Prototype.jpg"
    ],
    "summary": "1/6 scale winged warrior statue in bronze-and-ivory armor standing on a sculpted basalt rock plinth.",
    "creativeRationale": "Collectible statue pre-production presentation pairing painted master sample with raw grey resin prototype. Direction: KeyShot gallery spotlighting on pure black studio cyclorama; 85mm lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Multi-layered wing feather sculpting and",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-14",
    "title": "Astro-Pug — Vinyl Designer Toy",
    "category": "character",
    "categoryLabel": "Collectible Statues & Designer Toys",
    "client": "Designer Art Toy Brand",
    "year": "2026",
    "heroImage": "/character_assets/CH-14_Astro_Pug___Vinyl_Designer_Toy/CH-14_View1_View_1___Front_3_4_Vinyl_Toy.jpg",
    "galleryImages": [
      "/character_assets/CH-14_Astro_Pug___Vinyl_Designer_Toy/CH-14_View1_View_1___Front_3_4_Vinyl_Toy.jpg",
      "/character_assets/CH-14_Astro_Pug___Vinyl_Designer_Toy/CH-14_View2_View_2___Rear_Jet_Pack___Seam.jpg"
    ],
    "summary": "Matte-and-satin rotocast vinyl art toy of a chubby pug in a retro cream-and-vermilion space suit and clear acrylic bubble helmet.",
    "creativeRationale": "Designer toy e-commerce packshot and manufacturing seam-line review. Direction: KeyShot pure white studio cyclorama with clean studio softbox reflections on acrylic dome.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Authentic vinyl wall thickness feel, cle",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-15",
    "title": "Oni-Mask Samurai — SLA 3D Print Maquette",
    "category": "character",
    "categoryLabel": "Collectible Statues & Designer Toys",
    "client": "3D Print Patreon & Miniature Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-15_Oni_Mask_Samurai___SLA_3D_Print_Maquette/CH-15_View1_View_1___Assembled_SLA_Bust.jpg",
    "galleryImages": [
      "/character_assets/CH-15_Oni_Mask_Samurai___SLA_3D_Print_Maquette/CH-15_View1_View_1___Assembled_SLA_Bust.jpg",
      "/character_assets/CH-15_Oni_Mask_Samurai___SLA_3D_Print_Maquette/CH-15_View2_View_2___Exploded_Keyed_Kit.jpg"
    ],
    "summary": "Unpainted matte warm-grey SLA photopolymer resin collectible bust of a horned oni-mask samurai with keyed assembly.",
    "creativeRationale": "Print-ready collectible kit demonstration showing assembled bust and vertical keyed parts layout. Direction: KeyShot pure white studio emphasizing crisp sculptural planes and square assembly pegs.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Clean keying tolerances between helmet, ",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-16",
    "title": "Chronos & Pip — Stylized Duo Diorama Figurine",
    "category": "character",
    "categoryLabel": "Collectible Statues & Designer Toys",
    "client": "Boutique Figurine & Tabletop Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-16_Chronos___Pip___Stylized_Duo_Diorama_Figurine/CH-16_View1_View_1___Front_3_4_Painted_Figure.jpg",
    "galleryImages": [
      "/character_assets/CH-16_Chronos___Pip___Stylized_Duo_Diorama_Figurine/CH-16_View1_View_1___Front_3_4_Painted_Figure.jpg",
      "/character_assets/CH-16_Chronos___Pip___Stylized_Duo_Diorama_Figurine/CH-16_View2_View_2___Rear_Coat___Gear_Base.jpg"
    ],
    "summary": "Painted 1/8 scale stylized resin figurine of an elderly clockmaker and his brass mechanical owl on a walnut gear base.",
    "creativeRationale": "Collector figurine catalog photography replacement for pre-order campaigns. Direction: KeyShot pure white studio with soft wrap lighting on hand-painted burgundy leather and brass.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Clean silhouette readability of dual cha",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-17",
    "title": "Nomad Traveler — Marvelous Designer Garment Study",
    "category": "character",
    "categoryLabel": "Character Costumes, Grooming & Hero Props",
    "client": "VFX Costume & Digital Fashion Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-17_Nomad_Traveler___Marvelous_Designer_Garment_Study/CH-17_View1_View_1___Front_3_4_Draped.jpg",
    "galleryImages": [
      "/character_assets/CH-17_Nomad_Traveler___Marvelous_Designer_Garment_Study/CH-17_View1_View_1___Front_3_4_Draped.jpg",
      "/character_assets/CH-17_Nomad_Traveler___Marvelous_Designer_Garment_Study/CH-17_View2_View_2___Rear_Cloak___Harness.jpg"
    ],
    "summary": "Multi-layered desert nomad outfit draped on a matte-grey tailor mannequin: raw linen cloak, saddle-leather harness, pleated trousers.",
    "creativeRationale": "Digital costume simulation and fabric shader portfolio piece for film and AAA games. Direction: Arnold pure white studio cyclorama highlighting raw linen slub weave and frayed hem edges.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Physically accurate cloth-to-leather har",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-18",
    "title": "Aegis-VII — Tactical Recon Helmet & Visor",
    "category": "character",
    "categoryLabel": "Character Costumes, Grooming & Hero Props",
    "client": "First-Person Character & Gear Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-18_Aegis_VII___Tactical_Recon_Helmet___Visor/CH-18_View1_View_1___Front_3_4_Helmet.jpg",
    "galleryImages": [
      "/character_assets/CH-18_Aegis_VII___Tactical_Recon_Helmet___Visor/CH-18_View1_View_1___Front_3_4_Helmet.jpg",
      "/character_assets/CH-18_Aegis_VII___Tactical_Recon_Helmet___Visor/CH-18_View2_View_2___Rear_Counterweight___Rig.jpg"
    ],
    "summary": "Matte forged-carbon tactical helmet with ballistic mandible guard, titanium side rails, and rear battery counterweight pouch.",
    "creativeRationale": "Hero character headgear asset for customization menus and close-up cutscenes. Direction: KeyShot pure black studio with crisp strip-light reflections across forged carbon flakes.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Consistent forged-carbon pattern scale a",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-19",
    "title": "Sovereign Greaves — Articulated Fantasy Sabatons",
    "category": "character",
    "categoryLabel": "Character Costumes, Grooming & Hero Props",
    "client": "Dark Fantasy RPG Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-19_Sovereign_Greaves___Articulated_Fantasy_Sabatons/CH-19_View1_View_1___Front_3_4_Armor_Pair.jpg",
    "galleryImages": [
      "/character_assets/CH-19_Sovereign_Greaves___Articulated_Fantasy_Sabatons/CH-19_View1_View_1___Front_3_4_Armor_Pair.jpg",
      "/character_assets/CH-19_Sovereign_Greaves___Articulated_Fantasy_Sabatons/CH-19_View2_View_2___Macro_Knee_Poleyn.jpg"
    ],
    "summary": "Pair of gothic fluted-steel leg greaves and winged knee poleyns with aged leather straps and brass buckles.",
    "creativeRationale": "Modular character armor piece and anisotropic steel material study. Direction: Marmoset Toolbag 4 pure black studio; 85mm hero and 100mm macro optics.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Hammered steel micro-scratches, brass ri",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "ch-20",
    "title": "Courier's Pack — Character Survival Backpack",
    "category": "character",
    "categoryLabel": "Character Costumes, Grooming & Hero Props",
    "client": "Survival Adventure Game Studio",
    "year": "2026",
    "heroImage": "/character_assets/CH-20_Courier_s_Pack___Character_Survival_Backpack/CH-20_View1_View_1___Front_3_4_Pack_Hero.jpg",
    "galleryImages": [
      "/character_assets/CH-20_Courier_s_Pack___Character_Survival_Backpack/CH-20_View1_View_1___Front_3_4_Pack_Hero.jpg",
      "/character_assets/CH-20_Courier_s_Pack___Character_Survival_Backpack/CH-20_View2_View_2___Rear_Shoulder_Harness.jpg"
    ],
    "summary": "Weathered olive waxed-canvas and saddle-leather survival backpack with rolled wool blanket and tarnished brass carabiners.",
    "creativeRationale": "Hero character back-prop asset seen continuously in third-person gameplay. Direction: KeyShot pure white studio cyclorama with soft contact shadows; 85mm lens at f/8.",
    "deliverables": [
      "Sub-D Quad Mesh + Rigging Skeleton",
      "8K UDIM Texture Maps (Skin, Fabric, Metal)",
      "High-Resolution ZBrush ZTL Sculpt Masters"
    ],
    "materials": [
      "Multi-Layer SSS Skin",
      "Anodized Carbon Exoskeleton",
      "Procedural Woven Weaves"
    ],
    "software": [
      "ZBrush",
      "Marvelous Designer",
      "Substance Painter",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Consistent waxed-canvas crease wear, woo",
      "topologyType": "Anatomically Accurate Quad Deformation",
      "textureResolution": "8K Multi-UDIM Textures",
      "engineCompatibility": "Unreal Engine 5.5, Unity, Maya, Blender"
    },
    "featured": false
  },
  {
    "id": "gm-01",
    "title": "Rally-94 — PS1 Low-Poly Rally Coupe",
    "category": "game-assets",
    "categoryLabel": "Low-Poly & PSX Retro",
    "client": "Indie Retro Racing Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-01_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-01_view1.jpg",
      "/extracted_assets/game_assets/GM-01_view2.jpg"
    ],
    "summary": "Flat-shaded PS1-era rally coupe with crisp polygon facets, blocky wheel arches, and muted red-and-cream racing stripes.",
    "creativeRationale": "Vehicle hero asset demonstrating strict triangle-budget discipline and clean low-poly silhouette. Direction: Blender Cycles pure white studio cyclorama; 50mm lens, paired with matching quad/tri wireframe pass.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Expressive automotive proportions under ",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": true
  },
  {
    "id": "gm-02",
    "title": "Timber-Mill — Low-Poly Stylized Watermill Tile",
    "category": "game-assets",
    "categoryLabel": "Low-Poly & PSX Retro",
    "client": "Isometric Strategy & City-Builder Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-02_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-02_view1.jpg",
      "/extracted_assets/game_assets/GM-02_view2.jpg"
    ],
    "summary": "Cozy faceted low-poly stone and timber watermill with wooden waterwheel and mossy shingled roof on a square diorama tile.",
    "creativeRationale": "Modular strategy-game building tile with readable 360-degree silhouette. Direction: Pure white studio cyclorama with crisp softbox shadows; isometric three-quarter framing.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Balancing clean low-poly facets with cha",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": true
  },
  {
    "id": "gm-03",
    "title": "Metro-Kiosk — PSX Retro Street Vending Booth",
    "category": "game-assets",
    "categoryLabel": "Low-Poly & PSX Retro",
    "client": "PSX Survival-Horror Indie Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-03_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-03_view1.jpg",
      "/extracted_assets/game_assets/GM-03_view2.jpg"
    ],
    "summary": "Compact urban street kiosk modeled with crisp low-poly geometry and pixelated nearest-neighbor texture detail.",
    "creativeRationale": "Authentic 5th-generation console environment prop paired with clean wireframe verification. Direction: Pure black studio backdrop with crisp rim lighting; unblurred nearest-neighbor pixel filtering.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Maximizing surface grit and corrugated a",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-04",
    "title": "Sky-Skiff — Low-Poly Airship Vessel",
    "category": "game-assets",
    "categoryLabel": "Low-Poly & PSX Retro",
    "client": "Stylized Adventure Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-04_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-04_view1.jpg",
      "/extracted_assets/game_assets/GM-04_view2.jpg"
    ],
    "summary": "Faceted timber airship hull with cream canvas balloon-sail, brass propeller, and taut rope rigging.",
    "creativeRationale": "Hero traversal vehicle turnaround for mobile and Switch-targeted stylized games. Direction: Pure white studio cyclorama with soft drop shadow; clean front-and-rear three-quarter views.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Consistent rigging tension, deck crate p",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-05",
    "title": "Dungeon-Chest — Low-Poly RPG Ironbound Chest",
    "category": "game-assets",
    "categoryLabel": "Low-Poly & PSX Retro",
    "client": "Mobile & Indie Dungeon Crawler Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-05_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-05_view1.jpg",
      "/extracted_assets/game_assets/GM-05_view2.jpg"
    ],
    "summary": "Chunky faceted oak-and-ironbound treasure chest with beveled iron straps and brass padlock.",
    "creativeRationale": "Interactive loot prop showcasing crisp silhouette and clean low-poly topology. Direction: Pure black studio with three-point rim lighting; paired with quad/tri wireframe pass.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Ensuring clean UV mirroring and tight si",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-06",
    "title": "Pixel-Forge — 3D Pixel-Textured Blacksmith",
    "category": "game-assets",
    "categoryLabel": "3D Pixel Art & Voxel",
    "client": "Pixel-3D RPG Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-06_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-06_view1.jpg",
      "/extracted_assets/game_assets/GM-06_view2.jpg"
    ],
    "summary": "Low-poly anvil on a tree-stump block beside a stone hearth, textured with crisp unblurred 16-bit pixel art.",
    "creativeRationale": "Craft-station prop set demonstrating texel-density-locked pixel-art 3D workflows. Direction: Pure black studio; isometric three-quarter views preserving crisp pixel edges.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Maintaining uniform pixel-per-unit texel",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-07",
    "title": "Voxel-Mech — Modular Voxel Tactical Walker",
    "category": "game-assets",
    "categoryLabel": "3D Pixel Art & Voxel",
    "client": "Tactical Voxel Strategy Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-07_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-07_view1.jpg",
      "/extracted_assets/game_assets/GM-07_view2.jpg"
    ],
    "summary": "Articulated bipedal mech constructed from crisp cubic voxels in matte olive-grey, charcoal, and amber.",
    "creativeRationale": "Destructible/modular voxel unit showcase with full front-to-rear readability. Direction: Pure white studio cyclorama with soft contact shadows and clean ambient occlusion.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Mechanical joint readability and weapon/",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-08",
    "title": "Retro-Arcade — 3D Pixel Art Arcade Cabinet",
    "category": "game-assets",
    "categoryLabel": "3D Pixel Art & Voxel",
    "client": "Retro Sim & Indie Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-08_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-08_view1.jpg",
      "/extracted_assets/game_assets/GM-08_view2.jpg"
    ],
    "summary": "Upright arcade cabinet modeled in clean low-poly geometry with crisp nearest-neighbor pixel-art side panels.",
    "creativeRationale": "Interior dressing hero prop showcasing 2D pixel art integration on 3D UV sheets. Direction: Pure black studio; front-and-rear three-quarter views highlighting CRT glass and rear service panel.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Clean pixel-aligned UV unwrapping with z",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-09",
    "title": "Pixel-Botany — 3D Pixel Art Bonsai & Lantern",
    "category": "game-assets",
    "categoryLabel": "3D Pixel Art & Voxel",
    "client": "Cozy Isometric Life-Sim Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-09_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-09_view1.jpg",
      "/extracted_assets/game_assets/GM-09_view2.jpg"
    ],
    "summary": "Stylized potted pine bonsai and stone garden lantern on a square tray with crisp nearest-neighbor pixel textures.",
    "creativeRationale": "Foliage & garden prop study blending clean low-poly cards with crisp 2D pixel brushwork. Direction: Pure white studio cyclorama with soft studio lighting and crisp silhouette edges.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Organic bonsai trunk curvature rendered ",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-10",
    "title": "Voxel-Train — Isometric Voxel Diesel Locomotive",
    "category": "game-assets",
    "categoryLabel": "3D Pixel Art & Voxel",
    "client": "Transport Tycoon Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-10_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-10_view1.jpg",
      "/extracted_assets/game_assets/GM-10_view2.jpg"
    ],
    "summary": "Industrial ochre-and-slate diesel locomotive resting on a straight voxel track segment.",
    "creativeRationale": "Vehicle unit asset for isometric tycoon games requiring crisp front and rear cab views. Direction: Pure white studio cyclorama with clean ambient occlusion and sharp voxel steps.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Translating bogie wheel trucks, handrail",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": true
  },
  {
    "id": "gm-11",
    "title": "SubD-Turbine — Clean Quad-Topology Jet Intake",
    "category": "game-assets",
    "categoryLabel": "Clean Topology & Wireframes",
    "client": "Hard-Surface & Vehicle Outsourcing Client",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-11_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-11_view1.jpg",
      "/extracted_assets/game_assets/GM-11_view2.jpg"
    ],
    "summary": "Precision subdivision-modeled jet turbine intake housing with radial stator blades and mounting flange bolts.",
    "creativeRationale": "Technical topology proof demonstrating all-quad edge flow, clean holding edges, and zero pinching. Direction: Pure black studio; neutral grey clay pass paired with exact black quad wireframe overlay.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Seamless circular-to-flange quad transit",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-12",
    "title": "Game-Head — Clean Facial Edge-Loop Topology Bust",
    "category": "game-assets",
    "categoryLabel": "Clean Topology & Wireframes",
    "client": "Character Rigging & Facial Mocap Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-12_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-12_view1.jpg",
      "/extracted_assets/game_assets/GM-12_view2.jpg"
    ],
    "summary": "Realistic female game-ready head and neck sculpt demonstrating concentric facial animation edge loops.",
    "creativeRationale": "Deformation-ready character topology benchmark for blendshapes and facial rigging. Direction: Pure white studio cyclorama; clean wireframe cage paired with smooth clay anatomical pass.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Clean concentric loops around eyes, naso",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-13",
    "title": "Optic-Sight — Hard-Surface Holographic Rifle Optic",
    "category": "game-assets",
    "categoryLabel": "Clean Topology & Wireframes",
    "client": "AAA First-Person Shooter Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-13_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-13_view1.jpg",
      "/extracted_assets/game_assets/GM-13_view2.jpg"
    ],
    "summary": "Matte-black anodized aluminum holographic sight with Picatinny thumbscrew mount and protective hood.",
    "creativeRationale": "First-person weapon attachment asset pairing final PBR lookdev with low-poly wireframe. Direction: Marmoset Toolbag 4 pure black studio; 100mm lens at f/8.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Optimizing cylindrical thumbscrews and r",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-14",
    "title": "Piston-Joint — Subdivision Mechanical Knee Hinge",
    "category": "game-assets",
    "categoryLabel": "Clean Topology & Wireframes",
    "client": "Mecha & Robotics Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-14_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-14_view1.jpg",
      "/extracted_assets/game_assets/GM-14_view2.jpg"
    ],
    "summary": "Articulated robotic knee piston hinge assembly with clevis pins, hydraulic cylinder, and chamfered brackets.",
    "creativeRationale": "Hard-surface subdivision topology study proving clean bevels and mechanical pivot clearances. Direction: Pure white studio cyclorama; wireframe topology pass paired with rear smooth clay turnaround.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Maintaining even quad density across com",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-15",
    "title": "Hero-Hand — Deformable Game-Ready Gauntlet Hand",
    "category": "game-assets",
    "categoryLabel": "Clean Topology & Wireframes",
    "client": "VR & First-Person Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-15_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-15_view1.jpg",
      "/extracted_assets/game_assets/GM-15_view2.jpg"
    ],
    "summary": "Relaxed armored tactical glove hand with articulated knuckle plates and palm pad quad topology.",
    "creativeRationale": "First-person VR hand asset demonstrating clean knuckle-bending edge loops. Direction: Pure black studio; dorsal and palmar wireframe views on neutral matte-grey clay.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Three-loop knuckle articulation and clea",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-16",
    "title": "Ore-Cart — Hand-Painted Stylized Minecart",
    "category": "game-assets",
    "categoryLabel": "Stylized Hand-Painted Props",
    "client": "Stylized Fantasy RPG Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-16_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-16_view1.jpg",
      "/extracted_assets/game_assets/GM-16_view2.jpg"
    ],
    "summary": "Chunky stylized wooden and riveted-iron minecart loaded with faceted mineral ore chunks on a rail section.",
    "creativeRationale": "Hand-painted albedo & baked AO prop benchmark inspired by Blizzard/Riot pipelines. Direction: Pure white studio cyclorama with soft ground shadow; crisp painterly brushwork.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Painting convincing metallic edge highli",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-17",
    "title": "Alchemist-Crate — Hand-Painted Potion Supply Crate",
    "category": "game-assets",
    "categoryLabel": "Stylized Hand-Painted Props",
    "client": "Cozy Fantasy Adventure Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-17_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-17_view1.jpg",
      "/extracted_assets/game_assets/GM-17_view2.jpg"
    ],
    "summary": "Oak-and-brass alchemist supply crate with rope handles, reinforced brackets, and corked glass potion vials.",
    "creativeRationale": "Stylized interactive prop demonstrating hand-painted wood/brass paired with translucent glass. Direction: Pure white studio cyclorama; front-and-rear three-quarter views.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Cohesive stylized brushwork across wood ",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-18",
    "title": "Runic-Brazier — Hand-Painted Stone Torch Pedestal",
    "category": "game-assets",
    "categoryLabel": "Stylized Hand-Painted Props",
    "client": "Action RPG Environment Team",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-18_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-18_view1.jpg",
      "/extracted_assets/game_assets/GM-18_view2.jpg"
    ],
    "summary": "Chiseled mossy stone pedestal brazier topped with a twisted wrought-iron fire cage.",
    "creativeRationale": "Modular dungeon dressing prop paired with clean game-ready wireframe verification. Direction: Pure black studio; painted lookdev paired with grey clay wireframe topology pass.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Optimizing twisted wrought-iron cage geo",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-19",
    "title": "Tavern-Keg — Hand-Painted Oak Barrel & Tap Stand",
    "category": "game-assets",
    "categoryLabel": "Stylized Hand-Painted Props",
    "client": "Stylized Tavern & RPG Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-19_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-19_view1.jpg",
      "/extracted_assets/game_assets/GM-19_view2.jpg"
    ],
    "summary": "Chunky stylized oak tavern barrel on a timber cradle with riveted iron hoops and tarnished brass tap spigot.",
    "creativeRationale": "Classic stylized environment prop showcasing chunky silhouette exaggeration. Direction: Pure white studio cyclorama with soft contact shadows; front and rear turnarounds.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Readable wood-stave bevels and iron hoop",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-20",
    "title": "Wayfarer-Lantern — Hand-Painted Brass Field Lantern",
    "category": "game-assets",
    "categoryLabel": "Stylized Hand-Painted Props",
    "client": "Stylized Action-Adventure Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-20_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-20_view1.jpg",
      "/extracted_assets/game_assets/GM-20_view2.jpg"
    ],
    "summary": "Adventurer's tarnished brass and wrought-iron hanging field lantern with beveled glass panes and leather handle.",
    "creativeRationale": "Hero handheld prop combining stylized PBR brushwork with clean low-poly wireframe. Direction: Pure black studio; textured hero pass paired with clay wireframe topology pass.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Clean glass pane framing and wrapped-lea",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-21",
    "title": "Breacher-12 — AAA PBR Tactical Pump Shotgun",
    "category": "game-assets",
    "categoryLabel": "AAA PBR Hero Props & Weapons",
    "client": "AAA Tactical FPS Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-21_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-21_view1.jpg",
      "/extracted_assets/game_assets/GM-21_view2.jpg"
    ],
    "summary": "Tactical 12-gauge pump-action shotgun with parkerized steel receiver, ribbed polymer forend, and skeletonized stock.",
    "creativeRationale": "First-person hero weapon benchmark pairing Marmoset PBR lookdev with game-ready wireframe. Direction: Marmoset Toolbag 4 pure black studio; 85mm lens at f/8.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Optimizing Picatinny rail teeth, skeleto",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-22",
    "title": "Field-Medkit — AAA PBR Military Trauma Case",
    "category": "game-assets",
    "categoryLabel": "AAA PBR Hero Props & Weapons",
    "client": "Extraction Shooter & Mil-Sim Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-22_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-22_view1.jpg",
      "/extracted_assets/game_assets/GM-22_view2.jpg"
    ],
    "summary": "Ruggedized olive-drab polymer trauma case with stainless latches that opens to reveal foam-cutout medical supplies.",
    "creativeRationale": "Interactive loot container demonstrating both closed exterior wear and rigged open interior. Direction: Marmoset Toolbag 4 pure white studio cyclorama; consistent 3/4 camera angle.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Detailed interior foam cutouts, glass vi",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-23",
    "title": "Relay-04 — AAA PBR Sci-Fi Comms Terminal",
    "category": "game-assets",
    "categoryLabel": "AAA PBR Hero Props & Weapons",
    "client": "Sci-Fi Extraction & Co-Op Shooter Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-23_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-23_view1.jpg",
      "/extracted_assets/game_assets/GM-23_view2.jpg"
    ],
    "summary": "Ruggedized die-cast aluminum field communications terminal with recessed matte screen, toggle switches, and rear cooling fins.",
    "creativeRationale": "360-degree hero objective prop designed for close-up player interaction. Direction: Marmoset Toolbag 4 pure black studio; front and rear 3/4 views.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Authentic cast-metal roughness breakup, ",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-24",
    "title": "Salvage-Torch — AAA PBR Plasma Cutting Torch",
    "category": "game-assets",
    "categoryLabel": "AAA PBR Hero Props & Weapons",
    "client": "Industrial Sci-Fi Survival Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-24_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-24_view1.jpg",
      "/extracted_assets/game_assets/GM-24_view2.jpg"
    ],
    "summary": "Weathered safety-yellow industrial plasma cutting torch with heat-discolored copper nozzle and knurled grip.",
    "creativeRationale": "First-person utility tool pairing Substance Painter weathering with low-poly wireframe. Direction: Pure white studio cyclorama; PBR lookdev paired with clean wireframe over clay.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Baking high-poly knurling and hose fitti",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-25",
    "title": "Aegis-Shield — AAA PBR Viking Round Shield",
    "category": "game-assets",
    "categoryLabel": "AAA PBR Hero Props & Weapons",
    "client": "Historical Action RPG Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-25_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-25_view1.jpg",
      "/extracted_assets/game_assets/GM-25_view2.jpg"
    ],
    "summary": "Battle-worn oak round shield with flaking blue-and-ivory paint, hammered iron rim, and forged rear grip bar.",
    "creativeRationale": "Double-sided melee equipment asset demonstrating wood-grain normal detail and leather wear. Direction: Marmoset Toolbag 4 pure black studio with crisp rim lighting on hammered iron.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Consistent plank seams and nail-rivet pl",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-26",
    "title": "Shrine-Kit — Modular Japanese Temple Asset Set",
    "category": "game-assets",
    "categoryLabel": "Isometric Dioramas & Modular Kits",
    "client": "Environment Art & Asset Store Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-26_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-26_view1.jpg",
      "/extracted_assets/game_assets/GM-26_view2.jpg"
    ],
    "summary": "Modular Japanese temple corner kit featuring cedar columns, curved kawara roof tiles, shoji panels, and stone steps.",
    "creativeRationale": "Trim-sheet modular environment kit proof showing both assembled structure and exploded modules. Direction: Blender Cycles pure white studio cyclorama; isometric three-quarter presentation.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Grid-snapping module dimensions and seam",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-27",
    "title": "Foundry-Wall — Modular Industrial Trim-Sheet Kit",
    "category": "game-assets",
    "categoryLabel": "Isometric Dioramas & Modular Kits",
    "client": "UE5 Environment & Level Design Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-27_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-27_view1.jpg",
      "/extracted_assets/game_assets/GM-27_view2.jpg"
    ],
    "summary": "Industrial brick-and-steel factory wall assembly with I-beams, sash window, and cast-iron pipe runs.",
    "creativeRationale": "Modular kit breakdown demonstrating snap-together architectural chunks and separated components. Direction: Unreal Engine 5 pure black studio; assembled view paired with exploded kit breakdown.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "4-material trim-sheet optimization and c",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-28",
    "title": "Tavern-Corner — Stylized Isometric RPG Room Slice",
    "category": "game-assets",
    "categoryLabel": "Isometric Dioramas & Modular Kits",
    "client": "Isometric CRPG Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-28_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-28_view1.jpg",
      "/extracted_assets/game_assets/GM-28_view2.jpg"
    ],
    "summary": "Cozy medieval tavern cutaway slice with stone hearth, oak trestle table, tankards, and stacked ale barrels.",
    "creativeRationale": "Isometric interior lookdev and prop-density benchmark for tactical RPG levels. Direction: Pure white studio cyclorama; dual rotated isometric cutaway angles.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Warm hearth bounce lighting balanced aga",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-29",
    "title": "Bunker-Door — Modular Sci-Fi Airlock Bulkhead",
    "category": "game-assets",
    "categoryLabel": "Isometric Dioramas & Modular Kits",
    "client": "Sci-Fi Corridor & Level Art Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-29_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-29_view1.jpg",
      "/extracted_assets/game_assets/GM-29_view2.jpg"
    ],
    "summary": "Heavy armored octagonal sci-fi bulkhead door frame with hydraulic locking pistons and chamfered hazard trim.",
    "creativeRationale": "Hero architectural doorway asset pairing weathered PBR lookdev with clean quad wireframe. Direction: Marmoset Toolbag 4 pure black studio; front 3/4 PBR paired with grey clay wireframe.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Clean quad edge-flow around octagonal ch",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "gm-30",
    "title": "Harbor-Pier — Low-Poly Stylized Dock & Rowboat Tile",
    "category": "game-assets",
    "categoryLabel": "Isometric Dioramas & Modular Kits",
    "client": "Stylized Adventure & Strategy Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/game_assets/GM-30_view1.jpg",
    "galleryImages": [
      "/extracted_assets/game_assets/GM-30_view1.jpg",
      "/extracted_assets/game_assets/GM-30_view2.jpg"
    ],
    "summary": "Weathered wooden harbor pier deck with rope bollards, stacked crates, and moored rowboat on a stylized water block.",
    "creativeRationale": "Modular coastal level tile demonstrating translucent low-poly water and under-pier pilings. Direction: Pure white studio cyclorama; dual opposite isometric three-quarter angles.",
    "deliverables": [
      "Optimized LOD0–LOD4 Mesh Package",
      "PBR Metalness/Roughness 4K Textures",
      "Game Engine Integration Blueprint"
    ],
    "materials": [
      "Bake-Normal Hard Surface",
      "PBR Metal & Roughness",
      "Sub-Surface Emissive Glass"
    ],
    "software": [
      "Blender",
      "Substance 3D Painter",
      "ZBrush",
      "Unreal Engine 5"
    ],
    "technicalSpecs": {
      "polycount": "Clean underwater piling visibility throu",
      "topologyType": "Game-Ready Triangle & Quad Optimization",
      "textureResolution": "4K PBR Texture Sets",
      "engineCompatibility": "Unreal Engine 5.5, Unity 6, Godot"
    },
    "featured": false
  },
  {
    "id": "id-01",
    "title": "Cantilever-T — Weighted Brass & Aluminum Tape Dispenser",
    "category": "industrial",
    "categoryLabel": "Tactile Desk & Stationery",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-01_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-01_view1.jpg",
      "/extracted_assets/industrial/ID-01_view2.jpg"
    ],
    "summary": "Monolithic cantilevered desk tape dispenser anchored by a solid brass lower counterweight and concealed tape drum.",
    "creativeRationale": "Design-forward stationery product replacing disposable plastic dispensers with a repairable heirloom tool. Materials: Bead-Blasted 6061 Aluminum, Solid C360 Brass Core, Stainless Blade",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Bead-Blasted 6061 Aluminum, Solid C360 Brass Core, Stainless Blade"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": true
  },
  {
    "id": "id-02",
    "title": "Dial-25 — Tactile Rotary Pomodoro Desk Timer",
    "category": "industrial",
    "categoryLabel": "Tactile Desk & Stationery",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-02_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-02_view1.jpg",
      "/extracted_assets/industrial/ID-02_view2.jpg"
    ],
    "summary": "Screen-free focus timer inspired by Dieter Rams: twist the knurled aluminum ring to set intervals with a single recessed orange pip.",
    "creativeRationale": "Distraction-free physical productivity hardware for remote workers and studios. Materials: Knurled Anodized Aluminum, Matte Sage Polycarbonate, Steel Bearing",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Knurled Anodized Aluminum, Matte Sage Polycarbonate, Steel Bearing"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-03",
    "title": "Rocker-Tray — Counterweighted Rocking Paperclip Dish",
    "category": "industrial",
    "categoryLabel": "Tactile Desk & Stationery",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-03_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-03_view1.jpg",
      "/extracted_assets/industrial/ID-03_view2.jpg"
    ],
    "summary": "Kinetic desk tray that gently rocks and self-centers on a weighted oak hemisphere without spilling small fasteners.",
    "creativeRationale": "Playful yet restrained architectural desk accessory for boutique stationery brands. Materials: Spun Brushed Stainless Steel, Turned White Oak Hemisphere",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Spun Brushed Stainless Steel, Turned White Oak Hemisphere"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-04",
    "title": "Edge-Sharp — Brass & Walnut Twin-Blade Sharpener",
    "category": "industrial",
    "categoryLabel": "Tactile Desk & Stationery",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-04_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-04_view1.jpg",
      "/extracted_assets/industrial/ID-04_view2.jpg"
    ],
    "summary": "Cylindrical desk pencil sharpener combining a knurled brass rotary cap, twin-blade steel core, and concealed lower shaving drawer.",
    "creativeRationale": "Precision drafting tool for architects, illustrators, and stationery collectors. Materials: Turned American Walnut, Knurled Solid Brass, High-Carbon Steel",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Turned American Walnut, Knurled Solid Brass, High-Carbon Steel"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-05",
    "title": "Ring-Mill — Stackable Twist-Ring Spice Grinder",
    "category": "industrial",
    "categoryLabel": "Kitchen & Tabletop Objects",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-05_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-05_view1.jpg",
      "/extracted_assets/industrial/ID-05_view2.jpg"
    ],
    "summary": "Three interlocking spice chambers (pepper, sea salt, chili) that bayonet-lock onto a single shared ceramic burr grinder base.",
    "creativeRationale": "Space-saving modular kitchenware reducing countertop clutter. Materials: Matte Ceramic, Anodized Aluminum, Ceramic Burr Core",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Matte Ceramic, Anodized Aluminum, Ceramic Burr Core"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": true
  },
  {
    "id": "id-06",
    "title": "Arc-Pour — Gravity-Balanced Pour-Over Coffee Stand",
    "category": "industrial",
    "categoryLabel": "Kitchen & Tabletop Objects",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-06_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-06_view1.jpg",
      "/extracted_assets/industrial/ID-06_view2.jpg"
    ],
    "summary": "Continuous bent-steel wireframe stand supporting a removable machined aluminum pour-over dripper cone.",
    "creativeRationale": "Minimalist specialty coffee brewing hardware for home and cafe bars. Materials: Bent Powder-Coated Steel Rod, CNC Anodized Aluminum Cone",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Bent Powder-Coated Steel Rod, CNC Anodized Aluminum Cone"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-07",
    "title": "Pinch-Grip — Squeeze-Lock Ergonomic Jar Opener",
    "category": "industrial",
    "categoryLabel": "Kitchen & Tabletop Objects",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-07_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-07_view1.jpg",
      "/extracted_assets/industrial/ID-07_view2.jpg"
    ],
    "summary": "Cam-action lever jar opener that tightens proportionally as you squeeze the handles, requiring minimal wrist torque.",
    "creativeRationale": "Universal-design ergonomic kitchen tool for effortless one-motion grip. Materials: Glass-Filled Nylon, Ribbed Terracotta Silicone, Steel Pivot",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Glass-Filled Nylon, Ribbed Terracotta Silicone, Steel Pivot"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-08",
    "title": "Steep-Wand — Spring-Loaded One-Hand Tea Infuser",
    "category": "industrial",
    "categoryLabel": "Kitchen & Tabletop Objects",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-08_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-08_view1.jpg",
      "/extracted_assets/industrial/ID-08_view2.jpg"
    ],
    "summary": "Press the top silicone thumb plunger to drop and open the perforated steeping basket for effortless loose-leaf scooping.",
    "creativeRationale": "Clever single-handed tea preparation tool eliminating messy hinged tea balls. Materials: 304 Brushed Stainless Steel, Matte Charcoal Silicone Plunger",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "304 Brushed Stainless Steel, Matte Charcoal Silicone Plunger"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-09",
    "title": "Fold-Scale — Folding Titanium Pocket Caliper-Ruler",
    "category": "industrial",
    "categoryLabel": "Smart EDC & Pocket Hardware",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-09_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-09_view1.jpg",
      "/extracted_assets/industrial/ID-09_view2.jpg"
    ],
    "summary": "Slim pocket bar that unfolds cleanly around a zero-play stainless hinge into a rigid 90-degree measuring caliper.",
    "creativeRationale": "Everyday-carry pocket measuring tool for industrial designers and machinists. Materials: Bead-Blasted Grade-5 Titanium, Precision Stainless Hinge Pin",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Bead-Blasted Grade-5 Titanium, Precision Stainless Hinge Pin"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-10",
    "title": "Slide-Bit — Magnetic Slide-Rail Pocket Bit Driver",
    "category": "industrial",
    "categoryLabel": "Smart EDC & Pocket Hardware",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-10_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-10_view1.jpg",
      "/extracted_assets/industrial/ID-10_view2.jpg"
    ],
    "summary": "Rectangular pocket screwdriver with a thumb-actuated sliding internal cartridge holding four magnetic hex bits.",
    "creativeRationale": "Flat-profile pocket hardware tool that carries cleanly beside a phone. Materials: Hard-Anodized 7075 Aluminum, S2 Tool Steel Bits, Spring Clip",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Hard-Anodized 7075 Aluminum, S2 Tool Steel Bits, Spring Clip"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-11",
    "title": "Vault-SD — Snap-Fit Modular SD & Dongle Case",
    "category": "industrial",
    "categoryLabel": "Smart EDC & Pocket Hardware",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-11_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-11_view1.jpg",
      "/extracted_assets/industrial/ID-11_view2.jpg"
    ],
    "summary": "Weather-sealed pocket vault with a custom-molded silicone insert organizing SD cards, microSDs, and USB-C dongles.",
    "creativeRationale": "Durable field storage case for photographers and hardware engineers. Materials: Matte Slate Polycarbonate, Compression Silicone Gasket",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Matte Slate Polycarbonate, Compression Silicone Gasket"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-12",
    "title": "Clip-Light — 90° Rotating-Head EDC Flashlight",
    "category": "industrial",
    "categoryLabel": "Smart EDC & Pocket Hardware",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-12_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-12_view1.jpg",
      "/extracted_assets/industrial/ID-12_view2.jpg"
    ],
    "summary": "Boxy Teenage Engineering-inspired pocket light whose cylindrical head rotates 90 degrees from L-angle clip-on to straight torch.",
    "creativeRationale": "Hands-free chest-pocket work light and compact EDC flashlight. Materials: Warm-Grey Anodized Aluminum, Stainless Clip, Silicone Switch",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Warm-Grey Anodized Aluminum, Stainless Clip, Silicone Switch"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-13",
    "title": "Helix-Lamp — Screw-Thread Dimming Desk Lamp",
    "category": "industrial",
    "categoryLabel": "Lighting & Desktop Electronics",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-13_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-13_view1.jpg",
      "/extracted_assets/industrial/ID-13_view2.jpg"
    ],
    "summary": "Tactile task lamp where rotating the spun-aluminum shade screws it up or down the brass column to adjust height and beam spread.",
    "creativeRationale": "Button-free mechanical lighting object celebrating tactile interaction. Materials: Machined Acme-Threaded Brass, Spun Matte-White Aluminum",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Machined Acme-Threaded Brass, Spun Matte-White Aluminum"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-14",
    "title": "Tilt-Deck — Hinged Dual-Angle Aluminum Laptop Riser",
    "category": "industrial",
    "categoryLabel": "Lighting & Desktop Electronics",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-14_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-14_view1.jpg",
      "/extracted_assets/industrial/ID-14_view2.jpg"
    ],
    "summary": "Precision barrel-hinged laptop stand that deploys to an ergonomic 18-degree typing angle or collapses flat for sleeve transport.",
    "creativeRationale": "Ultra-slim portable workstation riser with clean mechanical hinges. Materials: CNC Bead-Blasted Aluminum, Matte Charcoal Silicone Pads",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "CNC Bead-Blasted Aluminum, Matte Charcoal Silicone Pads"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-15",
    "title": "Orbit-Ball — Split-Body Ergonomic Vertical Trackball",
    "category": "industrial",
    "categoryLabel": "Lighting & Desktop Electronics",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-15_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-15_view1.jpg",
      "/extracted_assets/industrial/ID-15_view2.jpg"
    ],
    "summary": "Sculpted vertical trackball built from two snap-fit shell halves and a tool-free pop-out bearing ring for easy cleaning.",
    "creativeRationale": "Ergonomic CAD input peripheral designed for DFM assembly clarity. Materials: Matte Cool-Grey Polycarbonate, Delrin Trackball Sphere",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Matte Cool-Grey Polycarbonate, Delrin Trackball Sphere"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-16",
    "title": "Puck-Air — Dial-Controlled Desktop Air Quality Puck",
    "category": "industrial",
    "categoryLabel": "Lighting & Desktop Electronics",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-16_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-16_view1.jpg",
      "/extracted_assets/industrial/ID-16_view2.jpg"
    ],
    "summary": "Compact desk air-quality sensor and mini purifier with a 360-degree perforated intake ring and replaceable pleated filter core.",
    "creativeRationale": "Quiet architectural desktop appliance replacing noisy plastic air monitors. Materials: Micro-Perforated Brushed Aluminum, Matte Charcoal Dial, E-Ink Top",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Micro-Perforated Brushed Aluminum, Matte Charcoal Dial, E-Ink Top"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-17",
    "title": "Rail-Bar — Magnetic Cable-Routing Desk Bar",
    "category": "industrial",
    "categoryLabel": "Modular Storage & Travel",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-17_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-17_view1.jpg",
      "/extracted_assets/industrial/ID-17_view2.jpg"
    ],
    "summary": "Weighted aluminum desk channel paired with three slidable magnetic silicone cable-anchor blocks.",
    "creativeRationale": "Clean modular cable management eliminating adhesive desk clips. Materials: Extruded Anodized Aluminum, Compression-Molded Silicone, Neodymium",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Extruded Anodized Aluminum, Compression-Molded Silicone, Neodymium"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-18",
    "title": "Valet-Hinge — Hinged Cork & Aluminum Travel Valet",
    "category": "industrial",
    "categoryLabel": "Modular Storage & Travel",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-18_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-18_view1.jpg",
      "/extracted_assets/industrial/ID-18_view2.jpg"
    ],
    "summary": "Two-part clamshell travel case that closes securely for transit and opens flat into a bedside glasses and watch valet.",
    "creativeRationale": "Dual-function travel organizer combining acoustic cork warmth with CNC precision. Materials: Milled Dark Smoked Cork, Matte Black Anodized Aluminum, Brass Pin",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Milled Dark Smoked Cork, Matte Black Anodized Aluminum, Brass Pin"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-19",
    "title": "Kettle-Fold — Collapsible Silicone & Steel Camp Kettle",
    "category": "industrial",
    "categoryLabel": "Modular Storage & Travel",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-19_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-19_view1.jpg",
      "/extracted_assets/industrial/ID-19_view2.jpg"
    ],
    "summary": "Accordion-pleated silicone camp kettle with a rigid stainless induction base that collapses flat into a 4cm travel disc.",
    "creativeRationale": "Packable outdoor cookware balancing thermal safety with ultra-compact storage. Materials: Food-Grade Olive Silicone, Brushed 304 Stainless Base, Nylon Handle",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Food-Grade Olive Silicone, Brushed 304 Stainless Base, Nylon Handle"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "id-20",
    "title": "Origami-Stand — Fold-Flat Living-Hinge Tablet Easel",
    "category": "industrial",
    "categoryLabel": "Modular Storage & Travel",
    "client": "Consumer Hardware Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/industrial/ID-20_view1.jpg",
    "galleryImages": [
      "/extracted_assets/industrial/ID-20_view1.jpg",
      "/extracted_assets/industrial/ID-20_view2.jpg"
    ],
    "summary": "Precision aluminum plate stand joined by wool-felt living hinges that folds from a flat folio sheet into a rigid triangular easel.",
    "creativeRationale": "Zero-hardware-clutter tablet stand for mobile sketching and travel. Materials: Anodized Charcoal Aluminum Panels, Wool-Felt Living Hinges",
    "deliverables": [
      "NURBS STEP Tooling Master",
      "KeyShot Studio Scene with CMF Specs",
      "Exploded Mechanical Assemblies"
    ],
    "materials": [
      "Anodized Charcoal Aluminum Panels, Wool-Felt Living Hinges"
    ],
    "software": [
      "Rhino 8",
      "Fusion 360",
      "KeyShot 2026",
      "Blender"
    ],
    "technicalSpecs": {
      "polycount": "Sub-D Quads / Precision CAD NURBS",
      "topologyType": "Watertight CAD & Quad Boundary Rep",
      "textureResolution": "8K Vector CMF Textures",
      "engineCompatibility": "SolidWorks, KeyShot, Rhino, Unreal Engine 5"
    },
    "featured": false
  },
  {
    "id": "stu-01",
    "title": "Monolith M1 — Planar-Magnetic Reference Headphones",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Audiophile & Studio Hardware Brands",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-01_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-01_view1.jpg",
      "/extracted_assets/studio/STU-01_view2.jpg",
      "/extracted_assets/studio/STU-01_view3.jpg"
    ],
    "summary": "Flagship open-back planar-magnetic reference headphones engineered to showcase CNC aluminum machining and acoustic mesh precision.",
    "creativeRationale": "Launch key visuals, D2C PDP multi-angle gallery, and industrial CMF sign-off. Lighting: Pure seamless pitch-black cyclorama with crisp overhead and side strip softboxes for clean metallic rim highlights and subtle floor reflection. Materials: CNC gunmetal aluminum, perforated black lambskin, spring steel, braided copper-litze acoustic mesh",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "CNC gunmetal aluminum, perforated black lambskin, spring steel, braided copper-litze acoustic mesh"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": true
  },
  {
    "id": "stu-02",
    "title": "Cortado Pro — Dual-Group Commercial Espresso Machine",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Specialty Coffee Equipment Manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-02_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-02_view1.jpg",
      "/extracted_assets/studio/STU-02_view2.jpg",
      "/extracted_assets/studio/STU-02_view3.jpg"
    ],
    "summary": "Commercial dual-group espresso machine balancing mirror-polished stainless steel bodywork with warm smoked-oak touchpoints.",
    "creativeRationale": "B2B hospitality catalog, e-commerce 3-angle product showcase, and trade-show banners. Lighting: Pure seamless crisp white studio cyclorama with large diffused softboxes and soft natural contact shadow. Materials: Mirror-polished 304 stainless steel, matte-black anodized aluminum, turned smoked oak, brushed brass gauges",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Mirror-polished 304 stainless steel, matte-black anodized aluminum, turned smoked oak, brushed brass gauges"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-03",
    "title": "Apex-X — Carbon-Monocoque Superbike Frame & Fork",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Performance Cycling & Composite Frame Brands",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-03_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-03_view1.jpg",
      "/extracted_assets/studio/STU-03_view2.jpg",
      "/extracted_assets/studio/STU-03_view3.jpg"
    ],
    "summary": "Aerodynamic unidirectional carbon-fiber frame and suspension fork highlighting monocoque tube transitions and titanium dropouts.",
    "creativeRationale": "Model-year launch campaign, geometry profile sheets, and dealer lookbooks. Lighting: Pure seamless matte black studio with a long overhead strip light tracing the carbon top-tube silhouette. Materials: Unidirectional matte carbon-fiber weave, CNC-machined titanium dropouts, Kashima-gold anodized fork stanchions",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Unidirectional matte carbon-fiber weave, CNC-machined titanium dropouts, Kashima-gold anodized fork stanchions"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-04",
    "title": "Kestrel M — Minimalist Rangefinder Digital Camera",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Camera & Precision Optics Manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-04_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-04_view1.jpg",
      "/extracted_assets/studio/STU-04_view2.jpg",
      "/extracted_assets/studio/STU-04_view3.jpg"
    ],
    "summary": "Classic-modern digital rangefinder body paired with a compact 35mm prime lens, emphasizing tactile metal and leatherette contrast.",
    "creativeRationale": "E-commerce multi-angle PDP gallery and industrial design validation. Lighting: Pure seamless crisp white cyclorama with clean overhead softbox diffusion and subtle floor contact shadow. Materials: Bead-blasted silver anodized aluminum, black pebble-grain leatherette, knurled brass dials, multi-coated optical glass",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Bead-blasted silver anodized aluminum, black pebble-grain leatherette, knurled brass dials, multi-coated optical glass"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-05",
    "title": "Caliber-9 — Skeletonized Titanium Tourbillon Watch",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Independent & Swiss Watchmaking Maisons",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-05_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-05_view1.jpg",
      "/extracted_assets/studio/STU-05_view2.jpg",
      "/extracted_assets/studio/STU-05_view3.jpg"
    ],
    "summary": "Openworked Grade-5 titanium tourbillon timepiece rendered to showcase micro-mechanical bridges, bevels, and jewel bearings.",
    "creativeRationale": "Pre-production horology campaign visuals and macro movement inspection. Lighting: Pure seamless matte black studio with precision strip-light reflections across case bevels. Materials: Brushed Grade-5 titanium, mirror-polished chamfers, sapphire crystal, rhodium bridges, heat-blued screws, synthetic rubies",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Brushed Grade-5 titanium, mirror-polished chamfers, sapphire crystal, rhodium bridges, heat-blued screws, synthetic rubies"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-06",
    "title": "AeroBlade V8 — CNC Titanium Axial Compressor Impeller",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Aerospace Propulsion & Turbomachinery OEMs",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-06_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-06_view1.jpg",
      "/extracted_assets/studio/STU-06_view2.jpg",
      "/extracted_assets/studio/STU-06_view3.jpg"
    ],
    "summary": "5-axis CNC-machined titanium compressor impeller presented assembled, exploded, and in macro toolpath inspection.",
    "creativeRationale": "Engineering investor decks, CAD-to-CGI proof, and technical product catalogs. Lighting: Pure seamless crisp white studio cyclorama with even light-tent illumination. Materials: Machined Ti-6Al-4V titanium with ball-nose milling scallops, steel ball bearing, anodized cobalt-blue nut",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Machined Ti-6Al-4V titanium with ball-nose milling scallops, steel ball bearing, anodized cobalt-blue nut"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-07",
    "title": "Prism-4 — 50mm T1.4 Cinema Prime Lens",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Cinema Lens & Broadcast Equipment Makers",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-07_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-07_view1.jpg",
      "/extracted_assets/studio/STU-07_view2.jpg",
      "/extracted_assets/studio/STU-07_view3.jpg"
    ],
    "summary": "Full-frame cinema prime lens engineered with 0.8-mod focus/iris gears, stainless PL mount, and multi-coated optics.",
    "creativeRationale": "NAB/IBC trade-show visuals and rental-house technical catalogs. Lighting: Pure seamless pitch-black studio with controlled strip-light gradients along cylindrical barrel. Materials: Hard-anodized satin-black aluminum, stainless steel PL bayonet mount, amber-magenta coated optical glass",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Hard-anodized satin-black aluminum, stainless steel PL bayonet mount, amber-magenta coated optical glass"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-08",
    "title": "Solis-One — Alabaster & Brushed-Brass Table Lamp",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Architectural Lighting & Luxury Home Brands",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-08_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-08_view1.jpg",
      "/extracted_assets/studio/STU-08_view2.jpg",
      "/extracted_assets/studio/STU-08_view3.jpg"
    ],
    "summary": "Minimalist table lamp pairing a honed translucent alabaster stone dome with a solid satin-brushed brass stem.",
    "creativeRationale": "Architectural specifier lookbooks and luxury lighting e-commerce. Lighting: Pure seamless crisp white cyclorama with warm internal LED transmission through natural stone veining. Materials: Honed translucent white alabaster stone (subsurface scattering), solid satin-brushed unlacquered brass",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Honed translucent white alabaster stone (subsurface scattering), solid satin-brushed unlacquered brass"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-09",
    "title": "Kinetix-R — 6-DOF Carbon & Aluminum Cobot Gripper",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Industrial Robotics & End-Effector OEMs",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-09_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-09_view1.jpg",
      "/extracted_assets/studio/STU-09_view2.jpg",
      "/extracted_assets/studio/STU-09_view3.jpg"
    ],
    "summary": "Modular collaborative robot wrist and parallel-jaw gripper presented assembled, exploded, and in macro mechanical detail.",
    "creativeRationale": "B2B automation catalogs, exploded assembly manuals, and engineering pitches. Lighting: Pure seamless crisp white cyclorama with soft overhead light-tent illumination. Materials: Bead-blasted pearl-white cast aluminum, dry-weave carbon-fiber tube, hard-anodized gunmetal fingers, stainless pins",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Bead-blasted pearl-white cast aluminum, dry-weave carbon-fiber tube, hard-anodized gunmetal fingers, stainless pins"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-10",
    "title": "Obsidian-1 — CNC-Milled Aluminum Studio Monitor",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Mastering & Reference Audio Manufacturers",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-10_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-10_view1.jpg",
      "/extracted_assets/studio/STU-10_view2.jpg",
      "/extracted_assets/studio/STU-10_view3.jpg"
    ],
    "summary": "Active reference studio monitor milled from solid satin-black aluminum with sculpted waveguide and rear heatsink.",
    "creativeRationale": "Pro-audio launch key art, rear I/O documentation, and driver close-ups. Lighting: Pure seamless pitch-black studio with side strip lights highlighting acoustic waveguide geometry. Materials: Satin-black anodized CNC aluminum, woven dark Kevlar cone, turned solid copper phase plug, gold binding posts",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Satin-black anodized CNC aluminum, woven dark Kevlar cone, turned solid copper phase plug, gold binding posts"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-11",
    "title": "Aura-S — Titanium & Optical-Resin Smart Ring",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Wearable Health-Tech & Consumer Startups",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-11_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-11_view1.jpg",
      "/extracted_assets/studio/STU-11_view2.jpg",
      "/extracted_assets/studio/STU-11_view3.jpg"
    ],
    "summary": "Ultra-minimalist biometric smart ring combining a brushed Grade-5 titanium shell with a dark optical-resin sensor interior.",
    "creativeRationale": "D2C wearable launch pages, investor hardware decks, and macro CMF validation. Lighting: Pure seamless crisp white studio cyclorama with soft overhead diffusion. Materials: PVD satin-silver Grade-5 titanium, mirror-polished bevel chamfers, dark translucent optical resin",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "PVD satin-silver Grade-5 titanium, mirror-polished bevel chamfers, dark translucent optical resin"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "stu-12",
    "title": "Veloce-GT — Forged-Magnesium Monoblock Wheel",
    "category": "animation",
    "categoryLabel": "KeyShot & V-Ray Studio CGI",
    "client": "Motorsport & Aftermarket Forged Wheel Brands",
    "year": "2026",
    "heroImage": "/extracted_assets/studio/STU-12_view1.jpg",
    "galleryImages": [
      "/extracted_assets/studio/STU-12_view1.jpg",
      "/extracted_assets/studio/STU-12_view2.jpg",
      "/extracted_assets/studio/STU-12_view3.jpg"
    ],
    "summary": "10-spoke Y-pattern forged-magnesium center-lock wheel engineered with CNC weight-reduction pockets.",
    "creativeRationale": "Automotive configurators, motorsport catalogs, and forging-detail showcases. Lighting: Pure seamless pitch-black studio with overhead softbox reflections and dark floor mirror. Materials: Satin-bronze anodized forged magnesium, diamond-cut outer rim lip, machined titanium center-lock nut",
    "deliverables": [
      "KeyShot 2026 Package (.ksp)",
      "V-Ray Multichannel OpenEXR Renders",
      "8K Ultra-Gloss CMF Study"
    ],
    "materials": [
      "Satin-bronze anodized forged magnesium, diamond-cut outer rim lip, machined titanium center-lock nut"
    ],
    "software": [
      "KeyShot",
      "V-Ray",
      "Cinema 4D",
      "Photoshop"
    ],
    "technicalSpecs": {
      "polycount": "500k–1.2M High-Density CAD Quads",
      "topologyType": "High-Poly Quad Mesh with Displacement",
      "textureResolution": "16K HDRI Studio Environments & Procedural CMF",
      "engineCompatibility": "KeyShot, V-Ray, Cinema 4D"
    },
    "featured": false
  },
  {
    "id": "ba-01",
    "title": "Kestrel-9 Modular Tactical Pistol",
    "category": "game-assets",
    "categoryLabel": "Hard-Surface & Weapons",
    "client": "AAA FPS Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-01_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-01_view1.jpg",
      "/extracted_assets/behance/BA-01_view2.jpg"
    ],
    "summary": "Sub-compact polymer and Cerakote steel sidearm with milled slide serrations and tactical rail.",
    "creativeRationale": "First-person weapon hero asset and modular attachment showcase. Direction: KeyShot crisp rim lighting on seamless black studio cyclorama; 85mm lens at f/8.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Accurate Picatinny tolerances, knurling ",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": true
  },
  {
    "id": "ba-02",
    "title": "Valkyrie-04 Heavy Bipedal Recon Mech",
    "category": "character",
    "categoryLabel": "Mecha & Characters",
    "client": "Sci-Fi Game & Toy Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-02_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-02_view1.jpg",
      "/extracted_assets/behance/BA-02_view2.jpg"
    ],
    "summary": "Articulated heavy reconnaissance mech with hydraulic leg actuators and matte olive-drab armor plating.",
    "creativeRationale": "Concept-to-production mecha hero model for cinematics and collector figures. Direction: High-key V-Ray white studio cyclorama for clean silhouette readability; 85mm lens at f/8.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Believable mechanical joint clearances, ",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-03",
    "title": "Chrono-Gauntlet Exoskeleton Arm Prop",
    "category": "game-assets",
    "categoryLabel": "Hard-Surface & Weapons",
    "client": "Action RPG & Film VFX Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-03_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-03_view1.jpg",
      "/extracted_assets/behance/BA-03_view2.jpg"
    ],
    "summary": "Wearable motorized forearm gauntlet combining brushed titanium plates, copper coils, and carbon linkage.",
    "creativeRationale": "Hero character prop and close-up cinematic insert asset. Direction: Dramatic split studio lighting on pure black sweep; 85mm / 100mm macro optics.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Multi-layered overlapping finger/wrist p",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-04",
    "title": "Nomad-6x6 Armored Scout Buggy",
    "category": "game-assets",
    "categoryLabel": "Hard-Surface & Weapons",
    "client": "Automotive & Tactical Sim Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-04_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-04_view1.jpg",
      "/extracted_assets/behance/BA-04_view2.jpg"
    ],
    "summary": "All-terrain 6x6 desert reconnaissance vehicle with tubular roll cage and long-travel coilover suspension.",
    "creativeRationale": "Vehicle hero asset demonstrating suspension rigging and dust/weathering shaders. Direction: Overcast desert salt-flat daylight with grounded tire contact shadows; 50mm lens.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Complex suspension geometry, beadlock wh",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-05",
    "title": "Warden Knight — Fluted Steel Armor Bust",
    "category": "character",
    "categoryLabel": "Mecha & Characters",
    "client": "Dark Fantasy Game Publisher",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-05_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-05_view1.jpg",
      "/extracted_assets/behance/BA-05_view2.jpg"
    ],
    "summary": "Gothic Maximilian-inspired fluted steel plate armor bust with leather straps and subtle battle patina.",
    "creativeRationale": "High-resolution character armor lookdev and material study. Direction: Chiaroscuro studio rim lighting on black background; 85mm portrait lens.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Anisotropic brushed steel speculars, emb",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": true
  },
  {
    "id": "ba-06",
    "title": "Abyssal Stalker — Creature Concept Sculpt",
    "category": "character",
    "categoryLabel": "Mecha & Characters",
    "client": "Film & Collectible Creature Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-06_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-06_view1.jpg",
      "/extracted_assets/behance/BA-06_view2.jpg"
    ],
    "summary": "Deep-sea armored predator creature presented in both final textured lookdev and raw ZBrush clay pass.",
    "creativeRationale": "Dual-pass creature pipeline proof (sculpting anatomy + subsurface skin shading). Direction: Neutral studio white cyclorama for zero distraction on silhouette and pore detail.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Maintaining identical anatomy and pose b",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-07",
    "title": "Ronin Cyber-Katana & Carbon Scabbard",
    "category": "game-assets",
    "categoryLabel": "Hard-Surface & Weapons",
    "client": "Sci-Fi Action Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-07_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-07_view1.jpg",
      "/extracted_assets/behance/BA-07_view2.jpg"
    ],
    "summary": "Forged Damascus-pattern blade paired with forged carbon-fiber saya and CNC-milled titanium tsuba.",
    "creativeRationale": "Hero melee weapon prop and macro material showcase. Direction: Low-key black studio with tight strip-light reflections along blade bevel.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Crisp hamon/Damascus steel contrast and ",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-08",
    "title": "Mk.V Deep-Core Mining Laser Drill",
    "category": "game-assets",
    "categoryLabel": "Hard-Surface & Weapons",
    "client": "Industrial Sci-Fi Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-08_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-08_view1.jpg",
      "/extracted_assets/behance/BA-08_view2.jpg"
    ],
    "summary": "Heavy industrial two-handed mining tool in safety yellow powder coat with chipped paint and cooling fins.",
    "creativeRationale": "Industrial prop storytelling and wear-and-tear texturing benchmark. Direction: Clean white KeyShot studio with soft overhead diffusion.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Edge-wear realism, recessed fasteners, a",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-09",
    "title": "Sunken Belltower — Stylized UE5 Diorama",
    "category": "product",
    "categoryLabel": "Environments & ArchViz",
    "client": "Indie & AA Stylized Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-09_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-09_view1.jpg",
      "/extracted_assets/behance/BA-09_view2.jpg"
    ],
    "summary": "Hand-painted/PBR hybrid floating island ruin featuring a mossy stone belltower and shallow reflective water.",
    "creativeRationale": "Modular stylized environment art and lighting portfolio piece. Direction: Warm golden-hour directional sun with cool sky fill; grounded diorama base.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Cohesive stylized masonry sculpts, folia",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-10",
    "title": "Subway Platform 04 — Brutalist Metro UE5",
    "category": "product",
    "categoryLabel": "Environments & ArchViz",
    "client": "Real-Time Architecture & Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-10_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-10_view1.jpg",
      "/extracted_assets/behance/BA-10_view2.jpg"
    ],
    "summary": "Monolithic board-formed concrete underground transit station with wet terrazzo floor reflections.",
    "creativeRationale": "Real-time Unreal Engine 5 architectural lighting and modular kit demonstration. Direction: Cool fluorescent overhead tubes balanced with warm directional platform accents.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Puddle roughness breakup, believable con",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-11",
    "title": "Aether-Valkyrie — Stylized Sky Courier",
    "category": "character",
    "categoryLabel": "Mecha & Characters",
    "client": "Animation & Stylized Game Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-11_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-11_view1.jpg",
      "/extracted_assets/behance/BA-11_view2.jpg"
    ],
    "summary": "Expressive stylized aviator character with leather flight jacket, brass goggles, and mechanical wing-pack.",
    "creativeRationale": "Stylized character modeling, grooming, and costume lookdev. Direction: Rich studio rim light on pure black backdrop to pop warm leather and brass.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Clean stylized proportions paired with t",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-12",
    "title": "Field Telemetry Radio — 1960s Transceiver",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "Audio Hardware & Retro-Tech Brand",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-12_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-12_view1.jpg",
      "/extracted_assets/behance/BA-12_view2.jpg"
    ],
    "summary": "Precision-machined aluminum and olive crinkle-paint field transceiver with backlit analog VU meter.",
    "creativeRationale": "Industrial product visualization and tactile hardware dial study. Direction: Crisp white KeyShot studio with soft wrap highlights on knurled aluminum knobs.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Micro-engraved dial markings, glass lens",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-13",
    "title": "Bento-Air — Folding Ultralight Cinema Drone",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "Consumer Robotics Startup",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-13_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-13_view1.jpg",
      "/extracted_assets/behance/BA-13_view2.jpg"
    ],
    "summary": "Matte magnesium-alloy folding quadcopter with 3-axis stabilized gimbal camera and carbon props.",
    "creativeRationale": "Hardware launch packshot showing both deployed flight and folded travel states. Direction: Clean white e-commerce studio cyclorama with razor-sharp contact shadows.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Exact hinge kinematics and consistent ch",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-14",
    "title": "Helix-S — Modular Analog Synthesizer",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "Electronic Music Instrument Maker",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-14_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-14_view1.jpg",
      "/extracted_assets/behance/BA-14_view2.jpg"
    ],
    "summary": "Anodized black aluminum desktop synthesizer with brushed brass patch jacks and recessed OLED scope.",
    "creativeRationale": "Flagship hardware campaign render and close-up control surface detail. Direction: Moody black studio with warm amber LED accents and specular metal edges.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Crisp silkscreen legibility, knurled enc",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-15",
    "title": "Kuro — Sand-Cast Iron & Walnut Teapot Set",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "Homeware & Tabletop Design Brand",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-15_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-15_view1.jpg",
      "/extracted_assets/behance/BA-15_view2.jpg"
    ],
    "summary": "Japanese-inspired textured sand-cast iron kettle with sculpted walnut handle and matching stoneware cups.",
    "creativeRationale": "Luxury kitchenware lookbook and material contrast showcase. Direction: Soft daylight-balanced white studio emphasizing matte iron grain vs oiled walnut.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Procedural sand-cast surface bump and su",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-16",
    "title": "Vortex-360 — Handheld Cinema Gimbal",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "Filmmaking Gear Manufacturer",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-16_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-16_view1.jpg",
      "/extracted_assets/behance/BA-16_view2.jpg"
    ],
    "summary": "Carbon-fiber and CNC-anodized aluminum 3-axis camera stabilizer with exposed copper-wound brushless motors.",
    "creativeRationale": "Technical product launch imagery highlighting motor engineering. Direction: High-contrast black studio with precision strip-light gradients.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Internal copper stator winding visibilit",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-17",
    "title": "Solarix — Folding Tri-Panel Solar Power Bank",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "CleanTech Outdoor Hardware Brand",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-17_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-17_view1.jpg",
      "/extracted_assets/behance/BA-17_view2.jpg"
    ],
    "summary": "Ruggedized tri-fold monocrystalline solar charger with silicone corner bumpers and anodized hinge.",
    "creativeRationale": "D2C product visualization demonstrating deployed charging vs compact storage. Direction: Pure white KeyShot studio with controlled specular sheen on solar cells.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Accurate photovoltaic cell grid shader a",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-18",
    "title": "Aurelia-II — Platinum & Emerald Necklace",
    "category": "animation",
    "categoryLabel": "Luxury & CGI",
    "client": "Haute Joaillerie Maison",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-18_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-18_view1.jpg",
      "/extracted_assets/behance/BA-18_view2.jpg"
    ],
    "summary": "Articulated platinum collar necklace set with step-cut Colombian emeralds and pavé diamond links.",
    "creativeRationale": "Photorealistic jewelry campaign render replacing physical macro photography. Direction: Velvet-black studio with pinpoint caustic light sources; 100mm macro at f/11.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Physically accurate emerald dispersion, ",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-19",
    "title": "Chrono-01 — Ceramic & Rose-Gold GMT Watch",
    "category": "animation",
    "categoryLabel": "Luxury & CGI",
    "client": "Swiss Horology Brand",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-19_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-19_view1.jpg",
      "/extracted_assets/behance/BA-19_view2.jpg"
    ],
    "summary": "40mm brushed black ceramic case with 18k rose-gold bezel, skeletonized dial, and sapphire exhibition caseback.",
    "creativeRationale": "Dual-sided horological packshot for collector lookbooks. Direction: Pure black studio with soft gradient lightboxes over domed sapphire crystal.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Multi-layered dial depth, Geneva stripin",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-20",
    "title": "Strata-Pro — Technical Trail-Running Sneaker",
    "category": "animation",
    "categoryLabel": "Luxury & CGI",
    "client": "Performance Footwear Brand",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-20_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-20_view1.jpg",
      "/extracted_assets/behance/BA-20_view2.jpg"
    ],
    "summary": "Engineered ripstop mesh upper with 3D-printed lattice midsole and aggressive Vibram-style lugged outsole.",
    "creativeRationale": "Pre-tooling footwear visualization for colorway sign-off and e-commerce. Direction: Clean white studio sweep with crisp directional shadow under tread.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Complex knit weave displacement and seam",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-21",
    "title": "Nocturne — Faceted Smoked-Amber Flacon",
    "category": "animation",
    "categoryLabel": "Luxury & CGI",
    "client": "Niche Fragrance House",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-21_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-21_view1.jpg",
      "/extracted_assets/behance/BA-21_view2.jpg"
    ],
    "summary": "Heavy architectural smoked-amber glass perfume bottle with turned brushed-brass magnetic cap.",
    "creativeRationale": "Luxury fragrance key visual and glass refraction study. Direction: Pure black studio with warm amber rim transmission through liquid volume.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Nested glass-to-liquid IOR boundaries an",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-22",
    "title": "Kinetica — Chrome & Dichroic Glass Sculpture",
    "category": "animation",
    "categoryLabel": "Luxury & CGI",
    "client": "Motion & Broadcast Design Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-22_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-22_view1.jpg",
      "/extracted_assets/behance/BA-22_view2.jpg"
    ],
    "summary": "Interlocking polished chrome tori and iridescent dichroic glass ribbons suspended in zero-gravity studio.",
    "creativeRationale": "Abstract CGI keyframe for luxury broadcast branding and motion design. Direction: Pure black void with sharp spectral caustics and mirror reflections.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Thin-film interference shaders without n",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-23",
    "title": "Botanica — Refillable Ceramic Cosmetic Jars",
    "category": "animation",
    "categoryLabel": "Luxury & CGI",
    "client": "Sustainable Skincare Brand",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-23_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-23_view1.jpg",
      "/extracted_assets/behance/BA-23_view2.jpg"
    ],
    "summary": "Matte bisque ceramic jar trio with anodized sage-green aluminum inner refill pods.",
    "creativeRationale": "Sustainable packaging launch visuals showing closed minimalism and open refill mechanics. Direction: Bright white studio with soft natural-feeling wrap shadows.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Subtle ceramic micro-porosity and creamy",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-24",
    "title": "Nordic-Villa — Concrete & Pine Courtyard",
    "category": "product",
    "categoryLabel": "Environments & ArchViz",
    "client": "Architectural Practice & Developer",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-24_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-24_view1.jpg",
      "/extracted_assets/behance/BA-24_view2.jpg"
    ],
    "summary": "Minimalist Scandinavian cantilevered concrete residence framing a birch and pine courtyard.",
    "creativeRationale": "Pre-construction architectural marketing exterior and interior continuity study. Direction: Soft overcast Nordic daylight; 24mm tilt-shift lens for vertical architectural lines.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Cohesive indoor-outdoor material palette",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-25",
    "title": "Atelier-K — Kyoto Hinoki Omakase Interior",
    "category": "product",
    "categoryLabel": "Environments & ArchViz",
    "client": "Hospitality & Interior Design Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-25_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-25_view1.jpg",
      "/extracted_assets/behance/BA-25_view2.jpg"
    ],
    "summary": "Intimate 8-seat Kyoto dining counter crafted from seamless Hinoki cypress, charred cedar, and washi pendants.",
    "creativeRationale": "Hospitality interior visualization for investor and landlord approval. Direction: Warm 2700K indirect cove and pendant lighting with tactile wood grain.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Accurate washi paper translucency and ha",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-26",
    "title": "Veloce-EV — Matte Gunmetal Concept Coupe",
    "category": "industrial",
    "categoryLabel": "Product & Industrial",
    "client": "EV Mobility Startup",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-26_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-26_view1.jpg",
      "/extracted_assets/behance/BA-26_view2.jpg"
    ],
    "summary": "Aerodynamic 2-door electric grand tourer finished in satin gunmetal with active carbon aero blades.",
    "creativeRationale": "Automotive studio reveal packshot for press kit and investor deck. Direction: Classic black automotive light-tunnel studio with sweeping overhead softbox reflections.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Class-A surfacing highlight flow across ",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-27",
    "title": "Orbital-X — DMLS Titanium Rocket Injector",
    "category": "industrial",
    "categoryLabel": "Aerospace & MedTech",
    "client": "Aerospace Propulsion Company",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-27_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-27_view1.jpg",
      "/extracted_assets/behance/BA-27_view2.jpg"
    ],
    "summary": "3D-printed DMLS titanium regenerative rocket thruster nozzle showing exposed conformal cooling channels.",
    "creativeRationale": "Engineering visualization for technical whitepapers and trade-show displays. Direction: Neutral white technical studio emphasizing raw sintered metal grain.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Clean cutaway geometry of internal latti",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-28",
    "title": "Mecha-Beetle — Articulated SLA Resin Print Kit",
    "category": "industrial",
    "categoryLabel": "Aerospace & MedTech",
    "client": "3D Printing & Designer Toy Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-28_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-28_view1.jpg",
      "/extracted_assets/behance/BA-28_view2.jpg"
    ],
    "summary": "Matte grey SLA resin mechanical stag beetle designed with keyed ball-joints for support-free printing.",
    "creativeRationale": "Print-ready kit demonstration showing assembled pose alongside exploded keyed parts. Direction: Clean white studio showing authentic matte photopolymer resin finish.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Consistent part counts and mechanical pe",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-29",
    "title": "NeuroLink — Cortical Micro-Electrode Array",
    "category": "industrial",
    "categoryLabel": "Aerospace & MedTech",
    "client": "Neural-Tech & Medical Device Startup",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-29_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-29_view1.jpg",
      "/extracted_assets/behance/BA-29_view2.jpg"
    ],
    "summary": "Flexible translucent polyimide neural ribbon implant with micron-scale gold-plated contact pads.",
    "creativeRationale": "Scientific investor visual and medical device mechanism-of-action illustration. Direction: Dark laboratory macro studio; 100mm macro lens at f/11.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Sub-millimeter gold trace reflections ag",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "ba-30",
    "title": "Titan-Grip — Carbon & Titanium Prosthetic Hand",
    "category": "industrial",
    "categoryLabel": "Aerospace & MedTech",
    "client": "Bionics & MedTech Manufacturer",
    "year": "2026",
    "heroImage": "/extracted_assets/behance/BA-30_view1.jpg",
    "galleryImages": [
      "/extracted_assets/behance/BA-30_view1.jpg",
      "/extracted_assets/behance/BA-30_view2.jpg"
    ],
    "summary": "Myoelectric bionic hand combining woven carbon-fiber palm shell with machined titanium finger linkages.",
    "creativeRationale": "Flagship MedTech product campaign highlighting mechanical dexterity. Direction: Pure black studio with crisp rim lights defining finger articulation.",
    "deliverables": [
      "Hero High-Poly Concept Mesh",
      "Substance 3D Painted PBR Maps",
      "Cinematic Beauty Frames & Turntable"
    ],
    "materials": [
      "Weathered Ballistic Polymer",
      "Damascus Titanium",
      "Tactical Cerakote"
    ],
    "software": [
      "Blender",
      "ZBrush",
      "Substance 3D",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Believable four-bar linkage geometry in ",
      "topologyType": "Clean Sub-D Quad Distribution",
      "textureResolution": "8K PBR Textures",
      "engineCompatibility": "Unreal Engine 5.5, Blender, Marmoset"
    },
    "featured": false
  },
  {
    "id": "sc-01",
    "title": "Arthur — Grandfather Memorial Portrait Bust",
    "category": "3dprint",
    "categoryLabel": "Human Head & Bust Replications",
    "client": "Private Family Commission",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-01_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-01_view1.jpg",
      "/extracted_assets/sculpture/SC-01_view2.jpg",
      "/extracted_assets/sculpture/SC-01_view3.jpg",
      "/extracted_assets/sculpture/SC-01_view4.jpg"
    ],
    "summary": "1:1 likeness portrait bust sculpted from a single candid kitchen-table smartphone photo, preserving wire-rimmed glasses and knit cardigan texture.",
    "creativeRationale": "Heirloom family memorial sculpture and bronze-finish keepsake. Pipeline: Candid iPhone Reference -> ZBrush Likeness Sculpt -> KeyShot Cast-Bronze Render -> Physical Bronze-Patina SLA 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Bronze-Patina SLA Resin (18 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": true
  },
  {
    "id": "sc-02",
    "title": "Maya — Contemporary Portrait Bust",
    "category": "3dprint",
    "categoryLabel": "Human Head & Bust Replications",
    "client": "Private Portrait Commission",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-02_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-02_view1.jpg",
      "/extracted_assets/sculpture/SC-02_view2.jpg",
      "/extracted_assets/sculpture/SC-02_view3.jpg",
      "/extracted_assets/sculpture/SC-02_view4.jpg"
    ],
    "summary": "Fine-detail portrait bust capturing curly hair strands, subtle smile asymmetry, and denim jacket collar from an overcast outdoor snapshot.",
    "creativeRationale": "Bespoke portrait sculpture demonstrating high-resolution hair strand sculpting for SLA printing. Pipeline: Candid iPhone Reference -> ZBrush Likeness Sculpt -> KeyShot Carrara Marble Render -> Physical Matte SLA 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Matte White-Grey SLA Resin (16 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-03",
    "title": "Coach Miller — Retirement Portrait Bust",
    "category": "3dprint",
    "categoryLabel": "Human Head & Bust Replications",
    "client": "Athletic Department Gift",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-03_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-03_view1.jpg",
      "/extracted_assets/sculpture/SC-03_view2.jpg",
      "/extracted_assets/sculpture/SC-03_view3.jpg",
      "/extracted_assets/sculpture/SC-03_view4.jpg"
    ],
    "summary": "Full-color painted portrait bust capturing sun-weathered skin lines, salt-and-pepper beard, and washed forest-green polo from a porch snapshot.",
    "creativeRationale": "Executive/coach retirement gift ready for desk display. Pipeline: Candid iPhone Reference -> ZBrush Likeness Sculpt -> KeyShot Painted Polystone Render -> Physical Hand-Painted 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Hand-Painted 1/6 Scale Polystone Resin"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-04",
    "title": "Elena — Classical Portrait Bust",
    "category": "3dprint",
    "categoryLabel": "Human Head & Bust Replications",
    "client": "Private Collector / Music Conservatory",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-04_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-04_view1.jpg",
      "/extracted_assets/sculpture/SC-04_view2.jpg",
      "/extracted_assets/sculpture/SC-04_view3.jpg",
      "/extracted_assets/sculpture/SC-04_view4.jpg"
    ],
    "summary": "Warm-expression portrait bust sculpted from an indoor living room snapshot, preserving knit sweater rib patterns and draped scarf folds.",
    "creativeRationale": "Raw cured SLA master print and bronze-casting foundry pattern. Pipeline: Candid iPhone Reference -> ZBrush Likeness Sculpt -> KeyShot Aged Bronze Render -> Physical Cured SLA Resin Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Warm-Grey SLA Photopolymer Resin (18 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-05",
    "title": "Leo & Sam — Anniversary Couple Figurine",
    "category": "3dprint",
    "categoryLabel": "Full-Body Human Replications",
    "client": "Wedding & Anniversary Keepsake Client",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-05_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-05_view1.jpg",
      "/extracted_assets/sculpture/SC-05_view2.jpg",
      "/extracted_assets/sculpture/SC-05_view3.jpg",
      "/extracted_assets/sculpture/SC-05_view4.jpg"
    ],
    "summary": "Dual full-body miniature figurine sculpted from a casual park snapshot, preserving olive bomber jacket, floral sundress, and sneakers.",
    "creativeRationale": "Custom wedding cake-topper and anniversary shelf keepsake. Pipeline: Candid iPhone Reference -> ZBrush Full-Body Sculpt -> KeyShot Painted Resin Render -> Physical Full-Color 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Full-Color Painted SLA Resin (15 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-06",
    "title": "Marcus — Marathon Finisher Figurine",
    "category": "3dprint",
    "categoryLabel": "Full-Body Human Replications",
    "client": "Endurance Sports Trophy Client",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-06_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-06_view1.jpg",
      "/extracted_assets/sculpture/SC-06_view2.jpg",
      "/extracted_assets/sculpture/SC-06_view3.jpg",
      "/extracted_assets/sculpture/SC-06_view4.jpg"
    ],
    "summary": "Full-body athletic figurine sculpted from a street-side race-day snapshot, capturing muscle definition, singlet folds, and running shoes.",
    "creativeRationale": "Personalized marathon milestone trophy in metallic pewter resin finish. Pipeline: Candid iPhone Reference -> ZBrush Full-Body Sculpt -> KeyShot Pewter/Bronze Render -> Physical Metallic-Grey 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Dark Metallic-Grey SLA Resin (16 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-07",
    "title": "Hana — Graduation Keepsake Figurine",
    "category": "3dprint",
    "categoryLabel": "Full-Body Human Replications",
    "client": "Private Family Gift",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-07_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-07_view1.jpg",
      "/extracted_assets/sculpture/SC-07_view2.jpg",
      "/extracted_assets/sculpture/SC-07_view3.jpg",
      "/extracted_assets/sculpture/SC-07_view4.jpg"
    ],
    "summary": "Full-body portrait figurine sculpted from a sunny backyard snapshot, preserving crewneck knit texture, straight jeans, and hardcover sketchbook.",
    "creativeRationale": "Custom graduation desk keepsake. Pipeline: Candid iPhone Reference -> ZBrush Full-Body Sculpt -> KeyShot Painted Resin Render -> Physical Hand-Painted 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Hand-Painted Satin SLA Resin (15 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-08",
    "title": "Barnaby — Golden Retriever Portrait Sculpture",
    "category": "3dprint",
    "categoryLabel": "Pet Sculpture Replications",
    "client": "Pet Memorial & Keepsake Client",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-08_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-08_view1.jpg",
      "/extracted_assets/sculpture/SC-08_view2.jpg",
      "/extracted_assets/sculpture/SC-08_view3.jpg",
      "/extracted_assets/sculpture/SC-08_view4.jpg"
    ],
    "summary": "Sitting golden retriever sculpture crafted from an indoor living-room snapshot, preserving feathered chest fur clumps and red nylon collar.",
    "creativeRationale": "Lifelike painted pet keepsake figurine for home office display. Pipeline: Candid iPhone Reference -> ZBrush Fur & Anatomy Sculpt -> KeyShot Painted Render -> Physical Hand-Painted 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Hand-Painted Polystone Resin (14 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-09",
    "title": "Miso — Tabby Cat Sitting Sculpture",
    "category": "3dprint",
    "categoryLabel": "Pet Sculpture Replications",
    "client": "Pet Owner Commission",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-09_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-09_view1.jpg",
      "/extracted_assets/sculpture/SC-09_view2.jpg",
      "/extracted_assets/sculpture/SC-09_view3.jpg",
      "/extracted_assets/sculpture/SC-09_view4.jpg"
    ],
    "summary": "Sitting tabby cat sculpture modeled from a casual sofa snapshot, capturing subtle head tilt, pointed ears, and directional fur flow.",
    "creativeRationale": "Minimalist bisque-style monochrome pet sculpture in cured off-white SLA resin. Pipeline: Candid iPhone Reference -> ZBrush Fur & Anatomy Sculpt -> KeyShot Bisque Ceramic Render -> Physical Matte SLA 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Matte Off-White SLA Resin (12 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-10",
    "title": "Rocky — French Bulldog Full-Body Keepsake",
    "category": "3dprint",
    "categoryLabel": "Pet Sculpture Replications",
    "client": "Pet Owner Commission",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture/SC-10_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture/SC-10_view1.jpg",
      "/extracted_assets/sculpture/SC-10_view2.jpg",
      "/extracted_assets/sculpture/SC-10_view3.jpg",
      "/extracted_assets/sculpture/SC-10_view4.jpg"
    ],
    "summary": "Standing brindle-and-white French bulldog sculpture crafted from a backyard lawn snapshot, preserving bat ears, muzzle folds, and tan leather collar.",
    "creativeRationale": "Custom hand-painted pet replica figurine. Pipeline: Candid iPhone Reference -> ZBrush Anatomy Sculpt -> KeyShot Painted Polystone Render -> Physical Hand-Painted 3D Print.",
    "deliverables": [
      "Watertight 100% Manifold STL / 3MF Archives",
      "Keyed & Pegged Multi-Part Print Assembly",
      "High-Resolution ZBrush Dynamesh Masters"
    ],
    "materials": [
      "Hand-Painted SLA Resin (14 cm)"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "PreForm",
      "Lychee Slicer"
    ],
    "technicalSpecs": {
      "polycount": "6M–12M Dynamic Quads / Decimated Manifold Solid",
      "topologyType": "Watertight 100% Manifold Solid Mesh",
      "textureResolution": "Micron-Toleranced Physical Displacement",
      "engineCompatibility": "SLA Formlabs, SLS EOS, ZBrush"
    },
    "featured": false
  },
  {
    "id": "sc-11",
    "title": "Tariq — Classical Square-Plinth Portrait Bust",
    "category": "3dprint",
    "categoryLabel": "SLA Resin Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-11_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-11_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-11_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-11_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-11_view4.jpg"
    ],
    "summary": "1:1 likeness bust sculpted from a low-res living-room snapshot, preserving thick-rimmed glasses, short beard, and crew-neck folds.",
    "creativeRationale": "Approach: Classical Straight-Shoulder Bust + Stepped Architectural Plinth. Process: SLA Matte Light-Grey Photopolymer Resin",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-12",
    "title": "Nadia — 2.5D Bas-Relief Portrait Medallion",
    "category": "3dprint",
    "categoryLabel": "FDM Filament Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-12_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-12_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-12_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-12_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-12_view4.jpg"
    ],
    "summary": "Shallow-depth 2.5D relief portrait sculpted from a WhatsApp-compressed outdoor snapshot inside a beveled circular frame.",
    "creativeRationale": "Approach: Circular 2.5D Bas-Relief Medallion Plaque. Process: FDM Matte Bone-White PLA (Visible Layer Lines)",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-13",
    "title": "Buster — Stylized Simplified Terrier Figurine",
    "category": "3dprint",
    "categoryLabel": "FDM Filament Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-13_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-13_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-13_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-13_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-13_view4.jpg"
    ],
    "summary": "Charming simplified terrier sculpture translating a dim, slightly blurry couch photo into clean chunky fur shapes.",
    "creativeRationale": "Approach: Stylized / Simplified Toy-Like Sculpt on Hex Base. Process: FDM Matte Terracotta PLA on Textured PEI Plate",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-14",
    "title": "Devon — Planar Faceted Portrait Study Bust",
    "category": "3dprint",
    "categoryLabel": "FDM Filament Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-14_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-14_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-14_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-14_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-14_view4.jpg"
    ],
    "summary": "Chiseled planar portrait bust sculpted from a dim bedroom webcam selfie, eliminating pedestal clutter for a clean desk-bust cut.",
    "creativeRationale": "Approach: Asaro-Inspired Planar Anatomical Facets (Flat-Bottomed). Process: FDM Matte Black PLA (Visible Layer Lines)",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-15",
    "title": "Grandma Rose — Oval Cameo Wall-Plaque Relief",
    "category": "3dprint",
    "categoryLabel": "SLA Resin Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-15_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-15_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-15_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-15_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-15_view4.jpg"
    ],
    "summary": "Classical oval wall-plaque relief sculpted from a warm-lit indoor family snapshot, capturing glasses and fine facial wrinkles.",
    "creativeRationale": "Approach: Oval Wall-Hanging 2.5D Cameo Bas-Relief Plaque. Process: SLA Matte Warm-Beige Photopolymer Resin",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-16",
    "title": "Koda — Curled Sleeping Husky Sculpture",
    "category": "3dprint",
    "categoryLabel": "FDM Filament Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-16_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-16_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-16_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-16_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-16_view4.jpg"
    ],
    "summary": "Resting curled husky sculpture modeled from a standing-height kitchen tile snapshot, printed support-minimal in marble PLA.",
    "creativeRationale": "Approach: Organic Flat-Bottomed Sleeping Pose (No Separate Plinth). Process: FDM Marble-Speckled Off-White PLA",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-17",
    "title": "Owen — 1/12 Scale Backpacker Miniature",
    "category": "3dprint",
    "categoryLabel": "SLA Resin Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-17_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-17_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-17_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-17_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-17_view4.jpg"
    ],
    "summary": "Small-scale full-body hiker miniature sculpted from a casual trailhead phone photo, preserving cap, flannel, and backpack straps.",
    "creativeRationale": "Approach: 1/12 Scale Tabletop Full-Body Miniature on Thin Disc. Process: SLA Matte Dark-Grey Photopolymer Resin",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-18",
    "title": "Cleo — Low-Poly Geometric Faceted Cat",
    "category": "3dprint",
    "categoryLabel": "FDM Filament Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-18_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-18_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-18_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-18_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-18_view4.jpg"
    ],
    "summary": "Minimalist geometric low-poly cat sculpture translating a backlit windowsill phone photo into crisp flat triangular planes.",
    "creativeRationale": "Approach: Intentional Low-Poly Triangular Facet Sculpture. Process: FDM Matte Pure White PLA (Visible Layer Lines)",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-19",
    "title": "Samira — Diagonal-Cut Pin-Stand Bust",
    "category": "3dprint",
    "categoryLabel": "SLA Resin Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-19_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-19_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-19_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-19_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-19_view4.jpg"
    ],
    "summary": "Modern gallery-style diagonal-cut portrait bust sculpted from a flat-lit office hallway phone photo.",
    "creativeRationale": "Approach: Minimalist Diagonal-Cut Bust on Vertical Pin Stand. Process: SLA Matte Cool-Grey Photopolymer Resin",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  },
  {
    "id": "sc-20",
    "title": "Bruno — Bulky Bulldog Octagonal-Base Bust",
    "category": "3dprint",
    "categoryLabel": "FDM Filament Prints",
    "client": "Fine Art & Physical Casting Studio",
    "year": "2026",
    "heroImage": "/extracted_assets/sculpture_mono/SC-20_view1.jpg",
    "galleryImages": [
      "/extracted_assets/sculpture_mono/SC-20_view1.jpg",
      "/extracted_assets/sculpture_mono/SC-20_view2.jpg",
      "/extracted_assets/sculpture_mono/SC-20_view3.jpg",
      "/extracted_assets/sculpture_mono/SC-20_view4.jpg"
    ],
    "summary": "Stocky English bulldog bust sculpted from a cracked-patio snapshot, preserving deep muzzle wrinkles and collar D-ring.",
    "creativeRationale": "Approach: Heavy Head-and-Chest Bust on Flat Octagonal Base. Process: FDM Matte Slate-Grey PLA on Textured PEI Plate",
    "deliverables": [
      "Watertight STL & 3MF Slicing Files",
      "Keyed Multi-Section Alignment Pegs",
      "Zero-Overhang Optimized Print Orientation"
    ],
    "materials": [
      "High-Density Grey Ceramic Resin",
      "Cire Perdue Lost-Wax Master"
    ],
    "software": [
      "ZBrush",
      "Blender",
      "Magics",
      "KeyShot"
    ],
    "technicalSpecs": {
      "polycount": "Watertight Manifold Solid (Zero Intersecting Shells)",
      "topologyType": "Watertight 100% Manifold Shell",
      "textureResolution": "Physical Micro-Cavity Surface Detailing",
      "engineCompatibility": "SLA, SLS, DLP, Investment Casting"
    },
    "featured": false
  }
];
