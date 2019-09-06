import { type } from "os";


// Create the player using a pre-existing DOM element.
const player = LivePhotosKit.Player(document.getElementById('my-live-photo-target-element'));
player.photoSrc = 'img/index/livephotos/IMG_1089.jpeg';
player.videoSrc = 'img/index/livephotos/IMG_1089.mov';
// Listen to events the player emits.
player.addEventListener('canplay', evt => console.log('player ready', evt));
player.addEventListener('error', evt => console.log('player load error', evt));
player.addEventListener('ended', evt => console.log('player finished playing through', evt));
// Use the playback controls.
player.playbackStyle = LivePhotosKit.PlaybackStyle.HINT;
player.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
player.play();
player.pause();
player.toggle();
player.stop();
// Seek the animation to one quarter through.
player.currentTime = 0.25 * player.duration;
// Seek the animation to 0.1 seconds into the Live Photo.
player.currentTime = 0.1;

player.addEventListener('error', (ev) => {
    if (typeof ev.detail.errorCode === 'number') {
        switch (ev.detail.errorCode) {
        case LivePhotosKit.Errors.IMAGE_FAILED_TO_LOAD:
            // Do something
            break;
        case LivePhotosKit.Errors.VIDEO_FAILED_TO_LOAD:
            // Do something
            break;
        }
    } else {
        // Extract error.
        console.error(ev.detail.error);
    }
})

// const player = LivePhotosKit.Player(document.GetElementById('livephotos-layer'));
// player.photoSrc = 'img/index/livephotos/IMG_1089.jpg';
// player.videoSrc = 'img/index/livephotos/IMG_1089.mov';

/* --------------------------EVENTS----------------------------------- */
// player.addEventListener('canplay', evt => {console.log('LivePhotos player reader', evt)});
// player.addEventListener('error', evt => {
//     if (typeof evt.detail.errorCode === 'number') {
//         switch(evt.detail.errorCode) {
//             case LivePhotosKit.Errors.IMAGE_FAILED_TO_LOAD:
//                 break;
//             case LivePhotosKit.Errors.VIDEO_FAILED_TO_LOAD:
//                 break;
//         }
//     } else {
//         console.error(evt.detail.error);
//     }
// })

// player.addEventListener('ended', evt => {
//     console.log('LivePhotos player has finished playing the video', evt);
// });

// player.addEventListener('videoload', evt => {
//     console.log('video uploaded', evt);
// });

// player.addEventListener('photoload', evt => {
//     console.log('photo uploaded', evt);
// })

// // Shows the controls
// player.showsNativeControls = true;


// // How are we going to make the transition between photo and video?
// // It also affects the total duration of playback
// player.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
// //
// // We can also control video playback
// // with these functions.