/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
var bgColor;
var intervalID = window.setInterval(printQuote, 60000);
var randomNumber;
var randomQuote;
var message;
var randomAuthor;
var randomYear;
var randomLocation;
var quotes = [
  {
    quote: "I have, myself, full confidence that if all do their duty, if nothing is neglected, and if the best arrangements are made, as they are being made, we shall prove ourselves once again able to defend our Island home, to ride out the storm of war, and to outlive the menace of tyranny, if necessary for years, if necessary alone. At any rate, that is what we are going to try to do. That is the resolve of His Majesty’s Government-every man of them. That is the will of Parliament and the nation. The British Empire and the French Republic, linked together in their cause and in their need, will defend to the death their native soil, aiding each other like good comrades to the utmost of their strength. Even though large tracts of Europe and many old and famous States have fallen or may fall into the grip of the Gestapo and all the odious apparatus of Nazi rule, we shall not flag or fail. We shall go on to the end, we shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our Island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender, and even if, which I do not for a moment believe, this Island or a large part of it were subjugated and starving, then our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle, until, in God’s good time, the New World, with all its power and might, steps forth to the rescue and the liberation of the old.",
    author: "Winston Churchill",
    year: 1940,
    location: "House of Commons, London"
  },
  {
    quote: "Fans, for the past two weeks you have been reading about a bad break I got. Yet today I consider myself the luckiest man on the face of the earth. I have been in ballparks for seventeen years and have never received anything but kindness and encouragement from you fans. Look at these grand men. Which of you wouldn’t consider it the highlight of his career to associate with them for even one day? Sure, I’m lucky. Who wouldn’t consider it an honor to have known Jacob Ruppert – also the builder of baseball’s greatest empire, Ed Barrow – to have spent the next nine years with that wonderful little fellow Miller Huggins – then to have spent the next nine years with that outstanding leader, that smart student of psychology – the best manager in baseball today, Joe McCarthy! Sure, I’m lucky. When the New York Giants, a team you would give your right arm to beat, and vice versa, sends you a gift, that’s something! When everybody down to the groundskeepers and those boys in white coats remember you with trophies, that’s something. When you have a wonderful mother-in-law who takes sides with you in squabbles against her own daughter, that’s something. When you have a father and mother who work all their lives so that you can have an education and build your body, it’s a blessing! When you have a wife who has been a tower of strength and shown more courage than you dreamed existed, that’s the finest I know. So I close in saying that I might have had a tough break – but I have an awful lot to live for!",
    author: "Lou Gehrig",
    year: 1939,
    location: "Yankee Stadium"
  },
  {
    quote: "Tell General Howard I know his heart. What he told me before, I have it in my heart. I am tired of fighting. Our Chiefs are killed; Looking Glass is dead, Ta Hool Hool Shute is dead. The old men are all dead. It is the young men who say yes or no. He who led on the young men is dead. It is cold, and we have no blankets; the little children are freezing to death. My people, some of them, have run away to the hills, and have no blankets, no food. No one knows where they are – perhaps freezing to death. I want to have time to look for my children, and see how many of them I can find. Maybe I shall find them among the dead. Hear me, my Chiefs! I am tired; my heart is sick and sad. From where the sun now stands I will fight no more forever.",
    author: "Chief Joseph",
    year: 1877,
    location: "Montana Territory"
  },
  {
    quote: "Can we forge against these enemies a grand and global alliance, North and South, East and West, that can assure a more fruitful life for all mankind? Will you join in that historic effort? In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility — I welcome it. I do not believe that any of us would exchange places with any other people or any other generation. The energy, the faith, the devotion which we bring to this endeavor will light our country and all who serve it — and the glow from that fire can truly light the world. And so, my fellow Americans: ask not what your country can do for you — ask what you can do for your country. My fellow citizens of the world: ask not what America will do for you, but what together we can do for the freedom of man.",
    author: "JFK",
    year: 1961,
    location: "Washington, D.C."
  },
  {
    quote: "I am certain that my fellow Americans expect that on my induction into the Presidency I will address them with a candor and a decision which the present situation of our Nation impels. This is preeminently the time to speak the truth, the whole truth, frankly and boldly. Nor need we shrink from honestly facing conditions in our country today. This great Nation will endure as it has endured, will revive and will prosper. So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself-nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance. In every dark hour of our national life a leadership of frankness and vigor has met with that understanding and support of the people themselves which is essential to victory. I am convinced that you will again give that support to leadership in these critical days.",
    author: "FDR",
    year: 1933,
    location: "Washington, D.C."
  },
  {
    quote: "While I repeat my obligations to the Army in general, I should do injustice to my own feelings not to acknowledge in this place the peculiar Services and distinguished merits of the Gentlemen who have been attached to my person during the War. It was impossible the choice of confidential Officers to compose my family should have been more fortunate. Permit me Sir, to recommend in particular those, who have continued in Service to the present moment, as worthy of the favorable notice and patronage of Congress.I consider it an indispensable duty to close this last solemn act of my Official life, by commending the Interests of our dearest Country to the protection of Almighty God, and those who have the superintendence of them, to his holy keeping. Having now finished the work assigned me, I retire from the great theater of Action; and bidding an Affectionate farewell to this August body under whose orders I have so long acted, I here offer my Commission, and take my leave of all the employments of public life.",
    author: "George Washington",
    year: 1784,
    location: "Annapolis, Maryland"
  },
  {
    quote: "In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist. We must never let the weight of this combination endanger our liberties or democratic processes. We should take nothing for granted. Only an alert and knowledgeable citizenry can compel the proper meshing of the huge industrial and military machinery of defense with our peaceful methods and goals, so that security and liberty may prosper together.",
    author: "Dwight D. Eisenhower",
    year: 1961,
    location: "Washington, D.C."
  },
  {
    quote: "We welcome change and openness; for we believe that freedom and security go together, that the advance of human liberty can only strengthen the cause of world peace. There is one sign the Soviets can make that would be unmistakable, that would advance dramatically the cause of freedom and peace. General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and eastern Europe, if you seek liberalization, come here to this gate. Mr. Gorbachev, open this gate. Mr. Gorbachev, tear down this wall!",
    author: "Ronald Reagan",
    year: 1987,
    location: "Brandenburg Gate, Berlin"
  },
  {
    quote: "Fondly do we hope, fervently do we pray, that this mighty scourge of war may speedily pass away. Yet, if God wills that it continue until all the wealth piled by the bondsman’s two hundred and fifty years of unrequited toil shall be sunk, and until every drop of blood drawn with the lash shall be paid by another drawn with the sword, as was said three thousand years ago, so still it must be said “the judgments of the Lord are true and righteous altogether.” With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in, to bind up the nation’s wounds, to care for him who shall have borne the battle and for his widow and his orphan, to do all which may achieve and cherish a just and lasting peace among ourselves and with all nations.",
    author: null, ///abe lincoln
    year: 1865,
    location: "Washington D.C."
  },
  {
    quote: "I am not included within the pale of this glorious anniversary! Your high independence only reveals the immeasurable distance between us. The blessings in which you this day rejoice are not enjoyed in common. The rich inheritance of justice, liberty, prosperity, and independence bequeathed by your fathers is shared by you, not by me. The sunlight that brought life and healing to you has brought stripes and death to me. This Fourth of July is yours, not mine. Youmay rejoice, I must mourn. To drag a man in fetters into the grand illuminated temple of liberty, and call upon him to join you in joyous anthems, were inhuman mockery and sacrilegious irony. Do you mean, citizens, to mock me, by asking me to speak today?",
    author: "Frederick Douglass",
    year: null, ///1852,
    location: "Rochester, NY"
  }
];



