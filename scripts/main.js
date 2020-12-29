const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
const insertX = [
  "Willy the Goblin", 
  "Big Daddy", 
  "Father Christmas"
];
const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener("click", result);

function result() {
  let newStory, name, weight, temperature, xItem, yItem, zItem;

  /* Name */
  name = "Bob"; // Default
  if(customName.value !== "") { // If specified
    name = customName.value;
  }

  /* Weight and Temperature */
  // Default: US
  temperature =  Math.round(94) + " fahrenheit";
  weight = Math.round(300) + " pounds";
  // UK
  if(document.getElementById("uk").checked) {
    temperature =  Math.round(34) + " centigrade";
    weight = Math.round(21) + " stones";
  }

  /* Inserting Item */
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  /* Story */
  newStory = 
  `It was ${ temperature } outside, so ${ xItem } went for a walk. \
  When they got to ${ yItem }, they stared in horror for a few moments, then ${ zItem }. \
  ${ name } saw the whole thing, but was not surprised — ${ xItem } weighs ${ weight }, and it was a hot day.`;

  /* Data Update */
  story.textContent = newStory;
  story.style.visibility = "visible";
}