// Variable
const random = "random content";
export const random2 = "content 2";
export const random3 = "content3";

// Functions
export const randomGenerator = () => {
  return `${~~(Math.random() * 1000)} Percent`;
};

// Export using commonJS
// module.exports = random;

// Export using module
export default random;
