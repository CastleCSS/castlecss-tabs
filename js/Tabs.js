/*
	* Copyright (c) 2017 - present, De Nieuwe Zaak
	* All rights reserved.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
*/

'use strict';

var $ = require('jquery');
var Tabs = function(selector) {

	//function to place the active tab-panel to the correct tab-header
	var toggleTabAccordion = function(tab,container) {

		var activeTabPanel = $('[data-castlecss-tab-panel = '+tab+']', container);
		var tabPlaceholder = $('[data-castlecss-tab-placeholder]', container);

		tabPlaceholder.html(activeTabPanel.clone());
		
		$('[data-castlecss-tab-header = '+tab+']', container).after(tabPlaceholder);
	}

	var wrapTabs = function(selector) {

		$(selector).each(function() {

			var $this = $(this);
			var container = $(this).closest('[data-castlecss-tab-container]');

			if($(selector).is('.tabs-accordion')) {
				$this.find('.tabs-header').prepend('<li class="hide-b4" data-castlecss-tab-placeholder></li>');
			};


			$this.on('click', '[data-castlecss-tab-header] > a', function(e){
				
				e.preventDefault();

				var tab = $(this).parent().data('castlecss-tab-header');
				var container = $(this).closest('[data-castlecss-tab-container]');

				if(container.is('.tabs-accordion') && !$(this).parent().hasClass('is-active')) {
					toggleTabAccordion (tab,container);
				}

				$('[data-castlecss-tab-header].is-active , [data-castlecss-tab-panel].is-active', container).removeClass('is-active');	
				$('[data-castlecss-tab-header = '+tab+'], [data-castlecss-tab-panel = '+tab+']', container).addClass('is-active');

			});
		});
	}

	var _selector = selector || '[data-castlecss-tab-container]';
	wrapTabs(_selector);
};

module.exports = Tabs;