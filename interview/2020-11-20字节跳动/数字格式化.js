const num = 28834830074.874;

const formatNum = num => {
    const reg = /((\d{3})+)(\.\d+)?$/;
    console.log(num.toString().match(reg))
    const res = num.toString().replace(reg,(n1,n2,n3,n4) => {
        let p1 = '';
        let p2 = '';
        if (n2) {
            p1 = n2.replace(/\d{3}/g,',$&')
        }
        if (n4) {
            return p1 + n4
        }
        return p1
    })
    if (res[0] === ',') {
        return res.slice(1)
    }
    return res;
}

// formatNum(num)
console.log(formatNum(num))