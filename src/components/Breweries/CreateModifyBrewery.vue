<template>
  <div class="create-modify-brewery">
      <div class="create-modify-brewery-dialog slide-in-top">
          <div class="create-modify-brewery-dialog-header">
              <div @click="$emit('close')" class="exit-btn">
                  <i class="material-icons">close</i>
              </div>
              <h3 v-if="!edit">Create brewery for {{state.stateName}}</h3>
              <h3 v-if="edit">Edit brewery for {{state.stateName}}</h3>
          </div>
          <div class="create-modify-brewery-dialog-content">
              <div class="create-modify-brewery-dialog-content-field">
                  <h3>Company Id Name <span style="color:red;">*</span></h3>
                  <el-input v-model="values.id" placeholder="Company Id Name" :disabled="edit?true:false" />
              </div>
              <div class="create-modify-brewery-dialog-content-field">
                  <h3>City <span style="color:red;">*</span></h3>
                  <el-input v-model="values.city" placeholder="City" />
              </div>
              <div class="create-modify-brewery-dialog-content-field">
                  <h3>Street</h3>
                  <el-input style="text-transform: uppercase;" v-model="values.street" placeholder="Street" />
              </div>
          </div>
          <div class="create-modify-brewery-dialog-footer">
              <el-button @click="handle_submit" v-if="!edit" style="width:50%" type="success">Create</el-button>
              <el-button @click="handle_submit" v-if="edit" style="width:50%" type="warning">Update</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue-demi'
import {slide_pop_error,alert} from '../../functions/Msgs'
import {concat_string_with_dash,capitalize_words} from '../../functions/Utils'
export default {
    props:['state','edit','edit_index'],
    setup(props,{emit}){
        const err_msg = ref('')

        const values = ref({
            id:'',
            city:'',
            street:null
        })

        const validation = ()=>{
            for (const [key, value] of Object.entries(values.value)) {
                switch (key) {
                    case 'id':
                        if(!value){
                            err_msg.value = 'You must type company id'
                            return false
                        }
                        break;
                    case 'city':
                        if(!value){
                            err_msg.value = 'You must type city'
                            return false
                        }
                        break;
                }
            }
            return true
        }

        const check_if_brewery_exist = (id) => {
            const index = props.state.breweries.findIndex(brewery=>brewery.id == id)
            if(index!=-1) return false
            return true
        }

        const handle_capitalize = () => {
            for (const [key, value] of Object.entries(values.value)) {
                switch (key) {
                    case 'city':
                        values.value[key] = capitalize_words(value)
                        break;
                    case 'street':
                        if(value){
                            values.value[key] = capitalize_words(value)
                        }
                        break;
                }
            }
        }

        const orgenize_data_before_submit = () => {
            handle_capitalize()
            if(!props.edit){
                props.state.breweries.push(values.value)
            }
            else{
                props.state.breweries[props.edit_index] = values.value
            }
            props.state.breweries.sort((a,b)=>(a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))
        }

        const handle_submit = () => {
            if(!validation()){
                slide_pop_error(err_msg.value)
                return
            }
            values.value.id = concat_string_with_dash(values.value.id)

            if(!props.edit && !check_if_brewery_exist(values.value.id)){
                slide_pop_error('This brewery already exist!')
                return
            }

            orgenize_data_before_submit()

            alert('success','Success',`The brewery ${values.value.id} ${props.edit?'updated':'added'} 
            successfully in ${props.state.stateName}`)
            .then(()=>{
                emit('close')
            })
        }

        const init = () => {
            if(props.edit){
                const clone_brewery = JSON.parse(JSON.stringify(props.state.breweries[props.edit_index]))
                values.value = clone_brewery
            }
        }

        init()

        return{
            handle_submit,
            values,
            err_msg,
        }
    }
}
</script>

<style scoped>
    .create-modify-brewery{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
    }
    .create-modify-brewery-dialog{
        width: 100%;
        max-width: 500px;
        border-radius: 10px;
        background: var(--secondary);
    }
    .create-modify-brewery-dialog-header,.create-modify-brewery-dialog-footer{
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .exit-btn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--danger);
        font-weight: 500;
        color: #fff;
        z-index: 3;
        border-radius: 50%;
        user-select: none;
        cursor: pointer;
    }
    .create-modify-brewery-dialog-content{
        width: 100%;
        height: fit-content;
    }
    .create-modify-brewery-dialog-content-field{
        width: 100%;
        height: fit-content;
        margin-bottom: 10px;
        padding: 0 5px;
    }

    .slide-in-top {
	-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
                transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
    }
    @keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
                transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
    }

</style>