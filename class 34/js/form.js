class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,150);

var input = createInput("name");
input.position(425,250);

var button = createButton('start');
button.position(450,350);

var greeting = createElement('h3');

button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount += 1;

    player.update(name);
    player.updateCount(playerCount);

    greeting.html("hello "+name);
    greeting.position(400,250);
})

    }
}