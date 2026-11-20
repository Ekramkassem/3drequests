import React from 'react';

/**
 * High-detail 3D-shaded transparent cutout artifacts representing the 7 core
 * 3D Requests disciplines (Product CAD, 3D Printing Lattice, Character Sculpting,
 * Mechanical STEP Assemblies, Game-Ready Relics, Liquid Chrome Motion, and 8K LookDev).
 * Crafted in the 3D Requests SVZ palette (#080808, #171617, #fcfcfc, #d4d2d2, #fe1e34, #e2b17a).
 */

/** 01. Tactile Hardware Synthesizer & Knurled Rotary CAD Unibody */
export const TactileSynthesizerCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_30px_42px_rgba(0,0,0,0.55)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="aluChassis" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38383C" />
        <stop offset="48%" stopColor="#1E1E22" />
        <stop offset="100%" stopColor="#0B0B0D" />
      </linearGradient>
      <linearGradient id="aluTopPlate" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F3F0" />
        <stop offset="55%" stopColor="#C9C6C1" />
        <stop offset="100%" stopColor="#8C8984" />
      </linearGradient>
      <radialGradient id="crimsonEncoder" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FF5C6C" />
        <stop offset="55%" stopColor="#FE1E34" />
        <stop offset="100%" stopColor="#8F0815" />
      </radialGradient>
      <radialGradient id="darkEncoder" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#4A4A4F" />
        <stop offset="60%" stopColor="#1B1B1E" />
        <stop offset="100%" stopColor="#08080A" />
      </radialGradient>
    </defs>

    {/* Isometric 3D CNC Milled Unibody Base */}
    <g transform="translate(16, 36) rotate(-6)">
      {/* Deep Extruded Aluminum Shadow Side */}
      <rect x="14" y="42" width="284" height="220" rx="28" fill="#070708" />
      <rect x="18" y="32" width="284" height="216" rx="26" fill="url(#aluChassis)" stroke="#3F3E42" strokeWidth="2" />

      {/* Brushed Anodized Top Deck */}
      <rect x="30" y="44" width="260" height="188" rx="20" fill="url(#aluTopPlate)" />

      {/* OLED Waveform Telemetry Screen */}
      <rect x="48" y="62" width="136" height="68" rx="10" fill="#09090B" stroke="#262525" strokeWidth="2" />
      <path
        d="M58 102C72 102 76 76 88 76C100 76 104 114 116 114C128 114 132 82 144 82C156 82 162 98 174 98"
        stroke="#FE1E34"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text x="60" y="76" fill="#D4D2D2" fontSize="8" fontFamily="monospace" fontWeight="700">
        CAD // 0.02MM STEP
      </text>

      {/* 3D Knurled Rotary Encoders (Arterial Red Master + 2 Anodized Dials) */}
      <g transform="translate(216, 76)">
        <circle cx="24" cy="24" r="26" fill="#0E0E10" />
        <circle cx="24" cy="20" r="23" fill="url(#crimsonEncoder)" />
        <rect x="22" y="2" width="4" height="12" rx="2" fill="#FFFFFF" />
      </g>

      {/* Bottom Row Tactile Mechanical Keys & Faders */}
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <g key={idx} transform={`translate(${48 + idx * 38}, 148)`}>
          <rect x="0" y="6" width="30" height="64" rx="7" fill="#18181B" />
          <rect
            x="2"
            y="0"
            width="26"
            height="58"
            rx="6"
            fill={idx === 0 ? '#FE1E34' : '#F3EFEF'}
            stroke="#B5B2B2"
            strokeWidth="1"
          />
          <circle
            cx="15"
            cy="12"
            r="2.5"
            fill={idx === 0 ? '#FFFFFF' : '#FE1E34'}
          />
        </g>
      ))}
    </g>
  </svg>
);

