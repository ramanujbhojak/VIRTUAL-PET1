//Create variables here
var dog, dogImg, happyDogImg;
var database;
var foodS,foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodStock = database.ref("Food");
 foodStock = database.ref("FOOD");
 foodStock.on("value",readStock)

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
}


function draw() {  
  background("orange");
  if(foodS!== undefined){
    textSize(25);
    fill(255);
    text("NOTE: PRESS UP ARROW TO FEED MILK",50,50);
    text("FOOD REMAINING:" + foodS,150,150);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogImg);

    }

    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImg);
    }
    
    
  }

  drawSprites();
  //add styles here

}
 function readStock(data){

  foodS=data.val();

 }
 
 function writeStock(x){

  if(x<0){

    x = 0
  }else{
    x = x-1;
  }
  database.ref("/").update({
    Food:x
  })
 }
 




 








