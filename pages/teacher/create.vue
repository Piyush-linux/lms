<template>
    <div class="">
        <div class="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
            <div class="flex flex-col border-b py-4 sm:flex-row sm:items-start">
                <div class="shrink-0 mr-auto sm:py-3">
                    <p class="font-medium">Create Course</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">Title</p>
                <input placeholder="your.email@domain.com" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
            </div>
            <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">Image Src</p>
                <input placeholder="your.email@domain.com" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
            </div>
            <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">About</p>
                <input placeholder="your.email@domain.com" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
            </div>
            <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium">Image</p>
                <input placeholder="your.email@domain.com" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
            </div>
            <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
                <p class="shrink-0 w-32 font-medium"></p>
                <input placeholder="your.email@domain.com" class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
            </div>
            <div class="flex justify-end py-4 sm:hidden">
                <button class="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
                <button class="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Save</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "teacher",
    middleware: 'teacher'
});
</script>