/** 02. Biomorphic SLA 3D-Printed Gyroid Lattice Sphere */
export const BiomorphicLatticeCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 300 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_28px_38px_rgba(0,0,0,0.55)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="slaResinOuter" cx="36%" cy="30%" r="68%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="48%" stopColor="#E5E2DC" />
        <stop offset="85%" stopColor="#9E9B95" />
        <stop offset="100%" stopColor="#4A4845" />
      </radialGradient>
      <radialGradient id="crimsonCoreGlow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#FF5263" />
        <stop offset="55%" stopColor="#FE1E34" />
        <stop offset="100%" stopColor="#3B040A" />
      </radialGradient>
    </defs>

    {/* Internal Glowing Arterial Core */}
    <circle cx="150" cy="154" r="78" fill="url(#crimsonCoreGlow)" />

    {/* Outer Interlocking Gyroid / Voronoï Manifold Ribs */}
    <circle cx="150" cy="154" r="108" stroke="url(#slaResinOuter)" strokeWidth="18" />
    <ellipse
      cx="150"
      cy="154"
      rx="108"
      ry="48"
      transform="rotate(-32 150 154)"
      stroke="url(#slaResinOuter)"
      strokeWidth="16"
    />
    <ellipse
      cx="150"
      cy="154"
      rx="108"
      ry="48"
      transform="rotate(32 150 154)"
      stroke="url(#slaResinOuter)"
      strokeWidth="16"
    />
    <ellipse
      cx="150"
      cy="154"
      rx="46"
      ry="108"
      stroke="url(#slaResinOuter)"
      strokeWidth="15"
    />

    {/* Precision Nodes & Specular Highlights */}
    {[
      { cx: 150, cy: 46, r: 12 },
      { cx: 150, cy: 262, r: 12 },
      { cx: 58, cy: 102, r: 11 },
      { cx: 242, cy: 102, r: 11 },
      { cx: 58, cy: 206, r: 11 },
      { cx: 242, cy: 206, r: 11 },
      { cx: 150, cy: 154, r: 16 },
    ].map((n, i) => (
      <g key={i}>
        <circle cx={n.cx} cy={n.cy} r={n.r} fill="#F3EFEF" />
        <circle cx={n.cx - 3} cy={n.cy - 3} r={n.r * 0.35} fill="#FE1E34" />
      </g>
    ))}

    {/* SLA Build Plate Pedestal */}
    <path d="M92 276H208L222 296H78L92 276Z" fill="#262525" stroke="#525252" strokeWidth="1.5" />
    <text x="150" y="290" textAnchor="middle" fill="#FCFCFC" fontSize="8" fontFamily="monospace" fontWeight="700">
      .STL // 100% MANIFOLD
    </text>
  </svg>
);

/** 03. Etherea Cybernetic Sculptural Bust (Smoked Glass & 24k Gold Armature) */
export const SculpturalBustCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 300 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="obsidianPorcelain" cx="40%" cy="30%" r="68%">
        <stop offset="0%" stopColor="#48474C" />
        <stop offset="50%" stopColor="#1F1E22" />
        <stop offset="100%" stopColor="#09090B" />
      </radialGradient>
      <linearGradient id="champagneGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2D6" />
        <stop offset="45%" stopColor="#E2B17A" />
        <stop offset="100%" stopColor="#8F6130" />
      </linearGradient>
    </defs>

    {/* Gallery Plinth Pedestal */}
    <rect x="86" y="284" width="128" height="34" rx="6" fill="#141315" stroke="#393939" strokeWidth="2" />
    <path d="M74 284C92 242 208 242 226 284H74Z" fill="url(#obsidianPorcelain)" />

    {/* Neck & Exposed Gold Mechanical Tendons */}
    <rect x="124" y="210" width="52" height="54" rx="18" fill="url(#champagneGold)" />
    <path d="M132 214V260M150 214V262M168 214V260" stroke="#141315" strokeWidth="4" />

    {/* Sculpted Classical-Futurist Cranium */}
    <path
      d="M78 130C78 72 108 40 150 40C192 40 222 72 222 130C222 188 188 232 150 232C112 232 78 188 78 130Z"
      fill="url(#obsidianPorcelain)"
      stroke="#393939"
      strokeWidth="1.5"
    />

    {/* Sub-D Quad Topology Wireframe Overlay Lines on Left Half of Face */}
    <path
      d="M150 40V232M96 96H204M82 136H218M94 176H206M116 52C102 110 104 170 150 232M184 52C198 110 196 170 150 232"
      stroke="rgba(226,177,122,0.32)"
      strokeWidth="1.2"
    />

    {/* Glowing Arterial Crimson Visor Slit */}
    <rect x="96" y="116" width="108" height="14" rx="7" fill="#FE1E34" />
    <rect x="108" y="119" width="44" height="4" rx="2" fill="#FFFFFF" opacity="0.85" />

    {/* Gold Crown Halo Arc */}
    <path
      d="M66 118C66 64 104 24 150 24C196 24 234 64 234 118"
      stroke="url(#champagneGold)"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

