function myInstanceof(L,R):boolean {
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