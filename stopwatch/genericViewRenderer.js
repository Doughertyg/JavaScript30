class Stopwatch {
  constructor(el) {
    this.target = document.querySelector(el);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.active = false;
    this.ms = 0;
    this.intervalId = null;
    
    this.render();
    this.target.addEventListener('click', this.onClick.bind(this));
  }
  
  render() {
    const frag = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.innerText = '0';
    const startButton = this._genButton('start');
    const stopButton = this._genButton('stop');
    const resetButton = this._genButton('reset');
    
    frag.appendChild(h1);
    frag.appendChild(startButton);
    frag.appendChild(stopButton);
    frag.append(resetButton);
    
    this.target.appendChild(frag);
  }
  
  start() {
    if (!this.active) {
        this.active = !this.active;
        this.intervalId = setInterval(() => {
        this.ms += 1;
        this.target.firstElementChild.innerText = this.ms;
      }, 1)
    }
    
    return;
  }
  
  stop() {
    if (this.active) {
      this.active = !this.active;
      clearInterval(this.intervalId); 
    }
    
    return;
  }
  
  reset() {
    this.stop();
    this.ms = 0;
    this.target.firstElementChild.innerText = this.ms;
  }
  
  _genButton(name) {
    const genericButton = document.createElement('button');
    genericButton.className = name;
    genericButton.innerText = name;
    
    return genericButton;
  }
  
  onClick(e) {
    if (e.target.matches('.start')) {
      this.start();
    }

    if (e.target.matches('.stop')) {
      this.stop();
    }
    
    if (e.target.matches('.reset')) {
      this.reset();
    }

    return;
  }
}

const s = new Stopwatch('.target');
const c = new Stopwatch('.target2');