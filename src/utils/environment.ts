import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  SAMPLES_REPOSITORY_INDEX: str({
    desc: "JSON file containing the list of all the samples that can be used. It MUST to follow the JSON schema provided at `<rootDir>/src/schemas/index.json`.",
  }),
});

export default env;
