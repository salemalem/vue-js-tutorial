/* 	@lesson 13 | Intro to Components
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */

let data = {
    name: 'Shyngys'
}

Vue.component('greeting', {
    template: '<p>Hello, I am {{ name }} <button @click="changeName">changeName</button></p>',
    data: function(){
        return {
            name: 'Shyngys'
        }
    },
    methods:{
        changeName: function(){
            this.name = 'Mario';
        }
    }
});

Vue.component('hello', {
    template: '<p>Hello {{ name }}, I am John! <button @click="changeName">changeName</button></p>',
    data: function(){
        return data;
    },
    methods:{
        changeName: function(){
            this.name = 'Mario';
        }
    }
});

let app1 = new Vue({
    el: '#vue-app-one',
});

let app2 = new Vue({
    el: '#vue-app-two',
});

let app3 = new Vue({
    el: '#vue-app-three',
    components:{
        'app-car':{
            data(){
                return{
                    cars:[
                        {model: "BMW"},
                        {model: 'Volvo'},
                        {model: 'Mercedes-Benz'},
                        {model: 'Ford'},
                        {model: 'Audi'},
                        {model: 'Siat'},
                        {model: 'Fiat'},
                    ]
                } 
            },
            template: '<div><p v-for="car in cars">{{car.model}}</p></div>'
        }
    }
});
/* To call the component first of all define some Vue app.
 * Else error.
 * ------------------------------------------------------ 
 * Did you introduced with xml?
 * components are the same. You create your own html tag.
 * Vue.component() accepts two arguments.
 * first argument name of tag.
 * in our case it is greeting.
 * ------------------------------------------------------
 * 'greeting' will be rendered as <greeting></greeting>
 * ------------------------------------------------------
 * second argument is json object. {}
 * ------------------------------------------------------
 * template means what will be displayed if you write greeting tag in html.
 * ------------------------------------------------------
 * Every component has his own data.
 * So don't put component related things in Vue app.
 * ------------------------------------------------------
 * <p>Hello, I am {{ name }}</p><button @click="changeName">changeName</button>
 * If you put component template like this, it will be error.
 * Cause you need to wrap it into root element.
 * ------------------------------------------------------
 * Vue.component method register components globally! It means any vue app can use it.
 * You can also register locally. See app3
 * ------------------------------------------------------
 * We use our component in the first two vue apps in html.
 * See html comments
 */
