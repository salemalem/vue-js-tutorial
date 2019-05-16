/* 	@lesson 12 | Multiple Vue Instances
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */

let app1 = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One',
    },
    methods: {
        
    },
    computed: {
        greet: function() {
            return 'First';
        },
    },
});

let app2 = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two',
    },
    methods: {
        changeTitle1: function() {
            app1.title = "Changed";
        }
    },
    computed: {
        greet: function() {
            return 'Second';
        },
    },
});

/* each Vue.js app has his own data, methods, computed.
 * To change other app's data instead of usual this. type app1.
 * For ex: changeTitle1 function changes title of app1 to "Changed".
 * changeTitle1 calls when button is clicked.
 */
