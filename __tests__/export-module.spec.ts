/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as components from "@components";
import * as utils from "@utils";

describe("exports modules should be defined", () => {
  test("components", () => {
    Object.keys(components).forEach((module) => {
      // @ts-ignore
      expect(components[module]).toBeDefined();
    });
  });

  test("utils", () => {
    Object.keys(utils).forEach((module) => {
      // @ts-ignore
      expect(utils[module]).toBeDefined();
    });
  });
});
