class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('count');
        playerCountRef.on("value", (data) => {
            count = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            count: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            score:this.score
        });
    }













}