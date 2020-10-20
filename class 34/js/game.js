class Game{
    constructor(){}
    getState(){
        var gsreference = database.ref('gameState');
        gsreference.on("value",function(data){
            var gameState = data.val();
        })
    }
    update(state){
database.ref('/').update({
    gameState: state
})
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form  = new Form();
            form.display();
        }
    }
}