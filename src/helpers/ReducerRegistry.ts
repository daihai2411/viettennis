class ReducerRegistry {
  private reducers: any
  private emitChange: null | ((reducers: any) => void)

  constructor() {
    this.reducers = {}
    this.emitChange = null
  }

  getReducers = () => {
    return this.reducers
  }

  register = (name: string, reducer: any) => {
    this.reducers = { ...this.reducers, [name]: reducer }
    if (this.emitChange) {
      this.emitChange(this.reducers)
    }
  }

  setChangeListener = (listener: (reducers: any) => void) => {
    this.emitChange = listener
  }
}

const reducerRegistry = new ReducerRegistry()
export default reducerRegistry
