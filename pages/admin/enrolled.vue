<template>
    <div class="">
        <section class="w-full m-5 rounded-3xl shadow-2xl p-7">
            <div class="text-3xl font-bold w-1/2">Enrolled Courses</div>
            <div class="mt-6">
                <div class="w-full" v-for="course in enrolled_courses.courses">
                    <!-- <co class="" :uuid="course.id" :author="course.author" :name="course.title" :pub="course.publish" :desc="course.about" :image="course.image" /> -->
                    <div class="m-5">
                        <div class="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
                            <a href="#" class="col-span-2 text-left text-gray-600 hover:text-gray-700">
                                <div class="group relative h-full w-full overflow-hidden">
                                    <img :src="course.image " alt="" class="h-30 w-full border-none object-cover text-gray-700 transition group-hover:scale-125" />
                                    <!-- <span class="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">Unity</span> -->
                                    <img :src="course.image" class="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125" alt="" />
                                </div>
                            </a>
                            <div class="col-span-3 flex flex-col space-y-3 pr-8 text-left">
                                <a href="#" class="mt-3 overflow-hidden text-2xl font-semibold">
                                    {{ course.title }}
                                </a>
                                <p class="overflow-hidden text-sm">
                                    {{ course.about.slice(0,150) }}...
                                </p>
                                <a href="#" class="text-sm font-semibold text-gray-500 hover:text-gray-700">by {{ course.author }} </a>
                                <div class="flex flex-col text-gray-700 sm:flex-row mb-15">
                                    <div class="flex h-fit space-x-2 text-sm font-medium">
                                        <div class="rounded-full bg-green-100 px-2 py-0.5 text-green-700"> {{ course.publish }} </div>
                                    </div>
                                </div>
                                <NuxtLink :to="`/admin/courses/${course.id}`" class="w-full rounded-md px-5 py-2 text-center transition hover:scale-105 bg-gray-700 text-white sm:ml-auto">View </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: 'auth'
});

const token = useStrapiToken()
const { fetchUser } = useStrapiAuth()
const user = await fetchUser()
let headers = {
    Authorization: `Bearer ${token.value}`
}

console.log('---')
console.log(user)

let enrolled_courses = await (await fetch(`http://localhost:1337/api/users/me?populate=courses`, { headers: headers })).json()
</script>