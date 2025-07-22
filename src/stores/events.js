import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios';
import api from '../services/api'

export const useEventsStore = defineStore('events', {    
    state: () => {       
        const events = ref([])

        return{
            events,
        }
    }, 
    actions:{
        async fetchEvents() {
          const response = await api.get('getAllEvents')
            this.events = response.data
        }
    },
    persist: true,

})

// export const useEventsStore = defineStore('events', () => {
//  const events = ref([
//   {
//     name: "Community Outreach at Northern Kenya",
//     image: "../../public/Images/Events/nico-smit-NFoerQuvzrs-unsplash.jpg",
//     date: "July 6th 2025",
//     location: "Northern Kenya School",
//     category: "Community Outreach",
//   },
//   {
//     name: "Graduation 2025",
//     image: "../../public/Images/Events/jakob-rosen-CTd5_C7p__8-unsplash.jpg",
//     date: "July 5th 2025",
//     location: "Jitegemee University",
//     category: "Graduation",
//   },
//   {
//     name: "Cultural Festival",
//     image:
//       "../../public/Images/Events/wanyoike-mbugua-dsFrAJUrUuU-unsplash.jpg",
//     date: "July 19 2025",
//     location: "Jitegemee University",
//     category: "Social Event",
//   },
//   {
//     name: "Full Stack Software Development ",
//     image: "../../public/Images/Events/markus-spiske-1LLh8k2_YFk-unsplash.jpg",
//     date: "July 21st 2025- September 29th 2025",
//     location: "Jitegemee University",
//     category: "Short Course",
//   },
// ])

//   return {events}
// })
