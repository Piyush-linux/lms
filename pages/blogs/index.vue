<template>
    <div class="">
        <section class="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
            <div class="mb-12 text-left md:text-center">
                <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Skcript Blog</h2>
                <p class="text-lg text-gray-500">Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.</p>
            </div>
            <div class="flex flex-col space-y-12 divide-y divide-gray-200">

              <blogcard/>
              <blogcard/>
              <blogcard/>

                
                
            </div>
            <div class="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
                <a href="#" class="flex-1 rounded-full text-center w-full btn btn-light btn-xl md:w-auto bg-gray-900 p-3 text-green-100">Previous Page</a>
                <a href="#" class="flex-1 rounded-full text-center w-full btn btn-light btn-xl md:w-auto bg-gray-900 p-3 text-green-100">Next Page</a>
            </div>
        </section>
    </div>
</template>