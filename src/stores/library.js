import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "Introduction to Algorithms",
                image: "",
                description: "",
            },
            {
                id: 2,
                title: "",
                image: "",
                description: "",
            },        
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})