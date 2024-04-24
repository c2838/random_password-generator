# Random Password Generator
此專案為繳交 ALPHA Camp Dev C3 挑戰 所製作。
運用 Node.js 與 Express 建立本機伺服器，並套用 express-handlbars 作為樣板，伺服器運行期間可產生4~16碼的隨機亂數密碼(包含大小寫英數字、數字及符號)。


## 版本
Ver 1.0.0 (now)


## 功能
* 可隨機生成最小4碼，最大16碼的亂數密碼。
* 密碼字元包含大小寫英數字、數字及符號。
* 可勾選生成密碼中所包含的字元類別 (例如僅有小寫英文，或僅有數字與符號等)。
* 可手動輸入欲排除的密碼字元，生成的密碼即不包含輸入字元。
* 若未勾選任何選項則顯示錯誤。
* 上次所選擇的條件不會隨著頁面刷新而消失。
* 點擊頁首標題「Random Password Generator」可刷新頁面。


## 環境建置
* Visual Studio Code - 開發工具
* Git Bash - 指令終端
* Node.js (v18.19.0) - 執行環境
* Express (v4.19.2) - 後端框架
* Express handlebars (v7.1.2) - 樣板引擎


## 安裝與執行步驟
1. Clone 專案至本機(自行cd至指定資料夾位置)
```
git clone https://github.com/c2838/random_password-generator.git
```
2. 初始化環境
```
cd shortURL //切換至檔案資料夾
npm install //安裝npm套件
```
3. 啟動程式
```
npm run dev
```
4. 當終端機出現以下字樣，表示伺服器已開始回應
```
express server is running on http://localhost:3000
```
5. 至瀏覽器網址列輸入 http://localhost:3000，即可瀏覽短網址產生器並進行操作~


## 專案畫面
![Alt text](https://i.imgur.com/Gk0bdey.png)