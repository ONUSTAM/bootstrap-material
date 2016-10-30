// @file app.js
//plugins
import _ from 'lodash'
import $ from 'jquery'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
require('bootstrap-material-design/dist/css/bootstrap-material-design.css')
require('bootstrap-material-design/dist/css/ripples.min.css')
require('bootstrap-material-design/dist/js/material.min.js')
require('bootstrap-material-design/dist/js/ripples.min.js')

import moment from 'moment'

// import 'bootstrap-material-design'
import '../styl/app.styl'

//INIT
{
  $.material.init();

  $('.loaderMask').remove();
}
