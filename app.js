/* 	@lesson 10 | Looping with v-for | Cycles
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  
// https://vuejs.org/v2/guide/list.html

let app = new Vue({
	el: '#app', //Which element
    data: {
    	name: 'Sven',
    	characters: ['Jessica', 'Stella', 'Emily', 'Ray'],
    	frameworks:[
    		{name: 'Vue.js',     cool_level: 99},
    		{name: 'React.js',   cool_level: 88}, //Yeah Vue.js is cooler))
    		{name: 'Angular.js', cool_level: 77},
    	],
    },
    methods: {

    },
    computed: {

    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * Good luck :)
 */
