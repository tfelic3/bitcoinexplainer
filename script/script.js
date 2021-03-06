const data = [{
  cardHeadline: "What is Bitcoin?",
  content: "img/bitcoin1.jpg",
  subhead: "What is Bitcoin?",
  caption: "Credit: CNN",
  answer: "It’s not a physical coin, and it’s not tangible. Bitcoin is a digital currency -meaning it exists only in a digital format. But, to spend Bitcoin, you have to get some first – usually by trading other money, like dollars or euros. Think of it the way you use dollars to buy those Chuck E. Cheese tokens to play games and earn tickets that you redeem for the large stuffed rainbow octopus instead of just buying the plush toy outright with cash.",
},
{
  cardHeadline: "Where do you buy Bitcoin?",
  content: "img/coinbase.jpg",
  subhead: "Get it on the ‘exchange’",
  caption: 'Credit: Coinbase/CNN',
  answer: "You purchase Bitcoin on “bitcoin exchanges,” such as Coinbase, Bitstamp and Bitfinex. You keep the “coins” in a digital wallet, which some people access through an app. If you decide you’d like something that bends and can go in a billfold, well, apps like Coinbase allow you to convert your digital currency into US dollars and transfer them back to your bank account, where you can withdraw them from an ATM.",
},
{
  cardHeadline: "What’s Bitcoin worth?",
  content: "img/bitcoinworth.jpg",
  subhead: "It depends on the day",
  caption: 'Credit: CNN',
  answer: "Bitcoin’s value changes all the time because its supply is limited, and demand for it changes constantly, sorta like stocks. According to Investopedia, one Bitcoin was worth 2/25 or less than one-tenth of a penny when it started trading in 2009. It jumped to a whopping 8 cents a year later. By April 2021, one Bitcoin rose above $64,000.",
},
{
  cardHeadline: "Is there a central bank backing Bitcoin?",
  content: "video/bitcointheft.mp4",
  subhead: "You’re kinda on your own",
  caption: 'Credit: KUTV/Brandon Larsen/CNN',
  answer:
    "Nope. Also, it’s not backed by a physical commodity like gold. And nothing protects your “wallet”, the way the Federal Deposit Insurance Corporation (FDIC) insures your deposit in a bank.",

},

{
  cardHeadline: "What can I buy with Bitcoin?",
  content: "img/bitcoinpurchase.jpg",
  subhead: "Suitcases, hammers, lotsa stuff",
  caption: 'Credit: CNN',
  answer: "You can shop with Bitcoin. Tesla is one company that accepts Bitcoin as a form of payment. Other companies include Overstock.com, Whole Foods and Home Depot. However, most people acquire bitcoin as an investment. They’re not buying it to purchase cars or plumbing supplies at Home Depot. They own bitcoin because they’re betting it will rise in value.",
},
{
  cardHeadline: "Who invented Bitcoin?",
  content: "img/bitcoinpurchase.jpg",
  subhead: "Well, nobody knows",
  caption: 'Credit: CNN',
  answer: "Well, nobody knows.  A person or group using the pseudonym Satoshi Nakamoto created it in 2009.",
},
{
  cardHeadline: "How does mining Bitcoin affect Earth?",
  subhead: "Bitcoin uses loads of electricity",
  content: "img/bitcoinmining.jpg",
  caption: 'Credit: CNN',
  answer: "Even though it’s not a metal coin, a new bitcoin (remember, it’s digital) can only enter circulation if someone creates it by solving extraordinarily difficult math equations. That’s called “mining”. Yes, doing Sheldon-level math can generate a bitcoin. So, a “miner” can earn cryptocurrency without having to buy it with traditional currency. But all that mining requires significant computer power and electricity, and electricity is used every time digital currency is bought or sold, leaving behind a hefty carbon footprint.",
},
];

const card = document.querySelector(".card__inner");
const button = document.querySelector("button");
const imageDiv = document.querySelector("img");
const cardSubHead = document.querySelector('.subHeadline');

const videoDiv = document.querySelector('.videoDom');
const description = document.getElementById("description");
const imageCaption = document.querySelector(".imageCaption");
const cardBack = document.querySelector('.card__content');

let nextQuestionButton = document.querySelector('.nextQuestionButton');
let previousButton = document.querySelector('.previousButton');
const directions = document.querySelector('.directions');

let divIndex = 0;
//let buttonIndex = 1;
//let previousIndex = buttonIndex - 1;

imageDiv.src = data[divIndex].content;

imageCaption.textContent = data[divIndex].caption;
cardSubHead.textContent = data[divIndex].subhead;
description.textContent = data[divIndex].answer;
nextQuestionButton.textContent = data[divIndex + 1].cardHeadline;
previousButton.textContent = data[divIndex].cardHeadline;

card.addEventListener("click", function() {
    card.classList.add("is-flipped");
    directions.style.display = 'none';
});

previousButton.addEventListener('click', function() {
    divIndex = divIndex - 1;
    if (divIndex == 0) {
        previousButton.style.display = 'none';
    }

    if (data[divIndex].content.includes('mp4')) {
        videoDiv.src = data[divIndex].content;
        videoDiv.style.display = 'block';
        imageCaption.style.display = 'none';

    } else {
        videoDiv.style.display = 'none';
        imageCaption.style.display = 'block';
        videoDiv.pause();

    }

    //console.log('back divIndex ', divIndex);
    //console.log(data[divIndex])
    cardSubHead.textContent = data[divIndex].subhead;
    imageDiv.src = data[divIndex].content;
    description.textContent = data[divIndex].answer;

    if (divIndex != 0) {
      previousButton.textContent = data[divIndex - 1].cardHeadline;
    }
    nextQuestionButton.textContent = data[divIndex + 1].cardHeadline;

})


if(divIndex ==0){
  previousButton.style.display ='none';
}

console.log(divIndex);
nextQuestionButton.addEventListener('click', function() {

    divIndex += 1;
    //previousIndex = buttonIndex - 1;
    //console.log('previous index ', previousIndex);
    //console.log('button index ', buttonIndex - 1)
    //console.log('next divIndex ', divIndex)
    console.log(divIndex);

    if (divIndex > 6) {
     
      previousButton.style.display ='none';
      divIndex = 0;
      
      nextQuestionButton.textContent = data[divIndex + 1].cardHeadline;
     

    }

    if (divIndex === 6) {
      nextQuestionButton.textContent = 'Reset';
    }
    previousButton.style.display = 'block';

    cardBack.style.animation = 'fadein 2s'

    cardSubHead.textContent = data[divIndex].subhead;
    imageDiv.src = data[divIndex].content;
    imageCaption.textContent = data[divIndex].caption;
    description.textContent = data[divIndex].answer;
    previousButton.textContent = data[divIndex - 1].cardHeadline;

    if (divIndex !== 6) {
      nextQuestionButton.textContent = data[divIndex + 1].cardHeadline;      
    }

    if (data[divIndex].content.includes('mp4')) {
        videoDiv.src = data[divIndex].content;
        videoDiv.style.display = 'block';
        
    } else {
        videoDiv.style.display = 'none';
       
        videoDiv.pause();
    }

    setTimeout(
        function() {
            cardBack.removeAttribute('style');
        }, 3000
    )


});