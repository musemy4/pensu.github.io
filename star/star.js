window.addEventListener('DOMContentLoaded',function(){

	document.addEventListener('click',function(e){
		if (e.target.getAttribute('id') == 'indexButton') {
			document.getElementById('indexButton').classList.add('faded');
			if (document.body.className.indexOf('indexView') == -1) {
				for (let i = 0; i < document.getElementsByClassName('homepage-thumbnail-col').length; i++) {
					let homepageThumbnailImage = document.getElementsByClassName('homepage-thumbnail-img')[i];
					let homepageThumbnailCol = document.getElementsByClassName('homepage-thumbnail-col')[i];
					let thisHeight = homepageThumbnailImage.offsetHeight;
					let thisColHeight = homepageThumbnailCol.offsetHeight;
					let thisWidth = homepageThumbnailImage.offsetWidth;
					homepageThumbnailImage.style.height = thisHeight + 'px';
					homepageThumbnailImage.style.width = thisWidth + 'px';
					homepageThumbnailCol.style.height = thisColHeight + 'px';
					homepageThumbnailImage.setAttribute('data-height', thisHeight);
					homepageThumbnailImage.setAttribute('data-width', thisWidth);
				}
				// setTimeout(function(){
				// 	document.body.classList.add('indexView');
				// 	for (let i = 0; i < document.getElementsByClassName('homepage-thumbnail-img').length; i++) {
				// 		document.getElementsByClassName('homepage-thumbnail-img')[i].removeAttribute('style');
				// 		document.getElementsByClassName('homepage-thumbnail-col')[i].removeAttribute('style');
				// 	}
				// 	document.getElementById('indexButton').textContent = '(Image)';
				// }, 300);
				// setTimeout(function(){
				// 	document.getElementById('indexButton').classList.remove('faded');
				// }, 900);
			} else {
				unindexView();
			}
		}
	});


/**Eraser**/

var pixelsArr = [];
var totalSize = window.innerHeight*window.innerWidth;
var pixelsCovered = 0;
var radius = Math.round(window.innerWidth/10);

window.addEventListener('resize',function(){
	totalSize = window.innerHeight*window.innerWidth;
});

if (document.getElementById('canvasUnder')) {
	for (i = 0; i < 100; i++) {
		document.getElementById('canvasUnder').innerHTML = document.getElementById('canvasUnder').innerHTML + '<div class="canvasUnderReactingBlock"></div>';
	}
}

document.addEventListener('mousemove',function(e){
	if (e.target.className.indexOf('canvasUnderReactingBlock') > -1) {
		if (e.target.className.indexOf('move1') == -1) {
			e.target.classList.add('move1');
		} else {
			e.target.classList.add('reaction');
		}
	}
});

document.addEventListener('mousemove',function(e){
	if (e.target.className.indexOf('canvasUnderReactingBlock') > -1) {
		if (e.target.className.indexOf('move1') == -1) {
			e.target.classList.add('move1');
		}
	}
});

document.addEventListener('click',function(e){

	if (e.target.className.indexOf('canvasUnderReactingBlock') > -1 &&
	e.target.className.indexOf('reaction') == -1) {
		removeAllCanvasBlocks();
	}
	if (e.target.tagName == 'A') {
		removeAllCanvasBlocks();
	}
});

let overHalf = 0;


	(function() {
	  // Creates a new canvas element and appends it as a child
	  // to the parent element, and returns the reference to
	  // the newly created canvas element

	  function createCanvas(parent, width, height) {
	    let canvas = {};
	    canvas.node = document.createElement('canvas');
	    canvas.context = canvas.node.getContext('2d');
	    canvas.node.width = width || window.innerWidth;
	    canvas.node.height = height || window.innerHeight;
	    parent.appendChild(canvas.node);
	    return canvas;
	  }

	  function init(container, width, height, fillColor) {
	    let canvas = createCanvas(container, width, height);
	    let ctx = canvas.context;
	    // define a custom fillCircle method
	    ctx.fillCircle = function(x, y, radius, fillColor) {
	      this.fillStyle = fillColor;
	      this.beginPath();
	      this.moveTo(x, y);
	      this.arc(x, y, radius, 0, Math.PI * 2, false);
	      this.fill();
	    };
	    ctx.clearTo = function(fillColor) {
	      ctx.fillStyle = fillColor;
	      ctx.fillRect(0, 0, width, height);
	    };
	    ctx.clearTo(fillColor || "#ffea2f");

	    let img = new Image();
	    if (document.getElementById('homepageImageUrl')) {
				img.src = document.getElementById('homepageImageUrl').textContent;
	    }

			img.onload = function() {
		    ctx.drawImage(img, (window.innerWidth / 2) - (window.innerWidth*(0.8/2)), (window.innerHeight / 2) - (((window.innerWidth*(0.8/2))/img.width)*img.height), window.innerWidth*0.8, ((window.innerWidth*0.8)/img.width)*img.height);
			}

			let imgWidth = parseFloat(img.width);
			let divider = imgWidth;

	    ctx.globalCompositeOperation = 'destination-out';

	    // bind mouse events
	    document.addEventListener('mousemove',function(e) {
	      let x = e.clientX;
	      let y = e.clientY; // or whatever
	      let fillColor = '#ff00ff';
	      ctx.globalCompositeOperation = 'destination-out';
	      ctx.fillCircle(x, y, radius, fillColor);
	    });
	  }

		window.addEventListener('resize',function(){
			if (document.getElementById('canvas')) {
		  	if (document.getElementById('canvas').className.indexOf('faded') == -1) {
			  	if (overHalf < 1 && document.getElementById('canvas')) {
			  		document.getElementById('canvas').innerHTML = '';
					  init(container, window.innerWidth, window.innerHeight, '#ffea2f');
			  	}
			  	if (window.innerWidth < 768
			  		|| document.getElementById('canvas') && overHalf > 0) {
			  		document.getElementById('canvas').classList.add('faded');
			  		for (let i = 0; i < document.getElementsByClassName('canvasUnderReactingBlock').length; i++) {
				  		document.getElementsByClassName('canvasUnderReactingBlock').classList.add('move1')
				  		document.getElementsByClassName('canvasUnderReactingBlock').classList.add('reaction');
				  	}
			  	}
				}
			}
	  });

	  let container = document.getElementById('canvas');
		if (document.getElementById('canvas')) {
		  init(container, window.innerWidth, window.innerHeight, '#ffea2f');
		}
	})();

}); //DOMContentLoaded

/*-------------------------------------------------------------------------------------------ajax*/