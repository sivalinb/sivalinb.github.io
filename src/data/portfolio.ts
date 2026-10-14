import catalog from './catalog.json';
import { details } from './project-details';

export const profile = {
  name: 'Siva Babu',
  initials: 'SB',
  label: 'AI infrastructure & observability',
  headline: 'Building reliable AI infrastructure.',
  introduction: 'Senior software engineer with 20+ years across production infrastructure, observability and fleet operations. Explore Siva Babu’s independent engineering projects and the skills behind them.',
  github: 'https://github.com/sivalinb',
  email: '',
  linkedin: '',
  about: 'I’m Siva Babu, a software engineer working across AI infrastructure, observability and reliability. My experience spans Apple, Oracle and earlier production systems. My independent projects make architecture, signals and failure behavior inspectable. Outside engineering, I’m an ultramarathon runner, running coach and trained restorative-justice facilitator.',
};

export const categories = catalog.categories.map(category => ({
  ...category,
  count: catalog.projects.filter(project => project.categoryId === category.id).length,
}));
export const formats = ['Tool', 'Lab', 'Academy', 'App'];
export const projects = catalog.projects.map(project => {
  const detail = details.find(item => item.slug === project.slug);
  const category = categories.find(item => item.id === project.categoryId)!;
  return {
    ...project,
    category: category.name,
    categoryShort: category.short,
    overview: detail?.overview || project.description,
    capabilities: detail?.capabilities || [],
    notes: detail?.notes || [],
    evidence: detail?.evidence || [],
    number: String(catalog.projects.indexOf(project) + 1).padStart(2, '0'),
  };
});
export type Project = typeof projects[number];
export const featuredProjects = projects.filter(project => project.featuredRank !== null).sort((a,b) => a.featuredRank! - b.featuredRank!);
export const academies = projects.filter(project => project.format === 'Academy');
export const references = catalog.references;
export const scannedAt = catalog.scannedAt;
export const categoryUrl = (base: string, categoryId: string) => base + 'projects/category/' + categoryId + '/';
export const projectUrl = (base: string, slug: string) => base + 'projects/' + slug + '/';
export const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Denver' }).format(new Date(date));
