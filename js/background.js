chrome.browserAction.setBadgeText({text: "alternater"});
// var bkg = chrome.extension.getBackgroundPage();
// chrome.browserAction.onClicked.addListener(function(tab) {
//   var viewTabUrl = chrome.extension.getURL('background.html');
//   var imageUrl = "https://www.hhhhold.com/km";

//   // Look through all the pages in this extension to find one we can use.
//   var views = chrome.extension.getViews();
//   for (var i = 0; i < views.length; i++) {
//     var view = views[i];

//     // If this view has the right URL and hasn't been used yet...
//     if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

//       // ...call one of its functions and set a property.
//       view.setImageUrl(imageUrl);
//       view.imageAlreadySet = true;
//       break; // we're done
//     }
//   }
// });

chrome.browserAction.getTitle({}, titleShow);

function titleShow(t){
 console.log('tab title:' + t);
}

// function doit() {
//   chrome.tabs.create({url:"http://www.google.com"});
//   chrome.browserAction.getTitle({}, titleShow);
// }
// chrome.browserAction.onClicked.addListener( doit  );

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('browers action tab called');
});
