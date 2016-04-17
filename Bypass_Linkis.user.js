// ==UserScript==
// @name        Bypass Linkis
// @namespace   http://github.com/kuropen/bypasslinkis
// @author      Kuropen
// @description Bypass Linkis links
// @include     http://linkis.com/*
// @version     1.0
// @grant       none
// ==/UserScript==
/*
All rights reserved. Copyright (C) 2016 Kuropen.

Permission to use, copy, modify, and/or distribute this software
for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice
appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
(function () {
  'use strict';
  if (!document.getElementById('source_site')) {
    // Not the target of this script
    return;
  }
  var baseURL = document.getElementById('source_site').getAttribute('src');
  if (baseURL) {
    location.replace(baseURL);
  }
}) ();
