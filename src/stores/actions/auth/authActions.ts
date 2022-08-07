import API from '~services/api';
import {TEST} from './authTypes';

export const test =
  (id: string, onSuccess: (isSuccess: boolean) => void) =>
  async (dispatch: any) => {
    try {
      const url = `/test/${id}`;
      const res = await API.get(url);
      if (res?.data?.code === 200) {
        onSuccess(true);
        dispatch({type: TEST});
      } else {
        onSuccess(false);
      }
    } catch (error: any) {
      onSuccess(false);
    }
  };
