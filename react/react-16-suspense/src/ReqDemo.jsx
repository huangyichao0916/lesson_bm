import React from 'react';
let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('res');
  }, 3000);
})
let status = 'pending';
let res;
function req() {
  p.then((r) => {
    status = 'success';
    res = r;
  })
  if (status === 'pending') {
    throw p;      // catch
  } else if (status === 'success') {
    return res;
  }
}
export default function Demo() {
  const res = req();
  console.log('继续')
  return (
    <h2>
      { res }
    </h2>
  )
}