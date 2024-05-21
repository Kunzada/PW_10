// const usersUrl = "https://jsonplaceholder.typicode.com/users";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const userUrl = "https://jsonplaceholder.typicode.com/users?id=" + id;

async function getJson(url) {
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

getJson(userUrl).then(users => {
    if (Array.isArray(users)) {
        users.forEach(user => {
            const template = document.querySelector("#user");

            let templateContent = template.innerHTML;

            templateContent = templateContent.replace(/{{name}}/g, user.name);
            templateContent = templateContent.replace(/{{username}}/g, user.username);

            const tempContainer = document.createElement("div");
            tempContainer.innerHTML = templateContent;

            document.body.append(tempContainer.firstElementChild);

        });
    }
    else {
        console.error("Oops...");
    }
});