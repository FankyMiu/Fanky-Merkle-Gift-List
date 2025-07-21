const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList.json');

const port = 1225;
const app = express();
app.use(express.json());

// 建立 Merkle Tree & 取得 Root
const merkleTree = new MerkleTree(niceList);
const MERKLE_ROOT = merkleTree.getRoot();

app.post('/gift', (req, res) => {
  const { name, proof } = req.body;

  // 驗證 proof
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);

  if (isInTheList) {
    res.send({ gift: "You got a toy robot!" });
  } else {
    res.send({ gift: "You are not on the list :(" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
  console.log('Merkle Root:', MERKLE_ROOT);
});
