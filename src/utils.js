export const formatName = (name) => {
  const hyphenNames = ["porygon-z", "ho-oh", "jangmo-o", "hakamo-o"];
  if (hyphenNames.includes(name)) {
    return name;
  }
  if (name === "farfetchd") {
    return name.slice(0, 8) + "'" + name.slice(8);
  }
  if (name === "mr-mime") {
    return name.slice(0, 2) + ". " + name.slice(3);
  }
  return name.split('-')[0];
};