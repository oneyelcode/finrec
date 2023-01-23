import { isBoolean, isEven, isFunction, isNumber, isOdd, isString, isUndefined } from "@utils";

describe("shared utils methods", () => {
  test("isBoolean", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);

    expect(isBoolean("")).toBe(false);
    expect(isBoolean([])).toBe(false);
  });

  test("isEven", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);

    expect(isEven(5)).toBe(false);
    expect(isEven(7)).toBe(false);
  });

  test("isFunction", () => {
    expect(
      isFunction(function foo() {
        console.log("true");
      })
    ).toBe(true);
    expect(
      isFunction(() => {
        console.log("true");
      })
    ).toBe(true);

    expect(isFunction({})).toBe(false);
    expect(isFunction(1)).toBe(false);
  });

  test("isNumber", () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(NaN)).toBe(true);

    expect(isNumber("str")).toBe(false);
    expect(isNumber({})).toBe(false);
  });

  test("isOdd", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);

    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
  });

  test("isString", () => {
    expect(isString("1")).toBe(true);
    expect(isString(String("1"))).toBe(true);

    expect(isString(1)).toBe(false);
    expect(isString({})).toBe(false);
  });

  test("isUndef", () => {
    expect(isUndefined(undefined)).toBe(true);

    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined("")).toBe(false);
  });
});
