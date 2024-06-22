<script setup>
import AppLayout from "@/components/AppLayouts.vue";
import { ref, onMounted } from 'vue';

const bannerRef = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
});

const handleScroll = () => {
  const scroll = window.scrollY;
  const bannerImage = bannerRef.value;
  bannerImage.style.width = `${85 + scroll / 10}%`;
};


import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
<template>
    <AppLayout>
        <div class="about-bannder">
            <h1  class="font-medium text-5xl lg:text-8xl  text-center text-Color dark:text-white -mb-5 lg:-mb-10 opacity-100 relative z-30">OUR STORY</h1>
            <div > 
                <div  class="bannerimg max-sm:h-[300px] " ><img  ref="bannerRef" src="@/assets/images/about.avif" alt=""></div>
            </div> 
        </div>
        <div class="w-full lg:flex lg:px-7.5p px-2 lg:py-20 ">
            <div class="lg:w-1/2  w-full">
                <h1 class="lg:text-6xl text-4xl text-center lg:text-start  font-medium text-Color dark:text-white">FOUNDATION</h1>
                <img class="mt-10"  src="@/assets/images/Foundation.about.avif" alt="">
            </div>
            <div class="lg:w-1/2 w-full flex items-center max-sm:mt-10">
                <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    <h2 class="lg:text-4xl text-2xl font-medium max-sm:text-center mb-10 lg:font-bold text-Color dark:text-white">CONSTRUCTING A NEW STANDARD OF EXCELLENCE</h2>
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white max-sm:text-center ">
                        Shanta started its journey in 1988 in the ready-made garment (RMG) sector and became one of the forerunners in RMG export by establishing leading industries such as Shanta Garments Ltd, Shanta Industries Ltd, Shanta Washworks Ltd, GDS Chemicals Ltd and Shanta Denims Ltd. Earning a solid reputation as an important vendor for some of the most renowned apparel brands of USA and Europe.
                    </p>
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white max-sm:text-center ">
                        Shanta is also a key founding member and majority stakeholder of the STS Group - the promoter of the world-class Evercare Hospitals Dhaka (previously Apollo Hospital) and Chattogram, International School Dhaka (ISD), Glenrich International School,
                    </p>
                </div>
               
            </div>
        </div>
        <div class="w-full lg:flex gap-28 lg:px-7.5p px-2 lg:py-20 max-sm:mt-10 ">
            <div class="lg:w-1/2 w-full  items-center">
                <div data-aos="fade-up"  data-aos-delay="300">
                    <h2 class="lg:text-7xl text-5xl max-sm:text-center lg:mb-10 mb-5 font-normal text-Color dark:text-white">WHO WE ARE</h2>
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white">
                        A powerful portfolio of the country’s most distinctive and selective developments, with an excellent reputation in the Real Estate market, and enviable relationships that give our clients exclusive access to the ultimate in luxury apartments and exquisite commercial spaces, all in prime locations of Dhaka city.
                    </p>
                    
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex items-center">
                <div  class="lg:pt-28" data-aos="fade-left" data-aos-delay="300">
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white">
                        Our promise remains to develop a portfolio of luxury spaces and offer investors as well as buyers an unparalleled quality of service, inimitable by competitors. It is the commitment to both impeccably high standards and attention to detail that drive us to our success. Besides building beyond expectation, SHL moreover sets standards for itself, for you and for others, which is why we proudly declare our driving philosophy to be "Setting Standards".
                    </p>
                    
                </div>
               
            </div>
        </div>
        <div > 
            <img data-aos="zoom-out" data-aos-delay="300" src="@/assets/images/aboutbanar.avif" alt="">
        </div>
        <div class="w-full lg:flex lg:px-7.5p px-2  lg:py-20 ">
            <div  data-aos="fade-right" data-aos-delay="500" class="lg:w-1/2 w-full  max-sm:flex max-sm:justify-center max-sm:items-center ">
                <img class="lg:mt-10 max-sm:w-60 h-40 flex "  src="@/assets/images/SHL_Logo.original.png" >
            </div>
            <div class="lg:w-1/2 w-full flex items-center lg:pe-20">
                <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                    <h2 class="lg:text-6xl text-3xl lg:mb-10 mb-5 max-sm:text-center font-medium text-Color dark:text-white">OUR LOGO RATIONALE</h2>
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white">
                        The concept for our logo is derived from the shape of human hands, the shape they make when held with the palms facing each other.
                    </p>
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white">
                        Usually, when we hold an object in our palms, it is something we care about, something valuable to us. Like when a blow of air attempts to put off a candle that gives us light, we protect it with our palms. When a tiny bird falls from its nest, we hold it up and protect it in our palms. When a sculptor sculpts a masterpiece, he shapes it using his fingers and palms. Hence, our logo depicts the amount of care and emotion we put into each and every creation.
                    </p>
                    <p class="text-lg mb-5 font-normal text-Color dark:text-white">
                        Moreover, it is a symbol that inspires us on a daily basis to be caring towards our clients and protect their interests by providing an uncompromising level of service and superior products.
                    </p>
                </div>
               
            </div>
        </div>
        <div class="w-full lg:flex gap-20 lg:px-7.5p px-2 lg:py-20  bg-[#ece5da] dark:bg-dark ">
            <div class="lg:w-1/2 w-full lg:pe-5 ">
                <h1 class="lg:tracking-[.70em] tracking-widest text-4xl text-center lg:text-7xl font-normal text-Color dark:text-white">VISION</h1>
                <p class="text-Color dark:text-white font-normal max-sm:mt-5 text-lg lg:py-10 lg:pe-5">To become the most trusted brand in the region by offering comprehensive solutions to the diverse needs of the communities we serve.</p>
                <img class="mt-5 w-full h-auto bg-cover"  src="@/assets/images/Vision.avif" alt="">
            </div>
            <div class="lg:w-1/2 w-full lg:pe-5 max-sm:mt-5">
                <div   data-aos="fade-up" data-aos-offset="500" data-aos-delay="500">
                    <h1 class="lg:tracking-[.50em] tracking-widest text-4xl text-center lg:text-7xl font-normal text-Color dark:text-white">MISSION</h1>
                    <p class="text-Color dark:text-white font-normal max-sm:mt-5 lg:text-lg lg:py-10 lg:pe-5">To become the most trusted brand in the region by offering comprehensive solutions to the diverse needs of the communities we serve.</p>
                    <img class="mt-5 w-full h-auto bg-cover"  src="@/assets/images/_Mission.avif" alt="">
                </div>
            </div>
        </div>
        <div class="w-full lg:px-7.5p px-2 lg:py-20 ">
            <h2 class=" lg:tracking-[1.70em] tracking-widest text-4xl lg:text-8xl text-center lg:mb-10 mt-5 font-medium text-Color dark:text-white">VALUES</h2>
            <div class="lg:flex gap-20 lg:pt-20">
                <div  data-aos="fade-right" data-aos-delay="500" class="lg:w-1/2 w-full ">
                        <img class="mt-10"  src="@/assets/images/Values.avif" >
                        <p class="text-lg lg:py-20 font-normal text-Color dark:text-white">Our vision & mission are being made into reality through the belief and implementation of 6 core values. Integrity, commitment, innovation, quality focus, agility and value people are embedded in our DNA and drives toward our motto of “setting standards”.</p>
                </div>
                <div class="lg:w-1/2 w-full mt-5">
                    <fwb-accordion flush>
                        <fwb-accordion-panel  data-aos="fade-up"  data-aos-duration="3000">
                            <fwb-accordion-header class="text-Color dark:text-white lg:text-2xl text-xl">Integrity</fwb-accordion-header>
                            <fwb-accordion-content>
                                <div>
                                    <p class="mb-2 text-Color  dark:text-white text-lg font-normal">
                                        We conduct ourselves with honesty, integrity, and ethics in every action we take.
                                    </p>
                                </div>
                            </fwb-accordion-content>
                        </fwb-accordion-panel>

                        <fwb-accordion-panel data-aos="fade-up"  data-aos-duration="3200">
                            <fwb-accordion-header class="text-Colordark:text-white lg:text-2xl text-xl ">Commitment</fwb-accordion-header>
                            <fwb-accordion-content>
                                <div>
                                <p class="mb-2 text-Color dark:text-white text-lg font-normal">
                                    We commit to being trustworthy, taking ownership, being accountable and responsible, and ensuring reliability in all that we do. Short handover part add to landowners clients.
                                </p>
                                
                                </div>
                                </fwb-accordion-content>
                            </fwb-accordion-panel>
                        <fwb-accordion-panel data-aos="fade-up"  data-aos-duration="3400">
                            <fwb-accordion-header class="text-Colordark:text-white lg:text-2xl text-xl">Innovation</fwb-accordion-header>
                            <fwb-accordion-content>
                                    <div>
                                        <p class="mb-2 text-Color dark:text-white  text-lg font-normal">
                                            Seeking and adapting new ideas for better results to set a new standard.
                                        </p>
                                    </div>
                            </fwb-accordion-content>
                        </fwb-accordion-panel>
                        <fwb-accordion-panel data-aos="fade-up"  data-aos-duration="3600">
                            <fwb-accordion-header class="text-Color lg:text-2xl text-xl">Quality Focus</fwb-accordion-header>
                            <fwb-accordion-content>
                                    <div>
                                        <p class="mb-2 text-Colordark:text-white dark:text-white text-lg font-normal">
                                            We prioritize quality and transparency in everything we do. Quality is our guiding principle.
                                        </p>
                                    </div>
                            </fwb-accordion-content>
                        </fwb-accordion-panel data-aos="fade-up"  data-aos-duration="3800">
                        <fwb-accordion-panel>
                            <fwb-accordion-header class="text-Color dark:text-white lg:text-2xl text-xl">Agility</fwb-accordion-header>
                            <fwb-accordion-content>
                                    <div>
                                        <p class="mb-2 text-Color dark:text-white text-lg font-normal">
                                            We believe in staying flexible with an agile approach, embracing growth with a positive mindset, managing change with courage, and prioritizing continuous learning and development.
                                        </p>
                                    </div>
                            </fwb-accordion-content>
                        </fwb-accordion-panel data-aos="fade-up"  data-aos-duration="4000">
                        <fwb-accordion-panel data-aos="fade-up"  data-aos-duration="4200">
                            <fwb-accordion-header class="text-Color dark:text-white lg:text-2xl text-xl">Valuing People</fwb-accordion-header>
                            <fwb-accordion-content>
                                    <div>
                                        <p class="mb-2 text-Color dark:text-white text-lg font-normal">
                                            We value teamwork, collaboration, passion, empathy, fun, and friendliness for a win-win environment and wellbeing.
                                        </p>
                                    </div>
                            </fwb-accordion-content>
                        </fwb-accordion-panel>
                    </fwb-accordion>
                </div>
            </div>
           
        </div>
    </AppLayout>
</template>
<style scoped>
.bannerimg{
    width: 100%;
    height:750px;
    overflow: hidden;
    position: relative;
}
.bannerimg img {
    width: 85%;
    position:absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
}  
@media (max-width: 480px) {
    .bannerimg{
    height:300px;
}
}  

</style>