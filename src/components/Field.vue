<template>
	<div>
		<h2>{{ message }}</h2>
		<input type="text" :value="message" @input="changeMess">
		{{ mess }}
	</div>
</template>

<script>
	export default {
		props: ['message'],
		data(){
			return {
				mess: 'Hello, Example'
			}
		},
		methods:{
			changeMess(event){
				this.mess = event.target.value;
				this.$emit('messChange', this.mess);
			}
		}
	}
</script>