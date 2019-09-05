class Stopwatch {
	constructor(target) {
		this.target = document.querySelector(target);
		this.ms = 0;
		// this.interval.bind(this);
		this.start.bind(this);
		// this.handleClick.bind(this);
		this.render.bind(this);
		this.int = 1;

		this.render();
		this.display = this.target.querySelector(".time");
		this.target.addEventListener("click", this.handleClick.bind(this));
	}

	// create 4 elements:
	// element that displays time
	// button element that starts the stopwatch
	// button element that stops the stopwatch
	// button element that resets the stopwatch
	// attach functions to each to stop, start, and reset
	// write function for updating the view of the time


	start() {
		console.log('started!');
		console.log(this);
		this.int = setInterval(() => {
			this.ms += 1;
			this.display.innerHTML = this.ms;
		}, 1);
	}

	stop() {
		clearInterval(this.int);
	}

	reset() {
		this.ms = 0;
		console.log(this.ms);
		this.display.innerHTML = this.ms;
	}

	handleClick(event) {
		console.log('clicked!', event);
		console.log(this);

		if (event.target.matches('.start')) {
			this.start();
		}

		if (event.target.matches('.stop')) {
			this.stop();
		}

		if (event.target.matches('.reset')) {
			this.reset();
		}
	}

	render() {
		var display = document.createElement("h1");
		display.innerHTML = this.ms;
		display.className = "time";
		var buttonStart = document.createElement("button");
		var buttonStop = document.createElement("button");
		var buttonReset = document.createElement("button");
		buttonStart.innerHTML = "start";
		buttonStart.className = "start";
		buttonStop.innerHTML = "stop";
		buttonStop.className = "stop";
		buttonReset.innerHTML = "reset";
		buttonReset.className = "reset";
		this.target.appendChild(display);
		this.target.appendChild(buttonStart);
		this.target.appendChild(buttonStop);
		this.target.appendChild(buttonReset);
	}
}

new Stopwatch(".target");