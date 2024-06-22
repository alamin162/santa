<script setup>

import { ref, onMounted } from 'vue';
import { useDark, useToggle } from "@vueuse/core";

// for Navbar scroll hidden start--------------------
const lastScrollTop = ref(0);
const scrolledDown = ref(false);
const header = ( () =>{
  window.addEventListener("scroll", handleScroll);
})
onMounted(() => {
  header()
  
});
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrolledDown.value = scrollTop > lastScrollTop.value;
  lastScrollTop.value = scrollTop;
};
//  Navbar scroll hidden end--------------------

//for pc manu bar button start---------------------------------
const isOpen = ref(false);
const menuContainer = ref(null);
const menuItemsContainer = ref(null);

const toggleMenu = () => {
  if (menuContainer.value) {
    menuContainer.value.classList.toggle("active");

    if (menuContainer.value.classList.contains("active") && menuItemsContainer.value) {
      menuItemsContainer.value.classList.add("active");
    } else if (menuItemsContainer.value) {
      menuItemsContainer.value.classList.remove("active");
    }
  }
};
//for pc manu bar button end---------------------------------

//for mobile manu bar button start---------------------------------
const isOpenMobile = ref(false);
const menuContainerMobile = ref(null);
const menuItemsContainerMobile = ref(null);

const toggleMenuMobile = () => {
  if (menuContainerMobile.value) {
    menuContainerMobile.value.classList.toggle("active");

    if (menuContainerMobile.value.classList.contains("active") && menuItemsContainerMobile.value) {
      menuItemsContainerMobile.value.classList.add("active");
    } else if (menuItemsContainerMobile.value) {
      menuItemsContainerMobile.value.classList.remove("active");
    }
  }
};

//for mobile manu bar button end---------------------------------

