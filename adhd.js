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
        'Z9IODJdi3GA',
        'qrYoA0yBPok',
        'gEI-NNoKvH4',
        'nO2BM7nVD6k',
        'cAvMIX4Hlic',
        
        /* hip hop */
        'xN6izmEZ9v0',
        
        /* interludes */
        'sQZrxNaqCUU',
        'FqmUXNWW7R8',
        'xDuyz9qrhUk',
        
        /* electronic */
        'PWi54vhGlQY',
        'ymyeFxfro9s',
        'oZjMPONVO50',
        '8md9mUs8Uls',
        'kV4Gk4I-VX8',
        'Qi11LVYL8g4',
        'u46eaeAfeqw',
        'BVOBQyhAtEc'
    ];
    
    pl_test = ['YYBcQgLMjK8']
    
    //start playing on load
    ytplayer.loadPlaylist({playlist:pl_test, suggestedQuality:'highres'});
    
    //options
    ytplayer.setLoop(true);
    ytplayer.setShuffle(true);
    
    //debug
    ytplayer.addEventListener("onStateChange", "debugInfo");
    
    //cue
    //ytplayer.cuePlaylist({playlist:pl, suggestedQuality:'highres'})
    //ytplayer.playVideo()
}

/*
function play() {
  if (ytplayer) {
    ytplayer.playVideo();
  }
}
*/
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
