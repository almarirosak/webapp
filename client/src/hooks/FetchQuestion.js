import { useDebugValue, useEffect, useState } from "react"
import data, { answers } from "../database/data";
import { useDispatch } from "react-redux";


import * as Action from '../redux/question_reducer';



export const useFetchQuestion = () => {

    const dispatch = useDispatch();
    const [getData, setGetData]= useState({isLoading : false, apiData : [], serverError: null})
    useEffect(()=>{

        setGetData(prev => ({...prev,isLoading: true}))
        (async() => {
            try{
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev,isLoading: false}));
                    setGetData(prev => ({...prev,apiData: question}))

                    dispatch(Action.startExamAction(question))
                }else{
                    throw new Error("No question available");

                }
            }catch(error){
                setGetData(prev => ({...prev,isLoading: false}));
                setGetData(prev => ({...prev,serverError: error}));

            }
        })();
    },[dispatch]);

    return [getData,setGetData];
}