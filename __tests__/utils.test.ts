import { test, expect, describe } from "vitest";
import { groupItemsBySize } from "@/utils/tool.util";

describe("tool list transform function", () => {
  test("group size sum most be less than 6", () => {
    // Arrange
    const input = [
      { size: 1 },
      { size: 4 },
      { size: 3 },
      { size: 4 },
      { size: 5 },
      { size: 1 },
      { size: 2 },
      { size: 2 },
    ];
    // Act
    const result = groupItemsBySize<{ size: number }>(input);
    // const sizeSum = result.map((tool) => tool.size);
    // Assert
  });
});
