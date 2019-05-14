/* 	@lesson 7 | Computed Properties
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  
// https://ru.vuejs.org/v2/guide/computed.html

let app = new Vue({
    el: '#app', //Which element
    data: { //you can pass any variables into the data
    	age: 20,
    	a: 0,
    	b: 0,
    },
    methods: {/*
    	addToA: function(){
    		return this.a + this.age;
    	},
    	addToB: function(){
    		return this.b + this.age;
    	}*/
    },
    computed: {
    	addToA: function() {
    		return this.a + this.age;
    	},
    	addToB: function() {
    		return this.b + this.age;
    	}
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * You can use methods as shown above. But I use computed because it's 
 * readable, sustainable & supportable.
 */
