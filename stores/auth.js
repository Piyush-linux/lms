import { defineStore } from 'pinia'

// export const useAlertsStore = defineStore('auth', {
  // state: () => ({ token: '', username: '',email:'',password:'' }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   },
  // },
// })

export const useAuthStore = defineStore('auth', () => {
  const identifier = ref('')
  const password = ref('')
  const token = ref('')
  // const token = ref('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc5MjQ4NTQwLCJleHAiOjE2ODE4NDA1NDB9.OpskD6Xy6hwS58aJpAVZAldovmZRc8usIBXUnx0w1NY')
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { token }
})
