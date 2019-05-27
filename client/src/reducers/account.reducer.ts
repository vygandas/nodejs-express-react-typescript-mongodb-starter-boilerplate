import { accountActionTypes } from '../actions/types';
import { IAction } from '../interfaces/IAction';
import IUser from '@project/interfaces/IUser';

interface IState {
    user: IUser|null;
};

const initialState = {
    user: null,
};

export const account = (state: IState = initialState, action: IAction<typeof accountActionTypes>) => {
    switch (action.type) {
    case accountActionTypes.GET_USER:
        return { ...state, user: action.payload as IUser };
    default:
        return state;
    }
};