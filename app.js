/* 	@lesson 14 | Refs
 *  @Author: Shyngys Shynbolatov | wymedia@protonmail.com
 *  @Code from Github: https://github.com/salemalem/vue-js-tutorial
 *  @Site on github free hosting: https://salemalem.github.io/vue-js-tutorial/
 */

let app = new Vue({
    el: '#app',
    data:{
        output: 'Your favourite food',
    },
    methods:{
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
});

/* $refs is global variable.
 * First of all you need to define it in as attribute in html
 * <div ref="test">Hello</div>
 * then console.log(this.$refs.test);
 * you will get parametres like:
 * innerHtml innerText value
 * ----------------------------------
 * then this.$refs.test.parameterName
 * for ex: $refs.test.value
 */
