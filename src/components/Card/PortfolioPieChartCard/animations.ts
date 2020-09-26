export const animation = {
  unmounted: {
    y: 50,
    display: 'none',
  },
  mounted: {
    y: 0,
    display: 'flex',
    transition: {
      delay: 0.3,
      type: 'spring',
    },
  },
};
