
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {

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
