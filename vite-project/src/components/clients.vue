<script setup lang="ts">
import { ref } from 'vue';
let clients_list = ref([
{
	"name": 'Vova',
	"password": '1234'
},
{
	name: 'Andrew',
	password: '1111'
}]);
let activeName = ""
let activePassword = ""
clients_list.value = []
	console.log(clients_list.value)
let retrievedObject = localStorage.getItem('clientsList');
if (retrievedObject) {
	console.log(retrievedObject)
	clients_list.value.push(...JSON.parse(retrievedObject));
}
function changeName(NameOld:string,NameNew:string,) {
    for (let i=0; i < clients_list.value.length; i++) {
        if (clients_list.value[i].name === NameOld) {

            clients_list.value[i].name = NameNew;
			activeName = "";
			break
        }
    }
};
function changePassword(NameOld:string,passNew:string,) {
    for (let i=0; i < clients_list.value.length; i++) {
        if (clients_list.value[i].name === NameOld) {

            clients_list.value[i].password = passNew;
			activePassword = "";
			break
        }
    }
};
function Delete(NameOld:string) {
	for (let i=0; i < clients_list.value.length; i++) {
        if (clients_list.value[i].name === NameOld) {

            clients_list.value.splice(i,1);
			break
        }
    }
}
function addNewClient() {
	clients_list.value.push({name:activeName, password:activePassword});
	activePassword = "";
	activeName = "";
}
function save() {
	localStorage.setItem('clientsList', (JSON.stringify(clients_list.value)));
}
</script>

<template>
<div class="wrapper_minor">
	<div class="clientsWrapper">
		Наши клиенты:
		<li class="clients" v-for ="(client) in (clients_list)">
		{{ client.name }}, 
		<input v-model="activeName">
		<button @click="changeName(client.name,activeName)"> Изменить имя</button>
		<input v-model="activePassword">
		<button @click="changePassword(client.name,activePassword)"> Изменить пароль</button>
		<button @click="Delete(client.name)"> Удалить клиента</button>
		</li>

		<input style="margin-top: 20px;" v-model="activeName" placeholder="Имя пользователя">
		<input v-model="activePassword" placeholder="пароль пользователя">
		<button @click="addNewClient()"> Добавить клиента</button>
		<button @click="save()">Сохранить изменения</button>
	</div>
</div>
</template>

<style>
.clientsWrapper {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 10px;
}
.clients {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 10px;
}
</style>