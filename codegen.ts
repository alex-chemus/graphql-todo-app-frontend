import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.VITE_API_HOST || "http://localhost:3000/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      // plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
