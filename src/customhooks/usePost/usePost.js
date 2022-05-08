import { useState } from "react";
import axios from "axios";
import { getUserInformation } from "../../utils/common";

const usePost = (type) => {

    const [data, setdata] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(-1);

    const post = async (url, apiData) => {

        try {
            setLoading(0);
            setError(null);
            setdata([]);
            debugger;
            var {data:responseData} = await axios.post(url, apiData);
            
            if(type == "CHANGE_TOKEN")
            {
                var data = await  getUserInformation('johnd');
                setdata([data]);
                setError(null);
                setLoading(1);
            }
            else
            {
                setdata(responseData);
                setError(null);
                setLoading(1);
            }

        } catch (error) {
            
            setdata([]);
            setError(error);
            setLoading(1);
        }
    }

    return {data,error,isLoading,post};
}

export default usePost;