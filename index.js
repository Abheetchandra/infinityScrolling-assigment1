let container = document.getElementById("container")

let page = 1;
let flag = false;

async function getData(api) {
    let response = await fetch(api)
    let data = await response.json()
    console.log(data)
    displayData(data)
}
getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)

function displayData(data) {
    data.forEach((element) => {
        let card = document.createElement("div")
        let title = document.createElement("p")
        title.textContent = `TITLE: ${element.title} `
        let image = document.createElement("img")
        image.src = element.url
        card.append(title, image)
        container.append(title, image)


    });
    flag = true;
}

function handeScroll() {
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
        console.log("reach the bottom fetch the data");
        page++;
        getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
        flag = false;
    }
}
window.addEventListener('scroll', handeScroll)
