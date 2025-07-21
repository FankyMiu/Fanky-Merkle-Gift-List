const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const name = 'Fanky Miu'; // 此名字需確實存在於 niceList.json！

const serverUrl = 'http://localhost:1225';

async function main() {
  // 找到名字的 index
  const index = niceList.findIndex(n => n === name);

  // 若沒找到，報錯並中止
  if (index === -1) {
    console.log("名字不在名單裡，請先編輯 niceList.json 加入你的名字！");
    return;
  }

  // 產生 Merkle Tree 與 proof
  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(index);

  // 呼叫 server，送出 name + proof
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof
  });

  console.log({ gift });
}

main();
