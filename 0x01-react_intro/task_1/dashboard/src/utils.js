export function getFullYear() {
  let currentYear = new Date();
  return currentYear.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}
