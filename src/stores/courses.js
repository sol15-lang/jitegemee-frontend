import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios'
import api from '../services/api'
export const useCoursesStore = defineStore('courses',  {
    state: () => {
        const courses = ref([])
        const selectedCourse= ref(0)
        return{
            courses,
            selectedCourse
        }
    }, 
    actions:{
        updateSelectedCourse (payload) {
            this.selectedCourse = payload
        },
         async fetchCourses() {
          const response = await api.get('getAllCourses')
            this.courses = response.data
        }
    },
    persist: true,
})

