# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amarkham/lotide`

**Require it:**

`const _ = require('@amarkham/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array
* `tail(array)`: returns everything but the first element of an array
* `middle(array)`: return the middle elements of an array (note: includes two elements when array size is even)
* `assertArraysEqual(array1, array2)`: logs to console whether provided arrays are equal
* `assertEqual(actual, expected)`: logs to console whether the '===' operator returns true for provided arguments
* `assertObjectsEqual(object1, object2)`: logs to console whether provided objects are equal
* `countLetters(sentence)`: returns an object with the frequencies of each character in a string
* `countOnly(allItems, itemsToCount)`: returns an object with the frequencies of each character specified in an itemsToCount array
* `eqArrays(array1, array2)`: tests deep equality for two arrays
* `eqObjects(object1, object2)`: tests deep equality for two objects
* `findKey(object, callback)`: returns the key of the object whose callback on both keys and values returns true
* `findKeyByValue(object, callback)`: returns the key of the object whose callback function on the values only returns true
* `flatten(array)`: takes an array of maximum 2D and returns a 1D array
* `letterPositions(sentence)`: returns an object with the positions of each of the characters in a sentence
* `map(array, callback)`: mimics the built-in map function on an array
* `takeUntil(array, callback)`: returns an array with all of the original elements until the callback on an element returns false
* `without(array, itemsToRemove)`: returns an array excluding elements provided