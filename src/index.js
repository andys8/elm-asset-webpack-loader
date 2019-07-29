module.exports = function(source) {
  if (!source) {
    return source;
  }

  // Test for require without path, which is likely a mistake
  if (source.match(/'require:'/g)) {
    throw new Error(
      "Found single `require:` without file path. Requiring assets works only with static strings and the keyword can't be concatenated or extracted into a function."
    );
  }

  // Replacing custom replace syntax with webpack require call
  const regex = /'require:([^']+)'/g;
  const replacement = "require('../$1')";
  return source.replace(regex, replacement);
};
