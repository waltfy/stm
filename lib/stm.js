/* dependencies */
var stemPorter = require('stem-porter');
var tkn = require('tkn');

module.exports = {
	/* Simply points to tkn library */
	tokenise: tkn.tokenise,
	/**
	  * Tokenises and stems a string, returning an Array of stemmed terms.
	  * text - String. Text to be tokenised and stemmed.
	  * noStopWords - Boolean. Defines whether stop words should be removed or not.
		*/
	stem: function (text, noStopWords) {
		noStopWords = (typeof noStopWords === 'undefined') ? true : noStopWords;  // set default to `true`
		return tkn.tokenise(text, noStopWords).map(function (word) { return stemPorter(word); });
	}
};