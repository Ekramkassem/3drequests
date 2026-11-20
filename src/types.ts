export type PageType = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

export type PortfolioCategory =
  | 'all'
  | 'product'
  | 'character'
  | 'industrial'
  | 'game-assets'
  | '3dprint'
  | 'animation'
  | 'architecture'
  | 'experimental';

export interface ProjectItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  client: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  creativeRationale: string;
  deliverables: string[];
  materials: string[];
  dimensions?: string;
  software: string[];
  technicalSpecs: {
    polycount: string;
    topologyType: string;
    textureResolution: string;
    engineCompatibility: string;
  };
  featured?: boolean;
}

export interface CreativeCapability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  previewImage: string;
  deliverables: string[];
  disciplines: string[];
  featured?: boolean;
}

export interface DetailedService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  suitableFor: string;
  timeline: string;
  startingRange: string;
  softwareStack: string[];
}

export interface StudioApproachStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverableSummary: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
}

export interface DesignRequestForm {
  projectType: string;
  projectDescription: string;
  referenceLinks: string;
  desiredOutcome: string;
  fileAttachmentName?: string;
  budgetRange: string;
  desiredTimeline: string;
  additionalRequirements: string;
  name: string;
  email: string;
  preferredChannel?: string;
  company: string;
  requiresNda: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
