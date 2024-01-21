import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async () => {
        const response = await fetch('/api/restaurants');
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }
        return response.json();
      }
)

export const addRestaurant = createAsyncThunk(
    'restaurants/addRestaurant', async (restaurantData, { rejectWithValue }) => {
        try {
          const response = await fetch('/api/restaurants', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurantData),
          });
          if (!response.ok) {
            throw new Error('Failed to add restaurant');
          }
          return response.json();
        } catch (error) {
          return rejectWithValue(error.message);
        }
      }
    );
    

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: {
      entities: [],
      loading: 'idle',
      addStatus: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchRestaurants.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
          })
          .addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = 'succeeded';
          })
          .addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
          })
          .addCase(addRestaurant.pending, (state) => {
            state.addStatus = 'loading';
            state.error = null;
          })
          .addCase(addRestaurant.fulfilled, (state, action) => {
            state.entities.push(action.payload);
            state.addStatus = 'succeeded';
          })
          .addCase(addRestaurant.rejected, (state, action) => {
            state.addStatus = 'failed';
            state.error = action.payload;
          });
        }
})

export default restaurantSlice.reducer;