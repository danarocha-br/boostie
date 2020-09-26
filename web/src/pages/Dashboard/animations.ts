export const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export const animateCards = {
  unmounted: {
    y: 100,
    opacity: 0,
    transition: {
      when: 'afterChildren',
      delay: 0.1,
      staggerChildren: 0.5,
    },
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.5,
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'beforeChildren',
      delay: 0.1,
      staggerChildren: 0.5,
    },
  },
};
