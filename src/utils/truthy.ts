/**
 * IsOdd returns true if the input is odd, false otherwise.
 * @param {number} input - number - This is the input that will be passed into the function.
 */
export const isOdd = (input: number) => input % 2 === 1;

/**
 * IsEven returns true if the input is even, false otherwise.
 * @param {number} input - number - This is the parameter that we're going to pass into the function.
 */
export const isEven = (input: number) => input % 2 === 0;

export const isFunction = (value: unknown) => typeof value === "function";
export const isString = (value: unknown): value is string => typeof value === "string";
export const isBoolean = (value: unknown): value is boolean => typeof value === "boolean";
export const isNumber = (value: unknown): value is number => typeof value === "number";
export const isUndefined = (value: unknown): value is undefined => typeof value === "undefined";
