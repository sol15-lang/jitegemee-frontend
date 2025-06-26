import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the Books: A Journey Through Student Life ",
                image: "",
                description: "Mary has been hitting the books constanatly but has decided to change then way she lives life in University. ",
            },
            {
                id: 2,
                title: "Study,chill,repeat. Life at its best",
                image: "",
                description: "Creating a mantra to increase your output in class can be bebefitial",
            },
            {
                id: 3,
                title: "Find a away to relax by joining a club",
                image: "",
                description: "One need s to refresh the mind. What better way than to join a club of you liking!",
            },
            {
                id: 4,
                title: "Spirtual life",
                image: "",
                description: "We all need God. Join us as we worship and seek spiritual nurishment.",
            },
            {
                id: 5,
                title: "Swimming like fish",
                image: "",
                description: "Luke with a promising career in professional swimming, shares how he balances his life. ",
            },
            {
                id: 6,
                title: "Breakthroughs in technology",
                image: "",
                description: "Read about how our students are using there knowledge to change the world",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})
