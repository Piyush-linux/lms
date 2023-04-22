<template>
    <div class="">
        <!-- hero -->
        
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
                        <co :uuid="course.id" :author="course.attributes.author" :name="course.attributes.title" :pub="course.attributes.publish" :desc="course.attributes.about" :image="course.attributes.image" />
                        <!-- {{ course }} -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
const token = useStrapiToken()
console.log(token.value)
definePageMeta({
    layout: "admin",
    middleware: 'auth'
});

let get_course = async (e) => {
        console.log('get from tags' + e)
        // 1337/api/tags/4?populate=courses&feilds=courses
        // let url =`http://localhost:1337/api/tags/${tag}?populate=courses&feilds=courses`
        // let { data: cou } = await (await fetch(url,{headers:headers})).json()
        // courses.value = cou.attributes.courses.data
        // tags.value = e
    }

let url = "http://localhost:1337/api/courses"

let {data:courses} = await (await fetch(url, {
    headers: {
        Authorization: `Bearer ${token.value}`
    }
})).json()

console.log('---')
console.log(courses)
// console.log(url)
// console.log(courses)
</script>