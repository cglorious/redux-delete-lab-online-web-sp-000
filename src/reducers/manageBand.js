import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {id: uuid(), name: action.name}
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id)
      return { bands: bands };
    default:
      return state;
  }
};
