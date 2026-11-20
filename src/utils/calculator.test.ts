import test from 'node:test';
import assert from 'node:assert/strict';
import { validateDesignRequest, filterProjectsByCategory } from './calculator.ts';
import { ProjectItem } from '../types.ts';

test('validateDesignRequest catches incomplete forms', () => {
  const result = validateDesignRequest({
    name: '',
    email: 'invalid-email',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.projectType);
  assert.ok(result.errors.budgetRange);
});

test('validateDesignRequest accepts well-formed briefing requests', () => {
  const result = validateDesignRequest({
    name: 'Elena Rostova',
    email: 'elena@archstudio.design',
    projectType: 'Product Design',
    budgetRange: '$12k - $25k',
    projectDescription: 'Parametric audio synthesizer enclosure with knurled knobs and copper cooling vents.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterProjectsByCategory correctly filters by discipline and keywords', () => {
  const mockProjects: ProjectItem[] = [
    {
      id: '1',
      title: 'Synthesizer Enclosure',
      category: 'product',
      categoryLabel: 'Product Design',
      client: 'Korg',
      year: '2026',
      heroImage: '/mock.jpg',
      galleryImages: [],
      summary: 'Knurled aluminum housing',
      creativeRationale: 'Tactile feel',
      deliverables: ['STEP', 'IGES'],
      materials: ['Anodized Aluminum'],
      software: ['Rhino', 'Keyshot'],
      technicalSpecs: {
        polycount: '142k',
        topologyType: 'NURBS',
        textureResolution: '8K',
        engineCompatibility: 'SolidWorks',
      },
    },
    {
      id: '2',
      title: 'Biomimetic Mesh 01',
      category: '3dprint',
      categoryLabel: '3D Printing',
      client: 'Formlabs',
      year: '2026',
      heroImage: '/mock2.jpg',
      galleryImages: [],
      summary: 'Resin lattice',
      creativeRationale: 'Cellular void optimization',
      deliverables: ['STL', '3MF'],
      materials: ['Tough Resin'],
      software: ['Grasshopper'],
      technicalSpecs: {
        polycount: '480k',
        topologyType: 'Manifold',
        textureResolution: 'Physical',
        engineCompatibility: 'PreForm',
      },
    },
  ];

  const filteredPrint = filterProjectsByCategory(mockProjects, '3dprint');
  assert.equal(filteredPrint.length, 1);
  assert.equal(filteredPrint[0].id, '2');

  const filteredSearch = filterProjectsByCategory(mockProjects, 'all', 'aluminum');
  assert.equal(filteredSearch.length, 1);
  assert.equal(filteredSearch[0].id, '1');
});
