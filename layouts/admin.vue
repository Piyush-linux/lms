<template>
    <div class="">
        <!-- nav: name , path -->
        <!-- <adminNavv/>
		<slot/>
		<Foo/> -->
        <div class="">
            <div class="flex">
                <aside class="h-screen flex flex-col w-64 h-auto px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                    <a href="#" class="mx-auto">
                        <!-- <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> -->
                        <span class="text-xl text-white f1 font-bold">
	                        P I Y U
                        </span>
                    </a>
                    <div class="flex flex-col items-center mt-6 -mx-2">
                        <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar">
                        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
                            {{ user.username }}
                        </h4>
                        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                        	{{ user.email }}
                        </p>
                    </div>
                    <div class="flex flex-col justify-between flex-1 mt-6">
                    	<!-- bg-gray-800 -->
                        <nav>
                            <NuxtLink class="flex items-center px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-gray-200" to="/admin/profile">
                                <span class="iconify w-5 h-5" data-icon="mdi:cards-heart"></span>
                                <span class="mx-4 font-medium">Profile</span>
                            </NuxtLink>
                            <NuxtLink class="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200" to="/admin/enrolled">
								<span class="iconify w-6 h-6" data-icon="radix-icons:stack"></span>
                                <span class="mx-4 font-medium">Enrolled</span>
                            </NuxtLink>
                            <NuxtLink class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to="/admin/courses">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="mx-4 font-medium">Courses</span>
                            </NuxtLink>
                            <a @click="onLogout" class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <span class="iconify w-5 h-5" data-icon="material-symbols:logout"></span>
                                <span class="mx-4 font-medium">Logout</span>
                            </a>
                        </nav>
                    </div>
                </aside>
                <!-- content -->
                <div class="w-full">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { logout , fetchUser } = useStrapiAuth()
const router = useRouter()
const user = await fetchUser()

const onLogout = () => {
  logout()
  router.push('/')
}
</script>