<template>
  <div class="main-app">
    <router-view/>
    <Loading v-if="loading" />
  </div>
</template>

<script>

import { onMounted } from '@vue/runtime-core';
import {loading} from './functions/Utils'
import Loading from './components/Overlays/Loading.vue'
import {feet_mobile_screen} from './functions/Utils'

export default {
  components:{Loading},
  setup(){
    
    feet_mobile_screen()

    onMounted(()=>{
      window.addEventListener('resize', () => {
       feet_mobile_screen() 
      });
    })
                       
    return {loading}
  }
}
</script>

<style>
  
  .main-app{
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: var(--main);
    color: #fff;
  }
 

</style>
