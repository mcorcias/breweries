import { ref } from "vue-demi";

const platform = ref('desktop')
const loading = ref(false)

const feet_mobile_screen = ()=>{
    if(window.innerWidth<=600){
        platform.value = 'mobile'
    }
    else if(window.innerWidth>600 && window.innerWidth<1200){
    platform.value = 'tablet'
    }
    else{
    platform.value = 'desktop'
    }
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
export{
    platform,
    loading,
    feet_mobile_screen
}