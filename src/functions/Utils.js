import { ref } from "vue-demi";

const platform = ref('desktop')
const loading = ref(false)

const feet_mobile_screen = () => {
    if(window.innerWidth <= 600){
        platform.value = 'mobile'
    }
    else if(window.innerWidth > 600 && window.innerWidth < 1200){
        platform.value = 'tablet'
    }
    else{
        platform.value = 'desktop'
    }
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const capitalize_words = (string) => {
    const arr = string.split(" ")
    return arr.map(element => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase())
    .join(" ")
}

const concat_string_with_dash = (string) => {
    return string.split(" ").join("-")
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}





export{
    feet_mobile_screen,
    capitalize_words,
    concat_string_with_dash,
    sleep,
    platform,
    loading,
}