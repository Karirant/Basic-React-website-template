import { framerMotionConfig } from "./config"

export const headingVariants = {
  initial: {...framerMotionConfig.headingInitial},
  animate: {...framerMotionConfig.headingAnimate,
     transition: {...framerMotionConfig.headingTransition}
  }
}

export const cardParent = {
    initial: {...framerMotionConfig.cardParentInitial},
    animate: {...framerMotionConfig.cardParentAnimate,
      transition: {...framerMotionConfig.cardParentTransition}
    },
}

export const cardChild = {
    initial: {...framerMotionConfig.cardChildInitial},
    animate: {...framerMotionConfig.cardChildAnimate,
      transition: {...framerMotionConfig.cardChildTransition}
    },
}

export const strongText = {
  initial: {
    ...framerMotionConfig.strongTextInitial
  },
  animate: {
    ...framerMotionConfig.strongTextAnimate,
    transition: {
      ...framerMotionConfig.strongTextTransition
    }
  }
}

export const navVariant = {
  initial: {
    x: 0,
    opacity: 0
  },
  animate: {
    x: "100%",
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
}

export const navItemVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 70,
    }
  },
}