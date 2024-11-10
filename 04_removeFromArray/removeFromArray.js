const removeFromArray = function (array, ...args) {
  // Create a function that takes an array and a variable number of arguments
  const newArray = []; // Create a new array to store the items that are not in the args array
  array.forEach((item) => {
    // Loop through the array
    if (!args.includes(item)) {
      // If the item is not in the args array, push it to the new array
      newArray.push(item); // Push the item to the new array if it is not in the args array
    }
  });
  return newArray; // Return the new array
};

// Do not edit below this line
module.exports = removeFromArray;
