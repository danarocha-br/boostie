export const animateHeader = {
  unmounted: {
    opacity: 0,
    height: 0,
  },
  mounted: {
    opacity: 1,
    height: '90%',
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};
