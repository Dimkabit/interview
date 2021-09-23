
const playBtn = document.querySelector('.play');
const muteBtn = document.getElementById('mute');


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


function send1(){
	playBtn.textContent = 'Stop';
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
 }
  
 function send2(){
	playBtn.textContent = 'Play';
	$(document).ready(function () {
		$('#app').vide({
			mp4: 'video/SAINT JAMES - Collection Printemps_Été 2019.mp4',
			webm: 'video/video.webm',
			ogv: 'video/video.ogv',
			poster: 'img/image2.png',
			 
		}, {
			autoplay: false,
			muted: false,
		});
	});
 }


playBtn.addEventListener('click', (e) => {
	e.preventDefault();
	playBtn.classList.toggle('active');
	
	if(playBtn.classList.contains('active')) {
		send1();
	} else {
		send2();
	}
})


muteBtn.onclick = (e) => {
	e.preventDefault();
	muteBtn.classList.toggle('active');

	if(muteBtn.classList.contains('active')) {
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
	} else {
		send2()
	}
};


