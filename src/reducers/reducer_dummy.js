const initialState = 0

export default function(state = initialState, action){
  if(!action)
    return state;

  switch (action.type){
    default:
      return state;
  }
}
