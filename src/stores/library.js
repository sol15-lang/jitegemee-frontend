import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "Introduction to Algorithms",
                image: "public/Images/Libraray/images.jpeg",
                description: "A good place to start on algorithms.",
            },
            {
                id: 2,
                title: "Architecture,Form,Space & Order",
                image: "public/Images/Libraray/703519.jpg",
                description: "A good book on Architecture and the order it brings.",
            },
            {
                id: 3,
                title: "Shigley's Mechanical Engineering Design",
                image: "public/Images/Libraray/images (1).jpeg",
                description: "A good book on mechanical engineering design.",
            },        
            {
                id: 4,
                title: "Electrical Engineering 101",
                image: "public/Images/Libraray/images (2).jpeg",
                description: "Everithing you need to start the course.",
            },        
            {
                id: 5,
                title: "Clean Code",
                image: "public/Images/Libraray/images (3).jpeg",
                description: "Code like a professional after reading this.",
            },        
            {
                id: 6,
                title: "Macleod's Clinical Examination",
                image: "public/Images/Libraray/images (4).jpeg",
                description: "Become a master at clinical examinations.",
            },  
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})