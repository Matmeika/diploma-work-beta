import { createRouter,createWebHashHistory } from "vue-router";

import booking from "./components/booking.vue"
import clients from "./components/clients.vue"
import masters from "./components/masters.vue"
import services from "./components/services.vue"
export default createRouter({
	history: createWebHashHistory(),
	routes:
	[
		{path:'/booking', component: booking, alias: '/'},
		{path:'/clients', component: clients, alias: '/'},
		{path:'/masters', component: masters, alias: '/'},
		{path:'/services', component: services, alias: '/'},
	]
})