// difference btn type and interface
interface Pussy {
  color: String;
}

interface Pussy {
  isFloo: boolean;
}

type PussyType = {
  color: String;
};

// // bring Error
// type PussyType = {
//   isFloo: boolean;
// };
