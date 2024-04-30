<script setup lang="ts">
import { ref, computed } from 'vue';
import {useStore} from "../stores"
const store = useStore()
const services_list = computed(() => store.services_list)
const masters_list = computed(() => store.masters_list)
let booking_list = ref([
{
	"service": 'gitting',
	"master": '1234 BYN',
	"date": "02:04:2024",
	"time": '55 minutes',
},
{
	"service": 'vitting',
	"master": '1234 BYN',
	"date": "02:04:2024",
	"time": '55 minutes',
}]);
let activeSevice = ""
let activeMaster = ""
let activeTime = ""
let activeDate = ""
console.log(services_list)
function Delete(Date:string,Time:string) {
for (let i=0; i < booking_list.value.length; i++) {
		if (booking_list.value[i].date === Date) {
			if (booking_list.value[i].time === Time) {

				booking_list.value.splice(i,1);
				break
			}
		}
	}
}
function addNewClient() {
	 for(let i=0; i < booking_list.value.length; i++) {
	 	if (booking_list.value[i].master === activeMaster) {
	 		if (booking_list.value[i].date === activeDate) {

	 		}

	 	}
	 }

	 booking_list.value.push({service: activeSevice, master: activeMaster, date: activeDate, time:activeTime});
	 activeSevice = ""
	 activeMaster = ""
	 activeTime = ""
	 activeDate = ""
}
</script>

<template>
  <div class="wrapper_minor">
	<div class="bookingWrapper">
		Забронированые сеансы:
		<li class="booking"  v-for ="(client) in (booking_list)">
		{{ client.service }}, {{ client.master }}, {{ client.date }}, {{ client.time }}, 	
		<button @click="Delete(client.time, client.date)"> Удалить бронирование</button>
		</li>
		<select style="margin-top: 20px;" v-model="activeSevice" placeholder="Название Услуги">
			<option v-for="service in services_list">{{ service.name }}</option>
		</select>
		<select v-model="activeMaster" placeholder="Мастер">
			<option v-for="(master) in masters_list">{{ master.name }}</option>
		</select>
		<input type="datetime-local" v-model="activeTime" placeholder="Дата и время проведения">
		<button @click="addNewClient()"> Забронировать сеанс</button>
	</div>
</div> 
</template>

<style>
.bookingWrapper {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 10px;
}
.booking {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
}
</style>