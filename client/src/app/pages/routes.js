
/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
const Home = r => require.ensure([], () => r(require('./home')), 'home-bundle')

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { requiresAuth: false }
  }
]
