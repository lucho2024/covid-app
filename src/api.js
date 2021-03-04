/* eslint-disable prettier/prettier */
import axios from 'axios';

class Api {


    get_data = async() =>{
        const resp = await axios.get('http://locombia.info/ApiCovid.php')

        return (resp.data)

    }
}

export default new Api()
