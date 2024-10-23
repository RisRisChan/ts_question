
type IsPositiveFunc = (arg: number) => boolean;
const isPositiveForQ3: IsPositiveFunc = num => num >= 0;

// 使用例
console.log(isPositiveForQ3(6));

// エラー例
//isPositive('foo');
//const res: number = isPositive(123);