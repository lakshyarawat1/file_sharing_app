import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data)
        return response
    }
    catch (err)
    {
        console.log('error while connecting the server', err.message)
    }
}

