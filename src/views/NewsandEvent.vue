<script setup>
import AppLayout from "@/components/AppLayouts.vue";
import NewsEvent from "@/components/News&EvernCart.vue";

</script>
<template>
    <AppLayout>
        <div class="px-7.5p pb-5">
            <div class="h-96  flex w-full ">
                <div class="w-1/2 flex justify-start items-center">
                    <h1 class="font-normal text-8xl text-Color dark:text-white">NEWS & <br> EVENTS</h1>
                </div>
                <div class="w-1/2 flex justify-end items-center">
                    <h3 class="font-normal text-2xl text-Color dark:text-white">Stay updated with us</h3>
                </div>
            </div>
            <div>
                <div class="flex gap-10 mb-10">
                    <button class="font-semibold text-xl bg-gray-700 text-white dark:text-white py-2.5 px-8 rounded-3xl">All</button>
                    <button class="font-semibold text-xl hover:bg-gray-700  hover:text-white dark:text-white py-2.5 px-8 rounded-3xl">News</button>
                    <button class="font-semibold text-xl hover:bg-gray-700 hover:text-white dark:text-white py-2.5 px-8 rounded-3xl">Event</button>
                </div>
                <div class="grid grid-cols-3 gap-5">
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>
                    <NewsEvent/>

                </div> 
            </div>
                
        </div>
    </AppLayout>
</template>
<style scoped>

</style>