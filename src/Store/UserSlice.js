import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { use } from "react";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_,{ rejectWithValue }) => {
    const response = await axios.get(
      "https://677a29ce671ca030683336b6.mockapi.io/crud/Users"
    );
    try {
      if (response) {

        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, updatedUser }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        updatedUser // Send updated user data
      );
      return response.data; // Return updated user data
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const deleteUser = createAsyncThunk('deleteUser', async ({user},{rejectWithValue}) => {
  try {
    console.log("Got User to delete = ", user)
    const response = await axios.delete(`https://677a29ce671ca030683336b6.mockapi.io/crud/Users/${user.id}`,
    )
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const createUser = createAsyncThunk('createuser', async ({user}, {rejectWithValue}) => {
  try {
   console.log("Got User = ", user);
   
    const response = await axios.post("https://677a29ce671ca030683336b6.mockapi.io/crud/Users",
      user
    )
    return response.data
  } catch (error) {

    return rejectWithValue(error);
    
  }
})


const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    searchUser: (state, action) => {
      const searchTerm = action.payload?.toLowerCase() || "";
      console.log("Search Term: ", searchTerm);
    
      if (searchTerm) {
        const filteredUsers = state.users.filter((user) =>
          user.name?.toLowerCase().includes(searchTerm)
        );
        console.log("Filtered Users:", filteredUsers);
    
        state.users = filteredUsers;
      }else if(searchTerm == ""){
        state.users = state.users;
      }
      
      else {
        state.users = state.users; // Clear the list if no search term
      }
    }
    
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false; 
        state.users = action.payload;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload; // Update the specific user
        }
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log("payloaf = ", action.payload)
        state.loading = false;
        state.users = state.users.filter((user)=> user.id !== action.payload.id )
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      
      })
      .addCase(deleteUser.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [action.payload,... state.users]
      })
      .addCase(createUser.pending, (state, action) => {
        state.loading = true;
      
      })
      .addCase(createUser.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const userActions = userSlice.actions;
export default userSlice;
