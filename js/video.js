$(document).ready(function () {
	$('#app').vide({
		mp4: 'video/SAINT JAMES - Collection Printemps_Été 2019.mp4',
		webm: 'video/SAINT JAMES - Collection Printemps_Été 2019 (convert-video-online.com).webm',
		ogv: 'video/SAINT JAMES - Collection Printemps_Été 2019.ogv',
		poster: 'img/image2.png',
		 
   }, {
		autoplay: false,
	});
});


const playBtn = document.getElementById('play');
const muteBtn = document.getElementById('mute')
playBtn.addEventListener('click', (e) => {
	e.preventDefault();
	
	if(playBtn) {
		$(document).ready(function () {
			$('#app').vide({
				mp4: 'video/SAINT JAMES - Collection Printemps_Été 2019.mp4',
				webm: 'video/video.webm',
				ogv: 'video/video.ogv',
				poster: 'img/image2.png',
				 
			}, {
				autoplay: true,
				muted: false,
			});
		});
	} else {
		$(document).ready(function () {
			$('#app').vide({
				mp4: 'video/SAINT JAMES - Collection Printemps_Été 2019.mp4',
				webm: 'video/video.webm',
				ogv: 'video/video.ogv',
				poster: 'img/image2.png',
				 
			}, {
				autoplay: false,
			});
		});
	}
});

muteBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if(muteBtn) {
		$(document).ready(function () {
			$('#app').vide({
				mp4: 'video/SAINT JAMES - Collection Printemps_Été 2019.mp4',
				webm: 'video/video.webm',
				ogv: 'video/video.ogv',
				poster: 'img/image2.png',
				 
			}, {
				muted: true,
			});
		});
	}
})


