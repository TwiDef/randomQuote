const api_url = "https://dummyjson.com/quotes";
const btn = document.querySelector('.quote-box__btn');
const quoteText = document.querySelector('.quote-box__text');
const quoteAuthor = document.querySelector('.quote-box__author');

async function getapi(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

btn.addEventListener('click', async (e) => {
    const data = await getapi(api_url);
    let randomNum = Math.trunc(Math.random() * 30);

    const quotesData = {
        quote: data.quotes[randomNum].quote,
        author: data.quotes[randomNum].author
    };

    quoteText.textContent = `"${quotesData.quote}"`;
    quoteAuthor.textContent = `"${quotesData.author}"`;
});
