import { DesignRequestForm, PortfolioCategory, ProjectItem, ValidationResult } from '../types.ts';

/**
 * Validates the creative briefing form.
 * Ensures the studio receives clear, actionable project parameters.
 */
export function validateDesignRequest(data: Partial<DesignRequestForm>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a primary project discipline.';
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name or studio lead name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'A valid business or studio contact email is required.';
  }

  if (!data.budgetRange || data.budgetRange.trim() === '') {
    errors.budgetRange = 'Please select an estimated budget allocation.';
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 15) {
    errors.projectDescription = 'Please describe your 3D requirements in at least 15 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters curated portfolio projects based on category and optional search term.
 */
export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: PortfolioCategory,
  searchQuery?: string
): ProjectItem[] {
  let filtered = projects;

  if (category !== 'all') {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (searchQuery && searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.materials.some((m) => m.toLowerCase().includes(q)) ||
        p.software.some((s) => s.toLowerCase().includes(q))
    );
  }

  return filtered;
}
