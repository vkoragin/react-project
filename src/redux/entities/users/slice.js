import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../mocks/normalized-mock';

const initialState = {
  users: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  selectors: {
    selectUserById: (state, id) => state.users[id],
  },
});

export const { selectUserById } = usersSlice.selectors;
