const baseState = {
      currentProducts: [''],
      games: [1,2,3,4,5],
      toys: [9,8,7,6,5],
}


export default function reducer(state = baseState, action) {

  const { type } = action;

  switch (type) {
    case 'games': return { ...state, currentProducts: state.games}

    case 'toys': return { ...state, currentProducts: state.toys}

    default: return state
  }

}

export const prodAction = (type) => ({
    type: type
})