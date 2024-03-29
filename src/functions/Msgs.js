import { ElNotification } from "element-plus";
import Swal from 'sweetalert2'

const slide_pop_error = (text , duration = 2500) => {
    ElNotification({
        title: "Error!",
        type: "error",
        message: text,
        showClose: false,
        position: 'top-right',
        duration: duration,
    });

    
}

const slide_pop_info = (text , duration = 2500) => {
    ElNotification({
        title: "Please pay attention!",
        type: "info",
        message: text,
        showClose: false,
        position: 'top-right',
        duration: duration,
        
    });
    document.querySelectorAll('.el-icon-info').forEach(icon=>icon.style.color='grey')
}

const slide_pop_successs = (text, duration = 2500) => {
    ElNotification({
        title: "Success",
        type: "success",
        message: text,
        showClose: false,
        duration: duration,
        position: 'top-right',
    });
    document.querySelectorAll('.el-icon-success').forEach(icon=>icon.style.color='#28c76f')
}

const alert=(icon,title,text) => {
    return Swal.fire({
        icon,
        title,
        text,
    })
}

const alert_confirm=(title) => {
    return Swal.fire({
        title,
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        showCloseButton: true
      })
}

const alert_confirm_info=(title) => {
    return Swal.fire({
        title,
        icon: 'question',
        iconHtml: '?',
        confirmButtonText: 'Continue',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        showCloseButton: true
      })
}



export{slide_pop_error, slide_pop_successs,alert,alert_confirm,slide_pop_info,alert_confirm_info}