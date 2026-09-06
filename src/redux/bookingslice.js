import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  bookings: []
}
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push({
        id: Date.now(),
        ...action.payload
      })
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      )
    }
  }
})

export const {
  addBooking,
  deleteBooking
} = bookingSlice.actions

export default bookingSlice.reducer