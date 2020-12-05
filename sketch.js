var dog, dogFood;
var dogImg, happyDogImg;
var foodAmt = 20;
var controls;
var dogName = "hello";
var gameState = 0;
var time;
var food;

function preload() {
  dogImg = loadImage("images/dog.png");
  happyDogImg = loadImage("images/happyDog.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500)
  var rf = database.ref('dog/food');
  rf.on("value", readFood)

  var rn = database.ref('dog/name');
  rn.on("value", readName)

  dog = createSprite(350, 250);
  dog.addImage(dogImg)
  dog.scale = 0.2;

  database.ref('dog').set({
    food: foodAmt,
    name: dogName
  });


  controls = new Form();
  food = new Milk();

}
function  draw() {
  background("green");


  if(gameState === 1) {

    controls.hideName();
    food.display();
    fill("white")
    textSize(20);text("Food left: " + foodAmt, 300, 150)
    textSize(15)
    text("Pet's Name: " + dogName, 180, 70)

    controls.display();
    drawSprites();

    if(time) {
      text("Last Fed: " + time + " PM", 20, 40)
    }

  } else {
    controls.updateName();
    controls.hideControl();

  }
    //updateFood();
    console.log(time+ "  <--")
    updateFood();
    
}

function readFood(data) {
  var frd = data.val();
  foodAmt = frd;
}

function readName(data) {
  var frn = data.val();
  dogName = frn
}

function updateFood() {
  database.ref('dog').update({
    'food': foodAmt,
    'name': dogName
  })

}