var time = 0;
var int = 1;

function start() {
	console.log('started!');
	int = setInterval(() => {
		time++;
		document.querySelector(".display").innerText = time;
	}, 1);
	console.log(this);
}

function stop() {
	clearInterval(int);	
}

function reset() {
	time = 0;
	document.querySelector(".display").innerText = time;	
}