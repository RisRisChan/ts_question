"use strict";
function showUserInfo(user) {
    //省略
    console.log(user.name);
    console.log(user.age);
    console.log(user.private);
}
function showUserInfo2(user) {
    //省略
    console.log(user.name);
    console.log(user.age);
    console.log(user.private);
}
// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
});
showUserInfo2({
    name: '山田太郎',
    age: 50,
    private: true,
});
// エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };
