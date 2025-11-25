// Developer -> るる
// X -> @Rur1_jp @nyaurz
// 悪用厳禁です(笑)

const trg = "!spam"
//スパムのトリガー的な。好きに変えていいよ
const msg = "Raid By Rulu\nx.com/Rur1_jp\nx.com/nyaurz"
//宣伝文
const cnt = 1145141919810
//送信数
const pass = ""
const mail = ""
//メアドとパスワード


import { nanoid } from "nanoid";
import
 {
    loginWithPassword,
} from "@evex/linejs";
import { FileStorage } from "@evex/linejs/storage";

const client = await loginWithPassword({
    password: pass,
    email: mail,
    onPincodeRequest(pin) {
        console.log(pin);
    },
}, { device: "IOSIPAD", storage: new FileStorage("./storage.json") });
const { nanoid } = require('nanoid');
client.on("square:message", async (message) => {
    console.log(message);
    if (message.text === trg) {

         for (let i = 0; i < cnt; i++)
             await message.send(msg+"\n"+nanoid());
             }
});

client.listen({ square: true });
//LINE LINE荒らし LINE保護 荒らしツール オープンチャット 荒らし界隈 LINE荒らしツール
