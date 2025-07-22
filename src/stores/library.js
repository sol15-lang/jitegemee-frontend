import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '../services/api'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([])

        return{
            library,
        }
    }, 
    actions:{
        async fetchLibrary() {
          const response = await api.get('getAllLibraries')
            this.library = response.data
        }
    }
})