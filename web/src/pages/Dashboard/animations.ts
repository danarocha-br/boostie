export const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export const animateCards = {
  unmounted: {
    y: -50,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
  },
};
