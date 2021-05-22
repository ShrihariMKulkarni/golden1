class Form {

    constructor(){

        this.greeting = createElement('h2');
        this.box = createInput().attribute("placeholder" , "name")
        this.button = createButton("submit");




    }


display(){

  background(bg1);
  textSize(50)
  fill("cyan")
  text("India the magnificant" , windowWidth/2-200 , windowHeight/2-170)
  textSize(40)
  fill("orange")
  text("Indian Quiz" , windowWidth/2-80 , windowHeight/2-110)

  this.box.style('color' , 'green');
  this.box.style('border' , 'solid');
  this.box.style('border-width' , '3px');
  this.box.position(windowWidth/2-80 , windowHeight/2-10)

  /*this.button.style('color' , 'orange');
  this.button.style('border' , 'solid');
  this.button.style('border-width' , '2px');*/
  this.button.position(windowWidth/2-80 , windowHeight/2+30)

  this.button.mousePressed(() => {
    this.box.hide();
    this.button.hide();
    player.name = this.box.value();
    count += 1;
    player.index = count;
    player.update();
    player.updateCount(count);
    this.greeting.html("Hello " + player.name + " , please wait until other players join , thank you for your patience..")
    this.greeting.position(windowWidth/2,windowHeight/2);
    this.greeting.style('color', 'blue');
    this.greeting.style('font-size', '50px');
});


}

}