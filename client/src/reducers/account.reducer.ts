import { accountActionTypes } from '../actions/types';
import { IAction } from '../interfaces/IAction';
import IUser from '@project/interfaces/IUser';

export interface IAccountState {
    user: IUser|null;
    authenticated: boolean;
    error: string;
};

const initialState = {
    user: null,
    authenticated: false,
    error: ''
};

export const account = (state: IAccountState = initialState, action: IAction<typeof accountActionTypes>) => {
    switch (action.type) {
    case accountActionTypes.GET_USER:
        return { ...state, user: action.payload as IUser };
    case accountActionTypes.AUTHENTICATED:
        return { ...state, authenticated: true };
    case accountActionTypes.UNAUTHENTICATED:
        return { ...state, authenticated: false };
    case accountActionTypes.AUTHENTICATION_ERROR:
        return { ...state, error: action.payload as string };
    default:
        return state;
    }
};
