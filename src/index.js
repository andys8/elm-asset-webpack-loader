module.exports = function(source) {
  // Replacing custom replace syntax with webpack require call
  const regex = /'require:([^']+)'/g;
  const replacement = "require('../$1')";
  return source.replace(regex, replacement);
};
