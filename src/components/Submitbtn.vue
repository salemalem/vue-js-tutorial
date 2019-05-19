<template>
	<div id="app-submitbtn">
		<button type="submit" id="submit">OK</button>
	</div>
</template>

<script>
	import Field from './Field.vue';
	let mess = Field.data().mess;
	
	export default {
		data(){
			return {

			}
		}
	}
</script>

<style>
	button[type=submit]{
		size: 50px;
		background: red;
	}
</style>