const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotes = [
    {
        quote:" It is kind of fun to do the impossible ",
        author:" Walt Disney ",
    },
    {
        quote:" I didn’t get there by wishing for it or hoping for it, but by working for it. ",
        author:" Estée Lauder ",
    },
    {
        quote:" It is better to fail in originality than to succeed in imitation. ",
        author:" Herman Melville ",
    },
    {
        quote:" Success usually comes to those who are too busy to be looking for it. ",
        author:" Henry David Thoreau ",
    },
    {
        quote: " In order to succeed, we must first believe that we can. ",
        author:" Nikos Kazantzakis ",
    },
    {
        quote:" Not everything that is faced can be changed, but nothing can be changed until it is faced. ",
        author:" James Baldwin ",
    },
    {
        quote:" It is better to fail in originality than to succeed in imitation. ",
        author:" Herman Melville ",
    },
    {
        quote:" Success usually comes to those who are too busy to be looking for it. ",
        author:" Henry David Thoreau ",
    },
    {
        quote: " In order to succeed, we must first believe that we can. ",
        author:" Nikos Kazantzakis ",
    },
];

function random_quotes(){
    const random_Number = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random_Number].quote;
    author.innerText = quotes[random_Number].author;
}

random_quotes();
setInterval(random_quotes, 300000);
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
