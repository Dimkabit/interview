const slideButton = document.querySelectorAll('.button__slide');
const chelengeImage = document.querySelector('.chelenge__slide-image');

const data = [
	{
		img: 'img/slide.png',
	},
	{
		img: 'img/slide2.png',
	},
	{
		img: 'img/slidee.png',
	},
];

const deactive = () => {
	slideButton.forEach(btn => btn.classList.remove('active'))
}
slideButton.forEach((btn, i) => {
	
	btn.addEventListener('click', () => {
		if(!btn.classList.contains('active')) {
			deactive();
			btn.classList.add('active');
			chelengeImage.src = data[i].img;
		}
		
	})
})
