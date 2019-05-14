/* 	@lesson 2 | Data binding
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */  

let app = new Vue({
    el: '#app', //Which element
    data: { //you can pass any variables into the data
    	name:    'Shyngys',
    	job:     'Be happy',
    	website: 'https://google.com',
    	websiteTag : '<a href="https://google.com">My website(Click me)</a>'
    }
});

/* PUT anything what you want into data
 * In the example above I use message and name variables.
 * You can name your new variables and put them your value
 *---------------------------------------------------------
 * look at website! I bind this value in the html page
 * we binded it with v-bind: directive
 * just name without curly braces
 */
