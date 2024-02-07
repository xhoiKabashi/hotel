const capitalLetter = (text) => {
  // Remove numbers
  const removeNumbers = text.replace(/\d+/g, " ");

  // Remove percentages
  const removePercentages = removeNumbers.replace(/%/g, "");

  // Replace hyphens with spaces
  const replaceHyphens = removePercentages.replace(/-/g, " ");

  // Replace slashes with spaces around them
  const replaceSlashes = replaceHyphens.replace(/\//g, " / ");

  // Capitalize words
  const capitalizeWords = replaceSlashes
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizeWords;
};

export default capitalLetter;
