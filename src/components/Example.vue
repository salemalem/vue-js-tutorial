<template>
  <div>
    <h1>{{ message }}</h1>
    <!-- Пробный -->
    <app-input :message="message" @messChange="message = $event"></app-input>
    <Submitbtn/>
  </div>
</template>

<script>
import Input from './Field.vue';
import Submitbtn from './Submitbtn.vue';

export default {
  data(){
    return{
      message: "Пробный текст"
    }
  },
  components: {
    'app-input' : Input,
    Submitbtn
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
