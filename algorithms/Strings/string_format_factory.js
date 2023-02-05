// Let’s say we are dealing with sending data over the internet,
// to make it simple, assume this plain text,
// in order to save some bandwidth we want to compress it, according to the following function:

// compress(aaaaca) -> ax4ca
// compress(aaaaaabbbcaaa) -> ax6bx3cax3
// compress(mississippi) -> misx2isx2ipx2i

const compress = (data) => {
  let result = "";
  let count = 0;
  let current = data.charAt(0);
  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) === current) {
      count++;
    } else {
      result += current + (count > 1 ? `x${count}` : "");
      current = data.charAt(i);
      count = 1;
    }
  }
  result += current + (count > 1 ? `x${count}` : "");
  console.log(result);
  return result;
};
compress("aaaaca");
compress("aaaaaabbbcaaa");
compress("mississippi");
