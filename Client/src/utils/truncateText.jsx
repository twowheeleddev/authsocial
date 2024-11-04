const truncateText = (text, maxLength = 150) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default truncateText;