//for dark mood and light mood---------------------------

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
    <div id="navbar" :class="{ '-top-32': scrolledDown, 'top-0': !scrolledDown }"  class=" opacity-100  z-50 bg-primary dark:bg-dark  fixed flex justify-between w-full lg:w-full top-0 h-28 pt-2 px-7.5p items-center transition-all ease-in-out duration-500" >

        <RouterLink to="/">
            <img src="@/assets/images/logo/logo.png" class="lg:w-full lg:h-16 w-full h-10">
        </RouterLink>
        <div class="flex items-center gap-5">
            <div class="flex items-center gap-2 max-sm:hidden">
                <h1 class="font-semibold text-xl text-Color dark:text-white uppercase"> {{isDark ? 'Dark' : 'Light'}}  </h1>
                <label class="switch relative inline-block w-11  h-5 ">
                    <input class="opacity-0 w-0 h-0" type="checkbox">
                    <span @click="toggleDark()" class="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-headertogol transition duration-400"></span>
                </label>
            </div>
            <!--------for pc menu button----------->
            <div @click="toggleMenu" class="elegance-hamburger-menu flex justify-center items-center gap-2  cursor-pointer max-sm:hidden max-md:hidden ">
              <div>
                <h2 @click="isOpen = true" class="font-semibold text-xl text-Color dark:text-white uppercase hover:text-secondary max-sm:font-normal ">Menu</h2>
              </div>  
                <div @click="isOpen = true" class="menu-container max-sm:pe-5" ref="menuContainer">
                  <div class="line line-1">
                    <div class="line-inner line-inner-1"></div>
                  </div>
                  <div class="line line-2">
                    <div class="line-inner line-inner-2"></div>
                  </div>
                </div>
            </div>
            <!--------for mobile menu button----------->
            <div @click="toggleMenuMobile" class="elegance-hamburger-menu flex justify-center items-center gap-2  cursor-pointer lg:hidden ">
              <div>
                <h2 @click="isOpenMobile = true" class="font-semibold text-xl text-Color dark:text-white uppercase hover:text-secondary max-sm:font-normal">Menu</h2>
              </div>  
                <div @click="isOpenMobile = true" class="menu-container-mobile max-sm:pe-5" ref="menuContainerMobile">
                  <div class="line-mobile  line-1-mobile">
                    <div class="line-inner-mobile line-inner-1-mobile"></div>
                  </div>
                  <div class="line-mobile  line-2-mobile">
                    <div class="line-inner-mobile line-inner-2-mobile"></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
     //for pc, laptop side bar-----------------
      <aside  :class="{ 'right-0': isOpen , '-right-[600px]': !isOpen }" class="opacity-100  z-50 transition-all ease-in-out duration-1000 fixed  bg-manubar opacity-96 w-full h-full max-w-lg top-0  bottom-0  overflow-auto max-sm:hidden max-md:hidden" >
        <div class="text-white ms-5 mt-2">
            <div class="mt-10 ps-10">
              <div :class="{ 'ms-80': isOpen, 'ms-0': !isOpen }"  class="flex  pe-10  transition-all ease-in-out duration-[1000ms]">
                  <div @click="toggleMenu"  class="elegance-hamburger-menu flex justify-center items-center gap-2  cursor-pointer ">
                    <h2 @click="isOpen = false" class="font-semibold text-xl text-white uppercase hover:text-gray-100 mt-[5px]">Close</h2>
                    <div @click="isOpen = false" class="menu-container" ref="menuContainer">
                      <div class="line line-1">
                        <div class="line-inner line-inner-1" style="background: white !important;"></div>
                      </div>
                      <div class="line line-2">
                        <div class="line-inner line-inner-2 " style="background: white !important;"></div>
                      </div>
                    </div>
                  </div>
              </div>
              
                <div :class="{ 'ms-0': isOpen, 'ms-80': !isOpen }" class="m-5 hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[2500ms] ease-in-out ">
                    <RouterLink to="/">Home</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpen, 'ms-80': !isOpen }"  class="m-5  hover:text-secondary text-white font-normal tracking-wide text-lg  transition-all duration-[2600ms] ease-in-out">
                    <RouterLink to="/about">About Shanta</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpen, 'ms-80': !isOpen }"  class="m-5  hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[2700ms] ease-in-out">
                    <RouterLink to="/project">Projcts</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpen, 'ms-80': !isOpen }"  class="m-5  hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[2900ms] ease-in-out">
                    <RouterLink to="/">Careers</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpen, 'ms-80': !isOpen }"  class="m-5 hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[3000ms] ease-in-out">
                    <RouterLink to="/news-event">News & Events</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpen, 'ms-80': !isOpen }"  class="m-5  hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[3100ms] ease-in-out">
                    <RouterLink to="/contact">Contact Us</RouterLink>
                </div>
                <!----------socal media button--------------->
                <div class="flex justify-center items-center  gap-10   absolute bottom-0 mb-10">
                      <div class=" rounded-full border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 flex justify-center items-center" width="28"  viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"/></svg>
                      </div>
                      <div class=" rounded-full  border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 flex justify-center items-center" width="28" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                      </div>
                      <div class=" rounded-full  border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 flex justify-center items-center" width="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137" color="currentColor"/></svg>
                      </div>
                      <div class=" rounded-full  border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 flex justify-center items-center" width="28" viewBox="0 0 256 256"><path fill="currentColor" d="M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z"/></svg>
                      </div>
                </div>
            </div>
        </div>
    </aside>
   
    //for mobile phone side bar-----------------
    <aside  :class="{ 'right-0': isOpenMobile , '-right-[600px]': !isOpenMobile }" class="opacity-100 z-50 transition-all ease-in-out duration-1000 fixed  bg-manubar opacity-96 w-80 h-full max-w-lg top-0  bottom-0  overflow-auto lg:hidden" >
        <div class="text-white ms-5 mt-2">
            <div class="mt-10 ps-2">
              <div :class="{ 'ms-40': isOpenMobile, 'ms-0': !isOpenMobile }"  class="flex  pe-10  transition-all ease-in-out duration-[1000ms]">
                  <div @click="toggleMenuMobile"  class="elegance-hamburger-menu flex justify-center items-center gap-2  cursor-pointer ">
                    <h2 @click="isOpenMobile = false" class="font-semibold text-xl text-white uppercase hover:text-gray-100 mt-[5px] max-sm:font-normal">Close</h2>
                    <div @click="isOpenMobile = false" class="menu-container-mobile" ref="menuContainerMobile">
                      <div class="line-mobile  line-1-mobile">
                        <div class="line-inner-mobile line-inner-1-mobile" style="background: white !important;"></div>
                      </div>
                      <div class="line-mobile  line-2-mobile">
                        <div class="line-inner-mobile line-inner-2-mobile " style="background: white !important;"></div>
                      </div>
                    </div>
                  </div>
              </div>
              
                <div :class="{ 'ms-0': isOpenMobile, 'ms-20': !isOpenMobile }" class="mb-2 mt-5 hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[2500ms] ease-in-out ">
                    <RouterLink to="/">Home</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpenMobile, 'ms-20': !isOpenMobile }"  class="mb-2  hover:text-secondary text-white font-normal tracking-wide text-lg  transition-all duration-[2600ms] ease-in-out">
                    <RouterLink to="/about">About Shanta</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpenMobile, 'ms-20': !isOpenMobile }"  class="mb-2  hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[2700ms] ease-in-out">
                    <RouterLink to="/project">Projcts</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpenMobile, 'ms-20': !isOpenMobile }"  class="mb-2  hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[2900ms] ease-in-out">
                    <RouterLink to="/">Careers</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpenMobile, 'ms-20': !isOpenMobile }"  class="mb-2 hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[3000ms] ease-in-out">
                    <RouterLink to="/news-event">News & Events</RouterLink>
                </div>
                <div :class="{ 'ms-0': isOpenMobile, 'ms-20': !isOpenMobile }"  class="mb-2  hover:text-secondary text-white font-normal tracking-wide text-lg transition-all duration-[3100ms] ease-in-out">
                    <RouterLink to="/contact">Contact Us</RouterLink>
                </div>

              <!-----light & dark mode button--------------------->
                <div class="lg:hidden flex items-end  mt-10">
                  <div class="flex items-center gap-2">
                    <h1 class="font-normal text-lg text-white dark:text-white uppercase "> {{isDark ? 'Dark' : 'Light'}}  </h1>
                    <label class="switch relative inline-block w-11  h-[19px] ">
                        <input class="opacity-0 w-0 h-0" type="checkbox">
                        <span @click="toggleDark()" class="slider round  absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-headertogol transition duration-400"></span>
                    </label>
                  </div>
                </div>
               <!----------socal media button--------------->
                <div class="flex justify-center items-center  gap-10 absolute bottom-0 mb-2 ">
                      <div class=" rounded-full border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" width="28"  viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"/></svg>
                      </div>
                      <div class=" rounded-full  border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" width="28" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                      </div>
                      <div class=" rounded-full  border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" width="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137" color="currentColor"/></svg>
                      </div>
                      <div class=" rounded-full  border border-secondary  p-2 text-white dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" width="28" viewBox="0 0 256 256"><path fill="currentColor" d="M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z"/></svg>
                      </div>
                </div>
            </div>
        </div>
    </aside> 
