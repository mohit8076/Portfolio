

export const fadeIn = (direction = "up") => {
    return {
      initial: {
        y: direction === "up" ? 40 : -60,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: direction === "up" ? 1 : 0,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  };
export const fadeLeft = () => {
    return {
    initial:{ x: -1000 },
    animate:{ x: 0 },
    transition:{
        type: "tween",
        duration: 4,
        delay: 10,
        ease: "easeInOut",
    }
        };
  };

  // export const leaf = {
  //   initial: {
  //     y: 0,
  //   },
  //   animate: (i) => ({
  //     y: [20, 0, 20],
  //     transition: {
  //       delay: 2,
  //       duration: 1 * i,
  //       ease: "linear",
  //       repeat: Infinity,
  //     },
  //   }),
  // };
  