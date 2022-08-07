export const TEST = 'TEST';
export const CLEAR_DATA = 'CLEAR_DATA';

export type AuthType = {
  id: string;
  accessToken: string;
};

export interface TestAuth {
  type: typeof TEST;
  payload: AuthType;
}

export interface ClearData {
  type: typeof CLEAR_DATA;
}

export type AuthDispatchTypes = TestAuth | ClearData;
