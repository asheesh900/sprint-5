import {CHECK_USER, ADD_NEW_VEHICLE, EDIT_VEHICLE, DELETE_VEHICLE, SORT_ASCENDING, FILTER_MILEAGE} from "./Type"


const checkUser = (payload) => {
    return {
        type: CHECK_USER,
        payload
    }

}

const addNewVehicle = (payload) => {
    return {
        type: ADD_NEW_VEHICLE,
        payload
    }
}

const editVehicle = (payload) => {
    return {
        type: EDIT_VEHICLE,
        payload 
    }
}

const deleteVehicle = (payload) => ({
    type: DELETE_VEHICLE,
    payload
})

const sortAscending = (payload) => ({
    type: SORT_ASCENDING,
    payload
})

const filterMileage = (payload) => ({
    type: FILTER_MILEAGE,
    payload
})


export {checkUser, addNewVehicle, editVehicle, deleteVehicle, sortAscending, filterMileage}