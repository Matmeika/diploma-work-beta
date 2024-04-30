import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('generic', () =>{
    let services_list = ref([
        {
            "name": 'Стрижка',
            "cost": '1234 BYN',
            "time": '55 minutes',
        },
        {
            "name": 'Маникюр',
            "cost": '1234 BYN',
            "time": '75 minutes',
        },
        {
            "name": 'Педикюр',
            "cost": '1234 BYN',
            "time": '30 minutes',
        }
    ]);
        let masters_list = ref([
            {
                "name": 'Владимир',
                "password": '1234',
                "id": 0
            },
            {
                "name": 'Андрей',
                "password": '1111',
                "id": 1
            },
            {
                "name": 'Дмитрий',
                "password": '1111',
                "id": 2
            }
        ]);
        return {services_list, masters_list}
})