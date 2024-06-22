<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
 <Header>
    <Header/>
 </Header>
 <Main class="mt-28">
    <slot/>
 </Main>
 <footer>
    <Footer/>
 </footer>
</template>