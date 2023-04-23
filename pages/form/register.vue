<template>
    <div class="h-screen">
        <div class="lg:mt-54 mt-32 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div class="hidden bg-cover lg:block lg:w-1/2 " style="background-image: url('https://images.unsplash.com/photo-1524434683746-a8beb4eb4079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbmslMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');"></div>
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
                    <button @click="register" class="w-full px-6 py-3 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:text-pink-400 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        R E G I S T E R
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
let url = "http://localhost:1337/api/auth/local/register"

let alert = ref(false)
let alert_mess = ref('')


let username = ref('')
let email = ref('')
let password = ref('')

let register = async () => {
    // validation
    if(username.value.length <= 4){
        alert.value = true ;
        alert_mess.value = "Username should be atlest 5 character" ;
        return
    }else if (password.value.length <= 7) {
        alert.value = true ;
        alert_mess.value = "Passowrd should be atlest 8 character" ;
        return
    }
    // Register
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
    navigateTo('/form/login')
    } catch(e) {
        // statements
        console.log(e);
    }
}
</script>