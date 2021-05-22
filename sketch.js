var gameState=0;
var count , allPlayers;
var form , game , player;


function preload()
{
	
  bg1 = loadImage("images/indiabg.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  database = firebase.database();

  
  box = createInput().attribute("placeholder" , "name")
  button = createButton("submit");

  form = new Form();

  game = new Game();
  game.getState();
  game.start();
}


function draw() {  

  background(bg1);
  textSize(50)
  fill("cyan")
  text("India the magnificant" , windowWidth/2-200 , windowHeight/2-170)
  textSize(40)
  fill("orange")
  text("Indian Quiz" , windowWidth/2-80 , windowHeight/2-110)

  /*box.style('color' , 'green');
  box.style('border' , 'solid');
  box.style('border-width' , '3px');
  box.position(windowWidth/2-80 , windowHeight/2-10)*/

  /*button.style('color' , 'orange');
  button.style('border' , 'solid');
  button.style('border-width' , '2px');
  button.position(windowWidth/2-80 , windowHeight/2+30)*/

  drawSprites();


}



