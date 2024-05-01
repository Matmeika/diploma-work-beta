<script setup lang="ts">
import { ref, computed } from 'vue';
import {useStore} from "../stores"
import moment from 'moment';
moment().format();
const store = useStore()
const services_list = computed(() => store.services_list)
const masters_list = computed(() => store.masters_list)
let booking_list = ref([
{
	"service": 'Стрижка',
	"master": 'Владимир',
	"date": "2024-05-18T10:08",
},
{
	"service": 'Педикюр',
	"master": 'Андрей',
	"date": "2024-05-17T70:08",
}]);
let activeSevice = ""
let activeMaster = ""
let activeDate = ""
console.log(services_list)
let retrievedObject = localStorage.getItem('bookingList');
if (retrievedObject) {
	booking_list.value = []
	console.log(retrievedObject)
	booking_list.value.push(...JSON.parse(retrievedObject));
}
function Delete(Date:string,) {
for (let i=0; i < booking_list.value.length; i++) {
		if (booking_list.value[i].date === Date) {
			booking_list.value.splice(i,1);
			break
		}
	}
}
function addNewClient() {
	if ((activeSevice) (activeDate)) {

	}
	console.log(activeMaster)
	 for(let i=0; i < booking_list.value.length; i++) {
	 	if (booking_list.value[i].master === activeMaster) {
	 		if (moment(booking_list.value[i].date).isSame(activeDate, "hour")) {
				alert("На такую дату и время уже есть бронь")
				return 0

	 		}

	 	}
	 }

	 booking_list.value.push({service: activeSevice, master: activeMaster, date: activeDate});
	 activeSevice = ""
	 activeMaster = ""
	 activeDate = ""
}
function save() {
	localStorage.setItem('bookingList', (JSON.stringify(booking_list.value)));
}
</script>

<template>
  <div class="wrapper_minor">
	<div class="bookingWrapper">
		Забронированые сеансы:
		<li class="booking"  v-for ="(client) in (booking_list)">
		{{ client.service }}, у мастера {{ client.master }}, на {{ moment(client.date.toString(), "YYYY-MM-DDTHH:mm").format("DD MM YYYY, в HH:mm") }}	
		<button @click="Delete(client.date)"> Удалить бронирование</button>
		</li>
		<select style="margin-top: 20px;" v-model="activeSevice" placeholder="Название Услуги">
			<option v-for="service in services_list">{{ service.name }}</option>
		</select>
		<select v-model="activeMaster" placeholder="Мастер">
			<option v-for="(master) in masters_list">{{ master.name }}</option>
		</select>
		<input type="datetime-local" v-model="activeDate" placeholder="Дата и время проведения">
		<button @click="addNewClient()"> Забронировать сеанс</button>
		<button @click="save()">Сохранить изменения</button>
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