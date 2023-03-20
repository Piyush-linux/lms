<template>
    <div class="">
        <!-- Tabs -->
        <!-- {{ courses }} -->
        <ul class="flex border-b border-gray-100">
            <li class="flex-1">
                <button class="relative w-full block p-4" @click="get_course('science')">
                    <!-- <span v-if="tags == 'science'" class="absolute inset-x-0 -bottom-px h-px w-full bg-green-600"></span> -->
                    <span v-if="tags == 'science'" class="absolute inset-x-0 -bottom-px h-1 w-full bg-green-500"></span>
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6  flex-shrink-0 text-gray-700" data-icon="icon-park-solid:experiment-one"></span>
                        <span class="text-sm font-medium text-gray-900"> Science </span>
                    </div>
                </button>
            </li>
            <li class="flex-1">
                <button class="relative w-full block p-4" @click="get_course('coding')">
                    <span v-if="tags == 'coding'" class="absolute inset-x-0 -bottom-px h-1 w-full bg-green-500"></span>
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6 flex-shrink-0 text-gray-700" data-icon="icon-park-solid:source-code"></span>
                        <span class="text-sm font-medium text-gray-900"> Coding </span>
                    </div>
                </button>
            </li>
            <li class="flex-1">
                <button class="relative w-full block p-4">
                    <span v-if="tags == 'language'" class="absolute inset-x-0 -bottom-px h-1 w-full bg-green-500"></span>
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6 flex-shrink-0 text-gray-700" data-icon="icon-park-solid:boy-two"></span>
                        <span class="text-sm font-medium text-gray-900"> Language </span>
                    </div>
                </button>
            </li>
            <li class="flex-1">
                <button class="relative w-full block p-4">
                    <span v-if="tags == 'history'" class="absolute inset-x-0 -bottom-px h-1 w-full bg-green-500"></span>
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6 flex-shrink-0 text-gray-700" data-icon="icon-park-solid:pagoda"></span>
                        <span class="text-sm font-medium text-gray-900"> History </span>
                    </div>
                </button>
            </li>
        </ul>
        <!-- courses -->
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3" v-for="course in courses">
                        <!-- name , author , pub , desc , src -->
                        <co :uuid="course.id" :name="course.attributes.name" :author="course.attributes.author" :pub="course.attributes.publish" :desc="course.attributes.description" :image="course.attributes.src" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
// let courses = [1,2,3]

definePageMeta({
    layout: "admin",
});

let courses = ref(null)
let tags = ref(null)
let headers = {
    Authorization: `Bearer ${store.token}`
}

let get_course = async (e) => {
    console.log('get from tags'+e)
    // 1337/api/tags/4?populate=courses&feilds=courses
    let tag = ( e == 'science')? 4 : 3
    let url =`http://localhost:1337/api/tags/${tag}?populate=courses&feilds=courses`
    let { data: cou } = await (await fetch(url,{headers:headers})).json()
    courses.value = cou.attributes.courses.data
    tags.value = e
}


let url ="http://localhost:1337/api/courses"
let { data: course } = await( await fetch(url,{headers:headers})).json()
console.log('---')
courses.value = course
console.log(store.token)
</script>