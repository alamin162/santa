<script setup>
import AppLayout from "@/components/AppLayouts.vue";
import { ref, onMounted } from 'vue';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


const bannerRef = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
});

const handleScroll = () => {
  const scroll = window.scrollY;
  const bannerImage = bannerRef.value;
  bannerImage.style.width = `${85 + scroll / 10}%`;
};

const modules = [Autoplay];




</script>

<template>
  <AppLayout>
    <div class="banner-title lg:px-7.5p px-2 lg:py-10 py-5 w-full lg:w-full font-light  text-Color dark:text-white items-center flex justify-center gap-5 lg:gap-20 lg:text-[80px] text-3xl " >
      <p class="lg:tracking-wide tracking-normal gap-1 lg:gap-8 items-center flex justify-center">
        <span>s</span>
        <span>e</span>
        <span>t</span>
        <span>t</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </p> 
      <p class="lg:tracking-wide tracking-normal gap-1 lg:gap-8  items-center flex justify-center">
        <span>s</span>
        <span>t</span>
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>a</span>
        <span>r</span>
        <span>d</span>
        <span>s</span>
      </p>
    </div>
     <!--------banner------------>
    <div class="lg:mt-10"> 
      <div  class="banner bannerimg " ><img  ref="bannerRef" src="@/assets/images/banner.webp" alt=""></div>
    </div>  

     <div class="lg:flex lg:justify-center lg:items-center w-full lg:px-7.5p px-2 lg:pt-40 mb-10">
        <div class="lg:w-1/3 w-full order-first">
          <div data-aos="fade-up" data-aos-duration="3000">
            <img  src="@/assets/images/Home.avif" alt="">
          </div>
        </div>
        <div class="w-full lg:w-2/3  order-last">
          <p data-aos="fade-up" data-aos-duration="1000" class="font-normal text-2xl w-full flex lg:justify-start  lg:items-center lg:ps-40 text-Color dark:text-white" >
            Our real estate portfolio is a mark of distinction. Featuring the country's most selective developments, we promise investors and buyers an unmatched level of service. Our success is built on strong standards and a keen eye for detail, embodying luxury and excellence.
          </p>
        </div>
     </div>
     <!--------video------------>
      <div class="relative flex  justify-center h-96  overflow-hidden mt-5 " >
        <marquee behavior="" direction="" class= "  opacity-100 relative z-30 bg-opacity-50   decoration-from-font text-5xl font-semibold text-gray-200 ">Prime Locations . Leading Consultants . Top Quality Materials . Uncompromising Safety . On-time Delivery . Professional Management </marquee>
      
        <video data-aos="zoom-in" data-aos-duration="3000" autoplay loop muted  class="absolute z-10  w-full px-7.5p opacity-40 "  src="https://cms.shantaholdings.com/media/media/See_it_to_believe_it_compressed.mp4"></video>
      </div>
