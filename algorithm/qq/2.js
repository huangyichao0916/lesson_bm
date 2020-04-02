let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4], // 加密的QQ号
  real_qq = [], //真正的QQ号
  head = 0, //头指针 变量中间值
  tail = 9;

while(head < tail) { 
  real_qq.push(enc_qq[head]) 
  head++; // 
  enc_qq[tail] = enc_qq[head]; // 相邻的变成了新的尾部
  tail++;
  head++;
}

console.log(real_qq.join(''))
// console.log();