// src/utils/wrapText.js

/**
 * Wraps text into chunks of specified number of words.
 *
 * @param {string} text - The text to be wrapped.
 * @param {number} wordLimit - The number of words per line (default is 6).
 * @returns {string} - Text formatted with line breaks after each chunk.
 */
const wrapText = (text, wordLimit = 6) => {
  const words = text.split(" ");
  const wrappedText = words.reduce((acc, word, index) => {
    const position = Math.floor(index / wordLimit);
    if (!acc[position]) acc[position] = [];
    acc[position].push(word);
    return acc;
  }, []).map(line => line.join(" "));

  return wrappedText.join("\n"); // Joins each line with a newline character
};

export default wrapText;
