<script setup lang="ts">
import { computed } from 'vue';
import {useStore} from "../stores"
const store = useStore()
const services_list = computed(() => store.services_list)
let activeName = ""
let activeCost = ""
let activeTime =""
console.log(services_list.value)
let retrievedObject = localStorage.getItem('servicesList');
if (retrievedObject) {
	store.services_list = []
	console.log(retrievedObject)
	services_list.value.push(...JSON.parse(retrievedObject));
}
function changeName(NameOld:string,NameNew:string,) {
    for (let i=0; i < services_list.value.length; i++) {
        if (services_list.value[i].name === NameOld) {

            services_list.value[i].name = NameNew;
			activeName = "";
			break
        }
    }
};
function changeCost(NameOld:string,CostNew:string,) {
    for (let i=0; i < services_list.value.length; i++) {
        if (services_list.value[i].name === NameOld) {

            services_list.value[i].cost = CostNew;
			activeCost = "";
			break
        }
    }
};
function changeTime(NameOld:string,TimeNew:string,) {
    for (let i=0; i < services_list.value.length; i++) {
        if (services_list.value[i].name === NameOld) {

            services_list.value[i].cost = TimeNew;
			activeTime = "";
			break
        }
    }
};
function Delete(NameOld:string) {
	for (let i=0; i < services_list.value.length; i++) {
        if (services_list.value[i].name === NameOld) {

            services_list.value.splice(i,1);
			break
        }
    }
}
function addNewClient() {
	services_list.value.push({name:activeName, cost:activeCost, time:activeTime});
	activeCost = "";
	activeName = "";
	activeTime = "";
}
function save() {
	localStorage.setItem('servicesList', (JSON.stringify(services_list.value)));
}
</script>

<template>
<div class="wrapper_minor">
	<div class="serviceWrapper">
		<h2>Наши услуги:</h2>
		<li class="service"  v-for ="(client) in (services_list)">
		{{ client.name }}, {{ client.time }}, {{ client.cost }}, 		
		<input v-model="activeName">
		<button @click="changeName(client.name,activeName)"> Изменить название</button>
		<input v-model="activeTime">
		<button  @click="changeTime(client.name,activeTime)"> Изменить длительность</button>
		<input v-model="activeCost">
		<button @click="changeCost(client.name,activeCost)"> Изменить стоимость</button>
		<button @click="Delete(client.name)"> Удалить услугу</button>
		</li>
		
		<input style="margin-top: 20px;" v-model="activeName" placeholder="Название Услуги">
		<input v-model="activeCost" placeholder="Стоимость услуги">
		<input v-model="activeTime" placeholder="Длительность услуги">
		<button @click="addNewClient()"> Добавить услугу</button>
		<button @click="save()">Сохранить изменения</button>
	</div>
</div>
</template>

<style>
.serviceWrapper  {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 20px;
	width: 1100px;
}
.service {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
}
</style>