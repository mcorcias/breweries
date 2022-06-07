import { ref } from "vue-demi";
import {loading} from './Utils'

const error = ref('')
const mainObj = ref({
    states:{}
})

const states = ref([])

const organise_data_from_api = async() => {
    try{
        loading.value = true
        const res = await fetch('https://api.openbrewerydb.org/breweries')
        const data = await res.json()
    
        for(const brewery of data) {
            if(!(brewery.state in mainObj.value.states)) {
                mainObj.value.states[brewery.state] = {
                    stateName:brewery.state,
                    breweries: {
                        [brewery.id]: {
                            city:brewery.city,
                            street:brewery.street
                        }
                    }
                }
            }
            else
            {
                mainObj.value.states[brewery.state].breweries[brewery.id] = {
                    city:brewery.city,
                    street:brewery.street
                }
            }    
        }
    
        console.log(mainObj.value)
    
        for (const value of Object.values(mainObj.value.states)) {
            value.breweries = Object.entries(value.breweries).map(([key,value])=>({id:key,...value}))
            .sort((a,b)=>(a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))
            states.value.push(value)
        }
    
        states.value.sort((a,b)=>(a.stateName > b.stateName) ? 1 : ((b.stateName > a.stateName) ? -1 : 0))
        console.log(states.value);
        loading.value = false

    }catch(err){
        console.error('error:',err.message);
        error.value = err.message
        loading.value = false
    }
}

export{
    organise_data_from_api,
    error,
    mainObj,
    states,
}