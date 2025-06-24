import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
 const courses= ref([
    {
        name:"Computer Science",
        school:"School of Computing and Engineering",
        description:"Best course for Computer enthusiasts",
        intake:"July 2025"
    },
    {
        name:"Medicine",
        school:"School of Medicine and Surgery",
        description:"Best course for learning human Anatomy",
        intake:"September 2025"
    },
    {
        name:"Data Science and IT",
        school:"School of Business",
        description:"Makes data make sense",
        intake:"July 2025"
    },
    {
        name:"Mechanical Engineering",
        school:"School of Computing and Engineering",
        description:"Help build a better future.",
        intake:"September 2025"
    },
    {
        name:"Buisiness and IT",
        school:"School of Business",
        description:"The best of both IT and Buisness",
        intake:"September 2025"
    },
    {
        name:"Telecommunication and Information Engineering",
        school:"School of Computing and Engineering",
        description:"Help make the world a smaller place ",
        intake:"September 2025"
    },
    {
        name:"Architecture",
        school:"School of Architecture",
        description:"Design the structures of the future",
        intake:"September 2025"
    },
    {
        name:"Communication",
        school:"School of Communication",
        description:"Make Communication easy",
        intake:"September 2025"
    },
    {
        name:"Electrical and Electronics Engineering",
        school:"School of Computing and Engineering",
        description:"Understand elestricity better than anyone",
        intake:"September 2025"
    },
    {
        name:"Software Engineering",
        school:"School of Computing and Engineering",
        description:"Makes software work",
        intake:"September 2025"
    },
])

  return {courses}
})
