<template>
    <div class="">
        <!-- Tabs -->
        <ul class="flex border-b border-gray-100">
            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <span class="absolute inset-x-0 -bottom-px h-px w-full bg-green-600"></span>
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6  flex-shrink-0 text-gray-700" data-icon="icon-park-solid:experiment-one"></span>
                        <span class="text-sm font-medium text-gray-900"> Science </span>
                    </div>
                </a>
            </li>
            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6 flex-shrink-0 text-gray-700" data-icon="icon-park-solid:source-code"></span>
                        <span class="text-sm font-medium text-gray-900"> Coding </span>
                    </div>
                </a>
            </li>
            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6 flex-shrink-0 text-gray-700" data-icon="icon-park-solid:boy-two"></span>
                        <span class="text-sm font-medium text-gray-900"> Biology </span>
                    </div>
                </a>
            </li>
            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <div class="flex items-center justify-center gap-4">
                        <span class="iconify h-6 w-6 flex-shrink-0 text-gray-700" data-icon="icon-park-solid:pagoda"></span>
                        <span class="text-sm font-medium text-gray-900"> History </span>
                    </div>
                </a>
            </li>
        </ul>
        <!-- courses -->
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3" v-for="cou in courses">
                        <co />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>

let courses = [1,2,3]

definePageMeta({
    layout: "admin",
});
</script>