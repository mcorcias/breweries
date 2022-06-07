import { ElNotification } from "element-plus";
import Swal from 'sweetalert2'

const slide_pop_error = (text , duration = 2500) => {
    ElNotification({
        title: "שגיאה!",
        type: "error",
        message: text,
        showClose: false,
        position: 'top-left',
        duration: duration,
        zIndex: '10000000'
    });

    
}

const slide_pop_info = (text , duration = 2500) => {
    ElNotification({
        title: "נא לשים לב!",
        type: "info",
        message: text,
        showClose: false,
        position: 'top-left',
        duration: duration,
        zIndex: '10000000'
    });
    document.querySelectorAll('.el-icon-info').forEach(icon=>icon.style.color='grey')
}

const slide_pop_successs = (text, duration = 2500) => {
    ElNotification({
        title: "הצלחה",
        type: "success",
        message: text,
        showClose: false,
        duration: duration,
        position: 'top-left',
        zIndex: '10000000'
    });
    document.querySelectorAll('.el-icon-success').forEach(icon=>icon.style.color='#28c76f')
}

const alert=(icon,title,text)=>{
    return Swal.fire({
        icon,
        title,
        text,
    })
}

const alert_confirm=(title)=>{
    return Swal.fire({
        title,
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'כן',
        cancelButtonText: 'לא',
        showCancelButton: true,
        showCloseButton: true
      })
}

const alert_confirm_info=(title)=>{
    return Swal.fire({
        title,
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'המשך',
        cancelButtonText: 'ביטול',
        showCancelButton: true,
        showCloseButton: true
      })
}



export{slide_pop_error, slide_pop_successs,alert,alert_confirm,slide_pop_info,alert_confirm_info}