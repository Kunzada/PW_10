const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
async function getPosts(url) {
  let response = await fetch(url);
  let jsonData = await response.json();
  return jsonData;
}
getPosts(POSTS_URL).then((posts) => {
  if (Array.isArray(posts)) {
    posts.forEach((post) => {
      // let text=document.createElement("p");
      // Создаем ссылку на другую страницу
    let link = document.createElement("div");


    
      let card = document.createElement("div");
      card.classList.add("user-card");

 
      card.innerHTML = `
    <a href="post.html?id=${post.id}">${post.title}</a>
    <p style="color: gray">${post.body}</p>
`;

    //   Добавляем карточку в ссылку
      link.appendChild(card);

      // Добавляем ссылку на страницу
      document.body.appendChild(link);
    });
  } else {
    console.error("Error: Invalid JSON data received.");
  }
});

// const queryString=window.location.search;
// const urlsParams=new URLSearchParams(queryString);
// const id=urlsParams.get("id");
// const postUrl = "https://jsonplaceholder.typicode.com/posts?id=" + id;
// getPosts(postUrl).then(posts => {
//     if (Array.isArray(posts)) {
//         posts.forEach(post => {
//             const template = document.querySelector("#post");

//             let templateContent = template.innerHTML;

//             templateContent = templateContent.replace(/{{title}}/g, post.title);
//             templateContent = templateContent.replace(/{{body}}/g, post.body);

//             const tempContainer = document.createElement("div");
//             tempContainer.innerHTML = templateContent;

//             document.body.append(tempContainer.firstElementChild);

//         });
//     }
//     else {
//         console.error("Oops...");
//     }
// });