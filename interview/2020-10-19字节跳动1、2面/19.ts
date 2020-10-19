function upper(str:string):string {
    const reg:RegExp = /\-([a-z])/g;
    return str.replace(reg,(i0:string,i1:string) => {
        return `-${i1.toUpperCase()}`
    })
}
console.log(upper("ab-cd-ef"))