<!--------Featured projects------------>
      
    <div class="mt-5 relative flex  justify-center h-screen   overflow-hidden">
      <div class="w-full flex justify-start items-center  lg:px-7.5p px-2 opacity-100 relative z-30 bg-opacity-50">
        <div class="w-1/2 flex-col justify-between " >
         
          <p class="font-semibold text-3xl uppercase text-white mb-10 items-start">FeaTuRed projects</p>
         
          <button class="font-normal mt-40 text-xl text-white flex gap-2 justify-center items-center hover:bg-secondary rounded px-5 py-3">
            <span class="rounded-full w-5 h-5 hover:h-7 hover:w-7 bg-white  flex justify-center items-center">
              <svg class="text-black" xmlns="http://www.w3.org/2000/svg" width="25"  viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/></svg>
            </span>
            View Project
          </button>
        </div>
        <div class="w-1/2  lg:h-60 h-28">
          <swiper
            :spaceBetween="30"
            :direction="swiperDirection"
            :centeredSlides="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="mySwiper  border border-white  items-center flex justify-center"
          >
            <swiper-slide><img src="@/assets/images/3.webp" ></swiper-slide>
            <swiper-slide><img src="@/assets/images/1.webp" ></swiper-slide>
            <swiper-slide><img src="@/assets/images/2.webp" ></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="absolute z-10 max-sm:items-center w-full swiper-container " >
        <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :modules="modules"
        class="swiper-wrapper"
        >
          <swiper-slide><img src="@/assets/images/1.webp"></swiper-slide>
          <swiper-slide><img src="@/assets/images/2.webp"></swiper-slide>
          <swiper-slide><img src="@/assets/images/3.webp"></swiper-slide>
        </swiper>

      </div>
    </div>
 <!--------Transform------------>
    <div class="lg:py-20 py-5">
      <h1 data-aos="zoom-in-down" class="uppercase font-normal lg:text-5xl text-xl text-Color items-center flex justify-center text-center dark:text-white ">Witness, As we <br/> Transform Your land  <br/> to A LandMark</h1>
    </div>
    <div class="w-full lg:px-7.5p px-2 flex justify-center">
      <div class="w-1/4 lg:pe-20">
        <div class="lg:mb-28 mb-2">
          <h1 class="text-secondary flex lg:justify-end font-bold lg:text-5xl"  >7M+</h1>
          <h4 class="text-Color dark:text-white flex lg:justify-end font-normal lg:text-xl">Total Area Built</h4>
          <p class="text-Color dark:text-white flex lg:justify-end font-normal lg:text-xl">(Million sft)</p>
        </div>
        <div class="lg:mb-28 mb-2">
          <h1 class="text-secondary flex lg:justify-end font-bold lg:text-5xl"  >100+</h1>
          <h4 class="text-Color dark:text-white flex lg:justify-end font-normal lg:text-xl">Number of</h4>
          <p class="text-Color dark:text-white flex lg:justify-end font-normal lg:text-xl">Projects</p>
        </div>
        <div class="lg:mb-28 mb-2">
          <h1 class="text-secondary flex lg:justify-end  font-bold lg:text-5xl"  >19</h1>
          <h4 class="text-Color dark:text-white flex lg:justify-end font-normal lg:text-xl">Years Since</h4>
          <p class="text-Color dark:text-white flex lg:justify-end font-normal lg:text-xl">Inception</p>
        </div>
      </div>
        
      <div class="w-2/4 max-sm:mx-2">
        <img data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="center-bottom" src="@/assets/images/1.webp">
      </div>
      <div class="w-1/4 lg:ps-20">
        <div class="lg:mb-28 mb-2">
          <h1 class="text-secondary flex justify-start font-bold lg:text-5xl"  >1200+</h1>
          <h4 class="text-Color dark:text-white flex justify-start font-normal lg:text-xl">Happy Clients</h4>
        
        </div>
        <div class="lg:mb-28 mb-2">
          <h1 class="text-secondary flex justify-start font-bold lg:text-5xl text-xl"  >42</h1>
          <h4 class="text-Color dark:text-white flex justify-start font-normal lg:text-xl text-sm">Number of</h4>
          <p class="text-Color dark:text-white flex justify-start font-normal lg:text-xl">Completed</p>
          <p class="text-Color dark:text-white flex justify-start font-normal lg:text-xl">Projects</p>
        </div>
        <div class="lg:mb-28 mb-2">
          <h1 class="text-secondary flex justify-start font-bold lg:text-5xl" >11M+</h1>
          <h4 class="text-Color dark:text-white flex justify-start font-normal lg:text-xl">Total Area in</h4>
          <p class="text-Color dark:text-white flex justify-start font-normal lg:text-xl">Pipeline</p>
          <p class="text-Color dark:text-white flex justify-start font-normal lg:text-xl">(Million sft.)</p>
        </div>
      </div>
    </div>
     <!--------Projects------------>
    <div class="w-full flex max-sm:mt-10"> 
       <div class="w-1/2"></div>
        <div  data-aos="fade-left"  data-aos-duration="3000" class="w-1/2 -mt-16 lg:-mt-20 opacity-100 relative z-30 bg-opacity-50  ">
          <h1  class="font-normal text-5xl lg:text-9xl text-gray-500 tracking-wide ">Projects</h1>
        </div>
       </div>
        <div class="-mt-10 bg-[#d7d2ce] relative flex justify-center items-center  h-screen  overflow-hidden">
          <div class="w-full flex justify-center items-center px-7.5p opacity-100 relative z-30 bg-opacity-50">
            <div>
              <img src="@/assets/images/aboutbanar.avif" class="w-full opacity-10">
            </div> 
            <div class="absolute z-10 flex justify-center  w-full swiper-container " >
              <img src="@/assets/images/Frame_SqhVSiP.original.png" class="w-80">
            </div>
          </div>
        </div>
    <div>
    </div>
      <!--------EXPLORE------------>
    <h1 data-aos="zoom-in-down" class="font-light text-6xl lg:text-9xl flex justify-center text-Color dark:text-white py-20">EXPLORE</h1>
    <div class="h-screen">
      <swiper
            :spaceBetween="30"
            :direction="swiperDirection"
            :centeredSlides="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="mySwiper "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <swiper-slide><img src="@/assets/images/1.webp" ></swiper-slide>
            <swiper-slide><img src="@/assets/images/2.webp" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/images/3.webp" alt=""></swiper-slide>
          </swiper>
    </div>

    <!--------contact------------>
    <div class="w-full mt-10  lg:flex  lg:px-7.5p px-2">
      <div class="lg:w-1/2 w-full order-1">
        <h1 class="lg:text-8xl text-4xl tracking-wide font-normal uppercase flex justify-start text-Color dark:text-white">Let's Contact</h1>
        
        <div class="flex items-center">
          <div class="lg:my-10 my-2">
            <h4 class="text-3xl  text-secondary font-normal mb-5 flex justify-start">Clients</h4>
            <p class="font-normal text-Color dark:text-white  text-base flex justify-start">Discover exquisite apartments, commercial spaces, and unmatched luxury with Shanta Holdings Ltd.to turn your dreams into a reality.</p>
          </div>
          <div class="lg:ms-10 ">
            <svg class="text-secondary"xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/></svg>
          </div>
        </div>
        
        <hr class="h-px lg:my-8 my-px bg-black border-0 dark:bg-gray-700">
        <div class="flex items-center">
          <div class="lg:my-10 my-2">
            <h4 class="text-3xl  text-secondary font-normal mb-5 flex justify-start">Landowners</h4>
            <p class="font-normal text-Color dark:text-white text-base flex justify-start">Share your land with Shanta Holdings Ltd. and be a part of the architectural splendor. Fill out the form to explore this partnership.</p>
          </div>
          <div class="lg:ms-10  ">
            <svg class="text-secondary"xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/></svg>
          </div>
        </div> 
      </div>
      <div data-aos="fade-left"  data-aos-duration="3000" class="lg:w-1/2 w-full lg:flex lg:justify-end lg:items-end order-2">
        <img  src="@/assets/images/professiona.avif" class="max-sm:h-60 max-sm:w-full" alt="">
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

.swiper-container.swiper {
  width: 100%;
  height: 100%;
} 
.swiper-container.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-container.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
