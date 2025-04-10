import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    nome: "HTML",
    descrizione: "bla bla bla bla",
    percentuale: "90%",
  },
  {
    nome: "CSS",
    descrizione: "bla bla bla bla",
    percentuale: "80%",
  },
  {
    nome: "JavaScript",
    descrizione: "bla bla bla bla",
    percentuale: "75%",
  },
];

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
});

export default languagesSlice.reducer;