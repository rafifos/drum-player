import { validate } from "@/utils/json";

describe("json", () => {
  describe("validate", () => {
    it("should return true for valid JSON", () => {
      // https://ajv.js.org/guide/getting-started.html#basic-data-validation
      const data = {
        foo: 1,
        bar: "abc",
      };

      const schema = {
        type: "object",
        properties: {
          foo: { type: "integer" },
          bar: { type: "string" },
        },
        required: ["foo"],
        additionalProperties: false,
      };

      expect(validate(data, schema)).toBe(true);
    });

    it("should return false for invalid JSON", () => {
      // https://ajv.js.org/guide/getting-started.html#basic-data-validation
      const data = {
        bar: "abc",
      };

      const schema = {
        type: "object",
        properties: {
          foo: { type: "integer" },
          bar: { type: "string" },
        },
        required: ["foo"],
        additionalProperties: false,
      };

      expect(validate(data, schema)).toBe(false);
    });
  });
});
