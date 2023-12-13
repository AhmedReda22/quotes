var quoteDesc = document.querySelector(".quote");
var authorName = document.querySelector(".authortitle");
var quoteBtn = document.querySelector("button");
var copyBtn = document.querySelector(".fa-copy");
var imgElement = document.querySelector(".img");

var lastRandomIndex = -1; 
var lastDisplayedQuote = ""; 


function randomQuote() {
    var myQuote = [
        { quote: "Peace for Palestine is not just a dream; it's a human right." },
        { quote: "Gaza's resilience is a testament to the unyielding spirit of its people." },
        { quote: "The struggle for justice in Palestine is a struggle for all of us." },
        { quote: "In the heart of Al-Quds, the cries for justice echo through the ages." },
        { quote: "Palestine's story is written in the tears and laughter of its people." },
        { quote: "Gaza's children deserve a future free from fear and conflict." },
        { quote: "In the face of adversity, Palestinians stand tall, an inspiration to us all." },
        { quote: "Al-Quds, a city that encapsulates the dreams and struggles of generations." },
        { quote: "To understand Gaza is to understand the resilience of the human spirit." },
        { quote: "The olive tree of Palestine stands as a symbol of peace and resistance." },
        { quote: "No one chose his life." },
    ];

    var myAuthor = [
        { authortitle: "Desmond Tutu" },
        { authortitle: "Malala Yousafzai" },
        { authortitle: "Roger Waters" },
        { authortitle: "Edward Said" },
        { authortitle: "Suheir Hammad" },
        { authortitle: "Kofi Annan" },
        { authortitle: "Raja Shehadeh" },
        { authortitle: "Ghada Karmi" },
        { authortitle: "Chris Hedges" },
        { authortitle: "Leila Khaled" },
        { authortitle: "Motaz Azaiza" },
    ];

    var myImages = [
        "../imgs/quds.png",
        "../imgs/qudus1.jpg",
        "../imgs/quds2.png",
        "../imgs/quds3.png",
        "../imgs/quds5.png",
        "../imgs/quds6.png",
        "../imgs/quds7.png",
        "../imgs/quds8.png",
        "../imgs/qudus1.jpg",
        "../imgs/quds3.png",
        "../imgs/quds4.png",
    ];

    var randomIndex;

    
    do {
        randomIndex = Math.floor(Math.random() * myQuote.length);
    } while (randomIndex === lastRandomIndex || myQuote[randomIndex].quote === lastDisplayedQuote);

    var randomQuote = myQuote[randomIndex];
    var randomAuthor = myAuthor[randomIndex];
    var randomImage = myImages[randomIndex];

    quoteDesc.innerHTML = `${randomQuote.quote}`;
    authorName.innerHTML = `${randomAuthor.authortitle}`;
    imgElement.src = randomImage;

    
    lastRandomIndex = randomIndex;
    lastDisplayedQuote = randomQuote.quote;
}

function copyQuoteToClipboard() {
    var range = document.createRange();
    range.selectNode(quoteDesc);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

quoteBtn.addEventListener("click", randomQuote);
copyBtn.addEventListener("click", copyQuoteToClipboard);


randomQuote();
