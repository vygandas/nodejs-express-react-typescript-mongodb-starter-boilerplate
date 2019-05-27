import { AnyAction } from "redux";

export interface IAction<T> extends AnyAction {
    type: keyof T;
    payload: object|string|number|null;
}
