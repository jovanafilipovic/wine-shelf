function courseReducer(state = [], action: any) {
  switch (action.type) {
    case "BUY_WINE":
      return [
        ...state,
        { ...action.wine },
      ]; /* STA GOD JE VRACENO OD STRANE REDUCERA POSTAJE NOVI STATE */
    default:
      return state; /* VRACA NETAKNUTI STATE */
  }
}

export default courseReducer;
