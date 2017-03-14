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

function switchAccordion (tabHeader,container) {

	var activeTabPanel = $('[data-castlecss-tab-panel = '+tabHeader+']', container);
	var tabPlaceholder = $('[data-castlecss-tab-placeholder]', container);

	tabPlaceholder.html(activeTabPanel.clone());
	
	$('[data-castlecss-tab-header = '+tabHeader+']', container).after(tabPlaceholder);

}

function switchTab (tab,isAccordion) {

	tab.on('click', '[data-castlecss-tab-header]:not(.is-active) > .tab-link', function(e){

		e.preventDefault();

		var tabLink = $(this);
		var tabHeader = tabLink.closest('[data-castlecss-tab-header]').data('castlecss-tab-header');
		var container = tabLink.closest('[data-castlecss-tab-container]');

		$('[data-castlecss-tab-header].is-active , [data-castlecss-tab-panel].is-active', container).removeClass('is-active');	
		$('[data-castlecss-tab-header = '+tabHeader+'], [data-castlecss-tab-panel = '+tabHeader+']', container).addClass('is-active');

		if(isAccordion) {
			switchAccordion(tabHeader,container);
		}
		
	});
}

function setPlaceholderAccordion(tab) {

	var placeholderHTML = '<li class="tab-placeholder" data-castlecss-tab-placeholder></li>';

	if(tab.find('[data-castlecss-tab-header].is-active').length == 0) {
		tab.find('[data-castlecss-tab-header]:first').before(placeholderHTML);	

	}
	else {
		var activeTabHeader = tab.find('[data-castlecss-tab-header].is-active');
		activeTabHeader.after(placeholderHTML);

		// when there is an active tab, show the accordion
		var container = activeTabHeader.closest('[data-castlecss-tab-container]');
		switchAccordion(activeTabHeader.data('castlecss-tab-header'),container);
	}
}

function wrapTabs(selector) {

	$(selector).each(function() {

		var tab = $(this);

		// check if class starts with tabs-accordion. if so, present tabs as accordions
		var isAccordion = tab.is('[class*="tabs-accordion"]');

		if(isAccordion) {
			setPlaceholderAccordion(tab);
		}

		switchTab(tab,isAccordion);
		
	});
}

var Tabs = function(selector) {
	var _selector = selector || '[data-castlecss-tab-container]';
	wrapTabs(_selector);
};

module.exports = Tabs;