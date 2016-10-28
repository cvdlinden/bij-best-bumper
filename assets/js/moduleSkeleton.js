/**
 * @file An example module extending the the functionality of Bootstraps »Foo«
 * module or an own module which has nothing to do with Bootstraps JavaScript
 * code.
 * @author Caspar <>
 */

/**
 * Make sure our global object is available.
 * @namespace bijBestBumper
 * @ignore
 */
var bijBestBumper = window.bijBestBumper || {};

/**
 * Namespace of the module.
 * Aliasing the jQuery Namespace via Self Invoking Anonymous Function.
 * @namespace modulName
 * @memberof bijBestBumper
 * @param 	{jQuery} $	passing the jQuery object to make $ available even when
 *                    	using jQuery.noConflict()
 */
bijBestBumper.modulName = (function ($) {
	'use strict';

	/**
	 * Just an example public method that you could call from the global scope.
	 * @memberof bijBestBumper.modulName
	 * @public
	 * @param {string} message Message to write into the console.
	 * @example
	 * bijBestBumper.modulName.yourPublicMethod('Hi Public.');
	 */
	var yourPublicMethod = function (message) {
		console.info(message);
	};

	/**
	 * Just an example private method that you only can call from within this
	 * module.
	 * @memberof bijBestBumper.modulName
	 * @private
	 * @param {string} message Message to write into the console.
	 */
	var _yourPrivateMethod = function (message) {
		console.info(message);
	};

	/**
	 * Executed on DOM ready within the scope of this module.
	 * @event
	 */
	$(function () {
		_yourPrivateMethod('Hi Private.');
	});

	// Return functions to make them accessible from outside.
	return {
		yourPublicMethod: yourPublicMethod
	};

})(jQuery);

/**
 * Executed on DOM ready within the global scope.
 * @event
 */
$(function () {
	'use strict';

	bijBestBumper.modulName.yourPublicMethod('Hi public.');
});
