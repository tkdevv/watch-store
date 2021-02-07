export const getPathName = () => {
  const watchPath = window.location.pathname;
  const urlSplit = watchPath.split("/");
  return urlSplit[urlSplit.length - 1];
};

export const getWatchName = () => {
  let watchName = getPathName();

  while (watchName.indexOf("%20") >= 0) {
    watchName = watchName.replace("%20", " ");
  }

  const watchNameAndCodeName = watchName.split("+");

  return {
    watchName: watchNameAndCodeName[0],
    codeName: watchNameAndCodeName[1],
  };
};

export const detailStyle = {
  marginLeft: "-80",
};

export const opacityVariants = {
  init: { opacity: 0 },
  anim: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
};

export const motionDownVariants = {
  init: { y: -500 },
  anim: {
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
  exit: { y: -500, transition: { delay: 0, duration: 1, type: "tween" } },
};

export const containerVariants = {
  init: { opacity: 0 },
  anim: { opacity: 1, transition: { duration: 1, type: "tween" } },
  exit: {},
};