</template>
<style scoped>
/*-----light button--------*/
.slider:before {
  position: absolute;
  content: ""; 
  height: 19px;
  width: 18px;
  background-color: #8e8a1f;
  transition: .4s;
}
input:checked + .slider {
  background-color: #b4b269;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 35px;
}
.slider.round:before {
  border-radius: 50%;
}

/*--------- for menu button start---------*/

.menu-container {
  cursor: pointer;
}

.menu-container .line {
  height: 30px;
  width: 30px;
  top: 45px;
  position: absolute;
  transition: transform 300ms ease-in-out;
}

.menu-container .line-inner {
  height: 2px;
  width: 30px;
  background: #8e8a1f;
  border-radius: 4px;
  position: absolute;
  transition: transform 200ms ease-in-out;
  transition-delay: 200ms;
}

.menu-container .line-inner-1 {
  top: 15px;
  transform: translateY(-5px);
}
.menu-container .line-inner-2 {
  bottom: 15px;
  transform: translateY(5px);
}

.menu-container.active .line-1 {
  transform: rotateZ(45deg);
}

.menu-container.active .line-2 {
  transform: rotateZ(-45deg);
}

.menu-container.active .line-inner {
  transform: none;
  transition: transform 200ms ease-in-out;
}

.menu-container.active .line {
  transition-delay: 200ms;
}

/*-----for mobile------*/
.menu-container-mobile {
  cursor: pointer;
}
.menu-container-mobile  .line-mobile {
  height: 30px;
  width: 30px;
  top: 45px;
  position: absolute;
  transition: transform 300ms ease-in-out;
}

.menu-container-mobile  .line-inner-mobile {
  height: 2px;
  width: 30px;
  background: #8e8a1f;
  border-radius: 4px;
  position: absolute;
  transition: transform 200ms ease-in-out;
  transition-delay: 200ms;
}

.menu-container-mobile .line-inner-1-mobile {
  top: 15px;
  transform: translateY(-5px);
}
.menu-container-mobile .line-inner-2-mobile {
  bottom: 15px;
  transform: translateY(5px);
}

.menu-container-mobile.active .line-1-mobile {
  transform: rotateZ(45deg);
}

.menu-container-mobile.active .line-2-mobile {
  transform: rotateZ(-45deg);
}

.menu-container-mobile.active .line-inner-mobile {
  transform: none;
  transition: transform 200ms ease-in-out;
}

.menu-container-mobile.active .line-mobile  {
  transition-delay: 200ms;
}


</style>