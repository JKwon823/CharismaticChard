const checkUser = (username) => {

  return {
    type: 'CHECK_USER',
    payload: username
  };
};

const setDebtors = (debtor) => {
  return {
    type: 'SET_DEBTORS',
    payload: debtor,
  };
};

const setFriendsInfo = (friendsInfo) => {
  return {
    type: 'SET_FRIENDSINFO',
    payload: friendsInfo,
  };
};

export {
  checkUser,
  setDebtors,
  setFriendsInfo
};
