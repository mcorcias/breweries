<template>
  <div class="main-app">
    <router-view/>
  </div>
</template>

<script>
import store from './store'
import { onMounted } from '@vue/runtime-core';
export default {
  setup(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if(window.innerWidth<=600){
      store.state.platform = 'mobile'
    }
    else if(window.innerWidth>600 && window.innerWidth<1200){
      store.state.platform = 'tablet'
    }
    else{
      store.state.platform = 'desktop'
    }

    onMounted(()=>{
      window.addEventListener('resize', () => {
        if(window.innerWidth<=600){
          store.state.platform = 'mobile'
        }
        else if(window.innerWidth>600 && window.innerWidth<1200){
          store.state.platform = 'tablet'
        }
        else{
          store.state.platform = 'desktop'
        }


        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
      });
    })
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
    color: #fff;
  }
  .main-app{
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    background: var(--main);
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
