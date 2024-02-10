import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("Current year", () => {
  expect(getFullYear()).toBe(2024);
});

test('getFooterCopy', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test('getFooterCopy 2', () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("getLatestNotification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
