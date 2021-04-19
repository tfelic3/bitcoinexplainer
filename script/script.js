const data = [
  {
    cardHeadline: "What is Bitcoin?",
    content: "img/bitcoin1.jpg",
    caption: "Getty Images",
    answer:
      "Bitcoin is a decentralized electric form of currency created in 2009 by an unidentified programmer or group. The currency is not in the physical world. Transactions using the digital currency are anonymous and do not rely on third parties to process payments.",
    buttonOptions: ["Who invented Bitcoin?", "What is cryptocurrency?"],
  },

  {
    cardHeadline: "How does Bitcoin work?",
    content: "img/bitcoin4.jpg",
    answer:
      "The Bitcoin network relies on a shared public space where balances and transactions are recorded on a database called a blockchain.",
  },

  {
    cardHeadline: "Where can I buy Bitcoin and what is the value?",
    content: "img/bitcoin3.jpg",
    answer:
      "You can acquire bitcoin by purchasing coins through 'Bitcoin exchanges.' These exchanges allow people to buy or sell bitcoins using different currencies. Bitcoins can be mined using a computer algorithm. Bitcoin prices are volatile. They are determined by the bidding on Bitcoin exchanges.",
  },

  {
    cardHeadline: "What can you purchase with Bitcoin?",
    content: "img/bitcoin6.jpg",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    headline: "Is Bitcoin secure?/Bitcoin backlash?",
    content: "img/bitcoin2.jpg",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const card = document.querySelector(".card__inner");

const button = document.querySelector("button");

const headline = document.querySelector("h2");
const imageDiv = document.querySelector("img");
const description = document.getElementById("description");
const imageCaption = document.querySelector(".imageCaption");

let svgImg = document.querySelector(".svgImg");

data[0].buttonOptions.forEach((line) => {
  let buttons = document.createElement("button");
  buttons.textContent = line;
  console.log(buttons);
  description.insertAdjacentElement("afterend", buttons);
});

let divIndex = 0;

imageDiv.src = data[divIndex].content;
imageCaption.textContent = data[divIndex].caption;
headline.textContent = data[divIndex].cardHeadline;
description.textContent = data[divIndex].answer;

let ovals = document.querySelectorAll("use");
let main = document.getElementById("path15_fill");
ovals.forEach((oval) => {
  oval.classList.add("blink");
});

svgImg.classList.add("scale");

card.addEventListener("click", function () {
  card.classList.add("is-flipped");

  if (card.getAttribute("class") === "card__inner is-flipped") {
    console.log(card);
  }
});

/*button.addEventListener('click', function(){

 setTimeout(
    function(){  divIndex++;
        
        
     
        imageDiv.src = data[divIndex].content;
        headline.textContent = data[divIndex].headline;
        description.textContent = data[divIndex].answer;
     

        console.log(card);
    
        
    
    
    }, 1000) 


    

}



) */
