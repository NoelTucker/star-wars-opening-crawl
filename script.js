const start = document.querySelector('#start');
const startPage = document.querySelector('.container:first-of-type');
const audio = document.querySelector('audio');

start.addEventListener('click', () => {
	startPage.setAttribute('hidden', '');
	document.body.classList.add('active');
	audio.play();
	setTimeout(() => {
		location.reload();
	}, 95000);
});
