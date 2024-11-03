import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/components/AboutUs/AboutUs.vue'
import ContactUs from '@/components/ContactUs/ContactUs.vue'
import BlogPage from '@/views/BlogPage.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import BlogPost from '@/views/BlogPost.vue';
import Author from '@/views/Author.vue';
import CategoryPage from '@/views/CategoryPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutUs,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactUs,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPage,
    },
    {
      path: '/privacypolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/blogpost',
      name: 'BlogPost',
      component: BlogPost,
    },
    {
      path: '/author',
      name: 'Author',
      component: Author,
    },
    {
      path: '/categorypage',
      name: 'CategoryPage',
      component: CategoryPage,
    }
  ],
})

export default router
