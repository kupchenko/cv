import {
    CV_DATA_SEARCH_IS_LOADING,
    CV_DATA_SEARCH_LOAD_FAILURE,
    CV_DATA_SEARCH_LOAD_SUCCESS
} from "@/js/actions/action-type";

const cvDataInitialState = {
    isLoading: false,
    hasErrors: false,
    isSuccess: false,
    errors: null,
    data: null,
    pagination: null
};

export const cvDataReducer = (state = cvDataInitialState, action) => {

    switch (action.type) {

        case CV_DATA_SEARCH_IS_LOADING:
            return {
                ...state,
                isLoading: true,
                hasErrors: false
            };

        case CV_DATA_SEARCH_LOAD_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                hasErrors: false,
                data: action.data,
            };
        }

        case CV_DATA_SEARCH_LOAD_FAILURE: {
            return {
                ...state,
                isSuccess: false,
                isLoading: false,
                hasErrors: true,
                errors: action.errors
            };
        }

        default:
            return state
    }
};