class MyPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor) {
        this.status = MyPromise.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error)
        }
    }
    resolve = (value) => {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.forEach(callback => {
                    callback.onFulfilled(value)
                })
            })
        }
    }
    reject = (reason) => {
        if (this.status === MyPromise.PENDING) {
            this.status = MyPromise.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.forEach(callback => {
                    callback.onRejected(reason)
                })
            })
        }
    }
    then = (onFulfilled, onRejected) => {
        if (typeof onFulfilled !== 'function') {
            onFulfilled = () => this.value;
        }
        if (typeof onRejected !== 'function') {
            onRejected = () => this.value;
        }

        return new MyPromise((resolve, reject) => {
            if (this.status === MyPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        try {
                            const res = onFulfilled(this.value)
                            if (res instanceof MyPromise) {
                                res.then(resolve, reject)
                            } else {
                                resolve(res)
                            }
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onRejected: err => {
                        try {
                            const res = onRejected(this.value)
                            if (res instanceof MyPromise) {
                                res.then(resolve, reject)
                            } else {
                                resolve(res)
                            }
                        } catch (err) {
                            reject(err)
                        }
                    }
                })
            }

            if (this.status === MyPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        const res = onFulfilled(this.value)
                        if (res instanceof MyPromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res)
                        }
                    } catch (error) {
                        reject(error)
                    }
                });
            }
            if (this.status === MyPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        const res = onFulfilled(this.value)
                        if (res instanceof MyPromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res)
                        }
                    } catch (error) {
                        reject(error)
                    }
                });
            }
        })
    }
}