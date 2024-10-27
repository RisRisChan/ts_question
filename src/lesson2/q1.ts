//返り値はT[]は、返り値の型アノテーションを省略して推論してくれるため、省略OK

function myFilter<T>(arr:T[], predicate:(elm:T) => boolean) {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }
  
  // 使用例
  const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
  console.log(res)
  const res2 = myFilter(['foo', 'hoge', 'bar', 'hogehoge'], str => str.length >= 4);
  console.log(res2)
  
  // エラー例
  //const res3 =myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
  