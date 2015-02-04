function onYouTubePlayerReady(playerId) {
    
    ytplayer = document.getElementById("myytplayer"),
         pl = [
        /* low quality */
        /* 
        '3D6LrpIerk4',
        'hhAxDmRRo9A',
        'HerpGwbLSM8',
        'w4LuzXI1x5w', 
        */
        
        /* bands */
        'Z9IODJdi3GA', //ok--
        'qrYoA0yBPok', //ok
        'gEI-NNoKvH4', //ok
        'nO2BM7nVD6k', //ok
        'cAvMIX4Hlic', //ok
        
        /* hip hop */
        'xN6izmEZ9v0', //ok
        
        /* interludes */
        'sQZrxNaqCUU', //ok
        'FqmUXNWW7R8', //ok
        'xDuyz9qrhUk', //ok
        
        /* electronic */
        'PWi54vhGlQY', //ok--
        'ymyeFxfro9s', //ok
        'oZjMPONVO50', //ok
        '8md9mUs8Uls', //skipped
        'kV4Gk4I-VX8', //skipped
        'Qi11LVYL8g4', //not in rotation
        'u46eaeAfeqw', //ok
        'BVOBQyhAtEc' //not in rotation
    ];
    
    pl_test = ['YYBcQgLMjK8']
    
    //start playing on load
    ytplayer.loadPlaylist({playlist:pl, suggestedQuality:'highres'});
    
    //options
    ytplayer.setLoop(true);
    ytplayer.setShuffle(true); //use a random seed too?
    
    //debug
    ytplayer.addEventListener("onStateChange", "debugInfo");
    
    //cue
    //ytplayer.cuePlaylist({playlist:pl, suggestedQuality:'highres'})
    //ytplayer.playVideo()
}

var params = { 
        allowScriptAccess: "always",
        allowFullscreen: "true"
    },
    atts = { 
        id: "myytplayer" 
    },
    vol = 100,
    s = '',
    increaseVol = function() {
        if (vol < 100) {
            vol = vol+10;
            ytplayer.setVolume(vol);
        }
        console.log(vol);
    },
    decreaseVol = function() {
        if (vol > 0) {
            vol = vol-10;
            ytplayer.setVolume(vol);
        }
        console.log(vol);
    },
    debugInfo = function(playerId){
        console.log("quality: " + ytplayer.getPlaybackQuality());
        console.log("playlist: " + ytplayer.getPlaylist()[ytplayer.getPlaylistIndex()]);
        console.log("\n");
    },
    paused = false;

 swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&version=3", //https://developers.google.com/youtube/player_parameters
                     "ytapiplayer", "100%", "100%", "8", null, null, params, atts);

/* DEBUG */
$(document).keypress(function(event){
    s = String.fromCharCode(event.which);
    if (s==='d'){
        ytplayer.nextVideo();
    } else if (s==='w'){ //TODO: change to use arrow event.which values. ignore case.
        increaseVol();
    } else if (s==='s'){
        decreaseVol();
    } else if (s===' ') {
        if (paused){
            ytplayer.playVideo();
            paused = false;
        } else {
            ytplayer.pauseVideo();
            paused = true;
        }
    }
 });
