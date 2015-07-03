export const notFound = {component: 'NotFoundPage', transition: 'notFound'}
export const error = {component: 'ErrorPage', transition: 'error'}

export default [
  {route: '/', component: 'HomePage', transition: 'home'},
  {route: '/about', component: 'AboutPage', transition: 'about'},
  {route: '/users', component: 'UsersPage', transition: 'users'},
  {route: '/_markup', component: 'MarkupPage', transition: 'markup'}
]
