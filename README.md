stm
===

Takes in a document, spits out a tokenised and stemmed array of terms. Using Porter's Algorithm.

### Usage
`stm.stem(text, noStopWords)`. Returns an array of terms, stemmed and without punctuation.

* `text` is the string (text document) in which the calculations are to be performed on.
* `noStopWords` defaults to `true`. Set to `false` if you want to include stop words–e.g words such as "I" and "the".

Note: This is basically a wrapper around the [`stem-porter`](https://www.npmjs.org/package/stem-porter) library by [`kastor`](https://www.npmjs.org/~kastor).

```javascript
var stm = require('stm');

var str = "you're simply a simplistic house, made for housing";
var stemmed = stm.stem(str); // noStopWords -> `true`
>> ["simpli", "simplist", "hous", "hous"]

var withStopWords = stm.stem(str, false); // turn off the removal of stop words
>> [ 'you', 're', 'simpli', 'a', 'simplist', 'hous', 'made', 'for', 'hous'];
```
