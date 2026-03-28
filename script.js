 async function getQuote() {
    let quoteEl = document.getElementById("quote");
    let authorEl = document.getElementById("author");

    try {
        let response = await fetch("https://dummyjson.com/quotes/random");
        let data = await response.json();

        console.log(data); // 👈 debug ke liye

        quoteEl.innerText = `"${data.quote}"`;    
        authorEl.innerText = `- ${data.author}`;  

    } catch (error) {
        quoteEl.innerText = "Error loading quote 😢";
    }
}