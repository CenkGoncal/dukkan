import axios from "axios";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';


function UseFetch(url,filterdata,refresh) {

    const [data, setdata] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const cachedList =  useSelector(s=>s.CachedList);


    const fetchData = async () => {

        try {

            if ((url in cachedList) && !refresh)
            {
                //console.log(url+"cacheden geldi");
                setdata(cachedList[url]);
                setLoading(false);
            }
            else
            {
                var {data:responseData} = await axios.get(url);
            
                if(filterdata.length > 0)
                    responseData = filterdata;
                
                   // console.log(url+"servisten geldi");

                setdata(responseData);
                dispatch({type:"ADD_CACHE" , payload: { data: responseData, url:url }});
                setLoading(false);
            }
 
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();

        return () => {  }; 
    }, [refresh]);

    return {data,error,isLoading};
}

export default UseFetch;