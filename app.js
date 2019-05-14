/* 	@lesson 11 | Simple Punchbag Game
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */

let app = new Vue({
	el: '#app', //Which element
    data: {
    	health: 100,
    	ended: false,
    },
    methods: {
    	punch: function(){
    		this.health -= 10;
    		if( this.health <= 0 ){
    			this.ended = true;
    		}
    	},
    	restart: function(){
    		this.health = 100;
    		this.ended = false;
    	}
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
