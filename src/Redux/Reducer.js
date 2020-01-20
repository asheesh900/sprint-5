import { CHECK_USER, ADD_NEW_VEHICLE, EDIT_VEHICLE, DELETE_VEHICLE, SORT_ASCENDING, FILTER_MILEAGE} from "./Type"

const initialState = {
    username: "admin",
    password: "admin",
    isLogin: false,
    vehicleList: [],
    filteredList: []
}


const reducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type){
        case CHECK_USER: 
            if(state.username === action.payload.username && state.password === action.payload.password)
            {
                return{
                    ...state,
                    isLogin: true
                }
            }

        case ADD_NEW_VEHICLE:
            return{
                ...state,
                vehicleList: [...state.vehicleList,action.payload],
                filteredList: [...state.vehicleList,action.payload]
            }

        case EDIT_VEHICLE:
               console.log(action.payload.id) 
            return{
                ...state,
                vehicleList: state.vehicleList.map(item => item.id == action.payload.id ? action.payload : item),
                filteredList: state.vehicleList.map(item => item.id == action.payload.id ? action.payload : item)

            }

        case DELETE_VEHICLE:
            console.log(action.payload)
            return{
                ...state,
                vehicleList: state.vehicleList.filter((item) => (item.id != action.payload.id)),
                filteredList: state.vehicleList.filter((item) => (item.id != action.payload.id))
            }

        case SORT_ASCENDING:
            if(action.payload === "ascending")
            {
                return{
                    ...state,
                    vehicleList: state.vehicleList.sort((a,b) => (Number(a.price) > Number(b.price)) ? 1 : -1),  
                    filteredList: state.vehicleList.sort((a,b) => (Number(a.price) > Number(b.price)) ? 1 : -1)  
                }
            }
            else
            {
                return{
                    ...state,
                    vehicleList: state.vehicleList.sort((a,b) => (Number(a.price) < Number(b.price)) ? 1 : -1),  
                    filteredList: state.vehicleList.sort((a,b) => (Number(a.price) < Number(b.price)) ? 1 : -1)  
                }
            }
            
        case FILTER_MILEAGE:
                const filteredData = state.vehicleList.filter(item =>{
                     if(Number(item.mileage) <= Number(action.payload)){
                         return item
                     }
                })
                return{
                    ...state,
                    filteredList: filteredData
                }   

        default: return state
    }
}

export {reducer}