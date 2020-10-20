class Player{
    constructer(){}

    getCount(){
        var pcref = database.ref('playerCount');
        pcref.on("value",function(data){
var playerCount = data.val();
        })
    }
    updateCount(count){
database.ref('/').update({
    playerCount: count
})
    }
    update(name){
        var playerIndex = "player" + playerCount
        database.ref('class-34-370da/playerIndex').update({
name: name
        })
    }
}
    

