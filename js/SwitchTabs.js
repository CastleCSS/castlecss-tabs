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


function wrapTabs(selector) {

	//function to place the active tab-panel to the correct tab-header
	function toggleTabAccordion (tab,container) {

		var activeTabPanel = $('[data-castlecss-tab-panel = '+tab+']', container),
			tabPlaceholder = $('[tab-panel-placeholder]', container);

		tabPlaceholder.html(activeTabPanel.clone());
		
		$('[data-castlecss-tab-header = '+tab+']', container).after(tabPlaceholder);
	}

	$(selector).each(function() {

		var $this = $(this);

		//check if tabs should collapse as accordions on smaller devices
		if($this.is('.tabs-accordion')) {
			$this.find('.tabs-header').prepend('<li class="hide-b4" tab-panel-placeholder></li>');
		};

		$this.on('click', '[data-castlecss-tab-header] > a', function(e){
			
			e.preventDefault();

			var tab = $(this).parent().data('castlecss-tab-header'),
				container = $(this).closest($this);

			$('[data-castlecss-tab-header].is-active , [data-castlecss-tab-panel].is-active', container).removeClass('is-active');	
			$('[data-castlecss-tab-header = '+tab+'], [data-castlecss-tab-panel = '+tab+']', container).addClass('is-active');

			if(container.is('.tabs-accordion')) {
				toggleTabAccordion (tab,container);
			}
			
		});
	});
}

var SwitchTabs = function(selector) {
	var _selector = selector || '[data-castlecss-tab-container]';
	wrapTabs(_selector);
};

module.exports = SwitchTabs;