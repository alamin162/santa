<script setup>
import AppLayout from "@/components/AppLayouts.vue";

</script>
<template>
    <AppLayout>
        <div class="px-7.5p mt-10">
            <div class="w-full pt-20  flex  ">
                <div class="w-1/2 items-center py-5">
                    <h1 class="text-[110px] tracking-wide font-normal uppercase flex justify-start text-Color dark:text-white  ">Contact <span class="ms-20 text-gray-50 opacity-100 relative z-30">us</span> </h1>
                    
                    <div class="flex items-center mt-5">
                    <div class="my-5">
                        <h4 class="text-3xl  text-secondary font-normal mb-5 flex justify-start">Clients</h4>
                        <p class="font-normal text-Color  dark:text-white  text-base flex justify-start">Discover exquisite apartments, commercial spaces, and unmatched luxury with Shanta Holdings Ltd.to turn your dreams into a reality.</p>
                    </div>
                    <div class="ms-5">
                        <svg class="text-secondary  "xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/></svg>
                    </div>
                    </div>
                    
                    <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700">
                    <div class="flex items-center">
                    <div class="my-5">
                        <h4 class="text-3xl  text-secondary font-normal mb-5 flex justify-start">Landowners</h4>
                        <p class="font-normal text-Color dark:text-white  text-base flex justify-start">Share your land with Shanta Holdings Ltd. and be a part of the architectural splendor. Fill out the form to explore this partnership.</p>
                    </div>
                    <div class="ms-5">
                        <svg class="text-secondary"xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/></svg>
                    </div>
                    </div> 
                </div>
                <div data-aos="fade-left"  data-aos-duration="3000" class="w-1/2 flex justify-end items-end ">
                    <img  src="@/assets/images/Rectangle_44_5.original.png" alt="">
                </div>
            </div>
        </div>
         <!-----------contact--------------->
         <div class="bg-[#ece5da] dark:bg-dark w-full  px-7.5p py-20 "> 
            <h1 class="font-normal text-Color dark:text-white  text-center text-7xl pb-10">GET IN TOUCH</h1> 
            <div class="flex gap-20 ">
                <div class="w-1/2    ">
                    <div class="mt-2">
                        <input  name="name" type="text"  placeholder="Name *" required class="w-full  border-b border-x-0 border-t-0 border-gray-600 py-1 bg-[#ece5da]   placeholder:text-Color " />
                    </div>
                    <div class="mt-14">
                        <input name="number" type="number" placeholder="Contact Number *" required class="w-full  border-b border-x-0 border-t-0 border-gray-600 py-1 bg-[#ece5da]   placeholder:text-Color " />
                    </div>
                    <div class="mt-14">
                        <input  name="email" type="email" autocomplete="email" placeholder="Email *" required class="w-full  border-b border-x-0 border-t-0 border-gray-600 py-1 bg-[#ece5da]   placeholder:text-Color " />
                    </div>
                    <div class="mt-14">
                        <input  name="message" type="text"  placeholder="Message *" required class="w-full  border-b border-x-0 border-t-0 border-gray-600 py-1 bg-[#ece5da]   placeholder:text-Color " />
                    </div>
                    <button class="font-bold text-xl items-center justify-center flex px-10 py-3 mt-20 bg-[#e7d9c3] hover:bg-[#ccb288]">Submit</button>
                </div>
                <div class="w-1/2 mt-2 ms-20">
                    <div class="mb-20 text-Color dark:text-white ">
                        <h3 class="font-normal text-3xl">Hotline:</h3>
                        <h3 class="font-medium text-3xl">16634</h3>
                    </div>
                    <div class="mb-20 text-Color dark:text-white ">
                        <h3 class="font-normal text-3xl">Sales:</h3>
                        <h3 class="font-medium text-3xl">+88 01678666444</h3>
                    </div>
                    <div class="mb-20 text-Color dark:text-white ">
                        <h3 class="font-normal text-3xl">Email:</h3>
                        <h3 class="font-medium text-3xl">info@shantaholdings.com</h3>
                    </div>
                </div>
            </div>
           
        </div>
<!-----------Map--------------->
        <div class="mt-10">
            <h1 class="py-10 font-normal text-Color dark:text-white  text-center text-7xl ">FIND US</h1>
            <div class="mt-5 ">
                <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.553593820441!2d90.40413379669191!3d23.77315573464875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d80bd295cd%3A0xcaae267402f15df6!2sCreative%20Tech%20Park%20Gulshan%20Branch!5e0!3m2!1sen!2sbd!4v1718107542772!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </AppLayout>
</template>
<style scoped>

</style>