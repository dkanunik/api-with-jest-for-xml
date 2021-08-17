import AppConfig from '../configs/AppConfig.cjs';

import axios from "axios";

class Weather {

    static async getWeatherData() {
        const params = 'locCode=10001'
        try {
            return await axios.get(AppConfig.baseUrl + params);
        } catch (e) {
            console.log(`Request [${AppConfig.baseUrl}${params}] returned: `);
            console.log(e);
        }
    }
}

export default Weather;
