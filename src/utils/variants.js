export const fadeInUp = {
  initial: {
    y: 80,
    scale: 0.8,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.8
    }
  }
};

export const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide in from left with spring physics
// Good for elements entering from the left side of the screen
export const slideInLeft = {
  initial: {
    x: -200,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};


// Slide in from left with spring physics
// Good for elements entering from the left side of the screen
export const slideInLeftDelay = {
  initial: {
    x: -200,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "easeIn",

      duration: 0.3,
      delay: 0.3
    }
  }
};

// Slide in from right with spring physics
// Perfect for elements that should enter from the right side
export const slideInRight = {
  initial: {
    x: 200,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};

// Slide in from top with spring physics
// Ideal for headers or top navigation elements
export const slideInTop = {
  initial: {
    y: -200,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};

// Slide in from bottom with spring physics
// Great for footers or bottom-positioned elements
export const slideInBottom = {
  initial: {
    y: 200,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};
