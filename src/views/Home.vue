<template>
  <div class="home">
     <div class="home-main">
       <div class="home-main-header">
         <h1>Breweries</h1>
       </div>
       <div class="home-main-content">
         <template v-for="state in states" :key="state.stateName">
           <Accordion :state="state"/>
         </template>
       </div>
     </div>
  </div>
</template>

<script>
import { watch } from 'vue-demi'
import {error,states,mainObj} from '../functions/Breweries_api'
import Accordion from '../components/Breweries/Accordion.vue'
import {alert} from '../functions/Msgs'
export default {
  name: 'Home',
  components:{Accordion},
  setup(){

    watch(error,()=>{
      if(error.value) alert('error','Something Wrong!',error.value)
    })

    return{error,states}
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  .home-main{
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    overflow-y: auto;
  }
  .home-main-header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--secondary);
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.26);
  }
  .home-main-header h1{
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
  .home-main-content{
    padding: 5px 0;
    width: 100%;
    height: calc(100% - 50px);
  }
</style>