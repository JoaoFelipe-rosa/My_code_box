import CracoAlias from 'craco-alias';

export const plugins = [
  {
    plugin: CracoAlias,
    options: {
      source: 'jsconfig'
      // Add any custom alias or set of aliased directories here, if needed.
      // Example:
      // alias: {
      //   '@components': 'src/components',
      //   '@utils': 'src/utils',
      // },
    }
  }
];
