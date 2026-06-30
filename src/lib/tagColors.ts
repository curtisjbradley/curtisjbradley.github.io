/**
 * Maps skill/technology names to Tailwind CSS classes.
 * Used by both Skills.astro and Projects.astro so colors are consistent.
 */
export const tagColors: Record<string, string> = {
  // Languages
  TypeScript:   'bg-blue-500/15 text-blue-300 border-blue-500/30',
  JavaScript:   'bg-yellow-400/15 text-yellow-300 border-yellow-400/30',
  Python:       'bg-green-500/15 text-green-300 border-green-500/30',
  Java:         'bg-orange-500/15 text-orange-300 border-orange-500/30',
  SQL:          'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  R:            'bg-indigo-400/15 text-indigo-300 border-indigo-400/30',
  C:            'bg-gray-400/15 text-gray-300 border-gray-400/30',
  Fennel:       'bg-lime-500/15 text-lime-300 border-lime-500/30',

  // Web & Backend
  React:        'bg-sky-400/15 text-sky-300 border-sky-400/30',
  PostgreSQL:   'bg-blue-700/15 text-blue-300 border-blue-700/30',
  MongoDB:      'bg-green-600/15 text-green-300 border-green-600/30',
  'REST APIs':  'bg-teal-500/15 text-teal-300 border-teal-500/30',
  Express:      'bg-slate-400/15 text-slate-300 border-slate-400/30',

  // Data & ML
  Pandas:               'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'Scikit-learn':       'bg-orange-400/15 text-orange-300 border-orange-400/30',
  'Survival Analysis':  'bg-pink-500/15 text-pink-300 border-pink-500/30',
  'Linear Discriminant Analysis': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  LDA:                  'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'Statistical Modeling': 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
  'Cox Regression':     'bg-rose-500/15 text-rose-300 border-rose-500/30',
  'Machine Learning':   'bg-amber-500/15 text-amber-300 border-amber-500/30',

  // Dev Tools
  Git:            'bg-red-500/15 text-red-300 border-red-500/30',
  'GitHub Actions': 'bg-slate-500/15 text-slate-300 border-slate-500/30',
  Jest:           'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  Cypress:        'bg-teal-600/15 text-teal-300 border-teal-600/30',
  'AWS / EC2':    'bg-yellow-600/15 text-yellow-300 border-yellow-600/30',
  AWS:            'bg-yellow-600/15 text-yellow-300 border-yellow-600/30',
  Quarto:         'bg-cyan-600/15 text-cyan-300 border-cyan-600/30',
  LaTeX:          'bg-gray-500/15 text-gray-300 border-gray-500/30',

  // Misc
  MCTS:             'bg-lime-600/15 text-lime-300 border-lime-600/30',
  'Alpha-Beta Pruning': 'bg-violet-600/15 text-violet-300 border-violet-600/30',
  AI:               'bg-pink-600/15 text-pink-300 border-pink-600/30',
};

/** Returns the Tailwind classes for a tag, falling back to a neutral style. */
export function getTagClasses(tag: string): string {
  return tagColors[tag] ?? 'bg-slate-700/50 text-slate-300 border-slate-600/50';
}
