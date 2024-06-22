<script setup>
import AppLayout from "@/components/AppLayouts.vue";
import ProjectCart from "@/components/ProjectCart.vue";
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'

const name = ref('')
const location =ref('All Location')
const status = ref('Status')
const type = ref('Project Type')
</script>
<template>
 <AppLayout>
    <div class="project-banner relative flex justify-center items-center lg:h-96 h-72 overflow-hidden" >
        <h1  class= "opacity-100 relative z-30 bg-opacity-50   decoration-from-font lg:text-8xl text-3xl text-center font-normal text-white flex justify-center items-center ">EXCLUSIVE PROPERTIES IN PRIME LOCATIONS </h1>
        <img data-aos="zoom-in" data-aos-duration="500" src="@/assets/images/project-banner.avif" class="w-full lg:h-96 h-72 absolute z-10  opacity-40 "> 
    </div>
    <div class="lg:mx-7.5p -mt-10 bg-[#827466]  flex px-5 py-4 items-center opacity-100 relative z-30 ">
        <div class="lg:w-1/5 flex justify-center">
            <v-select 
            v-model="location"
            :options="[
                {label: 'Gulshan', code: 'gu'},
                {label: 'Rampura', code: 'ra'},
                {label: 'Badda', code: 'ba'},
                {label: 'Uttra', code: 'ut'}
                ]"
                class="lg:w-40 bg-white"
            >
        </v-select>
        </div>
        <hr class="lg:h-10 w-px lg:my-auto lg:mx-4 bg-gray-300 border-0 rounded  dark:bg-gray-700">
        <div class="lg:w-1/5 flex justify-center">
            <v-select 
            v-model="status"
                :options="[
                    {label: 'Ongoing', code: 'on'},
                    {label: 'Upcoming', code: 'up'},
                    {label: 'Completed', code: 'co'}
                    ]"
                    class="lg:w-40 bg-white "
                >
            </v-select>
        </div>
        <hr class="lg:h-10 w-px my-auto mx-4 bg-gray-300 border-0 rounded  dark:bg-gray-700">
        <div class="lg:w-1/5 flex justify-center">
            <v-select 
            v-model="type"
                :options="[
                    {label: 'Residential', code: 're'},
                    {label: 'Commercial', code: 'co'}
                    ]"
                    class="lg:w-44 bg-white "
                >
        </v-select>
        </div>
        <hr class="lg:h-10 w-px my-auto mx-4 bg-gray-300 border-0 rounded  dark:bg-gray-700">
        <div class="lg:w-2/5">
            <fwb-input v-model="name" placeholder="enter your search query">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </template>
            </fwb-input>
        </div>
        

    </div>

    <div class="lg:px-7.5p mt-5 w-full lg:flex lg:justify-center lg:items-start ">
      <div class="lg:w-1/2">
       <ProjectCart/>
       <ProjectCart/>
       <ProjectCart/>
       <ProjectCart/>
      </div>
      <div class="lg:w-1/2  lg:mt-20 ">
        <ProjectCart/>
        <ProjectCart/>
        <ProjectCart/>
        <ProjectCart/>
      </div>
    </div>
 </AppLayout>
</template>