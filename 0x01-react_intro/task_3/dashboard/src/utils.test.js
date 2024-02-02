import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('current year', () => {
  expect(getFullYear()).toBe(2024);
});
test('footer copy', () => {
  expect(getFooterCopy()).toBe('Holberton School main dashboard');
});
test('footer copy', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
