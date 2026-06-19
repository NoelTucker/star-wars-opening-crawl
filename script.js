const start = document.querySelector('#start');
const links = document.querySelectorAll('a');
const audio = document.querySelector('audio');

start.addEventListener('click', () => {
	start.setAttribute('hidden', '');
	links.setAttribute('hidden', '');
	document.body.classList.add('active');
	audio.play();
	setTimeout(() => {
		location.reload();
	}, 95000);
});
