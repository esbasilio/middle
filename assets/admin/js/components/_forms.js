/*
* @Author: Alberto Urbaez
* @Date:   2020-11-15 14:52:39
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-21 12:21:46
*/

// JQuery Mask Plugin - is a jQuery plugin which create an input mask. An input mask helps the user with the input by ensuring a predefined format: https://igorescobar.github.io/jQuery-Mask-Plugin/
require('jquery-mask-plugin');

// Bootstrap Datepicker - Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style: https://bootstrap-datepicker.readthedocs.io/en/latest/
require('bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
require('../vendors/plugins/bootstrap-datepicker.init.js');

// Bootstrap Timepicker - Easily select a time for a text input using your mouse or keyboards arrow keys: https://jdewit.github.io/bootstrap-timepicker/
require('bootstrap-timepicker/js/bootstrap-timepicker.js');
require('../vendors/plugins/bootstrap-timepicker.init.js');

// Date Range Picker - A JavaScript component for choosing date ranges, dates and times: https://www.daterangepicker.com/
require('bootstrap-daterangepicker/daterangepicker.js');

// Bootstrap Touchspin - A mobile and touch friendly input spinner component for Bootstrap 3: https://www.virtuosoft.eu/code/bootstrap-touchspin/
require('bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js');

// Bootstrap Maxlength - This plugin integrates by default with Twitter bootstrap using badges to display the maximum length of the field where the user is inserting text: https://github.com/mimo84/bootstrap-maxlength
require('bootstrap-maxlength/src/bootstrap-maxlength.js');
require('../../plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js');

// Bootstrap Select - The jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more: https://developer.snapappointments.com/bootstrap-select/
require('bootstrap-select/dist/js/bootstrap-select.js');

// Bootstrap Switch - Bootstrap switch/toggle is a simple component used for activating one of two predefined options: https://mdbootstrap.com/docs/jquery/forms/switch/
require('bootstrap-switch/dist/js/bootstrap-switch.js');
require('../vendors/plugins/bootstrap-switch.init.js');

// Select2 - Select2 is a jQuery based replacement for select boxes: https://select2.org/
require('select2/dist/js/select2.full.js');

// Ion Rangeslider - Is an easy, flexible and responsive range slider with tons of options: http://ionden.com/a/plugins/ion.rangeSlider/
require('ion-rangeslider/js/ion.rangeSlider.js');

// Tagify - Transforms an input field or a textarea into a Tags component, in an easy, customizable way, with great performance and small code footprint, exploded with features: https://github.com/yairEO/tagify
require('@yaireo/tagify/dist/tagify.polyfills.min');
window.Tagify = require('@yaireo/tagify/dist/tagify.min');

// Summernote - Super Simple WYSIWYG Editor on Bootstrap Summernote is a JavaScript library that helps you create WYSIWYG editors online: https://summernote.org/
require('summernote/dist/summernote.js');

require('../pages/crud/forms/widgets/select2.js');

// validacion
window.Parsley  = require('parsleyjs');
require('parsleyjs/src/i18n/pt-br');
require('parsleyjs/src/i18n/es');
require('parsleyjs/src/i18n/en');

require('../pages/crud/forms/widgets/bootstrap-switch.js')
// VALIDATION
// require('jquery-validation');