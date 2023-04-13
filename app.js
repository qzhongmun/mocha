module.exports = {
  sayHello: function () {
    return "hello";
  },
  addNumbers: function (valuel, value2) {
    return valuel + value2;
  },

  // --- Step 1 ---------------------------------------------------------
  // Apply the map() function so that it returns every element of the array `myArray` multiplied by 2.
  // Example invocation:
  // var numbers = [1,2,3,4];
  // var result = step1(numbers);
  step1: function (numbers) {
    const result = numbers.map((number) => {
      return number * 2;
    });
    return result;
  },

  // --- Step 2---------------------------------------------------------
  // Apply the map() function to the variable `str` so that every other word in the string is uppercase.
  // Example invocation:
  // var str = 'hello world how ya doing?';
  // var result = step2(str);
  step2: function (str) {
    const result = str.split(" ").map((word, index) => {
      return index % 2 === 0 ? word : word.toUpperCase();
    });
    return result.join(" ");
  },

  // ---Step 3----------------------------------------------------------------
  // Remove all negative numbers from the array using filter function

  // Example invocation:
  // var numbers = [-2,-1,0,1,2];
  // var result = step3(numbers)
  step3: function (numbers) {
    const result = numbers.filter((number) => {
      return number >= 0;
    });
    return result;
  },

  // --- Step 4 ----------------------------------------------------------------
  // Find the largest number in the array using reduce function
  // Example invocation:
  // var numbers = [1,2,3,4];
  // var result = step4(numbers)
  step4: function (numbers) {
    const result = numbers.reduce((previousValue, currentValue) => {
      return Math.max(previousValue, currentValue);
    });
    return result;
  },
};
