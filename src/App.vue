<template>
  <div class="main-app">
    <router-view/>
    <Loading v-if="loading" />
  </div>
</template>

<script>

import { onMounted } from '@vue/runtime-core';
import {platform,loading} from './functions/Utils'
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
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
  :root{
    --main: #161D31;
    --secondary: #283046;
    --alert-purple: rgba(115,103,240,.12);
    --purple: #7367f0;
    --indigo: #6610f2;
    --danger: #ea5455;
    --warning: #f5953b;
    --success: #28c76f;
    --light: #f6f6f6;
    --yellow: #ffc107;
    --blue: #3d36a1;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Rubik', sans-serif;
  }
  .main-app{
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: var(--main);
    color: #fff;
  }
  ::-webkit-scrollbar{
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 7px;
}
::-webkit-scrollbar-track{
  background: transparent;
}
::-webkit-scrollbar-thumb{
  background: linear-gradient(var(--main), var(--secondary)) ;
  border-radius: 5px;
  width: 5px;
}
::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px; 
}
::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 10px;
}
@media only screen and (max-width: 780px) {
  ::-webkit-scrollbar{
    width: 0;
  }
}
@media only screen and (max-width: 600px) {
  ::-webkit-scrollbar{
    width: 0;
  }
}

</style>
