export const ANIMATION = {
  unMounted: { opacity: 0, y: 50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 2.5,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      mass: 2.5,
    },
  },
};
