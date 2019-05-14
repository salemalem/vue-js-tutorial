/* 	@lesson 4 | Event Modifiers
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  

let app = new Vue({
    el: '#app', //Which element
    data: { //you can pass any variables into the data
    	age: 17,
    },
    methods:{
    	add: function(inc){ //increment
    		this.age+=inc;
    	},
    	subtract: function(dec){ //decrement
			this.age-=dec;
    	},
    	click: function(){
    		alert("You clicked me");
    	}
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * Good luck
 */
