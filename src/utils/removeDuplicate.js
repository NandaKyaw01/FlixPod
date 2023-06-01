const removeDuplicate = (arr) => {
  const ids = arr.map(({ id }) => id);
  return arr.filter(({ id }, index) => !ids.includes(id, index + 1));
};

export default removeDuplicate;
