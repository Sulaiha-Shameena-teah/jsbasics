function ageInDays()
{ 
   var birthyear = prompt('Enter your BirthYear');
   var ageInDayss = (2020 - birthyear)*365;
   var h1 = document.createElement('h1');
   var textanswer = document.createTextNode(`You are ${ageInDayss} days old!!`); 
   h1.setAttribute('id','ageInDays');
   h1.appendChild(textanswer);
   document.getElementById('flex-box-result').appendChild(h1);
}
function reset()
{
    document.getElementById('ageInDays').remove();
}
function generatecat()
{
    var image = document.createElement('img'); 
    var div = document.getElementById('flex-cat-gen');
    image.src="spl.jpg";
    div.appendChild(image);
}
function rpsgame(yourChoice)
{ 
    var humanChoice, botChoice; 
    humanChoice  = yourChoice.id; 
    botChoice = numberToChoice(randToRpsInt());
    result = decideWinner(humanChoice,botChoice);
    message = finalMsg(result);
    console.log(humanChoice,botChoice);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);

}
function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice, botChoice)
{
    var Rpsdatabase = {
        'rock' :{'rock':0.5, 'scissors':1, 'paper':0}, 
        'paper':{'rock':1, 'scissors':0, 'paper':0.5}, 
        'scissors':{'rock':0, 'scissors':0.5, 'paper':1}
    };
    var yourScore = Rpsdatabase[humanChoice][botChoice];
    var compScore = Rpsdatabase[botChoice][humanChoice];
    return [yourScore,compScore];
}
function finalMsg([yourScore,compScore])
{
    if(yourScore === 0)
    {
        return {'message':'You Lost!', 'color':'red'};
    }
    else if(yourScore === 0.5)
    {
        return {'message':'You Tied!', 'color':'yellow'};
    }
    else
    {
        return {'message':'You Win!', 'color':'green'};
    }
}
function rpsFrontEnd(humanChoice,botChoice,finalmessage)
{
    var imageDatabase = {
        'rock':document.getElementById('rock').src, 
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };
    // lets remove the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '"+imageDatabase[humanChoice]+"' ,height = 150, weight = 150, style = 'box-shadow: 0px 10px 50px blue'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv); 

    messageDiv.innerHTML = "<h1 style='color:"+finalmessage['color']+"; font-size:60px; padding: 30px'>"+ finalmessage['message']+"</h1>"; 
    document.getElementById('flex-box-rps-div').appendChild(messageDiv); 


    botDiv.innerHTML = "<img src = '"+imageDatabase[botChoice]+"' ,height = 150, weight = 150,  style = 'box-shadow: 0px 10px 50px red'>"
    document.getElementById('flex-box-rps-div').appendChild(botDiv); 
}

//Challenge 4: Change the color of all buttons
var all_buttons = document.getElementsByTagName('button'); 


var copyAllButton = []; 
for(let i=0; i<all_buttons.length; i++)
{
    copyAllButton.push(all_buttons[i].classList[1]);
}
console.log(copyAllButton);
function buttonColorChange(buttonthingy)
{
    if(buttonthingy.value === 'red')
    {
        buttonsRed();
    }
    else if(buttonthingy.value === 'green')
    {
        buttonsGreen();
    }
    else if(buttonthingy.value === 'reset')
    {
        buttonColorReset();
    }
    else if(buttonthingy.value === 'random')
    {
        randomColors();
    }
}

function buttonsRed()
{
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}

function buttonsGreen()
{
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}

function buttonColorReset()
{
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function randomColors()
{
    var choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randchoice()]);
    }

}
function randchoice()
{
    return Math.floor(Math.random() * 4);
}

//challenge 5 
let BlackjackGame = 
{
    'you' : {'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score': 0},
    'dealer' : {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score': 0},
    'cards' : ['2','3','4','5','6','7','8','9','10','a','q','k','j'],
    'cardsMap' :{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'a':[1,11],'q':10,'k':10,'j':10},
    'wins' : 0,
    'losses' : 0, 
    'draws' : 0,
};

const YOU = BlackjackGame['you'];
const DEALER = BlackjackGame['dealer'];

const hitsound = new Audio('hitsound.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit()
{
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU); 
    showScore(YOU);
    //console.log(YOU.score);
}
function showCard(card, activePlayer)
{
    if(activePlayer['score'] <= 21)
    {
    let cardImage = document.createElement('img');
    cardImage.src = `${card}.png`; 
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitsound.play();
    }
}
function blackjackDeal()
{
    
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for(i=0 ;i<yourImages.length ;i++)
    {
        yourImages[i].remove();
    }
    for(i=0 ;i<dealerImages.length ;i++)
    {
        dealerImages[i].remove();
    }
    YOU['score'] = 0; 
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
    document.querySelector('#blackjack-result').textContent = "let's play";
    document.querySelector('#blackjack-result').style.color = 'black';
}
function randomCard()
{
    let randIndex = Math.floor(Math.random()*13);
    return BlackjackGame['cards'][randIndex];
}
function updateScore(card, activePlayer)
{
    if(card === 'a')
    {
        if(activePlayer.score + BlackjackGame['cardsMap'][card][1] <= 21)
        {
            activePlayer.score += BlackjackGame['cardsMap'][card][1];
        }
        else
        {
            activePlayer.score += BlackjackGame['cardsMap'][card][0];
        }
    }
    else
    {
        activePlayer.score += BlackjackGame['cardsMap'][card];
    }
}
function showScore(activePlayer)
{
    if(activePlayer['score'] > 21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}
function dealerLogic()
{
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER); 
    showScore(DEALER);
    if(DEALER['score'] > 15)
    {
        let winner = computeWinner();
        showResult(winner);
    }
    
}
function computeWinner()
{
    let winner; 
    if(YOU['score'] <= 21)
    {
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
        {
            winner = YOU;
            //console.log('you win!');
            BlackjackGame['wins']++;
        }
        else if(DEALER['score'] > YOU['score'])
        {
            winner = DEALER;
            //console.log('you lost!');
            BlackjackGame['losses']++;
        }
        else if(DEALER['score'] === YOU['score'])
        {
            console.log('you draw!');
            BlackjackGame['draws']++;
        }
    }
    else if(DEALER['score']  < 21)
    {
        winner = DEALER;
        console.log('you lost!');
        BlackjackGame['losses']++;
    }
    else 
    {
        console.log('you draw!');
        BlackjackGame['draws']++;
    }
    return winner;
}

function showResult(winner)
{
    let message, messageColor;
    if(winner === YOU)
    {
        message = 'you win!'; 
        messageColor = 'green';
        document.querySelector('#wins').textContent = BlackjackGame['wins'];
    }
    else if(winner === DEALER)
    {
        message = 'you lost!'; 
        messageColor = 'red';
        document.querySelector('#losses').textContent = BlackjackGame['losses'];
    }
    else{
        message = 'you drew!'; 
        messageColor = 'black';
        document.querySelector('#draws').textContent = BlackjackGame['draws'];
    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}