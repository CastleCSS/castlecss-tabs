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

function switchTabMobileAccordion (tabHeader,container) {

	var activeTabPanel = $('[data-castlecss-tab-panel = '+tabHeader+']', container);
	var tabPlaceholder = $('[data-castlecss-tab-placeholder]', container);

	tabPlaceholder.html(activeTabPanel.clone());
	$('[data-castlecss-tab-header = '+tabHeader+']', container).after(tabPlaceholder);

}

function switchTab (tab,mobileAccordion) {

	tab.on('click', '[data-castlecss-tab-header]:not(.is-active) > a', function(e){

		e.preventDefault();

		var tabLink = $(this);
		var tabHeader = tabLink.closest('[data-castlecss-tab-header]').data('castlecss-tab-header');
		var container = tabLink.closest('[data-castlecss-tab-container]');

		$('[data-castlecss-tab-header].is-active , [data-castlecss-tab-panel].is-active', container).removeClass('is-active');	
		$('[data-castlecss-tab-header = '+tabHeader+'], [data-castlecss-tab-panel = '+tabHeader+']', container).addClass('is-active');

		if(mobileAccordion) {
			switchTabMobileAccordion(tabHeader,container);
		}
		
	});
}

function wrapTabs(selector) {

	$(selector).each(function() {

		var tab = $(this);

		// check if class starts with tabs-accordion. if so, present tabs as accordions
		var mobileAccordion = tab.is('[class*="tabs-accordion"]');
		if(mobileAccordion) {

			tab.find('[data-castlecss-tab-header]:first').after('<li class="tab-placeholder" data-castlecss-tab-placeholder></li>');
		}

		switchTab(tab, mobileAccordion);
		
	});
}

var Tabs = function(selector) {
	var _selector = selector || '[data-castlecss-tab-container]';
	wrapTabs(_selector);
};

module.exports = Tabs;