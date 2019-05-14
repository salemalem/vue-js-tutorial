/* 	@lesson 0 | Creating Vue instance
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  

let app = new Vue({
    el: '#app', //Which element
    data: {
    	message: 'Hello World!',
    	name: 'Shyngys'
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 */
