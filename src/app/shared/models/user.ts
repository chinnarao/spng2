
export class User {
    public user_uid: string;
    user_displayName: string;
    user_email: string;
    user_emailVerified: boolean;
    user_photoURL: string;
    user_phoneNumber: string;
    user_refreshToken: string;
    user_idToken: string;

    providerData_providerId: string;
    providerData_uid: string;
    providerData_displayName: string;
    providerData_email: string;
    providerData_photoURL: string;

    constructor(user: any) {
        this.user_uid = user.uid;
        this.user_displayName = user.displayName;
        this.user_email = user.email;
        this.user_emailVerified = user.emailVerified;
        this.user_photoURL = user.photoURL;
        this.user_phoneNumber = user.phoneNumber;
        this.user_refreshToken = user.refreshToken;

        this.providerData_providerId =  user.providerData[0].providerId;
        this.providerData_uid = user.providerData[0].uid;
        this.providerData_displayName = user.providerData[0].displayName;
        this.providerData_email = user.providerData[0].email;
        this.providerData_photoURL = user.providerData[0].photoURL;
    }
}

export interface Soldier {
    id?: string;
    authId?: string;
    firstName?: string;
    lastName?: string;
    age?: string;
    rank?: string;
    title?: string;
    joined?: string;
    availableMissions?: Mission[];
    currentMission?: string;
    isPresent?: string;
    phone?: string;
    battalionId?: string;
    squad?: string;
    platoon?: string;
    team?: string;
}

export interface Mission {
    id?: string;
    name?: string;
    duration?: string;
    restDuration?: string;
    isEmergencySquad?: boolean;
    emergencySquadDuration?: string;
    numOfSoldiers?: string;
    plusOfficer?: boolean;
    additionalNotes?: string;
}

export interface UserStatus {
    isLoggedIn: boolean;
    isEmailVerified: boolean;
}
