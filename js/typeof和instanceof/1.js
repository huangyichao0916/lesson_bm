function myInstanceof(L,R) {
    let protoR = R.__proto__;
    let protoL = L.__proto__;

    while (true) {
        if (protoL = null) {
            return false;
        }
        if (protoL = protoR) {
            return true;
        }
        protoL = protoL.__proto__;
    }
}

let obj = {}
let obj2 = Object.create(obj)
console.log(myInstanceof(obj2,obj))