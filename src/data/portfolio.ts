import catalog from './catalog.json';
import { details } from './project-details';

export const profile = {
  name: 'Siva Babu',
  initials: 'SB',
  label: 'Software, systems & curious ideas',
  headline: 'Things I build. Ideas I explore.',
  introduction: 'Tools for understanding complex systems. Experiments in AI, observability, sport, and everyday life. A place to explore the work and the thinking behind it.',
  github: 'https://github.com/sivalinb',
  email: '',
  linkedin: '',
  about: 'I’m Siva Babu. I build tools that make complex systems easier to understand, and explore how software can support learning, sport, and everyday life. My public repositories bring together practical workbenches, interactive explanations, and experiments you can inspect.',
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
