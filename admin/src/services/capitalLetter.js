const capitalLetter = (text) => {
  const getFirstLetter = text.slice(1);
  const replaceHyphens = getFirstLetter.replace(/-/g, " ");
  const replaceSlashes = replaceHyphens.replace(/\//g, " / ");

  const capitalizeWords = replaceSlashes
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizeWords;
};

export default capitalLetter;
