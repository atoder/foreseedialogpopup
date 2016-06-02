# Front End Coding Exercise

For this exercise, you will be developing (from scratch) a JavaScript based system to present a DHTML invitation on a website to sign up for a mailing list. This system should (at a minimum):

 - Be able to trigger the invitation only after the user has been on the site for x seconds.
 - Be able to trigger the invite after a certain number of pages have been visited.
 - Allow for easy customization of the invitation.

The invitation dialog itself should be DHTML based and use best practices for CSS and HTML. Your JavaScript should be clean, and use OO best practices. Please do not use any 3rd party libraries like jQuery, Angular, React, or others.

Things to keep in mind:

 - Build tools: Why not use a build system to streamline your testing, minify and check your code? Any will do.
 - SASS/LESS? I think so!
 - Build for maintainability!
 - Comment your code
 - Tests? Why not!
 - If you feel like it, go above and beyond! This is an opportunity for you to show us what you can do.

# Mockup
Check out the sample popup.png in the repo for how it should look like

# Solution/Instructions
  
  - Include the library using ``` <object type="text/html" data="lib/popup.html" width="100%" height="100%"></object>```
  - To use default text do not pass any arguments ``var dialogBox = P$();``` or pass argument text you want to display
	- setDelay will set the timeout in milliseconds until dialog is display ```dialogBox.setDelay(5000);```
	- setNumberOfPages will set the number of pages the user has to view or refresh before the dialog pops up ``dialogBox.setNumberOfPages(3);```

