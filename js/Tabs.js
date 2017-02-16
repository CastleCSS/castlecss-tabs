/*
	* Copyright (c) 2017 - present, De Nieuwe Zaak
	* All rights reserved.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
*/

'use strict';

var SwitchTabs =  require('./SwitchTabs');

var Tabs = function(selectors) {
	selectors = selectors || {};

	SwitchTabs(selectors.switchTabs);
};

module.exports = Tabs;