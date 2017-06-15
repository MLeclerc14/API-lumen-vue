import { Login, Register, Main } from './components'

const children = [{
  name: 'auth.login',
  path: 'login',
  component: Login,
  meta: { requiresAuth: false }
}, {
  name: 'auth.register',
  path: 'register',
  component: Register,
  meta: { requiresAuth: false }
}]

export default [{
  children,
  name: 'auth',
  path: '/auth',
  component: Main,
  redirect: { name: 'auth.login' },
  meta: { requiresAuth: false }
}]
