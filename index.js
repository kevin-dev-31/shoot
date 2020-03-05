document.addEventListener("click", function(e){
	const body = document.querySelector('body');
	const bullet = document.createElement('span');
	const x = e.offsetX;
	const y = e.offsetY;
	const audio = document.getElementById('audio');

	bullet.style.left = x + 'px';
	bullet.style.top = y + 'px';
	body.appendChild(bullet);
	audio.play();
})