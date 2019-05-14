/* 	@lesson 1 | Data & methods
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  

let app = new Vue({
    el: '#app', //Which element
    data: { //you can pass any variables into the data
    	message: 'Hello World!',
    	name: 'Shyngys'
    },
    methods: { //work with data
    	greet: function(time){
    		return 'Good '+time
    	},
    	iam: function(){
    		return 'Hello my name is '+this.name
    	}
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * greet method takes only time for argument and displays 
 * with Good in the beginning.
 *---------------------------------------------------------
 * iam method as you see works with data.
 * To access data simply add this. before your variable name
 */
