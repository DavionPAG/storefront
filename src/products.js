const baseState = {
  products: [
    {
      games: [],
      toys: []
    }
  ]
}

export default function reducer(state = baseState, action) {

  const { type, payload } = action;

  switch (type) {
    case 'games': return ''

    case 'toys': return ''

    default: return state
  }

}

export const prodAction = (type) => {
  return {
    type: type
  }
}