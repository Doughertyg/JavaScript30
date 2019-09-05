class Stopwatch {
	constructor(target) {
		this.target = document.getElementsByClassName(target);
		this.display = document.createElement("h2");
		this.time = 0;
		this.int = 1;

		this.render();
	}

	buttonGen(name) {
		var btn = document.createElement("button");
		btn.className = name;
		btn.innerText = name;
		return btn; 
	}

	start() {
		this.int = setInterval(() => {
			this.time++;
			this.display.innerText = this.time;
		}, 1);
		console.log(this.time);
	}

	stop() {
		clearInterval(this.int);
		// this.display.innerText = this.time;
	}

	reset() {
		this.time = 0;
		this.display.innerText = this.time;
	}

	render() {
		// create and append all nodes to dom:
		var node = document.createDocumentFragment();
		var startBtn = this.buttonGen("start");
		startBtn.onclick = this.start.bind(this);
		var stopBtn = this.buttonGen("stop");
		stopBtn.onclick = this.stop.bind(this);
		var resetBtn = this.buttonGen("reset");
		resetBtn.onclick = this.reset.bind(this);
		node.appendChild(this.display);
		node.appendChild(startBtn);
		node.appendChild(stopBtn);
		node.appendChild(resetBtn);

		this.target[0].appendChild(node);
	}
}

var watch = new Stopwatch("stopwatch");