// lib import
import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
// refs
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


// listening and updating current player time in LS
player.on('timeupdate', throttle(setTimeToLocalStorage, 1000));
function setTimeToLocalStorage(data){
localStorage.setItem("videoplayer-current-time", data.seconds)}

// get previous time after reload from ls
player
  .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
