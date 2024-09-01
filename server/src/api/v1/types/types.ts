import { Response } from "express";

export interface MessageResponse {
  message: string;
}

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export type ControllerMethodReturn = Response | void;

export interface AuthRegisterBody extends UserTypeWithoutId {}

export interface AuthRegisterResponse extends MessageResponse {}

export interface AuthLoginBody {
  email: string;
  password: string;
}

export type AuthLoginResponse =
  | MessageResponse
  | {
      token: string;
    };
export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export interface UserTypeWithoutId extends Omit<UserType, "_id"> {}
