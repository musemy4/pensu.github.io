/*
Solution for:
https://codepen.io/netcraft/pen/jENxgY?editors=001
*/

(function () {
	var getNumsFromRange,
	   hitMe,
	   slots;
 
	/**
	  * 특정 범위안의 3개의 랜덤 수를 배열로 되돌림. 
	  * 양수로 나옴
	 */
	getNumsFromRange = function (min, max) {
	   var getRandomInt,
	   swap;
 
	   
	 if (typeof max === 'undefined') {
		  max = min;
		  min = 0;
	   }
	 
	 // 음수값처리
	 if (min < 0) {
		 min = Math.abs(min);
	 }
	 if (max < 0) {
	   max = Math.abs(max);
	 }
	 
	 // 큰수를 
	 if (min > max) {
	   swap = min;
	   min = max;
	   max = swap;
	 }
 
	   getRandomInt = function () {
	   // +1 needed to make Max inclusive
	   // See http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
		  return Math.floor(Math.random() * (max - min + 1)) + min;
	   };
 
	   return [getRandomInt(), getRandomInt(), getRandomInt()];
 
 
	};
 
 
 
 
	//----------------------------------------------------------
	// Tests
	//----------------------------------------------------------
	// Passing negative numbers should result in a positive range
	// console.log(getNumsFromRange(-1, 0));
	// Support specifiying the range in reverse order
	// console.log(getNumsFromRange(0, 1));
   // Support passing only 1 argument to specifiy a range from 0
 //   console.log(getNumsFromRange(1));
 
	//----------------------------------------------------------
	// Do not touch the code below
	//----------------------------------------------------------
	slots = document.querySelectorAll('#slots span');
	hitMe = document.querySelector('#hitMe');
	hitMe.counter = 0;
 
	// On button click (Enter as well)
	hitMe.addEventListener('click', function (e) {
	   // Get lucky numbers, range 0-2
	   var nums = getNumsFromRange(0, 3);
 
	   e.preventDefault();
 
	   // slots배열의(0-2까지있음(3개)) elm, inx, arr 로 쪼개서 함수발동!
	   [].forEach.call(slots, function (elm, inx, arr) {
		  setTimeout(function () {
				 //각자가 돈다
			 elm.classList.toggle('spin');
 
				 //3개의 번호가 있다
				 if (Array.isArray(nums) && nums.length === 3) {
				// Inject the number, delay for effect
				setTimeout(function () {
				   var tries,
					  winner;
 
				   // 이부분을 이미지 바꾸는 걸로 바꾸는 게 좋을 듯 
				   
				   var elm1 = document.getElementById('icon1');
				   elm1.src = "./icon/"+nums[0]+".png";
 
				   var elm2 = document.getElementById('icon2');
				   elm2.src = "./icon/"+nums[1]+".png";
 
				   var elm3 = document.getElementById('icon3');
				   elm3.src = "./icon/"+nums[2]+".png";
 
 
 
				   // Do we have a winner
				   if (inx === slots.length - 1) {
					  tries = document.querySelector('#tries');
					  // Count how many tries
					  hitMe.counter++;
					  tries.innerHTML = hitMe.counter;
   
							 //3개의 숫자가 동일하면
					  if (nums[0] === nums[1] &&
						 nums[1] === nums[2]) {
								 winner = document.querySelector('#winner');
								 p=document.querySelector('p');
								 peng=document.querySelector('#peng');
								 
								 //p끝에 만에가 붙고 버튼이 사라지고
								 
						 winner.innerHTML = '<h1>~플렉스해버렷지모얌~</h1>';
								 hitMe.style.display="none";
								 
								 //선글라스를 쓴다
								 sun=document.querySelector('#sun');
								 sun.style.display="block";   
								 
								 move();
 
								 if(hitMe.counter===1){
									 p.innerHTML+="만에";
									 peng.src="2.png";
								 } else{
									 p.innerHTML+="에";
								 }    
 
								
								 var cnt=0;
								 function move(){
									 setTimeout(function(){
										cnt++;
										 sun.style.top+=10+"px";
										},1000)
										if(cnt===5){return;}
										moveback();
									 }
 
									 // 이게 잘 안됨...
								 function moveback(){
									 
									setTimeout(function(){
									 sun.style.top-=10+"px";
									},1000)                                
								 }
						 // console.log('Got it!!! After ' + hitMe.counter + ' tries!');
						 // console.log(nums[0]);
						 // console.log(nums[1]);
						 // console.log(nums[2]);
 
						 // Reset tries counter
						 hitMe.counter = 0;
					  }
				   }
				}, 335);
			 }
		  }, inx * 100);
	   });
	});
 }());