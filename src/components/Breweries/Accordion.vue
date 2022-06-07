<template>
    <div class="accrordion">
        <div class="accrordion-header">
            <div>
                <h4>State</h4>
                <small>{{state.stateName}}</small>
            </div>
            <div>
                <h4>Breweries</h4>
                <small>{{state.breweries.length}}</small> 
            </div>
            <div>
                <h4>
                    <i ref="arrow_icon" @click="handle_show_content" class="material-icons icon arrow-icon">expand_more</i>
                </h4>
            </div>
            <i @click="$emit('add_brewery')" class="material-icons icon add-icon">add</i>
        </div>
        <div v-if="show_content && (platform=='desktop' || platform=='tablet')" class="accrordion-content slide-in-right">

            <table>
                <tr>
                    <th>Company Id</th>
                    <th>City</th>
                    <th>street</th>
                    <th>Actions</th>
                </tr>
                <template v-for="brewerie in state.breweries" :key="brewerie.id">
                    <tr>
                        <td>{{brewerie.id}}</td>
                        <td>{{brewerie.city}}</td>
                        <td v-if="brewerie.street">{{brewerie.street}}</td>
                        <td v-else>Unknown</td>
                        <td>
                            <i class="material-icons icon delete-icon">delete</i>
                            <i class="material-icons icon edit-icon">edit</i>
                        </td>
                    </tr>
                </template>
            </table>
        </div>
        <div v-if="show_content && platform=='mobile'" class="accrordion-content slide-in-right">
         <template v-for="brewerie in state.breweries" :key="brewerie.id">
            <table class="mobile-table">
                <tr>
                    <th style="width:30%;">Company Id</th>
                    <td>{{brewerie.id}}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{{brewerie.city}}</td>
                </tr>
                <tr>
                    <th>Street</th>
                    <td v-if="brewerie.street">{{brewerie.street}}</td>
                    <td v-else>Unknown</td>
                </tr>
                <tr>
                    <th>Actions</th>
                    <td>
                        <i class="material-icons icon delete-icon">delete</i>
                        <i class="material-icons icon edit-icon">edit</i>
                    </td>
                </tr>
            </table>
         </template>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {platform} from '../../functions/Utils'
export default {
    props:['state'],
    emits:['add_brewery'],
    setup(){
        const arrow_icon = ref()
        const show_content = ref(false)

        

        const handle_show_content = ()=>{
           arrow_icon.value.classList.toggle("up");
           show_content.value = !show_content.value
        }
        return{
            handle_show_content,
            show_content,
            arrow_icon,
            platform,
        }
    }
}
</script>

<style scoped>
    .accrordion{
        width: 100%;
        height: auto;
        margin-bottom: 5px;
        
    }
    .accrordion-header{
        position: relative;
        width: 100%;
        height: 50px;
        background:var(--secondary);
        border-radius: 5px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
        display: flex;
    }
    .accrordion-header h4{
        font-weight: 400;
        color: #fff;
    }
    .accrordion-header div{
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        color: #fff; 
    }
    .icon{
        cursor: pointer;
        user-select: none;
        font-size: 30px;
        cursor: pointer;
    }
    .arrow-icon{
        transition: all 0.2s ease-in;
    }
    .arrow-icon.up{
        transform: rotate(180deg);
    }
    .accrordion-content{
        width: 100%;
        
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    table td, table th {
        border: 1px solid #ddd;
        padding: 2px;       
    }
    table tr:nth-child(even){background-color: #f2f2f2;}
    table tr:nth-child(odd){background-color: #e7e6e6;}
    table tr:hover {background-color: #ddd;}
    table td{
        text-align: center;
        color: var(--main);
        font-size: 18px;
    }
    table th {
        padding-top: 2px;
        padding-bottom: 2px;
        text-align: center;
        background-color: var(--secondary);
        color: white;
        position: sticky;
        top: 0;
        font-size: 20px;
    }
    .mobile-table{
        margin-bottom: 5px;
    }

    .slide-in-right {
	    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }  
    
    @-webkit-keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
                transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
    }
    @keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
                transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
    }

    .edit-icon{
        color: var(--warning);
        margin-left: 10px;
    }
    .delete-icon{
        color: var(--danger);
    }
    .add-icon{
        position: absolute;
        color: var(--success);
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
    }

</style>