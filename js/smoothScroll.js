const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smothScrollElems.forEach(link => {
	
	link.addEventListener('click', (event) => {
		event.preventDefault();
		link.classList.add('active');
		if(link.classList.contains('active')) {
			link.classList.remove('active');
			const id = link.getAttribute('href').substring(1);
			document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});
		
		}
		headerBerger.classList.remove('active');
		headerMenu.classList.remove('active');
		boDy.classList.remove('lock');
		
	});
	
});

