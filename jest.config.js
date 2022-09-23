module.exports = {
  roots: ["src"],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleFileExtensions: ["jsx", "js", "json", "ts", "tsx"],
  testPathIgnorePatterns: ["node_modules/"],
  testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
};
