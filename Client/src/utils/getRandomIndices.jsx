const getRandomIndices = (excludeIndices, count = 3, totalLength) => {
  let randomIndices = [];
  while (randomIndices.length < count) {
    const randomIndex = Math.floor(Math.random() * totalLength);
    if (!excludeIndices.includes(randomIndex) && !randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }
  return randomIndices;
};

export default getRandomIndices;
