/* 	@lesson 3 | Events (ex: onclick, onmousemove)
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  

let app = new Vue({
    el: '#app', //Which element
    data: { //you can pass any variables into the data
    	age: 17, 
    	// div.canvas
    	x: 0,
    	y: 0,
    },
    methods:{
    	add: function(inc){ //increment
    		this.age+=inc;
    	},
    	subtract: function(dec){ //decrement
			this.age-=dec;
    	},
    	// div.canvas
    	updateXY: function(event){//ne need to call with updateXY(event). It passes auto.
    		this.x = event.offsetX;
    		this.y = event.offsetY;
    	}
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * When we console.log(event) which in updateXY
 * we got this output in console.
 * MouseEvent
 * {
 *		altKey: false
 * 		bubbles: true
 *		button: 0
 *		buttons: 0
 *		cancelBubble: false
 *		cancelable: true
 *		clientX: 630
 *		clientY: 340
 *		composed: true
 *		ctrlKey: false
 *		currentTarget: null
 *		defaultPrevented: false
 *		detail: 0
 *		eventPhase: 0
 *		fromElement: null
 *		isTrusted: true
 *		layerX: 630
 *		layerY: 835
 *		metaKey: false
 *		movementX: 27
 *		movementY: -5
 *		offsetX: 621
 *		offsetY: -266
 *		pageX: 630
 *		pageY: 835
 *		path: (6) [div.canvas, div#app, body, html, document, Window]
 *		relatedTarget: null
 *		returnValue: true
 *		screenX: 630
 *		screenY: 411
 *		shiftKey: false
 *		sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
 *		srcElement: div.canvas
 *		target: div.canvas
 *		timeStamp: 11521.999999999935
 *		toElement: div.canvas
 *		type: "mousemove"
 *		view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
 *		which: 0
 *		x: 630
 *		y: 340
 *  }
 * to get mouse coordinates we use offsetX & offsetY
 * place this value into this.x = offsetX & for y
 */
