<template>
    <div class="">
        <header aria-label="Site Header" class="border-b border-gray-100">
            <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                <div class="flex items-center gap-4">
                    <button type="button" class="p-2 lg:hidden">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <a href="#" class="flex">
                        <span class="sr-only">Logo</span>
                        <!-- <span class="inline-block h-10 w-32 rounded-lg bg-gray-200"></span> -->
                        <img src="/cat.png" class="h-10" alt="">
                    </a>
                </div>
                <div class="flex flex-1 items-center justify-end gap-8">
                    <div class="flex items-center">
                        <div class="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                            <span>
                                <a href="/cart" class="block border-b-4 border-transparent p-5 hover:border-emerald-500">
                                    <span class="iconify h-6 w-6" data-icon="icon-park-solid:gitlab"></span>
                                    <span class="sr-only">Profile</span>
                                </a>
                            </span>
                            <span>
                                <a href="/cart" class="block border-b-4 border-transparent p-5 hover:border-emerald-500">
                                	<!-- <span class="iconify" data-icon=""></span> -->
                                    <span class="iconify h-6 w-6" data-icon="basil:shopping-bag-outline"></span>
                                    <span class="sr-only">Cart</span>
                                </a>
                            </span>
                            <span>
                                <a href="/account" class="block border-b-4 border-transparent p-5 hover:border-emerald-500">
                                    <span class="iconify w-6 h-6" data-icon="basil:stack-outline"></span>
                                    <span class="sr-only"> Account </span>
                                </a>
                            </span>
                            <span class="hidden sm:block">
                                <a href="/search" class="block border-b-4 border-transparent p-5 hover:border-emerald-500">
                                    <span class="iconify h-6 w-6" data-icon="basil:dialpad-solid"></span>
                                    <!-- <span class="iconify " data-icon="carbon:calendar-heat-map"></span> -->
                                    <span class="sr-only"> Search </span>
                                </a>
                            </span>
                            <span class="hidden sm:block">
                                <a href="/search" class="block border-b-4 border-transparent p-5 hover:border-emerald-500">
                                    <span class="iconify h-6 w-6" data-icon="basil:login-outline"></span>
                                    <span class="sr-only"> Search </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>