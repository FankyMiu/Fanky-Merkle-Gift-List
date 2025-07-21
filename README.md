# Merkle Gift List

A blockchain toy project that demonstrates how to use Merkle Tree for whitelist/gift-list eligibility verification, inspired by Alchemy University Bootcamp.

基於密碼學 Merkle Tree 結構製作白名單（禮物名單）驗證的練習專案。模擬 Web3 空投/白名單場景，高效安全驗證資料，適合 DApp、NFT、DAO 應用學習。

## 目錄 Table of Contents

- [專案簡介 (Project Intro)](#專案簡介-project-intro)
- [專案結構 (Project Structure)](#專案結構-project-structure)
- [安裝及啟動方式 (Installation & Run)](#安裝及啟動方式-installation--run)
- [操作說明 (How it works)](#操作說明-how-it-works)
- [學習心得 (What I Learned)](#學習心得-what-i-learned)
- [致謝 (Credits)](#致謝-credits)

## 專案簡介 Project Intro

本專案用 Merkle Tree 構建一個鏈下禮物白名單驗證服務：
- Client 端為用戶產生 Merkle proof，證明名字在名單內。
- Server 端僅保存 Merkle root，接收 proof 與名字，僅用 root 就能安全驗證資格，保證私隱和高效。

It implements a whitelist/gift-check flow using a Merkle Tree for privacy and off-chain verification:
- Client (Prover): Generates a proof that their name is in the whitelist.
- Server (Verifier): Only holds the Merkle root, receives name+proof, and checks eligibility without needing the full list.

## 專案結構 Project Structure

```
GiftList/
│
├── client/         # 用戶端，產生 proof 並發送到 server 驗證
│   └── index.js
├── server/         # 伺服器，負責驗證 proof 與回應
│   └── index.js
├── utils/
│   ├── niceList.json      # 正義小孩名單(白名單)
│   ├── MerkleTree.js      # Merkle Tree 運算邏輯
│   ├── verifyProof.js     # Proof 驗證函式
│   └── example.js         # Merkle 樹原理範例
├── package.json
└── README.md
```

## 安裝及啟動方式 Installation & Run

```bash
# 安裝套件
npm install

# 啟動 Server
node server/index

# 開新終端機，啟動 Client（可以修改 client/index.js 來測試不同名字）
node client/index
```

## 操作說明 How it works

1. **管理名單 `utils/niceList.json`**
   - 在 list 中新增目標名字（如 `"Fanky Miu"`，名字必須與程式中的 name 完全一致）。
2. **Client 產生 proof 並請求 server**
   - client/index.js 預設 name，可自行更換，程式會自動根據位置產生 merkle proof。
   - Client 發送 `{name, proof}` 給 server。
3. **Server 驗證**
   - 自動重建 Merkle Tree，取得最新 root。
   - 用 verifyProof 檢查 proof、name、root 是否全符。
   - 成功就回傳禮物，不符則顯示 "not on the list"。

## 學習心得 What I Learned

- 實際操作 Merkle Tree 結構與加密 proof 的生成與驗證流程。
- 熟練前後端分離 API 設計，API/資料流 debugging。
- 體會區塊鏈 whitelist/airdrop 典型應用，也為 NFT/DAO/DeFi 項目做鋪墊。
- 掌握 git/GitHub 開源基本操作，專案能完整同步雲端展示。

## 致謝 Credits

- [Alchemy University](https://university.alchemy.com/) 區塊鏈開發課程與專案靈感
- [ChainShot](https://github.com/ChainShot/GiftList) 專案模板精神參考
- 開源社群與各網路教學資料

> **歡迎 Star 與 Fork，本專案持續更新，並開放交流指教！**

