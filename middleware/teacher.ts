export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useStrapiUser()
  console.log('--mid--')
  console.log(user)
  if (!user.value || user.value.rol != 'teacher' ) {
    useCookie('redirect', { path: '/' }).value = to.fullPath
    return navigateTo('/form/login')
  }
})
