import { Document, Types } from 'mongoose';

export type UserCategory = 'student' | 'teacher' | 'civil servant' | 'publicServant';

export interface IUser extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    businessType: string;
    stateOfOrigin: string;
    localGovernmentArea: string;
    villageTown:string ;
    nin:string;
    birthCertificate:string;
    businessCAC:string;
    address:string;
    occupation:string;
    ninSlipCard:string;
    category: UserCategory;
    isVerified?: boolean;
    createdAt: Date;
    otp: string;
    otpExpires: Date;
    resetCode?: string;
    resetCodeExpires?: Date;
    role: string;
  }