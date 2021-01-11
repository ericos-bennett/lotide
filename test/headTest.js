const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1, 2, 4]), 1);
assertEqual(head(['boo', 55]), 'boo');
assertEqual(head([true]), true);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);