// ==UserScript==
// @name         CATCHPLAY Shortcut
// @namespace    http://tampermonkey.net/
// @updateURL    https://github.com/IamLeTea/tampermonkey-test/raw/main/index.user.js
// @downloadURL  https://github.com/IamLeTea/tampermonkey-test/raw/main/index.user.js
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.catchplay.com/*
// @match        https://vip.catchplay.com/*
// @match        https://hp2-www.uat.catchplay.com/*
// @match        https://hp2-www.uat-rc.catchplay.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=catchplay.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  window.addEventListener("keydown", (event) => {
    function directTo(pathname = "") {
      event?.preventDefault?.();
      location.href = pathname;
    }

    if (event.shiftKey) {
      switch (event.code) {
        case "KeyW":
          directTo("/");
          break;
        case "KeyH":
          directTo("/home");
          break;
        case "KeyE":
          directTo("/ed-says");
          break;
        case "KeyA":
          directTo("/my-account");
          break;
        case "KeyL":
          directTo("/my-list");
          break;
        case "KeyO":
          var yes = confirm("Are you sure you want to logout？");
          if (yes) {
            directTo("/logout");
          }
          break;
        case "KeyP":
          directTo("/my-account/promocode-redeem");
          break;
        case "KeyC":
          directTo("/channel/24a16ece-6399-11ea-bc55-0242ac130003");
          break;
        case "KeyN":
          directTo("/my-account/notification");
          break;
        case "KeyS":
          var keyword = prompt("Searh CATCHPLAY for...");
          if (keyword) {
            directTo(`/search/keyword/${encodeURIComponent(keyword)}`);
          }
          break;
      }
    }
  });
})();
