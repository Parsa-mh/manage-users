import axios from "axios"
import Swal from "sweetalert2"
export const reducer = (state, action) => {
    const url = "http://localhost:3000/contacts"
    if (action.type === "CONTACTS_GOT") {
        return {
            ...state,
            contacts: action.payload,
            isLoading: false,
            isError: false
        }
    }
    else if (action.type === "ERROR_GET_CONTACTS") {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }
    else if (action.type === "DELETE_CONTACT") {
        Swal.fire({
            icon: "warning",
            title: "آیا از حذف این مخاطب مطمئن هستید؟",
            showCancelButton: true,
            showDenyButton: true,
            showConfirmButton: false,
            denyButtonText: "حذف",
            cancelButtonText: "انصراف"
        }).then((res) => {
            if (res.isDenied) {
                axios.delete(url + "/" + action.payload)
                action.navigate("/")
            }
        })
        return state
    }
    else {
        return state
    }
}