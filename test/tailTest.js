const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 43, 2])[1], 2);
assertEqual(tail([1, 43, 2]).length, 2);
assertEqual(tail([]).length, 0);
assertEqual(tail().length, 0);
assertEqual(tail(['do', 're'])[0], 're');
assertEqual(tail(['bla', 'doo', 'okok'])[0], 'doo');
assertEqual(['bla', 'doo', 'okok'].length, 3);
assertEqual(tail([1]).length, 0);