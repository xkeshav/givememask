debugger;
var incognito;
var url;

function click(e) {
//   chrome.tabs.executeScript(null, { file: "js/script.js" });
//   or use below
  // console.log(e.target);
  chrome.tabs.executeScript(null, {
    code:"document.body.style.backgroundColor='" + e.target.className + "'"
  });
  window.close();
}


document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    selectedId = tabs[0].id;
    console.log(tabs);
  });

  var li = document.querySelectorAll('li');
  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', click);
  }
});


/*
   chrome get top sites link in pop up..
   note : in manifest.json add persmission : ["topSites"]
 */
// function onAnchorClick(event) {
//   chrome.tabs.create({ url: event.srcElement.href });
//   return false;
// }

// function buildPopupDom(mostVisitedURLs) {
//   var popupDiv = document.createElement('div');
//   popupDiv.setAttribute('id','topSite');
//   document.body.appendChild(popupDiv);
//   var ol = popupDiv.appendChild(document.createElement('ol'));

//   for (var i = 0; i < mostVisitedURLs.length; i++) {
//     var li = ol.appendChild(document.createElement('li'));
//     var a = li.appendChild(document.createElement('a'));
//     a.href = mostVisitedURLs[i].url;
//     a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
//     a.addEventListener('click', onAnchorClick);
//   }
// }
// chrome.topSites.get( buildPopupDom );
// chrome.topSites.get(function(t) { console.log('Here I am inside topSites')});
