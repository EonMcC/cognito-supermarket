const KEY = 'cognito-shopping-local-storage';

export const saveToLocalStorage = (state: any) => {
  try {
    // const consent = getConsentFromLocalStorage();
    localStorage.setItem(KEY, JSON.stringify([...state]));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem(KEY);
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

// export const getConsentFromLocalStorage = () => {
//   try {
//     const stateStr = localStorage.getItem(KEY);
//     const parsed =  stateStr ? JSON.parse(stateStr) : undefined;
//     return parsed?.consent;
//   } catch (e) {
//     console.error(e);
//     return undefined;
//   }
// };