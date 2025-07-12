import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/AboutUs.vue";
import Apply from "../components/Apply.vue";
import ContactUs from "../components/ContactUs.vue";
import Courses from "../components/Courses.vue";
import Events from "../components/Events.vue";
import HomePage from "../components/HomePage.vue";
import Library from "../components/Library.vue";
import LogIn from "../components/LogIn.vue";
import StudentLife from "../components/StudentLife.vue";
import SignUp from "../components/SignUp.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUs,
    },
    {
      path: "/apply",
      name: "apply",
      component: Apply,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactUs,
    },
    {
      path: "/courses",
      name: "courses",
      component: Courses,
    },
    {
      path: "/events",
      name: "events",
      component: Events,
    },
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/library",
      name: "library",
      component: Library,
    },
    {
      path: "/login",
      name: "login",
      component: LogIn,
    },
    {
      path: "/studentlife",
      name: "studentlife",
      component: StudentLife,
    },
    {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
    },
  ],
});

export default router;
