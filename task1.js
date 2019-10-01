var div = document.createElement("div");
div.setAttribute("id", "content");
document.body.appendChild(div);

var h1 = document.createElement("H1");
h1.innerHTML = "School of Code";
document.body.appendChild(h1);

var image = document.createElement("img");
image.setAttribute(
  "src",
  "https://images.pexels.com/photos/5149/easter-eggs.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
);
image.height = "500";
image.width = "500";
document.body.appendChild(image);
/* Using purely JavaScript:
         1. create a div with an id of 'content'
         2. create a h1 tag with the text `School of Code`
           a. this is a child of the #content div
         3. create an image, and make the source 'https://images.pexels.com/photos/5149/easter-eggs.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      */
