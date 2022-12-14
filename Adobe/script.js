let btn = document.querySelector('.click');
let debCount = document.querySelector('.deb-count');
let throtCount = document.querySelector('.throt-count');

let dCnt = 1, thCnt = 1;

debCount.innerText = dCnt;

let debounce = (fn, delay) => {
	let timer;
	return (...args) => {
  	clearTimeout(timer);
  	timer = setTimeout(()=> {
    	fn.call(this, ...args);
    }, delay);
  }
}

let throttle = (fn, wait) => {
	let flag = true;
  console.log(wait)
	return (...args)=> {
  		if(flag){
      	console.log(flag)
      	fn.call(this, ...args);
        flag = false;
        console.log(new Date().getTime());
        setTimeout(()=> {
        console.log(flag)
        	flag = true;
        }, wait)
      }
  }
}

let handleDebClick = () => {
	dCnt++;
  debCount.innerText = dCnt;
}

let handleThrotClick = () => {
	thCnt++;
  throtCount.innerText = thCnt;
}

let debounceEventHandler = debounce(handleDebClick, 500);
let throttleEventHandler = throttle(handleThrotClick, 10000);

let handleEvents = () => {
	debounceEventHandler();
  throttleEventHandler();
}

btn.addEventListener('click', handleEvents);


