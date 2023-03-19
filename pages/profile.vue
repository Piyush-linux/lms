<template>
    <div class="">
        <div class="flex ">
            <section class="rounded-3xl shadow-2xl w-1/3 m-8">
                <div class="p-8 text-center sm:p-12">
                    <p class="text-lg font-semibold uppercase tracking-widest text-emerald-500">
                        PIYUSH PATIL
                    </p>
                    <h2 class="my-6">
                        <img src="/me.png" alt="" class="rounded-lg">
                    </h2>
                    <div class="icons flex justify-evenly">
                        <div class="icon rounded-full border-2 p-3 m-1">
                            <span class="iconify h-5 w-5" data-icon="basil:snapchat-solid"></span>
                        </div>
                        <div class="icon rounded-full border-2 p-3 m-1">
                            <span class="iconify h-5 w-5" data-icon="basil:twitch-solid"></span>
                        </div>
                        <div class="icon rounded-full border-2 p-3 m-1">
                            <span class="iconify h-5 w-5" data-icon="basil:twitter-solid"></span>
                        </div>
                        <!-- <div class="icon rounded-full border-2 p-3 m-1">
                        <span class="iconify h-5 w-5" data-icon="basil:slack-solid"></span>
                    </div> -->
                    </div>
                    <a class="mt-8 inline-block w-full rounded-full bg-emerald-500 flex text-sm font-bold text-white shadow-xl p-5" href="">
                        <span class="iconify h-7 w-7 mr-2" data-icon="mdi:email-variant"></span>
                        <span>shubhamchavan@gmail.com</span>
                    </a>
                </div>
            </section>
            <section class="w-full m-7 rounded-3xl shadow-2xl p-7">
                <div class="text-3xl font-bold">ENROLLED</div>
                <div class="flex flex-col mt-6">
                        <div class="relative mt-3 w-full p-4 overflow-hidden border-2 border-gray-100 bg-white shadow-lg rounded-2xl">
                            <img alt="moto" src="https://images.unsplash.com/photo-1602678035336-9e652e5f5d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" class="absolute w-40 h-40 mb-4 -right-20 -bottom-8" />
                            <div class="w-1/3">
                                <p class="mb-2 text-lg font-bold text-gray-800">
                                    Title
                                </p>
                                <p class="text-xs text-gray-400">
                                    Detail is not an obsession, it is the very essence of perfection.
                                </p>
                            </div>
                        </div>
                         <div class="relative mt-3 w-full p-4 overflow-hidden border-2 border-gray-100 bg-white shadow-lg rounded-2xl">
                            <img alt="moto" src="https://images.unsplash.com/photo-1602678035336-9e652e5f5d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" class="absolute w-40 h-40 mb-4 -right-20 -bottom-8" />
                            <div class="w-1/3">
                                <p class="mb-2 text-lg font-bold text-gray-800">
                                    Title
                                </p>
                                <p class="text-xs text-gray-400">
                                    Detail is not an obsession, it is the very essence of perfection.
                                </p>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
});
</script>