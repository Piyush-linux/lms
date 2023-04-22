<template>
    <div class="">
        <div class="flex items-center justify-center">
            <section class="rounded-3xl w-2/3 m-5">
                <!-- profile -->
                <div class="md:flex p-10">
                    <div class="text-center w-full">
                        <img class="w-48 h-48 object-cover mx-auto -mb-24 rounded-full" src="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Avatar Jacky" />
                        <div class="px-8 pt-32 pb-10 text-gray-400 bg-gray-800 rounded-lg shadow-xl">
                            <h3 class="mb-3 text-xl text-white font-title">
                                {{ user.username }}
                            </h3>
                            <a class="font-body text-white" href="#">
                                {{ user.email }}
                            </a>

                        </div>
                    </div>
                </div>
                <!-- component -->
                <!-- <div class="flex items-center justify-center">
                    <div class="max-w-sm w-full shadow-lg">
                        <calendar/>
                    </div>
                </div> -->
            </section>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: 'auth'
});

const { fetchUser } = useStrapiAuth()
const user = await fetchUser()

console.log('---')
console.log(user.value)

</script>