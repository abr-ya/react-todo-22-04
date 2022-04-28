// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// const animals2 = animals.slice(0, 1).concat(['pig']).concat(animals.slice(2));
// console.log(animals2);

// const animals3 = [
//   { id: 1, name: 'ant' },
//   { id: 2, name: 'bison' },
//   { id: 3, name: 'camel' },
//   { id: 4, name: 'duck' },
//   { id: 5, name: 'elephant' },
// ];

// eslint-disable-next-line import/prefer-default-export
export const replaceEl = (arr, key, value, newEl) => {
  const index = arr.findIndex((el) => el[key] === value);
  console.log('replace index', index);

  return (index !== -1)
    ? arr.slice(0, index).concat(newEl).concat(arr.slice(index + 1))
    : arr.slice(0);
};
