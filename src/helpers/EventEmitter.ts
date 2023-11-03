export const SESSION_TIME_OUT = 'SESSION_TIME_OUT'
export const SHOW_POPUP_ERROR = 'SHOW_POPUP_ERROR'
export const LAYOUT_LOADING = 'LAYOUT_LOADING'
export const API_TIMEOUT = 'ECONNABORTED'

class EventEmitter {
  events: Record<string, any> = {}

  dispatch = (event: string, data: any = null) => {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].forEach((callback: (data: any) => void) => {
      callback(data)
    })
  }

  subscribe = (event: string, callback: (data: any) => void) => {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  unsubscribe = (event: string, callback: (data: any) => void) => {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event] = this.events[event].filter(
      (func: (data: any) => void) => func !== callback,
    )
  }
}

const eventEmitter = new EventEmitter()
export default eventEmitter
