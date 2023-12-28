const getRandomNumber = (min, max = 10) => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

export default getRandomNumber;
