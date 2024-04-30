<script setup lang="ts">
import { computed } from 'vue';
import {useStore} from "../stores"
const store = useStore()
const masters_list = computed(() => store.masters_list)
let activeName = ""
let activePassword = ""
let Id = 0


console.log(masters_list.value)
let retrievedObject = localStorage.getItem('masterList');
if (retrievedObject) {
	store.masters_list = []
	console.log(retrievedObject)
	masters_list.value.push(...JSON.parse(retrievedObject));
}
console.log(masters_list.value)
for(let i=0; i < (masters_list.value.length); i++) {
	if (masters_list.value[i].id > Id) {
		Id = masters_list.value[i].id
	}
}
function changeName(NameOld:string,NameNew:string,) {
    for (let i=0; i < masters_list.value.length; i++) {
        if (masters_list.value[i].name === NameOld) {

            masters_list.value[i].name = NameNew;
			activeName = "";
			break
        }
    }
};
function changePassword(NameOld:string,passNew:string,) {
    for (let i=0; i < masters_list.value.length; i++) {
        if (masters_list.value[i].name === NameOld) {

            masters_list.value[i].password = passNew;
			activePassword = "";
			break
        }
    }
};
function Delete(NameOld:string) {
	for (let i=0; i < masters_list.value.length; i++) {
        if (masters_list.value[i].name === NameOld) {

            masters_list.value.splice(i,1);
			break
        }
    }
}
function addNewClient() {
	Id = (Id + 1)
	masters_list.value.push({name:activeName, password:activePassword,id:Id});
	activePassword = "";
	activeName = "";
}
function save() {
	localStorage.setItem('masterList', (JSON.stringify(masters_list.value)));
}
</script>

<template>
<div class="wrapper_minor">
	<div class="mastersWrapper">
		Наши мастеры:
		<li class="masters" v-for ="(client) in (masters_list)">
		{{ client.name }}, {{ client.id }}
		<input v-model="activeName">
		<button @click="changeName(client.name,activeName)"> Изменить имя</button>
		<input v-model="activePassword">
		<button @click="changePassword(client.name,activePassword)"> Изменить пароль</button>
		<button @click="Delete(client.name)"> Удалить мастера</button>
		</li>

		<input style="margin-top: 20px;" v-model="activeName" placeholder="Имя мастера">
		<input v-model="activePassword" placeholder="пароль мастера">
		<button @click="addNewClient()"> Добавить Мастера</button>
		<button @click="save()">Сохранить изменения</button>
	</div>
</div>
</template>

<style>
.mastersWrapper {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 10px;
}
.masters {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;

}
</style>