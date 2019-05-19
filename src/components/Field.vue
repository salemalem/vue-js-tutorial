<template>
	<div>
		<input type="text" v-model="mess">
		{{ mess }}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				mess: 'Hello, Example'
			}
		}
	}
</script>