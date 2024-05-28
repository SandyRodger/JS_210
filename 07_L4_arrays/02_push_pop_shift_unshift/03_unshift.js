let unshift = function(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
};