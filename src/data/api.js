import axios from 'axios'

const URL = "http://localhost:5000/"

const axiosConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

export const fetchApi = async () => {
    try {
        const { data } = await axios(URL, axiosConfig)
        console.log("data",data);
        return data
    } catch (err) {
        console.log(err);
        return null
    }
}