/** 04. Exploded Planetary CAD Gear & Precision Shaft Assembly */
export const ExplodedCadGearCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_28px_38px_rgba(0,0,0,0.55)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="titaniumRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F7F7F8" />
        <stop offset="50%" stopColor="#B8BBC2" />
        <stop offset="100%" stopColor="#5E626B" />
      </linearGradient>
      <linearGradient id="crimsonAnodized" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4F61" />
        <stop offset="55%" stopColor="#FE1E34" />
        <stop offset="100%" stopColor="#8A0714" />
      </linearGradient>
    </defs>

    {/* Exploded Axis Alignment Dashed Line */}
    <line
      x1="54"
      y1="276"
      x2="268"
      y2="62"
      stroke="#FE1E34"
      strokeWidth="2.5"
      strokeDasharray="6 6"
    />

    {/* Back Milled Housing Flange */}
    <g transform="translate(46, 152) rotate(-18)">
      <circle cx="80" cy="80" r="68" fill="#18181C" stroke="#525252" strokeWidth="4" />
      <circle cx="80" cy="80" r="38" fill="#08080A" stroke="#FE1E34" strokeWidth="2.5" />
    </g>

    {/* Middle Precision Helical Titanium Gear */}
    <g transform="translate(88, 92)">
      <circle cx="76" cy="76" r="64" fill="url(#titaniumRing)" stroke="#171617" strokeWidth="4" />
      <circle cx="76" cy="76" r="44" fill="#171617" />
      <circle cx="76" cy="76" r="24" fill="url(#crimsonAnodized)" />
      <circle cx="76" cy="76" r="10" fill="#080808" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="68"
          y="2"
          width="16"
          height="14"
          rx="3"
          transform={`rotate(${deg} 76 76)`}
          fill="#D4D2D2"
        />
      ))}
    </g>

    {/* Front Anodized Crimson Retaining Collar */}
    <g transform="translate(158, 38)">
      <circle cx="54" cy="54" r="38" fill="url(#crimsonAnodized)" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="54" cy="54" r="18" fill="#080808" />
    </g>
  </svg>
);

/** 05. Molten Liquid Chrome & Arterial Glass Torus Sculpture */
export const LiquidChromeSculptureCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 360 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="liquidMercury" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="28%" stopColor="#D4D6DC" />
        <stop offset="52%" stopColor="#2E3036" />
        <stop offset="78%" stopColor="#F3F4F6" />
        <stop offset="100%" stopColor="#141518" />
      </linearGradient>
      <radialGradient id="arterialSphere" cx="35%" cy="30%" r="68%">
        <stop offset="0%" stopColor="#FF7A88" />
        <stop offset="45%" stopColor="#FE1E34" />
        <stop offset="100%" stopColor="#5E040D" />
      </radialGradient>
    </defs>

    {/* Outer Sweeping Molten Chrome Ribbon */}
    <path
      d="M66 218C30 144 86 58 176 64C266 70 318 156 276 232C234 308 118 302 92 236C72 184 122 122 184 128C238 134 256 196 212 228"
      stroke="url(#liquidMercury)"
      strokeWidth="42"
      strokeLinecap="round"
    />

    {/* Suspended Arterial Crimson Refractive Spheres */}
    <circle cx="182" cy="182" r="44" fill="url(#arterialSphere)" />
    <ellipse
      cx="166"
      cy="164"
      rx="14"
      ry="8"
      transform="rotate(-25 166 164)"
      fill="rgba(255,255,255,0.75)"
    />

    <circle cx="88" cy="112" r="24" fill="url(#arterialSphere)" />
    <circle cx="81" cy="104" r="6" fill="rgba(255,255,255,0.7)" />

    <circle cx="278" cy="124" r="20" fill="url(#liquidMercury)" />
  </svg>
);

