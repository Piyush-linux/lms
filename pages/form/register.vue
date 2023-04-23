<template>
    <div class="h-screen">
        <div class="lg:mt-54 mt-32 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1602678035336-9e652e5f5d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW1lcmFsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');"></div>
            <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <!-- head -->
                <p class="mt-3 text-xl text-center text-gray-200">
                    Hey There !
                </p>
                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <a href="/form/login" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">L O G I N </a>
                    <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
                <!-- inp -->
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-200" for="username">
                        Username
                    </label>
                    <input v-model="username" id="username" class="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-300" type="text" />
                </div>
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-200" for="email">
                        Email
                    </label>
                    <input v-model="email" id="email" class="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-300" type="email" />
                </div>
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-200" for="password">
                        Password
                    </label>
                    <input v-model="password" id="password" class="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-300" type="password" />
                </div>
                <div class="mt-6">
                    <button @click="register" class="w-full px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:text-emerald-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        R E G I S T E R
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
let url = "http://localhost:1337/api/auth/local/register"

let username = ref('')
let email = ref('')
let password = ref('')

let register = async () => {
    try {
        // statements
        // manisha@gmail.com / Manisha9898
        console.log(username.value)
        // let hd = { 'Authorization': `Bearer ${token.value}`, 'Content-Type': 'application/json'}
    let data = await (await fetch(url, {
        method: "POST",
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            username: username.value ,
            email: email.value ,
            password: password.value
        })
    }
    )).json()
    // console.log(data)
    // navigateTo('/form/login')
    } catch(e) {
        // statements
        console.log(e);
    }
}
</script>