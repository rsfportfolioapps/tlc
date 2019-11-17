import { Notification } from '../../models/notification.model';
import { NotificationActions, NotificationActionTypes } from '../actions/notification.action';

export interface NotificationState {
  myNotification?: Notification[];
}

const initialState: NotificationState = {
  myNotification: null,
};

export function NotificationReducer(state: NotificationState = initialState, action: NotificationActions): NotificationState {
  switch (action.type) {
    case NotificationActionTypes.LoadNotification:
      return Object.assign({}, state);

    case NotificationActionTypes.LoadNotificationSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getMyNotification = (state: NotificationState) => {
  return state.myNotification ? state.myNotification : [];
};
