/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
███──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Kgtech 🕵
contact me 237656520674 ♻️
© Copy coder alert ⚠
*/



const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  sleep,
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': 'pair',
  'alias': ["register", 'link'],
  'react': '🔢',
  'desc': "pair",
  'category': 'download',
  'use': ".pair 24105730123",
  'filename': __filename
}, async (_0x5b297c, _0x3a3e44, _0xefafe8, {
  from: _0x5aafb9,
  prefix: _0x322641,
  quoted: _0x587384,
  q: _0x560654,
  reply: _0x2b55a0
}) => {
  try {
    if (!_0x560654) {
      return await _0x2b55a0("*Example - :* .pair 24105730123");
    }
    const _0x29763b = await fetchJson("https://terra-session-ln0q.onrender.com/code?number=" + _0x560654);
    const _0x4b5713 = _0x29763b.code;
    _0xefafe8.reply(_0x4b5713 + "\n\n" + "_*Here Is Your goku md♨️ pair code...✅*_");
  } catch (_0x5be2b9) {
    console.log(_0x5be2b9);
    _0x2b55a0(_0x5be2b9);
  }
});