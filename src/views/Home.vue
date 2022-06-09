<template>
  <div class="home">
     <div class="home-main">
       <div class="home-main-header">
         <h1>Breweries</h1>
       </div>
       <div class="home-main-content">
         <h1 style="text-align:center;" v-if="states.length == 0 ">Unfortunately there are no records to display</h1>
         <template v-for="state in states" :key="state.stateName">
           <Accordion @add_brewery="handle_create(state)" 
           @edit_brewery="handle_edit"
           :state="state"/>
         </template>
       </div>
     </div>

     <CreateModifyBrewery @close="handle_close_dialog" :state="state" 
     :edit="edit" :edit_index="edit_index" v-if="show_dialog" />

  </div>
</template>

<script>
import { ref, watch } from 'vue-demi'
import {error,states,mainObj} from '../functions/Breweries_api'
import Accordion from '../components/Breweries/Accordion.vue'
import CreateModifyBrewery from '../components/Breweries/CreateModifyBrewery.vue'
import {alert} from '../functions/Msgs'
export default {
  name: 'Home',
  components:{Accordion,CreateModifyBrewery},
  setup(){
    const show_dialog = ref(false)
    const state = ref(null)
    const edit = ref(false)
    const edit_index = ref(0)

    const handle_edit = (data) => {
      state.value = data.state
      edit.value = true
      edit_index.value = data.index
      show_dialog.value = true
    }
    const handle_create = (_state) => {
      edit.value = false
      state.value = _state
      show_dialog.value = true
    }

    const handle_close_dialog = () =>{
      edit.value = false
      state.value = null
      show_dialog.value = false
    }

    watch(error,()=>{
      if(error.value) alert('error','Something Wrong!',error.value)
    })

    return{
      handle_create,
      handle_close_dialog,
      handle_edit,
      error,
      states,
      show_dialog,
      state,
      edit,
      edit_index,
    }
  }
}
</script>

<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  .home-main{
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
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
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
  .home-main-header h1{
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
  .home-main-content{
    padding: 5px 0;
    width: 100%;
    height: calc(100% - 50px);
    overflow: hidden;
    overflow-y: auto;
  }
</style>