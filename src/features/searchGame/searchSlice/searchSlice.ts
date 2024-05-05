// searchReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  // определите структуру данных вашей игры
}

interface SearchState {
  gameList: Game[];
}

const initialState: SearchState = {
  gameList: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<Game[]>) {
      state.gameList = action.payload;
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
