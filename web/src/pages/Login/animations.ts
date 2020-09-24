export const animation = {
  unmounted: { opacity: 0, y: 100 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 1.2,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      type: 'spring',
      mass: 1.2,
    },
  },
};
