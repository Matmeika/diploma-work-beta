<script setup lang="ts">

</script>

<template>
<div class="header">
	<a href="#/masters">Мастера</a>
	<a href="#/clients">Клиенты</a>
	<a href="#/services">Услуги</a>
	<a href="#/booking">Бронирование</a>
</div>
<div class="pageWrapper">
	<RouterView></RouterView>
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
	align-self: center;
}
.pageWrapper {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-self: center;
	width: 100%;
}
</style>