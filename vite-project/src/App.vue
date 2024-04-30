<script setup lang="ts">
</script>

<template>
<div>
	<div class="header">
		<router-link to="/masters">Мастера</router-link>
		<router-link to="/clients">Клиенты</router-link>
		<router-link to="/services">Услуги</router-link>
		<router-link to="/booking">Бронирование</router-link>
	</div>
	<div class="pageWrapper">
		<RouterView></RouterView>
	</div>
</div>
</template>

<style>
#app {
	width: 100%;
	height: 100%;
}
.header {
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
body {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
}
.wrapper_minor {
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	justify-content: start;
	align-items: start;
}
.pageWrapper {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-self: center;
	width: 100%;
}

</style>