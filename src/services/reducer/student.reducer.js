import { ADD_DATA, REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA, DELETE_ADMIN, UPDATE_ADMIN_REQUEST, UPDATE_ADMIN_REJECT, UPDATE_ADMIN, SINGLE_ADMIN_REJECT, SINGLE_ADMIN_RECEIVE, SINGLE_ADMIN_REQUEST } from "../const";

const initialState = {
  admins: [],
  admin: null,
  loading: false,
  error: null,
};

export const thunkReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case RECEIVE_DATA:
      return {
        ...state,
        admins: action.payload,
        loading: false,
        error: null,
      };

    case FAILURE_DATA:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_DATA:
      return {
        ...state,
        admins: action.payload,
        loading: false,
        error: null,
      };

    case DELETE_ADMIN:
      const updatedAdminss = state.admins.filter((admin) => admin.id !== action.payload);
      return {
        ...state,
        admins: updatedAdminss,
      };

      case UPDATE_ADMIN:
        return {
          ...state,
          admins: state.admins.map((admin) =>
            admin.id === action.payload.id ? { ...admin, ...action.payload.data } : admin
          ),
          loading: false,
          error: null,
        };
      
      

    case UPDATE_ADMIN_REJECT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }

};