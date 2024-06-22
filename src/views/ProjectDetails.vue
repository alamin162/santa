<script setup>
import AppLayout from "@/components/AppLayouts.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const modules = [Autoplay , Pagination, Navigation];


</script>
<template>
    <AppLayout>
        <div class="bg-[#454226] pt-10 relative overflow-hidden">
            <h1 class=" opacity-100 relative z-30  text-white font-bold text-8xl ms-10 -mb-20 ">SHOPNOLOK</h1>
            <div class="flex justify-end items-end ">
                <img src="@/assets/images/shopnolok.avif" class="h-screen mt-10 w-3/4 pb-20 " >
            </div>
        </div>
        <div class="flex justify-center w-full px-7.5p mt-20 h-lvh">
            <div class="w-2/4 items-start"> 
                <h1 class="tracking-wide text-8xl text-Color dark:text-white font-normal">AT A GLANCE</h1>
                <h4 class="text-secondary font-normal text-2xl uppercase mt-20">Status: completed</h4>
                <address class="font-bold  dark:text-white text-3xl mt-16">Address:</address>
                <p class="mt-5 text-xl font-normal dark:text-white">Plot 18, Road 13, Sector 7, Uttara</p>
            </div>
            <div class="w-1/4">
                <h1 class="flex justify-start font-bold text-lg text-Color dark:text-white">TOTAL BUILT AREA :</h1>
                <h4 class="flex justify-start font-normal text-base mt-2 dark:text-white" >35,000 sft</h4> 
            </div>
            <div class="w-1/4">
                <h1 class="flex justify-start font-bold text-lg text-Color dark:text-white">IZE OF APARTMENTS :</h1>
                <h4 class="flex justify-start font-normal text-base mt-2 dark:text-white" >1,850-2,250 sft</h4> 
            </div>
        </div>

        <div class="py-20 h-svh">
            <h1 class="opacity-100 relative z-30 font-bold text-center text-8xl text-Color dark:text-white -mb-8">GALLERY</h1>
            <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                }"
                :pagination="{
                clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper "
            >
            <swiper-slide><img src="@/assets/images/1.webp" class="h-40"></swiper-slide>
            <swiper-slide><img src="@/assets/images/2.webp" class="h-40"></swiper-slide>
            <swiper-slide><img src="@/assets/images/3.webp" class="h-40"></swiper-slide>
            </swiper>
        </div>
        <div class="bg-[#f6eed8] dark:bg-dark pt-10"> 
             <h1 class="mt-10 text-center font-semibold text-7xl text-Color dark:text-white">FEATURES & AMENITIES</h1>
             <div class="mt-10 flex w-full items-center">
                  <div class="w-1/3">
                    <img src="@/assets/images/shopnolok_room.avif">
                  </div>
                  <div class="w-2/3 items-center flex ps-10">
                    <div class="w-1/2 px-10" >
                        <div class="flex justify-start items-center gap-5 mb-10">
                            <span>
                                <svg class="text-Color  dark:text-white " xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 512 512"><path fill="currentColor" d="M448 242.025V152a48.055 48.055 0 0 0-48-48H112a48.055 48.055 0 0 0-48 48v90.025A64.115 64.115 0 0 0 16 304v112a32.036 32.036 0 0 0 32 32h16v48h32v-48h320v48h32v-48h16a32.036 32.036 0 0 0 32-32V304a64.115 64.115 0 0 0-48-61.975M112 416H48V304a32 32 0 0 1 64 0Zm256 0H144v-96h224Zm2.025-128h-228.05A64.243 64.243 0 0 0 96 242.025V152a16.019 16.019 0 0 1 16-16h288a16.019 16.019 0 0 1 16 16v90.025A64.243 64.243 0 0 0 370.025 288M464 416h-64V304a32 32 0 0 1 64 0l.02 112Z"/></svg>
                            </span>
                            <p class="text-lg font-normal text-Color dark:text-white">Elegant reception and waiting lounge</p>
                        </div>
                        <div class="flex justify-start items-center gap-5 mb-10">
                            <span>
                             <svg class="text-Color dark:text-white" xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24000 24000"><path fill="currentColor" d="M10906 13111a370 370 0 1 0 370 370v-20h-270v39v-5v5h226a328 328 0 0 1-326 300a326 326 0 0 1-325-326a324 324 0 0 1 325-326h27v-43h-5h5zm-138 289a57 57 0 1 0-57-56a56 56 0 0 0 57 56m161-115h-44v391h130v-43h-86Zm10416-3208a514 514 0 0 0-254-155a321 321 0 0 1-190-100a1486 1486 0 0 0-270-213l-175-109l-8472-10l-8473-5l-207 167a1686 1686 0 0 1-567 321a367 367 0 0 0-180 184a49237 49237 0 0 0 28 5100c110 984 110 986 900 1009c390 12 438 24 456 116c44 242-262 232 6716 225c3626 0 7206-21 7956-38l1363-32l68-142c67-140 73-141 569-141a1500 1500 0 0 0 590-65a917 917 0 0 0 172-373a18650 18650 0 0 0 105-2945l24-2637Zm-2144-400c114 0 166 10 117 23a590 590 0 0 1-206 0c-64-10-24-20 88-22Zm559 116c44-113 553-100 745 13l148 90l-469 12c-1442 39-3413 46-3170 12c156-22 831-42 1500-45c1031-3 1221-16 1246-81zm72 2141l141-105h-180c-135 0-161-15-100-52a235 235 0 0 1 300 10c89 90 77 134-75 275l-136 127h118c87 0 105 15 64 56s-86 40-164 0c-150-83-138-183 32-310zm-300 1800c-133-13-206-45-206-91c0-85 170-95 312-19c162 91 120 136-102 115zm1076-80c45 42-33 66-300 92s-467-26-467-114a2600 2600 0 0 1 771 27zm-360-1833c23-124 25-123 72 36a658 658 0 0 1 7 308l-41 145l-31-180a1085 1085 0 0 1-3-304zm-2980-2100l1055 7l-977 39a6327 6327 0 0 1-1046 0a3874 3874 0 0 1 972-40Zm-2316-39c580 0 818 7 528 17s-765 9-1055 0s-49-12 531-12zm-1470 24c167 0 290 19 274 35c-44 45-3486 57-3486 12a24372 24372 0 0 1 3215-42Zm-5528 6c127-20 614-36 1081-35h850l-619 36c-835 54-1623 53-1308 4Zm-900 0a1638 1638 0 0 1 490 50c53 35-50 50-335 50a1643 1643 0 0 1-490-50c-50-28 53-44 337-44Zm-1600 9c500 0 610 13 438 44a3009 3009 0 0 1-1000 0c-60-24 154-40 570-38Zm-1780-15a2681 2681 0 0 1 725 88a1370 1370 0 0 1-399 26a973 973 0 0 1-420-48c4-26 45-56 94-66m-970 564c94-257 230-266 4430-300c4310-32 9200 0 9306 52a7079 7079 0 0 1-1100 70c-1670 49-2144 44-2100-20a3745 3745 0 0 0-1091-24c-623 16-2933 40-5142 53c-4075 25-4244 34-4244 214c0 38-23 70-50 70s-40-46-17-115zm9535 3368c50 0 79-27 91-90h-100v-109h240v300h-130v-50a158 158 0 0 1-140 66c-135 0-223-107-223-274a247 247 0 0 1 263-272a264 264 0 0 1 164 50a171 171 0 0 1 67 137h-160a71 71 0 0 0-75-66c-62 0-100 58-100 153s40 155 103 155m-300-26v130h-379v-520h154v390zm-600-130a436 436 0 1 1-436-436a436 436 0 0 1 439 436zm-7939 937c340 0 485 8 324 18s-440 10-618 0s-42-18 294-18m130 1215a168 168 0 0 1-130-51c-19-30 35-52 130-52s146 22 127 52a166 166 0 0 1-124 50zm310-130a2760 2760 0 0 1-50-474v-270h-220a1026 1026 0 0 1-320-60c-70-33 0-40 231-18a2263 2263 0 0 1 350 46a4305 4305 0 0 1 38 500c16 372 10 435-26 277zm-1100-1311a13064 13064 0 0 1-60-1920v-1863l34 1827c18 1005 37 1833 42 1840s4009 16 8900 20c5967 0 8800 23 8606 57c-422 74-17450 110-17523 38zm17416 1415c-50 200-52 200-28-77c13-155 30-400 35-540c10-228 12-220 28 77a2232 2232 0 0 1-35 540m270-18c-35-20 87-35 270-34a749 749 0 0 1 332 40c0 67-479 62-603-6zm200-470c150-60 133-60 247 0c55 30 100 76 100 100c0 83-210 165-340 133c-152-38-156-171-4-232zm-40-684c-506 0-593-11-359-37a2671 2671 0 0 1 874 0c99 24-107 39-510 37"/></svg>
                            </span>
                            <p class="text-lg font-normal text-Color dark:text-white">Designed to ensure cross and through ventilation</p>
                        </div>
                        <div class="flex justify-start items-center gap-5 mb-10">
                            <span>
                                <svg class="text-Color dark:text-white" xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 48 48"><path fill="currentColor" d="M24.707 6.293a1 1 0 0 0-1.414 0l-4.357 4.356C19.222 11.41 20.017 12 21 12s1.779-.591 2.064-1.35a1 1 0 0 1 1.872 0c.285.759 1.08 1.35 2.064 1.35s1.779-.591 2.064-1.35zm5.835 5.835C29.794 13.266 28.473 14 27 14a4.27 4.27 0 0 1-3-1.213A4.27 4.27 0 0 1 21 14c-1.473 0-2.794-.734-3.542-1.873l-5.989 5.99q.121.063.226.164c.44.426 1.112.719 1.892.719c1.507 0 2.471-1.027 2.471-2a1 1 0 1 1 2 0c0 .973.965 2 2.471 2S23 17.973 23 17a1 1 0 1 1 2 0c0 .973.964 2 2.471 2c1.506 0 2.47-1.027 2.47-2a1 1 0 1 1 2 0c0 .973.965 2 2.472 2c.78 0 1.451-.293 1.892-.72q.105-.099.226-.163zM7.293 22.293l2.824-2.824q.072.136.188.25c.83.802 2.007 1.281 3.282 1.281c1.344 0 2.627-.553 3.471-1.472c.844.919 2.127 1.472 3.471 1.472s2.627-.553 3.471-1.472c.844.919 2.127 1.472 3.471 1.472s2.627-.553 3.47-1.472c.845.919 2.128 1.472 3.472 1.472c1.276 0 2.452-.48 3.282-1.28a1 1 0 0 0 .188-.25l2.824 2.823A1 1 0 0 1 41 23c0 1.55-1.453 3-3.5 3c-1.11 0-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663s-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663s-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663C8.453 26 7 24.55 7 23a1 1 0 0 1 .293-.707M10.5 39.566V28c1.376 0 2.717-.308 3.747-1.013q.42-.287.753-.654q.333.368.753.654C16.783 27.692 18.124 28 19.5 28s2.717-.308 3.747-1.013q.42-.287.753-.654q.333.367.753.654C25.783 27.692 27.124 28 28.5 28s2.717-.308 3.747-1.013q.42-.287.753-.654q.333.367.753.654C34.783 27.692 36.124 28 37.5 28v11.566c0 .732-.543 1.15-.857 1.334c-.354.21-.795.355-1.226.464c-.878.223-2.007.362-3.083.453a61 61 0 0 1-4.233.182l-.074.001h-.026L28 41v-5.737c0-1.912-1.596-3.763-4-3.763s-4 1.85-4 3.763V42h-.101l-.276-.003a61 61 0 0 1-3.957-.18c-1.076-.09-2.205-.23-3.083-.453c-.431-.109-.872-.254-1.226-.464c-.314-.185-.857-.602-.857-1.334M28 41v1z"/></svg>
                            </span>
                            <p class="text-lg font-normal text-Color dark:text-white">Multi-acitvity center at roof top</p>
                        </div>
                    </div>
                    <div class="w-1/2 px-10" >
                        <div class="flex justify-start items-center gap-5 mb-10">
                            <span>
                                <svg class="text-Color dark:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-2V10l-6-4.5L6 10v11zm5-2h6v-2H9zm0-4h6v-2H9zm-2 6V11h10v10z"/></svg>
                            </span>
                            <p class="text-lg font-normal text-Color dark:text-white">Super spacious lobbies at ground floor</p>
                        </div>
                        <div class="flex justify-start items-center gap-5 mb-10">
                            <span>
                             <svg class="text-Color dark:text-white" xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24000 24000"><path fill="currentColor" d="M10906 13111a370 370 0 1 0 370 370v-20h-270v39v-5v5h226a328 328 0 0 1-326 300a326 326 0 0 1-325-326a324 324 0 0 1 325-326h27v-43h-5h5zm-138 289a57 57 0 1 0-57-56a56 56 0 0 0 57 56m161-115h-44v391h130v-43h-86Zm10416-3208a514 514 0 0 0-254-155a321 321 0 0 1-190-100a1486 1486 0 0 0-270-213l-175-109l-8472-10l-8473-5l-207 167a1686 1686 0 0 1-567 321a367 367 0 0 0-180 184a49237 49237 0 0 0 28 5100c110 984 110 986 900 1009c390 12 438 24 456 116c44 242-262 232 6716 225c3626 0 7206-21 7956-38l1363-32l68-142c67-140 73-141 569-141a1500 1500 0 0 0 590-65a917 917 0 0 0 172-373a18650 18650 0 0 0 105-2945l24-2637Zm-2144-400c114 0 166 10 117 23a590 590 0 0 1-206 0c-64-10-24-20 88-22Zm559 116c44-113 553-100 745 13l148 90l-469 12c-1442 39-3413 46-3170 12c156-22 831-42 1500-45c1031-3 1221-16 1246-81zm72 2141l141-105h-180c-135 0-161-15-100-52a235 235 0 0 1 300 10c89 90 77 134-75 275l-136 127h118c87 0 105 15 64 56s-86 40-164 0c-150-83-138-183 32-310zm-300 1800c-133-13-206-45-206-91c0-85 170-95 312-19c162 91 120 136-102 115zm1076-80c45 42-33 66-300 92s-467-26-467-114a2600 2600 0 0 1 771 27zm-360-1833c23-124 25-123 72 36a658 658 0 0 1 7 308l-41 145l-31-180a1085 1085 0 0 1-3-304zm-2980-2100l1055 7l-977 39a6327 6327 0 0 1-1046 0a3874 3874 0 0 1 972-40Zm-2316-39c580 0 818 7 528 17s-765 9-1055 0s-49-12 531-12zm-1470 24c167 0 290 19 274 35c-44 45-3486 57-3486 12a24372 24372 0 0 1 3215-42Zm-5528 6c127-20 614-36 1081-35h850l-619 36c-835 54-1623 53-1308 4Zm-900 0a1638 1638 0 0 1 490 50c53 35-50 50-335 50a1643 1643 0 0 1-490-50c-50-28 53-44 337-44Zm-1600 9c500 0 610 13 438 44a3009 3009 0 0 1-1000 0c-60-24 154-40 570-38Zm-1780-15a2681 2681 0 0 1 725 88a1370 1370 0 0 1-399 26a973 973 0 0 1-420-48c4-26 45-56 94-66m-970 564c94-257 230-266 4430-300c4310-32 9200 0 9306 52a7079 7079 0 0 1-1100 70c-1670 49-2144 44-2100-20a3745 3745 0 0 0-1091-24c-623 16-2933 40-5142 53c-4075 25-4244 34-4244 214c0 38-23 70-50 70s-40-46-17-115zm9535 3368c50 0 79-27 91-90h-100v-109h240v300h-130v-50a158 158 0 0 1-140 66c-135 0-223-107-223-274a247 247 0 0 1 263-272a264 264 0 0 1 164 50a171 171 0 0 1 67 137h-160a71 71 0 0 0-75-66c-62 0-100 58-100 153s40 155 103 155m-300-26v130h-379v-520h154v390zm-600-130a436 436 0 1 1-436-436a436 436 0 0 1 439 436zm-7939 937c340 0 485 8 324 18s-440 10-618 0s-42-18 294-18m130 1215a168 168 0 0 1-130-51c-19-30 35-52 130-52s146 22 127 52a166 166 0 0 1-124 50zm310-130a2760 2760 0 0 1-50-474v-270h-220a1026 1026 0 0 1-320-60c-70-33 0-40 231-18a2263 2263 0 0 1 350 46a4305 4305 0 0 1 38 500c16 372 10 435-26 277zm-1100-1311a13064 13064 0 0 1-60-1920v-1863l34 1827c18 1005 37 1833 42 1840s4009 16 8900 20c5967 0 8800 23 8606 57c-422 74-17450 110-17523 38zm17416 1415c-50 200-52 200-28-77c13-155 30-400 35-540c10-228 12-220 28 77a2232 2232 0 0 1-35 540m270-18c-35-20 87-35 270-34a749 749 0 0 1 332 40c0 67-479 62-603-6zm200-470c150-60 133-60 247 0c55 30 100 76 100 100c0 83-210 165-340 133c-152-38-156-171-4-232zm-40-684c-506 0-593-11-359-37a2671 2671 0 0 1 874 0c99 24-107 39-510 37"/></svg>
                            </span>
                            <p class="text-lg font-normal text-Color dark:text-white">Rooftop garden</p>
                        </div>
                    </div>
                  </div>
             </div>
        </div>
        <div class="w-full flex h-screen ">
            <div class="w-1/2  flex justify-center  items-center ">
               <h1 class="font-normal text-Color dark:text-white  text-center  text-7xl px-5 ">PROJECT LOCATION</h1> 
            </div>
            <div class="w-1/2  flex justify-center  items-center px-5">
                <img src="@/assets/images/Frame_SqhVSiP.original.png" class="h-96">
            </div>
        </div>  
        <!-----------contact--------------->
        <div class="bg-[#ece5da] dark:bg-dark w-full flex h-screen px-7.5p pt-20"> 
            <div class="w-1/2   ">
               <h1 class="font-normal text-Color dark:text-white  text-start text-7xl">INTERESTED?</h1> 
               <h4 class="font-bold text-2xl mt-5 text-Color dark:text-white">GET IN TOUCH</h4>
            </div>
            <div class="w-1/2">
                <div class="bg-[#ece5da] dark:bg-dark ">
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
            </div>
        </div>


    </AppLayout>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>