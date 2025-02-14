import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherResponse } from '../../types';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' }),
    endpoints: (builder) => ({
        fetchWeatherForCity: builder.query<WeatherResponse, { city: string }>({
            query: ({ city }) => `${city}?unitGroup=metric&include=days%2Ccurrent&key=${apiKey}&contentType=json`,
        }),
    }),
});

export const { useFetchWeatherForCityQuery } = weatherApi;
