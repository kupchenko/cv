import ApiService from "../service/api.service";
import {
    CV_DATA_SEARCH_IS_LOADING,
    CV_DATA_SEARCH_LOAD_FAILURE,
    CV_DATA_SEARCH_LOAD_SUCCESS
} from "@/js/actions/action-type";

export const actionDataFetchIsLoading = () => ({
    type: CV_DATA_SEARCH_IS_LOADING,
});

export const actionDataFetchSuccess = (data) => ({
    type: CV_DATA_SEARCH_LOAD_SUCCESS,
    data
});

export const actionDataFetchFailure = (errors) => ({
    type: CV_DATA_SEARCH_LOAD_FAILURE,
    errors
});

export const actionDoFetchData = () => {

    return (dispatch) => {
        dispatch(actionDataFetchIsLoading());

        ApiService.fetch(`/cv`, {}).then((data) => {
            dispatch(actionDataFetchSuccess(data));
        }).catch((errors) => {
            dispatch(actionDataFetchFailure(errors));
        });
    }
};