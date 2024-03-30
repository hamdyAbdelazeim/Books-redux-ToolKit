const { createSlice } = require('@reduxjs/toolkit')

const authSlice = createSlice({
  name: 'auth',
  initialState: { logInOut: false, name: 'Hamdy Abdelazim' },
  reducers: {
    logInOut: (state) => {
      state.logInOut = !state.logInOut
    },
  },
})

export const { logInOut } = authSlice.actions
export default authSlice.reducer
