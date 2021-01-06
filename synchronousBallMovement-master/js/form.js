class Form{
    Constructor(){

    }
display(){
    var title = createElement('h2');
    title.html("CAR RACING GAME");
    title.position(130,0);

    var input = createInput("Name");
    var button = creteButton("Play");
    input.position(130,160);
button.position(250,200);

button.mousePressed(function(){
input.hide();
button.hide();

var name = input.value();

playerCount = playerCount+1;
player.update(name);
player.updateCount(playerCount);

var greeting = createElement ('h3');
greeting.html ("HELLO" + name );
})
}
}