/* 	@lesson 8 | Dynamic CSS Classes
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  
// https://ru.vuejs.org/v2/guide/computed.html

let app = new Vue({
	el: '#app', //Which element
    data: {
    	available: true,
    	nearby: false,
    },
    methods: {

    },
    computed: {
    	compClasses: function(){
    		return{
    			available: this.available,
    			nearby: this.nearby,
    		}
    	}
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * 
 */
