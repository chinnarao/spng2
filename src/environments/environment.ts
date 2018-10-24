// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    baseURL: 'http://localhost:4200',
    apiUrl: 'http://localhost:50128', // this is dotnet api url for web api
    firebaseConfig: {
        apiKey: 'AIzaSyAYt2q8UGS0SpvcfNUCqE8QIfuVAi2xQB0',
        authDomain: 'scooppagesdev1.firebaseapp.com',
        databaseURL: 'https://scooppagesdev1.firebaseio.com',
        projectId: 'scooppagesdev1',
        storageBucket: 'scooppagesdev1.appspot.com',
        messagingSenderId: '633429318654',
    },
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
