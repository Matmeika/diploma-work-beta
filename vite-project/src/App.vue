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
	background-color: rgb(101, 101, 101);
	border-radius:  12px;
	
}
body {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	background-color: #494949;
	color: rgba(255, 255, 255, 0.87);

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
a {
	color: #1f28b5;
}

</style>