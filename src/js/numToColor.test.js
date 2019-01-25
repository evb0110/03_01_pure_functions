import numToColor from './numToColor';

test('not an object input throws', () => {
  expect(() => numToColor(5)).toThrow();
});

test('an object input without a valid name property throws', () => {
  expect(() => numToColor({ health: 5 })).toThrow();
});

test('an object input without a valid name property throws', () => {
  expect(() => numToColor({ name: true, health: 5 })).toThrow();
});

test('health not a number throws', () => {
  expect(() => numToColor({ name: 'Маг', health: 'Not a number' })).toThrow();
});

test('negative health throws', () => {
  expect(() => numToColor({ name: 'Маг', health: -1 })).toThrow();
});

test('health 10 produces critical', () => {
  expect(numToColor({ name: 'Маг', health: 10 })).toBe('critical');
});

test('health 15 produces wounded', () => {
  expect(numToColor({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('health 50 produces wounded', () => {
  expect(numToColor({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('health 51 produces healthy', () => {
  expect(numToColor({ name: 'Маг', health: 51 })).toBe('healthy');
});
