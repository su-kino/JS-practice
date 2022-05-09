// Dogクラスのインポートと定数dogを以下に張り付けてください
// import Dog from "./dog";
// "./dog"(相対パス)を書き換えてください。
import Dog from "../class/dog";

// 定数dog1, dog2を確認してください
const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog("ベン", 2, "プードル");

// 以下を書き換えて、定数dog1, dog2をエクスポートしてください
export {dog1, dog2};
