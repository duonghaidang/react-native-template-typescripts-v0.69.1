export const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    // eslint-disable-next-line no-bitwise
    return (~~(Math.random() * 16)).toString(16);
  });
};
