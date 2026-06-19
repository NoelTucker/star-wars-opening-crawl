const start = document.getElementById('start');
const audio = document.getElementById('audio');

start.addEventListener('click', () => {
	start.setAttribute('hidden', '');
	document.body.classList.add('active');
	audio.play();
	setTimeout(() => {
		location.reload();
	}, 95000);
});
