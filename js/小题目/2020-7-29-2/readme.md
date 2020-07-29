.box {
  width: 100px;
  height: 100px;
  padding-top: 20px;
  margin-top: 20px;
  border: 2px solid aqua;
}
.box1 {
  box-sizing: border-box;
}
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>


问：获取这两个盒子，然后用getBoundingClientRect获取出来的宽高是多少