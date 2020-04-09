import iziToast from 'iziToast'
import 'iziToast/dist/css/iziToast.css';
import { fadeIn } from 'animate.css'

export function showSznNotification(params) {
    return iziToast.show({
        title: params.title ? params.title : '',
        message: params.message,
        messageSize: 12,
        position: 'topRight',
        theme: 'dark',
        pauseOnHover: true,
        color: params.type == 'success' ? '#565c70' : '#565c70',
        messageColor: params.type == 'success' ? '#00ffb8' : '#ffafb4',
        icon: params.type == 'success' ? 'mdi mdi-check' : 'mdi mdi-alert-circle-outline'
    });
}


