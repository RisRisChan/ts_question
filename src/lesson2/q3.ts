// declareはTypeScriptに特有の構文であり、以下のように関数や変数の型を中身なしに宣言できる構文です
//declare function foo(arg: number): number;


interface AddEventListenerOptionsObject{
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}

declare function addEventListener(
    type: string, 
    handler:()=>void,
    options?: boolean | AddEventListenerOptionsObject
):void;

// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });