// This exercise aims to understand how the candidate would approach solving a “real-life” problem.
// We don’t expect a solution, only a paragraph with ideas of what might be causing the problem and how you would approach investigating it further.*

// Given a production web application, when loading the user profile page, the user profile image takes a few seconds to appear after the page is loaded.
// Soon after, it disappears again.

// What could be causing it and how would you approach fixing this issue?
// Please describe your thoughts and steps you’d take from investigating to potentially addressing the issue.

//* 20 mins

// * I would start by console.logging the image to confirm its existence. I would check the Elements tab in the browser to see if there is a css issue such as z-index needing to be added/adjusted or any other element causing it to be hidden. I would also use the debugger to just before the image is supposed to be rendered to comb through the code to detect 1.when it disappears and 2. look at the changes in the component to see what could be causing the issue.
// * I would check other browsers to see if the behaviour is the same, this will help narrow the issue down if it is browser specific. I would clear the cache to see if this also solves this issue.
// * If I can confirm the elements existence in the browser Elements I would strip away any additional css, un-nest the element (if necessary) and remove class names to try and render it correctly by itself with no interference. I would then apply these back one by one to find which one is causing the issue.
// * If I cannot confirm the elements existence I would check the function which is retrieving the image data, looking to ascertain the response from the call and check the state where its being set. If it is overwritten somehow or set again to null. I would use Postman to check the api is working correctly and sending back the correct data.
// * Other things I would consider:
// * To use lazy loading images to reduce loading time.
// * compress the images using webpack to improve performance.
// * content length could be incorrect so use media queries to render appropriate size of image for screen size.
// *
