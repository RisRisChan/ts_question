"use strict";
function giveId(obj) {
    const id = Math.floor(Math.random() * (10 + 1));
    const hoge = "hoge";
    return Object.assign(Object.assign({}, obj), { id,
        hoge });
}
// 使用例
const obj1 = giveId({ foo: 123 });
console.log(obj1);
const obj2 = giveId({
    num: 0,
    hoge: true
});
console.log(obj2);
const user = { name: "Alice" };
const userWithId = giveId(user);
console.log(user);
console.log(userWithId);
//エラー例
//obj3にはhogeプロパティが設定されていないためエラー
//   const obj3: {
//     id: number;
//     piyo: string;
//   } = giveId({
//     hoge: "bar",
//   });
