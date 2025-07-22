import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../components/AboutUs.vue'
import Apply from '../components/Apply.vue'
import ContactUs from '../components/ContactUs.vue'
import Courses from '../components/Courses.vue'
import Events from '../components/Events.vue'
import HomePage from '../components/HomePage.vue'
import Library from '../components/Library.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import StudentLife from '@/components/StudentLife.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import SchoolPage from '@/components/SchoolPage.vue'
import TokenService from '../services/token_service'
import StudentPage from '@/components/StudentPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs,
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs,
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/library',
      name: 'library',
      component: Library,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/studentlife',
      name: 'studentlife',
      component: StudentLife,
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: WelcomePage,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/school',
      name: 'SchoolPage',
      component: SchoolPage,    
      meta: {
        requiresAuth: true,
        requiredAbility: 'admin' // match to what's returned from the backend
      }
    },
    {
      path: '/student',
      name: 'StudentPage',
      component: StudentPage,    
      meta: {
        requiresAuth: true,
        requiredAbility: 'admin' // match to what's returned from the backend
      }
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  // Check if route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is authenticated
    if (!TokenService.isAuthenticated()) {
      // Not authenticated, redirect to login
      return next({ name: 'login', query: { redirect: to.fullPath } });
    }
    
    // Check if route requires specific ability
    if (to.meta.requiredAbility && !TokenService.hasAbility(to.meta.requiredAbility)) {
      // User doesn't have required ability, redirect to home or unauthorized page
      return next({ name: 'homepage' });
    }
  }
  
  // Check if route is for guests only (like login page)
  if (to.matched.some(record => record.meta.guestOnly)) {
    if (TokenService.isAuthenticated()) {
      // User is already authenticated, redirect to home
      return next({ name: 'homepage' });
    }
  }
  
  // Proceed as normal
  next();
});

export default router