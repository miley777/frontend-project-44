const getRandomNumber = (max = 10) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

export default getRandomNumber;
