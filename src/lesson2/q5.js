"use strict";
// 使用例
//①
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);
//②
// string型のステートを宣言 (stringStateはstring型)
const [stringState, setStringState] = useState('hoge');
setStringState('hogehoge');
//③
// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState(null);
setAnotherState(100);
// エラー例
//setNumState('foobar');
