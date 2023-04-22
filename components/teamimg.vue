<template>
    <div class="">
        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl shadow-2xl hover:border-transparent group hover:bg-gray-800 dark:border-gray-700 dark:hover:border-transparent">
            <!-- <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""> -->
            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" :src="img" alt="">
            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
            {{ name }}
        </h1>
            <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                {{ about }}
            </p>
            <div class="flex mt-5 -mx-2">
                <!-- linkdin , twitter , insta -->
                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <span class="iconify text-2xl" data-icon="mdi:instagram"></span>
                </a>
                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                  <span class="iconify text-2xl" data-icon="mdi:twitter"></span>
                </a>
                <a href="#" class="mx-2 text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <span class="iconify text-2xl" data-icon="mdi:linkedin"></span>
                </a>
            </div>
        </div>
    </div>
</template>
 <script setup>
// in <script setup>
defineProps({
  img: String,
  name:String ,
  about:String
})

 </script>