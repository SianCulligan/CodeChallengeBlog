'use strict';

const insertionSort = require('./insertionSort.js');

describe(insertionSort, () => {
    it('A function that sorts an array from smallest to largest.', () => {
    let str = insertionSort([8,4,23,16,15]);
    expect(str).toBe([4,8,15,16,23]);
  }
    )});
