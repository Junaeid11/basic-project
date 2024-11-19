
export type Guardian ={
    fatherName: string;
    fatherOccupation: string;
    fatherContactNumber: string;
    motherName: string;
    motherOccupation: string;
    motherContactNumber: string;
}
export type UserName={
    firstName: string;
    middleName: string;
    lastName: string;
}
export type LocalGuardian ={
    name: string;
    occupation: string; 
    contactNumber: string;
    address: string;
    profileImage?: string;
    isActivate: "Yes" | "blocked";
}

export type Student ={
    id: string;
    name: UserName;
    gender: "Male" | "Female";
    age: number;
    dateOfBirth: string;
    email: string;
    contactNumber:string;
    emergencyContactNumber?: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian?: LocalGuardian;
  }