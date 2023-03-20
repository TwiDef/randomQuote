const api_url = "https://dummyjson.com/quotes";
const btn = document.querySelector('.quote-box__btn');
const quoteText = document.querySelector('.quote-box__text');
const quoteAuthor = document.querySelector('.quote-box__author');

async function getapi(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return await data;
}

btn.addEventListener('click', () => {
    getapi(api_url).then(data => insertQuete(data.quotes[Math.trunc(Math.random() * 30)].quote));
    getapi(api_url).then(data => insertQueteAuthor(`"${data.quotes[Math.trunc(Math.random() * 30)].author}"`));
});

function insertQuete(quote) {
    quoteText.textContent = quote;
}
function insertQueteAuthor(author) {
    quoteAuthor.textContent = author;
}
