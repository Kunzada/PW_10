
const queryString=window.location.search;
const urlsParams=new URLSearchParams(queryString);
const id=urlsParams.get("id");
const postUrl = "https://jsonplaceholder.typicode.com/posts?id=" + id;
async function getPosts(url) {
  let response = await fetch(url);
  let jsonData = await response.json();
  return jsonData;
}



getPosts(postUrl).then(posts => {
    if (Array.isArray(posts)) {
        posts.forEach(post => {
            const template = document.querySelector("#post");

            let templateContent = template.innerHTML;

            templateContent = templateContent.replace(/{{title}}/g, post.title);
            templateContent = templateContent.replace(/{{body}}/g, post.body);
            templateContent = templateContent.replace(/{{userId}}/g, post.userId);
            const tempContainer = document.createElement("div");
            tempContainer.innerHTML = templateContent;

            document.body.append(tempContainer.firstElementChild);

        });
    }
    else {
        console.error("Oops...");
    }
});