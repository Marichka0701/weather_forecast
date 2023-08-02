import {axiosService} from "./axios.service";
import {apiKEY} from "../configs/urls";

const weatherService = {
    getForecastBetweenTwoDates: (city, startDate, endDate) => axiosService.get(`${city}/${startDate}/${endDate}?unitGroup=metric&key=${apiKEY}`),
    getForecastForToday: (city) => axiosService.get(`${city}/today?unitGroup=metric&key=${apiKEY}`)
}

export {
    weatherService,
}