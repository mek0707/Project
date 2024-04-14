import Swal from "sweetalert2"

export const success = (message) => {
    return Swal.fire('', !!message ? message : T('successfully'), 'success')
}
export const error = (message) => {
    return Swal.fire('', !!message ? message : T('error'), 'error')
}
export const warning = (message) => {
    return Swal.fire('', !!message ? message : T('warning'), 'warning')
}
export const info = (message = 'info') => {
    return Swal.fire('', message, 'info')
}
export const question = () => {
    return Swal.fire('', message, 'question')
}