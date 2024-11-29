import Swal from "sweetalert2";

export const showSwalAlert = (
  title,
  message,
  icon,
  confirmButtonColor = '#dd0034',
  cancelButtonColor = '#d33'
) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
    confirmButtonColor: confirmButtonColor,
    cancelButtonColor: cancelButtonColor,
    confirmButtonText: 'OK'
  })
}
