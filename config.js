// お家の家計簿 — 設定ファイル
// ここだけ書き換えれば、別の家族用にも使えます。

window.KAKEIBO_CONFIG = {
  // Apps Script を「ウェブアプリ」として公開したときの URL を '' の中に貼ります。
  // 空のままだと「デモモード」で動きます(このスマホの中だけに仮保存)。
  API_URL: 'https://script.google.com/macros/s/AKfycbzkXYUdw_1e5d5fjSeTz3xUz46V0U7G70uYbgwk3p6hSjMZ7X6SDJHQi04td7aBT9ob/exec',

  // 最初のメンバー(アプリの ⚙設定 →「家族のメンバーを編集」でいつでも変えられます。
  // 一度保存すると、スプレッドシートの「メンバー」シートの内容が使われます)
  // name は画面とスプレッドシートに出る名前、short は丸アイコンの字、color は色、icon は名前の横の絵文字
  MEMBERS: [
    { name: '長女', short: '長', color: 'pink',   icon: '🌸' },
    { name: '次女', short: '次', color: 'purple', icon: '🍓' },
    { name: '三女', short: '三', color: 'teal',   icon: '🐰' }
  ]
};
