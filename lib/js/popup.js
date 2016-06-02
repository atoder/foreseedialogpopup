// Immediately Invoked Function Expressions (IIFE) will run as soon as we include this script in another file
(function (global) {
		// popupText - Text to display
    var Popup = function(popupText) {
			
      return new Popup.init(popupText);
    }

    Popup.prototype = {
			// Show dialog after certain number of milliseconds
			setDelay: function(timeOut) {
				setTimeout(function() { 
					document.getElementById('myModal').style.display = "block";
				}, timeOut);
			},
			// Show dialog after certain number of pages/refreshes
			setNumberOfPages: function(pagesNumber) {
				//console.log(localStorage.pageViews);
				// for testing purposes to remove pageViews
				//window.localStorage.removeItem('pageViews');
				if ((localStorage.pageViews = (parseInt(localStorage.pageViews) || 0) + 1) > pagesNumber) {
					document.getElementById('myModal').style.display = "block";
				}
			},
		};

    Popup.init = function (popupText, timeOut) {
      var self = this;
      // if custom text doesn't exist, pass our default text
      self.popupText = popupText || 'You seem to like our website! Why not sign up for our email list? We\'ll send you updates whenever something changes!';
			// if -1, no time out is set
			self.timeOut = timeOut || -1;
    };
    Popup.init.prototype = Popup.prototype;

    // sets up so you can use P$ as a shortcut
    global.Popup = global.P$ = Popup;
}(window));
