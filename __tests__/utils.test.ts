import { addSubStrToStart } from "../src/utils/string.util";
import { areAllValuesNullish } from "../src/utils/object.util";
import { describe, expect, test } from "vitest";

describe("areAllValuesNullish", () => {
  test("returns false for an empty object", () => {
    const input = {};
    expect(areAllValuesNullish(input)).toBe(true);
  });

  test("returns false when any value is non-nullish", () => {
    const input = {
      key1: null,
      key2: undefined,
      key3: "value",
      key4: null,
    };
    expect(areAllValuesNullish(input)).toBe(false);
  });

  test("returns true when all values are nullish", () => {
    const input = {
      key1: null,
      key2: undefined,
      key3: null,
    };
    expect(areAllValuesNullish(input)).toBe(true);
  });

  test("returns false when any value is non-nullish, even if others are nullish", () => {
    const input = {
      key1: null,
      key2: undefined,
      key3: "value",
      key4: null,
      key5: null,
    };
    expect(areAllValuesNullish(input)).toBe(false);
  });
});

describe("addSubStrToStart", () => {
  test("adds substring to the start if not present", () => {
    expect(addSubStrToStart("abc", "def")).toBe("abcdef");
    expect(addSubStrToStart("abc", "abcefglmnp")).toBe("abcefglmnp");
    expect(addSubStrToStart("prefix", "word")).toBe("prefixword");
  });

  test("returns empty string if substring is empty", () => {
    expect(addSubStrToStart("", "text")).toBe("text");
    expect(addSubStrToStart("", "")).toBe("");
  });

  test("returns empty string if both substring and stringValue are empty", () => {
    expect(addSubStrToStart("", "")).toBe("");
  });

  test("returns stringValue if it already starts with the substring", () => {
    expect(addSubStrToStart("abc", "abcdef")).toBe("abcdef");
    expect(addSubStrToStart("abc", "abcxyz")).toBe("abcxyz");
  });
});
