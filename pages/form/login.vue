<template>
    <div class="h-screen">
        <div class="lg:mt-54 mt-32 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1602678035336-9e652e5f5d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1lcmFsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');"></div>
            <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <p class="mt-3 text-xl text-center text-gray-200">
                    Welcome Back !
                </p>
                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <NuxtLink to="/form/register" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">R E G I S T E R</NuxtLink>
                    <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
                <!-- email -->
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-200" for="email">Email
                    </label>
                    <input v-model="eml" id="email" class="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-300" type="email" />
                </div>
                <!-- password -->
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-200" for="password">Password
                    </label>
                    <input v-model="psw" id="password" class="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-300" type="password" />
                </div>
                <div class="mt-6">
                    <button @click="submit" class="w-full px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:text-emerald-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        L O G I N
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const { login } = useStrapiAuth()

let eml = ref('')
let psw = ref('')

const submit = async () => {
    console.log(eml.value)
    console.log(psw.value)
    try {

        let user = await login({ identifier: eml.value, password: psw.value })
        // console.log(user.user.value.rol)
        // if(user.user.value.rol == 'student'){
        //     navigateTo('/admin/profile')
        // }else if(user.user.value.rol == 'teacher'){
        //     navigateTo('/teacher/profile')
        // }
        navigateTo('/admin/profile')
        // navigateTo('/admin/profile')
    } catch (e) {
        console.log(e.error)
        // router.push('/auth')
    }
}

</script>