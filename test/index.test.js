const loader = require("../src/index.js");

describe("elm-asset-webpack-loader", () => {
  it("ignores empty files", () => {
    expect(loader("")).toEqual("");
  });

  it("ignores null", () => {
    expect(loader(null)).toEqual(null);
  });

  it("ignores undefined", () => {
    expect(loader(undefined)).toEqual(undefined);
  });

  it("replaces require string with function call", () => {
    expect(loader("'require:path/file.ext'")).toEqual(
      "require('../path/file.ext')"
    );
  });

  it("doesn't replace file content before and after", () => {
    const before = "const a = ''; let x = () => {}; const x = ";
    const middle = "'require:path/file.ext'";
    const after = "; const b = ''; let y = () => {}; ";

    const expectedMiddle = "require('../path/file.ext')";

    expect(loader(before + middle + after)).toEqual(
      before + expectedMiddle + after
    );
  });

  it("throws an error for single `require:` without path", () => {
    expect(() => {
      loader("const a = 'require:';");
    }).toThrowErrorMatchingSnapshot();
  });

  describe("rootContext", () => {
    beforeEach(() => {
      window.__rootContext = window.rootContext;
    });

    afterEach(() => {
      window.rootContext = window.__rootContext;
    });

    it("uses rootContext", () => {
      window.rootContext = "a/b/c";
      expect(loader("'require:path/file.ext'")).toEqual(
        "require('a/b/c/path/file.ext')"
      );
    });

    it("fallback if none is set", () => {
      expect(loader("'require:path/file.ext'")).toEqual(
        "require('../path/file.ext')"
      );
    });
  });
});
