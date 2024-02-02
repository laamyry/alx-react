export const getFullYear = () => {
  let currentYear = new Date().getFullYear();
  return currentYear;
};
export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
};
export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};
