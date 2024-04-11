class Promise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      this.status = "fulfilled";
      this.value = value;
      this.onResolvedCallbacks.forEach((fn) => fn());
    };

    const reject = (reason) => {
      this.status = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fn) => fn());
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.status === "rejected") {
      onRejected(this.reason);
    } else if (this.status === "pending") {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }

  catch(onRejected) {
    this.then(null, onRejected);
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      const result = [];

      promises.forEach((promise, index) => {
        promise.then((value) => {
          result[index] = value;
          if (result.length === promises.length) {
            resolve(result);
          }
        }, reject);
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((value) => resolve(value), reject);
      });
    });
  }
}
