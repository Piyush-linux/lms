<template>
    <div class="h-screen">
        <div class="lg:mt-54 mt-32 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://i.pinimg.com/originals/f5/be/1b/f5be1bccbff51463181097d80a5d0c89.jpg');"></div>
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
                    <button @click="submit" class="w-full px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:text-pink-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        L O G I N
                    </button>
                </div>
            </div>
        </div>
        <!-- modal -->
        <div class="p-8 pt-28 fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 " v-show="alert">
            <div class="bg-white w-1/3 mx-auto p-4 rounded-md shadow-lg bg-gray-50">
                <h1 class="text-2xl font-bold text-indigo-500 mb-4">🤔 Please Check !</h1>
                <p class="text-gray-700 text-left mb-4">{{ alert_mess }}</p>
                <div class="text-right">
                    <button @click="alert = false" class="inline-block bg-indigo-500 py-2 px-4 text-white rounded-md font-semibold uppercase text-sm ">Ok
                    </button>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</template>
<script setup>
const { login } = useStrapiAuth()

let alert = ref(false)
let alert_mess = ref('')

let eml = ref('')
let psw = ref('')

const submit = async () => {
    // validation
    if(eml.value.length <= 3){
        alert.value = true ;
        alert_mess.value = "Email is valid ?" ;
        return
    }else if (psw.value.length <= 7) {
        alert.value = true ;
        alert_mess.value = "Passowrd should be atlest 8 character" ;
        return
    }
    console.log(eml.value)
    console.log(psw.value)
    // login
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
        console.log(e)
        alert.value = true ;
        alert_mess.value = e.error.message ;
        // router.push('/auth')
    }
}
</script>