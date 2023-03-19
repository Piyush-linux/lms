<template>
    <div class="">
        <header aria-label="Site Header" class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="md:flex md:items-center md:gap-12">
                        <a class="block text-teal-600" href="/">
                            <span class="sr-only">Home</span>
                            <img src="/cat.png" class="h-10" alt="">
                        </a>
                    </div>
                    <div class="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul class="flex items-center gap-6 text-sm">
                                <NuxtLink to="/" class="text-gray-500 transition hover:text-gray-500/75">
                                    Home
                                </NuxtLink>
                                <NuxtLink to="/about" class="text-gray-500 transition hover:text-gray-500/75">
                                    About
                                </NuxtLink>
                                <NuxtLink to="/roadmap" class="text-gray-500 transition hover:text-gray-500/75">
                                    Roadmap
                                </NuxtLink>
                                <a href="/blogs" class="text-gray-500 transition hover:text-gray-500/75">
                                    Blog
                                </a>
                                <NuxtLink to="/price" class="text-gray-500 transition hover:text-gray-500/75">
                                    Pricing
                                </NuxtLink>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <NuxtLink to="/login" class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                                Login
                            </NuxtLink>
                            <div class="hidden sm:flex">
                                <NuxtLink to="/login" class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" >
                                    Register
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="block md:hidden">
                            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>