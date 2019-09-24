// buildPage();

// function buildPage(){
//     var container = document.getElementById("container");
//     container.appendChild(buildHeader());
//     container.appendChild(buildBody());
// }
// function buildHeader(){
//     var header = document.createElement("header");
//     header.appendChild(buildLogo());
//     header.appendChild(buildNav());
//     return header;
// }

// function buildLogo(){
//     var logo=document.createElement('h2');
//     logo.textContent = "highOnCoding";
//     return logo;
// }
// function buildNav(){
//     var unorderedList = document.createElement('ul');
//     ["Home", "Categories"].forEach(item=>{
//     var li =document.createElement("li");
//     var link = document.createElement("a");
//     link.setAttribute("href", "#");
//     link.textContent = item;
//     li.appendChild(link);
//     unorderedList.appendChild(li);

// });
//     return unorderedList;
// }
// function buildBody(){
//     var body = document.createElement("main");
//     content.appendChild(buildCurrentReviews());
//     var post1 = buildPost("Hello Watchkit");
//     var post2 = buildPost("Intro to Swift");
//     content.appendChild(post1);
//     content.appendChild(post2);
//     return content;
// }

// function buildCurrentReviews(){
//     var currentReviews= document.createElement("div");
//     currentReviews.setAttribute ("class", "currentReviews");
//     var heading = document.createElement("h2");
//     heading.textContent = "Curse of the Current Reviews";
//     currentReviews.appendChild(heading);
//     var desc = document.createElement("p");
//     desc.textContent ="When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews. ";
//     currentReviews.appendChild(desc);
//     return currentReviews;

// }


// function buildPost(headline) {
//   var post = document.createElement("article");
//   var headline = buildPostHeadline(headline);
//   post.appendChild(headline);
//   var desc = document.createElement("p");
//   desc.textContent = " Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
//   post.appendChild(desc);
//   var footer = buildPostFooter();
//   post.appendChild(footer);
//   return post;
// }

// function buildPostHeadline(headline) {
//   var element = document.createElement("h3");
//   var link = document.createElement("a");
//   link.setAttribute("href", "#");
//   link.setAttribute("class", "post-headline");
//   link.textContent = headline;
//   element.appendChild(link);
//   return element;
// }

// function buildPostFooter() {
//   var footer = document.createElement("footer");
//   footer.setAttribute("class", "post-footer");

//   var comments = document.createElement("div");
//   comments.textContent = `${getRandomNumber()} comments`;
//   footer.appendChild(comments);

//   var likes = document.createElement("div");
//   likes.textContent = `${getRandomNumber()} likes`;
//   footer.appendChild(likes);
//   return footer;
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100);
// }

// Build website
var dummyText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi modi, deserunt ullam voluptates sapiente unde molestiae ab amet dolor dolore dolores similique consectetur ducimus alias necessitatibus ut temporibus culpa, beatae sunt exercitationem autem dolorum? Ratione itaque fuga architecto pariatur corporis aperiam nesciunt et quas doloribus, nihil officiis quo numquam nemo earum placeat suscipit, repellendus nisi! Veniam nisi facilis totam eius libero possimus quam laudantium laboriosam perferendis saepe dolorem hic nostrum, ad est cumque voluptates aliquam corporis doloremque nemo, nihil temporibus. Maiores, commodi quas consequatur magni, sunt quisquam ullam dolorum tempora distinctio quia architecto minus, laudantium placeat corrupti numquam odit dolorem?";
buildPage();

function buildPage() {
  var container = document.getElementById("container");
  container.appendChild(buildHeader());
  container.appendChild(buildContent());
}

function buildHeader() {
  var header = document.createElement("header");
  header.appendChild(buildLogo());
  header.appendChild(buildNav());
  return header;
}

function buildLogo() {
  var logo = document.createElement("h1");
  logo.textContent = "HighOnCoding";
  return logo;
}

function buildNav() {
  var unorderedList = document.createElement("ul");

  ["home", "categories", "about"].forEach(item => {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = item;
    li.appendChild(link);
    unorderedList.appendChild(li);
  });

  return unorderedList;
}

function buildContent() {
  var content = document.createElement("main");
  content.appendChild(buildCta());
  var post1 = buildPost("Hello Watchkit");
  var post2 = buildPost("Intro to Swift");
  content.appendChild(post1);
  content.appendChild(post2);
  return content;
}

function buildCta() {
  var cta = document.createElement("div");
  cta.setAttribute("class", "cta");
  var heading = document.createElement("h2");
  heading.textContent = "Curse of the current reviews";
  cta.appendChild(heading);
  var desc = document.createElement("p");
  desc.textContent = dummyText;
  cta.appendChild(desc);
  return cta;
}

function buildPost(headline) {
  var post = document.createElement("article");
  var headline = buildPostHeadline(headline);
  post.appendChild(headline);
  var desc = document.createElement("p");
  desc.textContent = dummyText;
  post.appendChild(desc);
  var footer = buildPostFooter();
  post.appendChild(footer);
  return post;
}

function buildPostHeadline(headline) {
  var element = document.createElement("h3");
  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "post-headline");
  link.textContent = headline;
  element.appendChild(link);
  return element;
}

function buildPostFooter() {
  var footer = document.createElement("footer");
  footer.setAttribute("class", "post-footer");

  var comments = document.createElement("div");
  comments.textContent = `${getRandomNumber()} comments`;
  footer.appendChild(comments);

  var likes = document.createElement("div");
  likes.textContent = `${getRandomNumber()} likes`;
  footer.appendChild(likes);
  return footer;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