/** 06. Chrono-Core Game-Ready Hero Artifact (Unreal 5 Nanite Prop) */
export const ChronoCoreArtifactCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 330"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_28px_38px_rgba(0,0,0,0.55)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="agedBronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D3A6" />
        <stop offset="50%" stopColor="#C48B4E" />
        <stop offset="100%" stopColor="#5C3B18" />
      </linearGradient>
      <radialGradient id="corePlasma" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#FE1E34" />
        <stop offset="100%" stopColor="#2B0206" />
      </radialGradient>
    </defs>

    {/* Outer Gimbal Ring */}
    <circle
      cx="160"
      cy="165"
      r="116"
      stroke="url(#agedBronze)"
      strokeWidth="16"
    />
    {/* Tilted Inner Gimbal Ring */}
    <ellipse
      cx="160"
      cy="165"
      rx="92"
      ry="52"
      transform="rotate(-28 160 165)"
      stroke="#E4E2DD"
      strokeWidth="12"
    />
    <ellipse
      cx="160"
      cy="165"
      rx="92"
      ry="52"
      transform="rotate(34 160 165)"
      stroke="url(#agedBronze)"
      strokeWidth="10"
    />

    {/* Central Luminescent Energy Core */}
    <circle cx="160" cy="165" r="46" fill="url(#corePlasma)" />
    <circle cx="146" cy="150" r="10" fill="#FFFFFF" opacity="0.85" />
  </svg>
);

/** 07. 8K Studio LookDev Render Monolith & Viewport Frame */
export const LookDevViewportCutout: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 380 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_30px_42px_rgba(0,0,0,0.6)] select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="monitorBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2C2B2E" />
        <stop offset="55%" stopColor="#151416" />
        <stop offset="100%" stopColor="#070708" />
      </linearGradient>
      <linearGradient id="arterialScreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FE1E34" />
        <stop offset="100%" stopColor="#A60A19" />
      </linearGradient>
    </defs>

    {/* Floating Chrome Shader Calibration Spheres (Top Right) */}
    <g transform="translate(248, 16)">
      <circle cx="48" cy="48" r="40" fill="#E4E5E9" stroke="#525252" strokeWidth="2" />
      <circle cx="36" cy="34" r="12" fill="#FFFFFF" />
      <circle cx="84" cy="96" r="28" fill="#FE1E34" />
      <circle cx="76" cy="88" r="8" fill="#FFFFFF" opacity="0.8" />
    </g>

    {/* 3D Studio Viewport Display Chassis */}
    <g transform="translate(12, 106) rotate(6)">
      <rect x="6" y="12" width="276" height="206" rx="28" fill="#050506" />
      <rect
        x="18"
        y="0"
        width="272"
        height="204"
        rx="26"
        fill="url(#monitorBody)"
        stroke="#393939"
        strokeWidth="2.5"
      />
      <rect x="36" y="18" width="236" height="142" rx="16" fill="url(#arterialScreen)" />

      {/* Crisp Studio Typography Inside Screen */}
      <text
        x="154"
        y="58"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="11"
        fontWeight="700"
        fontFamily="monospace"
        letterSpacing="0.18em"
      >
        3D REQUESTS // ATELIER
      </text>
      <text
        x="154"
        y="94"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="26"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="-0.03em"
      >
        BESPOKE 3D
      </text>
      <text
        x="154"
        y="124"
        textAnchor="middle"
        fill="#080808"
        fontSize="26"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="-0.03em"
      >
        ENGINEERED.
      </text>

      {/* Bottom Viewport Status Bar */}
      <circle cx="52" cy="182" r="5" fill="#FE1E34" />
      <circle cx="70" cy="182" r="5" fill="#D4D2D2" />
      <text x="90" y="185" fill="#B5B2B2" fontSize="9" fontFamily="monospace" fontWeight="700">
        STEP · STL · FBX · 8K EXR
      </text>
    </g>
  </svg>
);
