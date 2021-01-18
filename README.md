# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ericos.bennett/lotide`

**Require it:**

`const _ = require('@ericos.bennett/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Logs a pass/fail assertion to the console by testing the equality of 2 arrays. Will always fail if either array contains nested reference data types.
* `assertEqual(actual, expected)`: Logs a pass/fail assertion to the console by testing the strict equality of 'actual' and 'expected'. Both arguments must be primitives.
* `assertObjectsEqual(object1, object2)`: Logs a pass/fail assertion to the console by testing the equality of 2 objects. Will always fail if either object contains nested reference data types.
* `countLetters(str)`: Returns an object with the (case-insensitive) count of all letters + (non-whitespace) characters in the input string.
* `countOnly(allItems, itemsToCount)`: Returns an object with the counts in the allItems array of each item with a true value in the itemsToCount array.
* `eqArrays(arr1, arr2)`: Returns true if each item in arr1 has strict equality with the corresponding index in arr2 and false otherwise. Will always return false if either array contains nested reference data types.
* `eqObjects(object1, object2)`: Returns true if each property in object1 has strict equality with the corresponding property in object2 and false otherwise. Will always return false if either object contains nested reference data types.
* `eqObjRec(item1, item2)`: Returns true if items are deeply equal (recursively evaluates through arrays + objects).
* `findKey(object, callback)`: Returns the first object key whose value satisfies the callback function criteria.
* `findKeyByValue(object, value)`: Returns the first obkect key whose value strictly equals the value arg.
* `flatten(arr)`: Flattens an array of arrays into a single-level array. Doesn't work if there is more than two levels of depth in the input array.
* `head(arr)`: Returns the first element in an array.
* `letterPositions(str)`: Returns an object with the an array for each (lowercase, non-whitespace) character in the input string. This array contains the indexes where these characters are found in the string.
* `map(arr, callback)`: Applies the callback function to each element in the input array and returns a new array with the results.
* `tail(arr)`: Returns an array containing all items in the original array except for the first index (arr[0]).
* `takeUntil(arr, callback)`: Applies a callback function to each element in an array and returns an array containing all items until the callback returns false.
* `without(source, itemsToRemove)`: Returns an array containing all elements in the source array that do not strictly equal any item in itemsToRemove. The returned array will never include any nested arrays or objects.