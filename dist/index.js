/** @license Apache-2.0 */

'use strict';

/**
* Test whether two double-precision complex floating-point numbers are the same value.
*
* @module @stdlib/complex-float64-base-assert-is-same-value
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var isSameValue = require( '@stdlib/complex-float64-base-assert-is-same-value' );
*
* var z1 = new Complex128( 5.0, 3.0 );
* var z2 = new Complex128( 5.0, 3.0 );
*
* var v = isSameValue( z1, z2 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
