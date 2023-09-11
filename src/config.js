export const framerMotionConfig = {
  headingInitial: {
    y: -16
  },
  headingAnimate: {
    y: 0
  },
  headingTransition: {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 33
  },

  cardParentInitial: {y: -46, opacity: 0},
  cardParentAnimate: {y: 0, opacity: 1},
  cardParentTransition: {
    delay: 0.1,
    type: "spring",
    mass: 1,
    stiffness: 220,
    damping: 18,
    staggerChildren: 0.15
  },

  cardChildInitial: {y: -32, opacity: 0},
  cardChildAnimate: {y: 0, opacity: 1},

  strongTextInitial: {x: -64, opacity: 0},
  strongTextAnimate: {x: 0, opacity: 1,},
  strongTextTransition: {
    delay: 0.2,
    type: "spring",
    stiffness: 120,
    damping: 28
  }
}