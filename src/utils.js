export const formatName = (name) => {
  const hyphenNames = ["porygon-z", "ho-oh", "jangmo-o", "hakamo-o"];
  if (hyphenNames.includes(name)) {
    return name;
  }
  if (name === "farfetchd" || name === "sirfetchd") {
    return name.slice(0, 8) + "'" + name.slice(8);
  }
  if (name === "mr-mime" || name === "mr-rime") {
    return name.slice(0, 2) + ". " + name.slice(3);
  }
  return name?.split('-')[0];
};

export const formatNumber = (number) => {
  if (number < 10) {
    return `#00${number}`;
  }
  if (number < 100) {
    return `#0${number}`;
  }
  return `#${number}`;
};

export const getTypeArray = (typesArray) => {
  const typesStringsArray = typesArray.map((item) => item.type.name)
  return typesStringsArray
}
