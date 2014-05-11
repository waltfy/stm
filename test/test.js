var t = require('tap').test;
var stm = require('../');

var STR_A = "you're simply a test, a mere test";
var STR_B = "you're simply a simplistic house, made for housing";
var STR_C = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!*";

t('stemming, excluding stop words', function (t) {

	t.deepEqual(
		stm.stem(STR_A),
		['simpli', 'test', 'mere', 'test'],
		'stm.stem(STR_A)'
	);

	t.deepEqual(
		stm.stem(STR_B),
		["simpli", "simplist", "hous", "hous"],
		'stm.stem(STR_B)'
	);

	t.deepEqual(
		stm.stem(STR_C),
		["waltercfilho", "tweet", "hous", "hous", "expens"],
		'stm.stem(STR_B)'
	);

	t.end();
});

t('stemming, including stop words', function (t) {
	
	t.deepEqual(
		stm.stem(STR_A, false),
		['you', 're', 'simpli', 'a', 'test', 'a', 'mere', 'test'],
		'stm.stem(STR_A, false)'
	);

	t.deepEqual(
		stm.stem(STR_B, false),
		["you", "re", "simpli", "a", "simplist", "hous", "made", "for", "hous"],
		'stm.stem(STR_B, false)'
	);

	t.deepEqual(
		stm.stem(STR_C, false),
		["waltercfilho", "tweet", "about", "hous", "hous", "is", "the", "most", "expens", "thing", "ever", "f"],
		'stm.stem(STR_C, false)'
	);

	t.end();
});