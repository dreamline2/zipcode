/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  // use api http://tools.5432.tw/zip5api.html

  var $submit = $('#submit'),
      $res = $('#res'),
      $wrap_res = $('#wrap_res');

  $submit.on({
    click: function(e){
      
      // use jsonp http://api.jquery.com/jquery.getjson/

      // var a_id = "input";
      // var adrs = document.getElementById(a_id).value;
      // var zip5_url = "http://zip5.5432.tw/zip5json.py?adrs=" + adrs + "&jsoncallback=?";
      
      // $.getJSON(zip5_url, function(data) {
      //   $res.html(data.new_adrs);
      //   $wrap_res.css('display','block');
        
      // });
        // $('#query .panel-body').removeClass('body-close');
        $('#query .panel-body').addClass('body-close');
    }
  });
        // $('#defaultval').twzipcode32({
        //     data: 'scripts/',
        //     countySel: '台北市',
        //     districtSel: '信義區',
        //     addressSel: '市府路45號'
        // });
  // $('#sel4').select2();
  $('#sel4').combobox();
})();
