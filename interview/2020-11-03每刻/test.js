// const path = require('path')

// let a = "SRCHD=AF=NOFORM; PPLState=1; _UR=MC=1&TC=C1&QS=0&TQS=0; _HPVN=CS=eyJQbiI6eyJDbiI6MTAsIlN0IjowLCJRcyI6MCwiUHJvZCI6IlAifSwiU2MiOnsiQ24iOjE4LCJTdCI6MSwiUXMiOjAsIlByb2QiOiJIIn0sIlF6Ijp7IkNuIjoxOCwiU3QiOjEsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAxOS0xMS0wNFQwMDowMDowMCIsIklvdGQiOjAsIkRmdCI6bnVsbCwiTXZzIjowfQ==; _tarLang=default=en; SRCHUID=V=2&GUID=5FD1F9B07A074806A20585B7A7A45F3C&dmnchg=1; MUID=373B25E3AEDE692E270B2B71AFF06883; _TTSS_OUT=hist=WyJlbiJd; _TTSS_IN=hist=WyJ6aC1IYW5zIiwiYXV0by1kZXRlY3QiXQ==; _ITAB=STAB=TR; _BEC=PLTL=618&PLTA=1210&PLTN=60; imgv=lodlg=2&lts=20200708&gts=20201001; ULC=P=18FB0|64:@18&H=18FB0|90:26&T=18FB0|90:26:9; ENSEARCH=BENVER=0; ABDEF=V=12&ABDV=12&MRNB=1603870664560&MRB=0; _SS=SID=2A5E5161D0456C081CEC5E17D16B6D68&bIm=739873; SRCHUSR=DOB=20200516&T=1604420372000; ipv6=hit=1604484749210&t=4; SNRHOP=I=&TS=; SRCHHPGUSR=HV=1604482739&CW=223&CH=716&DPR=1&UTC=480&WTS=63740077948&DM=1&BRW=W&BRH=M&BZA=0"
// function find(str) {
//     const reg = new RegExp(`${str}\\=.+?(?=;)`)
//     // console.log(a.match(reg))
//     return a.match(reg) ? a.match(reg)[0] : null;
// }
// // console.log(find('SNRHOP')

// console.log(path.resolve(__dirname,'./asdj'))

let a = Symbol()
let obj = {};
obj[a] = 1;
obj.x = 100;
console.log(Object.getOwnPropertySymbols(obj))
console.log(obj.hasOwnProperty(a))