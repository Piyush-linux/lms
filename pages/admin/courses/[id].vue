<template>
    <div class="px-32">
        <!-- hero -->
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 mt-20 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                    <img class="object-cover object-center rounded w-full" alt="hero" :src="data.attributes.image">
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                        {{ data.attributes.name }}
                    </h1>
                    <p class="mb-3 leading-relaxed">
                        {{ data.attributes.description }}
                    </p>
                    <div class="w-full flex justify-start">
                        <div class="relative cursor-pointer w-full">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
                            <div class="relative p-6 bg-white border-2 border-pink-500 rounded-lg hover:scale-105 transition duration-500">
                                <div class="flex items-center">
                                    <span>😎</span>
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">{{ data.attributes.title }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-start my-5">
                        <div class="relative cursor-pointer w-full">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
                            <div class="relative p-6 bg-white border-2 border-pink-500 rounded-lg hover:scale-105 transition duration-500">
                                <div class="flex items-center">
                                    <span>😼</span>
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">{{ data.attributes.author }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-start mb-5">
                        <div class="relative cursor-pointer w-full">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
                            <div class="relative p-6 bg-white border-2 border-pink-500 rounded-lg hover:scale-105 transition duration-500">
                                <div class="flex items-center">
                                    <span>🤩</span>
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                                        {{ data.attributes.publish }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        <!--  -->
        <!--  -->
        <section class="">
            <!--  -->
            <div class="w-full flex my-6 justify-start">
                <div class="relative cursor-pointer w-full">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
                    <div class="relative p-6 bg-white border-2 border-pink-500 rounded-lg hover:scale-105 transition duration-500">
                        <div class="flex items-center">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">{{ data.attributes.about }}</h3>
                        </div>
                        <p class="text-gray-600">
                            <!-- {{ data.attributes.about }} -->
                        </p>
                    </div>
                </div>
            </div>
            <!-- enroll -->
             <div class="w-full">
                        <button @click="enroll" class="w-full font-semibold text-white bg-pink-500 border-0 py-5 focus:outline-none hover:bg-pink-700 rounded text-lg">E N R O L L</button>
                    </div>
            <!--  -->
            <div class="container max-w-5xl px-4 py-12 mx-auto">
                <div class="grid gap-4 mx-4 sm:grid-cols-12">
                    <div class="col-span-12 sm:col-span-3">
                        <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-pink-500">
                            <h3 class="text-3xl font-semibold">Syllabu</h3>
                            <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Chapters</span>
                        </div>
                    </div>
                    <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <div v-for="(chp,i) in data.attributes.syllabus" :key="i" class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                                <h3 class="text-xl font-semibold tracking-wide"> {{ chp.topic }} </h3>
                                <p class="mt-3 text-sm text-gray-500">
                                    {{ chp.content }}
                                </p>
                            </div>
                        </div>
                        <!-- {{data.attributes.syllabus}} -->
                    </div>
                </div>
            </div>
        </section>
        <!-- tuto -->
    </div>
</template>
<script setup>
const token = useStrapiToken()
const route = useRoute()
console.log('---')

definePageMeta({
    layout: "admin",
    middleware: 'auth'
});

let headers = {
    Authorization: `Bearer ${token.value}`
}

// let data = ref(null)
let url = `http://localhost:1337/api/courses/${route.params.id}`
let { data } = await (await fetch(url, { headers: headers })).json()

let enroll = async () => {
    try {

        let enroll_url = `http://localhost:1337/api/user/me`;
        let hd = { 'Authorization': `Bearer ${token.value}`, 'Content-Type': 'application/json', }

        let enrolled = await (await fetch("http://localhost:1337/api/users/me", { headers: headers })).json();

        let enroll_res = await (await fetch(enroll_url, {
            method: "PUT",
            headers: new Headers(hd),
            body: JSON.stringify({
                data: {
                    // enrolled: [...enrolled.enrolled, route.params.id]
                    courses: {
                        connect: [route.params.id]
                    }
                }
            })
        })).json()
        // fetch('http://localhost:1337/api/user/me', {
        //     method:'PUT',
        //         headers: {
        //             'Authorization': `Bearer ${token.value}`,
        //             'Content-Type': 'application/json',
        //         },
        //         body: '{ "data": { "enrolled" : [2] } }'
        //     })
        //     .then(response => response.json())
        //     .then(data => console.log(JSON.stringify(data)))

    } catch (err) {
        console.log(err)
    }

    navigateTo('/admin/profile')
}
</script>