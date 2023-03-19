<template>
    <div class="">
        <!-- hero -->
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded w-full" alt="hero" :src="data.attributes.src">
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                        {{ data.attributes.name }}
                    </h1>
                    <p class="mb-3 leading-relaxed">
                        {{ data.attributes.description }}
                    </p>
                    <!-- stats -->
                    <div class="w-full flex my-6 justify-start space-x-4">
                        <div class="p-4 bg-white shadow-lg rounded-2xl w-1/3 ">
                            <div class="flex items-center">
                                <span class="relative p-2 w-auto h-auto bg-green-500 rounded-full">
                                    <span class="iconify text-white" data-icon="material-symbols:mode-standby"></span>
                                </span>
                                <p class="ml-2 text-gray-700 text-md ">
                                    mode
                                </p>
                            </div>
                            <div class="flex flex-col justify-start">
                                <p class="my-4 text-4xl font-bold text-left text-gray-800 ">
                                    {{ data.attributes.mode }}
                                </p>
                                <div class="relative h-2 bg-gray-200 rounded w-28">
                                    <div class="absolute top-0 left-0 w-full h-2 bg-green-500 rounded">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 bg-white shadow-lg rounded-2xl w-1/3 ">
                            <div class="flex items-center">
                                <span class="relative p-2 w-auto h-auto bg-green-500 rounded-full">
                                    <span class="iconify text-white" data-icon="ic:round-access-time-filled"></span>
                                </span>
                                <p class="ml-2 text-gray-700 text-md ">
                                    Duration
                                </p>
                            </div>
                            <div class="flex flex-col justify-start">
                                <p class="my-4 text-4xl font-bold text-left text-gray-800 ">
                                    {{ data.attributes.duration }}
                                </p>
                                <div class="relative h-2 bg-gray-200 rounded w-28">
                                    <div class="absolute top-0 left-0 w-full h-2 bg-green-500 rounded">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 bg-white shadow-lg rounded-2xl w-1/3 ">
                            <div class="flex items-center">
                                <span class="relative p-2 w-auto h-auto bg-green-500 rounded-full">
                                    <span class="iconify text-white" data-icon="mdi:place-outline"></span>
                                </span>
                                <p class="ml-2 text-gray-700 text-md ">
                                    Join
                                </p>
                            </div>
                            <div class="flex flex-col justify-start">
                                <a :href="data.attributes.place" class="my-4 text-4xl font-bold text-left text-gray-800 ">
                                    Click
                                </a>
                                <div class="relative h-2 bg-gray-200 rounded w-28">
                                    <div class="absolute top-0 left-0 w-full h-2 bg-green-500 rounded">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- enroll -->
                    <div class="w-full">
                        <button class="w-full font-semibold text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg">E N R O L L</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- lessons -->
        <section class="">
            <div class="container max-w-5xl px-4 py-12 mx-auto">
                <div class="grid gap-4 mx-4 sm:grid-cols-12">
                    <div class="col-span-12 sm:col-span-3">
                        <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-emerald-500">
                            <h3 class="text-3xl font-semibold">Syllabu</h3>
                            <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Chapters</span>
                        </div>
                    </div>
                    <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <!-- 1 -->
                            <div v-for="(chp,i) in data.attributes.syallbus" class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-500">
                                <h3 class="text-xl font-semibold tracking-wide"> {{ chp.topic }} </h3>
                                <p class="mt-3 text-sm text-gray-500">
                                    {{ chp.about }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- tuto -->
       
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
});

const route = useRoute()

let url = `http://localhost:1337/api/courses/${route.params.id}`
let { data } = await (await fetch(url)).json()
</script>