import { accountActionTypes } from '../actions/types';
import { IAction } from '../interfaces/IAction';
import IUser from '@project/interfaces/IUser';

export interface IAccountState {
    user: IUser|null;
};

const initialState = {
    user: null,
};

export const account = (state: IAccountState = initialState, action: IAction<typeof accountActionTypes>) => {
    switch (action.type) {
    case accountActionTypes.GET_USER:
        return { ...state, user: action.payload as IUser };
    default:
        return state;
    }
};