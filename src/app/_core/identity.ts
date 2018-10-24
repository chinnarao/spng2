// // https://github.com/auth0/angular2-jwt
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable()
// export class Identity {
//     id: string;
//     email: string;
//     access_token: string;
//     setToken(access_token: string) {
//         localStorage.setItem('access_token', access_token);
//     }

//     get(property: string) {
//         const myRawToken = localStorage.getItem('access_token');

//         if (myRawToken == null) {
//             return undefined;
//         }

//         const helper = new JwtHelperService();

//         switch (property) {
//             case 'rawToken':
//                 return myRawToken;
//             case 'access_token':
//                 return myRawToken;
//             case 'expirationDate':
//                 return helper.getTokenExpirationDate(myRawToken);
//             case 'isExpired':
//                 return helper.isTokenExpired(myRawToken).toString();
//             default:
//                 return undefined;
//         }
//     }

//     invalidateToken() {
//         localStorage.removeItem('access_token');
//     }
// }
