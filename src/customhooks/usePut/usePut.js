import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const usePut = (dispactType) => {

    const [data, setdata] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    
    const dispact = useDispatch();

    const put = async (url, apiData) => {

        try {
            setLoading(true);
            setError(null);
            setdata([]);

            console.log(url);

            var {data:responseData} = await axios.put(url, apiData);
              
            if(dispactType)
                dispact({type: dispactType, payload: {updatedUser: responseData}});

            setdata(responseData);
            setError(null);
            setLoading(false);
        } catch (error) {
            
            setdata([]);
            setError(error);
            setLoading(false);
        }
    }

    return {error,isLoading,put};
}

export default usePut;