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
                    <i ref="arrow_icon" @click="handle_show_content" class="material-icons arrow-icon down">expand_more</i>
                </h4>
            </div>
        </div>
        <div v-if="show_content" class="accrordion-content slide-in-right">
            <!-- <table class="mobile-table">
                <tr>
                    <th>תאריך</th>
                    <td v-if="!lid.created_at.seconds">{{new Date(lid.created_at).toLocaleDateString('he')}}</td>
                    <td v-else>{{new Date(lid.created_at.seconds*1000).toLocaleDateString('he')}}</td>
                </tr>
                <tr>
                    <th>הלקוח/עסק</th>
                    <td>{{lid.business_name}}</td>
                </tr>
                <tr>
                    <th> המנהל</th>
                    <td>{{lid.manager_name}}</td>
                </tr>
                <tr>
                    <th>כתובת</th>
                    <td>{{lid.address}}</td>
                </tr>
                <tr>
                    <th>עיר</th>
                    <td>{{lid.city}}</td>
                </tr>
                <tr>
                    <th>טלפון</th>
                    <td>{{lid.phone}}</td>
                </tr>
                <tr>
                    <th>הערות</th>
                    <td v-if="lid.notes">{{lid.notes}}</td>
                    <td v-else>לא צויינו הערות</td>
                </tr>
                <tr>
                    <th> סוכן</th>
                    <td>{{lid.agent_id}}</td>
                </tr>
                <tr>
                    <th>סטטוס</th>
                    <td v-if="lid.status=='pending'" style="color:#f5953b;">
                        <p>ממתין לאישור</p>
                        <small style="color:#333;">{{lid.pending_string}}</small>
                    </td>
                    <td v-if="lid.status=='open'" style="color:green;">פתוח</td>
                    <td v-if="lid.status=='close'" style="color:#7367f0;">
                        <p>סגור</p>
                        <small style="color:#333;">{{lid.close_string}}</small>
                    </td>
                    <td v-if="lid.status=='canceled'" style="color:red;">
                        <p>בוטל</p>
                        <small style="color:#333;">{{lid.canceled_string}}</small>
                    </td>
                    <td v-if="lid.status=='e-relevant'" style="color:#63707A">
                        <p>לא רלוונטי</p>
                        <small style="color:#333;">{{lid.e_relevant_string}}</small>
                    </td>
                </tr>
            </table> -->
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:['state'],
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
            arrow_icon
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
        width: 100%;
        height: 50px;
        background:var(--secondary);
        border-radius: 5px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
        display: flex;
        
    }
    .accrordion-header h4{
        font-weight: 400;
    }
    .accrordion-header div{
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
    }
    .arrow-icon{
        font-size: 30px;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }
    .arrow-icon.up{
        transform: rotate(180deg);
    }
    .accrordion-content{
        width: 100%;
        height: 500px;
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
        background-color: var(--purple);
        color: white;
        position: sticky;
        top: 0;
        font-size: 20px;
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

</style>