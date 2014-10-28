debugger;

chrome.tabs.query({ active: true, highlighted: true, currentWindow: true }, function(htab) {
    // console.log('hightlighted tab');
    // console.info(htab);
    // JSON.stringify is to print only specific attribute on console
    // (if null  then show all attribute of htab )
    // console.log(JSON.stringify(htab, null, 4));
    // console.log(JSON.stringify(htab, ['active','id','index','windowId','title', 'url'], 4));

    //Only return extension title ( not useful )
    // chrome.browserAction.getTitle({tabId: htab[0].id}, function(result) {
    //     console.log( htab[0].id + " Browser action title ", result);
    // });
    //selected TAB url
    chrome.tabs.getSelected(null, function(tab){
      console.log(tab.title);
    });
});

$(function(){
  console.log('jQuery added');
  $(document).on ('click', 'li', function(){
    console.log('on clicked');
    var cl = this.className;
    console.log(cl);
    $('body').removeClass().addClass(cl);
  });
});

function click(e) {
  // console.log(e.target.className);
  chrome.tabs.executeScript(null, {
    // code : "document.body.style.backgroundColor='red'"
    code : "var scriptOptions = {param1:'value1',param2:'value2'};"}, function(e){
      console.log('clicked class');
      console.info(e.target.className);
      document.body.setAttribute('class', e.target.className);
    });
  // });
  // OR you can write same code in external script(script.js) and write this way
  // chrome.tabs.executeScript(null, { file: "js/script.js" } );
  // window.close();
}


document.addEventListener('DOMContentLoaded', function () {
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