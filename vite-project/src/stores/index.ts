import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('generic', () =>{
    let services_list = ref([
        {
            "name": 'gitting',
            "cost": '1234 BYN',
            "time": '55 minutes',
        },
        {
            "name": 'vitting',
            "cost": '1234 BYN',
            "time": '55 minutes',
        }]);
        let masters_list = ref([
            {
                "name": 'Vova',
                "password": '1234',
                "id": 0
            },
            {
                "name": 'Andrew',
                "password": '1111',
                "id": 1
            }]);
        return {services_list, masters_list}
})