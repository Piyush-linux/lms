<template>
    <div class="">
        <!-- hero -->
        <section class="bg-white text-gray-800">
<!-- style="background-image: linear-gradient(rgba(1,1,1,0.2), rgba(23,434,123,0.1)), url('/bg.jpg');" 
bg-gradient-to-b from-pink-100 to-pink-400 -->
            <div class="h-screen mx-auto px-4 py-32 lg:flex lg:items-center " style="background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);" >
                <div class="mx-auto max-w-3xl text-center">
                    <div class="block text-center">
                        <img src="/cat.png" alt="" class="mx-auto">
                    </div>
                    <h1 class="f1 text-white bg-clip-text text-3xl font-bold sm:text-5xl mt-5">
                        P I Y U
                    </h1>
                    <div class="font-medium mt-5 text-md">
                        The more that you read, the more things you will know, <br> the more that you learn, the more places you’ll go
                    </div>
                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <a class="block w-full shadow-xl rounded border border-pink-500 bg-pink-500 px-12 py-3 text-sm font-bold text-white hover:bg-transparent hover:text-pink-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="#techstack">
                            Tech Stack
                        </a>
                        <NuxtLink class="block w-full rounded border border-pink-500 px-12 py-3 text-sm font-bold text-pink-500 hover:bg-pink-500 focus:outline-none focus:ring active:bg-emerald-500 text-emerald-700 hover:text-white sm:w-auto" to="/about">
                            About us
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <!-- 2 : manage-->
        <div class="relative p-24 bg-gray-100 ">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center h-screen">
                <div class="lg:col-start-2 md:pl-20">
                    <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:leading-9">
                        Manage everything
                    </h4>
                    <ul class="mt-10">
                        <li>
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 text-white bg-pink-500 rounded-md">
                                        <span class="iconify w-6 h-6" data-icon="mdi:book"></span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                                        Learning Path
                                    </h5>
                                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                                        Know everything about your business in a single glance with your new dashboard.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="mt-10">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 text-white bg-pink-500 rounded-md">
                                        <span class="iconify w-7 h-7" data-icon="basil:clock-solid"></span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                                        Manage Time
                                    </h5>
                                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                                        Enroll in courses according <br> to your schedule
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="mt-10">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 text-white bg-pink-500 rounded-md">
                                        <span class="iconify w-7 h-7" data-icon="basil:google-drive-solid"></span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h5 class="text-lg font-bold leading-6 text-gray-900 ">
                                        Download Study Material
                                    </h5>
                                    <p class="mt-2 text-base leading-6 text-gray-500 ">
                                        Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="relative lg:col-start-1">
                    <!-- <img src="mcc.png" alt="illustration" class="relative w-auto mx-auto rounded shadow-lg" /> -->
                    <img src="@/assets/three.png" alt="">
                </div>
            </div>
        </div>
        <!-- 3 -->
        <section class="mx-auto px-6 text-gray-800 md:max-w-screen-xl" id="techstack">
            <div class="mx-auto mt-20 mb-16 block px-6 text-center">
                <h2 class="f1 uppercase mx-auto text-4xl font-bold md:text-5xl">TechStack</h2>
            </div>
            <div class="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
                <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                    <div class="my-4 flex items-center">
                        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-pink-500">
                            <!-- et:beaker -->
                            <span class="iconify" data-icon="tabler:brand-nuxt"></span>
                        </div>
                        <h3 class="text-2xl font-bold md:text-xl text-pink-500">Nuxt</h3>
                    </div>
                    <p class="text-gray-500 text-justify">
                        Build your next Vue.js application with confidence using Nuxt. An open source framework making web development simple and powerful.
                    </p>
                </div>
                <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                    <div class="my-4 flex items-center">
                        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-pink-500">
                            <span class="iconify" data-icon="simple-icons:strapi"></span>
                        </div>
                        <h3 class="text-2xl font-bold md:text-xl text-pink-500">Strapi</h3>
                    </div>
                    <p class="text-gray-500 text-justify">
                        Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.
                    </p>
                </div>
                <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                    <div class="my-4 flex items-center">
                        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-pink-500">
                            <!-- et:beaker -->
                            <span class="iconify" data-icon="mdi:tailwind"></span>
                        </div>
                        <h3 class="text-2xl font-bold md:text-xl text-pink-500">Tailwind</h3>
                    </div>
                    <p class="text-gray-500 text-justify">
                        A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
                    </p>
                </div>
                <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                    <div class="my-4 flex items-center">
                        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-pink-500">
                            <span class="iconify" data-icon="akar-icons:postgresql-fill"></span>
                        </div>
                        <h3 class="text-2xl font-bold md:text-xl text-pink-500">Postgres</h3>
                    </div>
                    <p class="text-gray-500 text-justify">
                        PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language.
                    </p>
                </div>
                <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                    <div class="my-4 flex items-center">
                        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-pink-500">
                            <span class="iconify" data-icon="teenyicons:nodejs-solid"></span>
                        </div>
                        <h3 class="text-2xl font-bold md:text-xl text-pink-500">NodeJS</h3>
                    </div>
                    <p class="text-gray-500 text-justify">
                        Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
                    </p>
                </div>
                <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
                    <div class="my-4 flex items-center">
                        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-pink-500">
                            <span class="iconify" data-icon="mdi:git"></span>
                        </div>
                        <h3 class="text-2xl font-bold md:text-xl text-pink-500">Git</h3>
                    </div>
                    <p class="text-gray-500 text-justify">
                        Git is a version control system that tracks changes in any set of computer files, usually used for coordinating work for software development. 
                    </p>
                </div>
                
            </div>
        </section>
        <!-- 4 : CEO -->
          <div class="mx-auto max-w-5xl px-4 py-8 mb-20">
            <section class="rounded-lg bg-gray-100 p-8">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                    <img alt="Man" src="/me.png" class="aspect-square w-full rounded-lg object-cover" />
                    <blockquote class="sm:col-span-2">
                        <p class="text-xl font-medium sm:text-4xl f1">
                           Keep moving Forward ! <br> 
                        </p>
                        <cite class="mt-8 inline-flex items-center not-italic">
                            <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                            <p class="text-sm uppercase text-gray-500 sm:ml-3">
                                <strong>CEO</strong>, Piyush Patil
                            </p>
                        </cite>
                    </blockquote>
                </div>
            </section>
        </div>
    </div>
</template>