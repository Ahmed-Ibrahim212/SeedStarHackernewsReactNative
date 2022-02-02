import axios from "axios";

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_NAME = 'SET_NAME';

export const setUserName = userName =>dispatch =>{
    dispatch({
        type:SET_USER_NAME,
        payload:userName,
    });
};

export const setPassword = password =>dispatch =>{
    dispatch({
        type:SET_PASSWORD,
        payload:password,
    });
};

export const setName = name =>dispatch =>{
    dispatch({
        type:SET_NAME,
        payload:name,
    });
};