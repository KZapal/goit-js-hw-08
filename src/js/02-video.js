import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

player.on('loaded', () => {
  const currentTime = localStorage.getItem(`videoplayer-current-time`);
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(`videoplayer-current-time`, event.seconds);
  }, 1000)
);
