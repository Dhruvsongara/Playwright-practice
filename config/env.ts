// import dotenv from "dotenv";
// // import {env} from "node:process"

// const env=process.env.TEST_ENV || 'qa';

// dotenv.config({
//     path:`.env.${env}`
// })

// export const ENV = {baseUrl:process.env.BASE_URL!};


import dotenv from "dotenv";
 
const env=process.env.TEST_ENV || 'qa';
 
dotenv.config({
    path:`.env.${env}`
})
 
export const ENV = {baseUrl:process.env.BASE_URL!};

// import dotenv from 'dotenv';
// // import { BookingDetails } from '../pages/PassengerInfoPage';
 
// const env = process.env.TEST_ENV || "qa";
 
// if (!process.env.CI) {
//     dotenv.config({
//         path: `.env.${env}`
//     });
// }
 
// export const ENV = {
//     BASE_URL : process.env.BASE_URL!,
// }
 