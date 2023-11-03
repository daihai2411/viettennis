import CacheItem from './CacheItem'
import CacheManager from './CacheManager'

class MemoryCacheManager extends CacheManager {
  cache: Record<string, any> = {}

  constructor() {
    super()

    //make this sealed
    if (new.target !== MemoryCacheManager) {
      throw new TypeError('This is a sealed class. Subclassing is not allowed.')
    }
  }

  add(
    key: string,
    value: any,
    absoluteExpireTime?: Date,
    slidingExpireTimeInMinute?: number,
    removeCallback?: () => void,
    isCacheLocal?: boolean,
  ) {
    if (isCacheLocal) {
      const localItem = localStorage.getItem(key)

      if (!localItem) {
        localStorage.setItem(
          key,
          JSON.stringify({
            value,
            absoluteExpireTime,
            slidingExpireTimeInMinute,
            removeCallback,
          }),
        )
      }
    }

    this.cache[key] = new CacheItem(
      value,
      absoluteExpireTime,
      slidingExpireTimeInMinute,
      removeCallback,
    )
  }

  get(key: string, isCacheLocal?: boolean) {
    Object.keys(this.cache).forEach((k) => {
      if (this.cache[k].isExpired()) {
        this.remove(k)
      }
    })

    if (isCacheLocal) {
      const localItem = localStorage.getItem(key)

      if (!this.cache[key] && localItem) {
        const parseItem = JSON.parse(localItem)
        const cacheItem = new CacheItem(
          parseItem.value,
          new Date(parseItem.absoluteExpireTime),
          parseItem.slidingExpireTimeInMinute,
          parseItem.removeCallback,
        )

        if (cacheItem.isExpired()) {
          localStorage.removeItem(key)
        } else {
          this.cache[key] = cacheItem
        }
      }
    }

    let cacheItem = this.cache[key]

    if (
      cacheItem &&
      !cacheItem.absoluteExpireTime &&
      cacheItem.slidingExpireTimeInMinute
    ) {
      cacheItem.updateExpireTime()
    }

    return cacheItem ? cacheItem.value : null
  }

  remove(key: string) {
    delete this.cache[key]
  }

  containsKey(key: string) {
    return this.cache[key]
  }

  flush() {
    Object.keys(this.cache).forEach((k) => {
      this.remove(k)
    })
    this.cache = {}
  }
}

const memoryCacheManager = new MemoryCacheManager()
export default memoryCacheManager
