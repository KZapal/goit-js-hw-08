import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);
const key = `videoplayer-current-time;`;

player.on('loaded', () => {
  const currentTime = localStorage.getItem(key);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(key, event.seconds);
  }, 1000)
);
