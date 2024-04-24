import { createRouter,createWebHistory } from "vue-router";

import booking from "./components/booking.vue"
import clients from "./components/clients.vue"
import masters from "./components/masters.vue"
import services from "./components/services.vue"
export default createRouter({
	history: createWebHistory(),
	routes:
	[
		{path:'/booking', component: booking,},
		{path:'/clients', component: clients,},
		{path:'/masters', component: masters,},
		{path:'/services', component: services,},
	]
})