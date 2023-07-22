import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

// Достаем время видео и получаем его из localStorage//
player.on('timeupdate', throttle((event) => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

// Получаем время из localStorage как продолжение воспроизведения//
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

