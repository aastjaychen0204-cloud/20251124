let spritesheet;
let animation = [];
const frameWidth = 1199 / 6; // 每個影格的寬度
const frameHeight = 178;
const numFrames = 6;

function preload() {
  // 預載入圖片精靈檔案，並加入成功與失敗的回呼函式
  spritesheet = loadImage(
    'all.png',
    () => console.log("圖片 'all.png' 載入成功！"),
    () => console.error("錯誤：無法載入圖片 'all.png'。請檢查檔案名稱和路徑是否正確，並建議使用本地伺服器運行。")
  );
}

function setup() {
  // 建立一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);

  // 確保 spritesheet 已經成功載入後才進行裁切
  if (spritesheet) {
    // 從 spritesheet 中裁切出每一格動畫
    for (let i = 0; i < numFrames; i++) {
      let frame = spritesheet.get(i * frameWidth, 0, frameWidth, frameHeight);
      animation.push(frame);
    }
  }

  // 設定動畫播放速度 (每秒影格數)
  frameRate(12);
}

function draw() {
  // 設定背景顏色
  background('#f5ebe0');

  if (animation.length > 0) {
    // 計算目前要顯示的影格索引 (在 0 到 5 之間循環)
    let currentFrame = frameCount % numFrames;
    // 在視窗中間顯示目前的影格
    image(animation[currentFrame], width / 2 - frameWidth / 2, height / 2 - frameHeight / 2);
  }
}

function windowResized() {
  // 當視窗大小改變時，重新設定畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