/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(array){
  randomNumber = Math.floor((Math.random()*10));
  console.log(randomNumber);
  randomAuthor = array[randomNumber].author;
  randomYear = array[randomNumber].year;
  randomLocation = array[randomNumber].location;
  return array[randomNumber].quote;
}



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  randomColor();
  resetInterval();
  randomQuote = getRandomQuote(quotes);
  message = '<p class="quote">' + randomQuote + '</p>';
 if(randomAuthor != null){
      message += '<p class="source">' + randomAuthor + '</p>';
    } if(randomYear != null){
      message += '<span class="year">' + randomYear + '</span>';
    } if(randomLocation != null){
      message += '<span class="citation">' + randomLocation + '</span>';
    }
    document.getElementById('quote-box').innerHTML = message;
    document.body.style.backgroundColor = bgColor;
    document.getElementById('loadQuote').style.backgroundColor = bgColor;
}

function resetInterval(){
  clearInterval(intervalID);
  intervalID = setInterval(printQuote, 60000);
}

function randomColor(){
  var x = Math.floor(Math.random()* 256);
  var y = Math.floor(Math.random()* 256);
  var z = Math.floor(Math.random()* 256);
  bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}
randomColor();
document.body.style.backgroundColor = bgColor;
document.getElementById('loadQuote').style.backgroundColor = bgColor;
/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
