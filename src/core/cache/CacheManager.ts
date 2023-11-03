export default class CacheManager {
  constructor() {
    if (new.target === CacheManager) {
      throw new TypeError(
        'This is an abstract class. Can not construct its instances directly.',
      )
    }

    if (
      this.add === undefined ||
      this.get === undefined ||
      this.remove === undefined ||
      this.containsKey === undefined
    ) {
      throw new TypeError(
        'This is an abstract class. Must override all its methods.',
      )
    }
  }

  add(
    key: string,
    value: any,
    absoluteExpireTime: Date,
    slidingExpireTimeInMinute: number,
    removeCallback: () => void,
  ) {}

  get(key: string) {}

  remove(key: string) {}

  containsKey(key: string) {}
}
