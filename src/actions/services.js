import { 
    FETCH_SERVICES_SUCCESS, 
    FETCH_SERVICE_SUCCESS,
    REQUEST_SERVICE,
    FETCH_USER_SERVICES_SUCCESS} from '../types/index'
  
  import * as api from '../api/index'
  
  

  export const requestService = () => (
    {
      type: REQUEST_SERVICE
    }
  )

export const fetchServices = () => dispatch =>
    api
      .fetchServices () 
      .then(services =>dispatch(
        {
        type: FETCH_SERVICES_SUCCESS,
        services
        }
      )
    )
      

  export const fetchUserServices = userId => dispatch => 
    api.fetchUserServices(userId).then(services =>
    dispatch({type: FETCH_USER_SERVICES_SUCCESS, services}))
      
  export const resetPreviousService = () => (
    {
      type: FETCH_SERVICE_SUCCESS,
      service: {}
    }
  )

  export const fetchServiceById = serviceId => (dispatch, getState) => {
    const lastService = getState().selectedService.item
  
    if(lastService.id && lastService.id == serviceId) { return Promise.resolve() }

    dispatch({type: FETCH_SERVICE_SUCCESS, service: {}})
    dispatch({type: REQUEST_SERVICE})
    return api
      .fetchServiceById(serviceId)
      .then(async service => {
        //service.user= await api.getUserProfile(service.user)
        const user = await service.user.get()
        service.user = user.data()
        service.user.id = user.id

        dispatch({type: FETCH_SERVICE_SUCCESS, service}
      )}
    )
  }

  export const createService = (newService, userId) => {
    newService.contact = parseInt(newService.contact)
    newService.pincode = parseInt(newService.pincode)

    newService.user = api.createRef('profiles', userId)
  
    return api.createService(newService)
  }
