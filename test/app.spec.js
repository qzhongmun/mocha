const assert = require("chai").assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require("../index");
// Results
sayHelloResult = app.sayHello();

addNumbersResult = app.addNumbers(5, 5);
step1 = app.step1([1, 2, 3]);
step2 = app.step2("hello world how ya doing?");
step3 = app.step3([-2, -1, 0, 1, 2]);
step4 = app.step4([1, 2, 3, 4]);

describe("App", function () {
  describe("sayHello()", function () {
    it("sayHello should return hello", function () {
      //let result = app. sayHello();
      assert.equal(sayHelloResult, "hello");
    });
    it("sayHello should return type string", function () {
      //let result = app.sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  });
  describe("addNumbers ()", function () {
    it("addNumbers should be above 5", function () {
      //let result = app.addNumbers (5,5);
      assert.isAbove(addNumbersResult, 5);
    });
    it("addNumbers should return type number", function () {
      //let result = app.addNumbers (5,5);
      assert.typeOf(addNumbersResult, "number");
    });
  });

  describe("step1 ()", function () {
    it("should multiply each element by 2", function () {
      assert.deepEqual(step1, [2, 4, 6]);
    });
  });

  describe("step2 ()", function () {
    it("should multiply each element by 2", function () {
      assert.deepEqual(step2, "hello WORLD how YA doing?");
    });
  });

  describe("step3 ()", function () {
    it("should multiply each element by 2", function () {
      assert.deepEqual(step3, [0, 1, 2]);
    });
  });

  describe("step4 ()", function () {
    it("should multiply each element by 2", function () {
      assert.deepEqual(step4, 4);
    });
  });
});
