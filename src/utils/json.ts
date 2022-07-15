import type { Schema } from "ajv";

import Ajv from "ajv";

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

function validate(content: JSONValue, schema: Schema) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  return validate(content);
}

export { validate };
