/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
export const Main = r => require.ensure([], () => r(require('../components/main')), 'auth-bundle')
export const Register = r => require.ensure([], () => r(require('../components/register')), 'auth-bundle')
export const Login = r => require.ensure([], () => r(require('../components/login')), 'auth-bundle')
