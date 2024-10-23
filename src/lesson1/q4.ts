function sumOfPos(arr: number[]) {
    //reduceの0は初期値
    return arr.filter(f => f >= 0).reduce((acc, num) => acc + num, 0);
  }
  
  // 使用例
  const sum: number = sumOfPos([1, 3, -2, 0, -10]);
  console.log(sum);
  
  // エラー例
//   sumOfPos(123, 456);
//   sumOfPos([123, "foobar"]);