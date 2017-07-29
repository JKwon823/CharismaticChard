export default function reducer(state =
  {
    debtors: null,
    friendsInfo: [],
    user: false
  }, action) {
  switch (action.type) {
  case 'SET_DEBTORS': {
    return {...state, debtors: action.payload};
  }
  case 'SET_FRIENDSINFO': {
    return {...state, friendsInfo: [...state.friendsInfo, action.payload]};
  }
  case 'CHECK_USER': {
    return {...state, user: action.payload};
  }
  default: {
    return state;
  }
  }
}
