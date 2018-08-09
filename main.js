function Jukebox(){
    this.songList = [
      "nights.mp3" , "lulliby.mp3","jump.mp3", "elvish.mp3"
    ];
    this.queue = [];
    this.audioEl = document.getElementById("audio");

    // this.loadQueue = function(num){
    //     console.log(num);
    //     var int = parseInt(num);
    //     var songPicked = document.querySelectorAll(".song span")[int].textContent;
    //     console.log(songPicked);
    //     this.queue.push(songPicked);
    //     console.log(this.queue)

    //     //document.querySelector("#song-loaded").textContent = song;
    // }

    this.load = function(num){
        var int = parseInt(num);
        console.log(int);
        var sourceEl = document.getElementById("src");
        sourceEl.setAttribute("src", "songs/"+this.songList[int] );

        console.log(sourceEl)
        this.audioEl.load();
        var songPicked = document.querySelectorAll(".song span")[int].textContent;
        document.querySelector("#song-loaded").textContent = songPicked;
        
    }

    this.play = function(){
        this.audioEl.play();
        
    }
    this.stop = function(){
        this.audioEl.pause();
    }

    
}

var session = new Jukebox();

document.querySelector("#play").onclick = function(){
    session.play();
}
document.querySelector("#pause").onclick = function(){
    session.stop();
}

// for(var i=0; i<session.queue.length; i++){
//     document.querySelectorAll(".song button")[i].onclick = function(){
//         session.load(i);
//         console.log('test')
//     }
    
// }

document.querySelectorAll(".song button")[0].onclick = function(){
    session.load("0");
}

document.querySelectorAll(".song button")[1].onclick = function(){
    session.load("1");
}

document.querySelectorAll(".song button")[2].onclick = function(){
    session.load("2");
}

