"use strict";
function getFoo(obj) {
    return obj.foo;
}
// 使用例
// numはnumber型
const num = getFoo({
    foo: 123
});
console.log("num " + num);
// strはstring型
const str = getFoo({
    foo: "hoge",
    bar: 0
});
console.log("str " + str);
// unkはunknown型
const unk = getFoo({
    hoge: true
});
console.log("unk " + unk);
// エラー例
//   getFoo(123);
//   getFoo(null);
