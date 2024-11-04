import { createRouter, createWebHistory } from 'vue-router'
import PassengerView from '@/views/PassengerView.vue'
import AboutView from '@/views/AboutView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import PassengerRegisterView from '@/views/passenger/RegisterView.vue'
import PassengerEditView from '@/views/passenger/EditView.vue'
import PassengerLayoutView from '@/views/passenger/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import AirlineView from '@/views/passenger/AirlineView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger',
      component: PassengerView,
      props: route => ({ page: parseInt(route.query.page?.toString() || '1') }),
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout-view',
      component: PassengerLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true,
        },
        {
          path: 'airline/:airlineId',
          name: 'airline-detail-view',
          component: AirlineView,
          props: true,
        },
        {
          path: 'register',
          name: 'passenger-register-view',
          component: PassengerRegisterView,
          props: true,
        },
        {
          path: 'edit',
          name: 'passenger-edit-view',
          component: PassengerEditView,
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})


export default router