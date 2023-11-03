export default class CacheItem {
  value
  absoluteExpireTime
  slidingExpireTimeInMinute
  removeCallback
  expireTime

  constructor(
    value: any,
    absoluteExpireTime?: Date,
    slidingExpireTimeInMinute?: number,
    removeCallback?: () => void,
  ) {
    this.value = value
    this.absoluteExpireTime = absoluteExpireTime
    this.slidingExpireTimeInMinute = slidingExpireTimeInMinute
    this.removeCallback = removeCallback

    const curTime = new Date().getTime()
    if (absoluteExpireTime) {
      this.expireTime = absoluteExpireTime.getTime()
    } else if (this.slidingExpireTimeInMinute) {
      this.expireTime = curTime + this.slidingExpireTimeInMinute * 60000
    } else {
      this.absoluteExpireTime = new Date(curTime)
      this.expireTime = curTime + 29 * 1000
    }
  }

  isExpired() {
    return this.expireTime <= new Date().getTime()
  }

  updateExpireTime() {
    if (this.slidingExpireTimeInMinute) {
      this.expireTime =
        new Date().getTime() + this.slidingExpireTimeInMinute * 60000
    }
  }
}
