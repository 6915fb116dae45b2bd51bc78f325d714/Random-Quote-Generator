// Function to generate a random quote using an API
async function generateQuote() {
    try {
        // Fetch a random quote from the API
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        // Update the HTML elements with the new quote
        document.getElementById("quote_text").innerText = data.content;
        document.getElementById("quote_author").innerText = data.author;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}


// Function to share the quote on Twitter
function shareOnTwitter() {
    var quoteText = document.getElementById("quote_text").innerText;
    var quoteAuthor = document.getElementById("quote_author").innerText;
    var twitterUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quoteText + '" - ' + quoteAuthor);

    // Open Twitter share dialog in a new window
    window.open(twitterUrl, "_blank");
}

// Event listeners for button clicks
document.getElementById("new_btn").addEventListener("click", generateQuote);
document.getElementById("twitter_btn").addEventListener("click", shareOnTwitter);

// Initial call to generate a quote when the page loads
generateQuote();
