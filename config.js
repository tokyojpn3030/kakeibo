// お家の家計簿 — 設定ファイル
// ここだけ書き換えれば、別の家族用にも使えます。

window.KAKEIBO_CONFIG = {
  // 最初につなぐ家の名前(アプリの ⚙ →「家の切り替え・追加」で変えられます)
  HOME_NAME: '三姉妹の家',

  // Apps Script を「ウェブアプリ」として公開したときの URL を '' の中に貼ります。
  // 空のままだと「デモモード」で動きます(このスマホの中だけに仮保存)。
  // ほかの家は、アプリの招待リンクで追加します。
  API_URL: 'https://script.google.com/macros/s/AKfycbzkXYUdw_1e5d5fjSeTz3xUz46V0U7G70uYbgwk3p6hSjMZ7X6SDJHQi04td7aBT9ob/exec',

  // 全部の家で共通の窓口(お家の家計簿 窓口)。前の窓口の家は、ここに引っ越すと自動でつなぎ替わります。
  CENTRAL_URL: 'https://script.google.com/macros/s/AKfycbwD1LsiHXyGbXP3kMjpme58abvCwpWyGsmG_WmUNS-63iFwQEdCtgJE0gRi-0wI5Rm9/exec',

  // 最初のメンバー(アプリの ⚙設定 →「家族のメンバーを編集」でいつでも変えられます。
  // 一度保存すると、スプレッドシートの「メンバー」シートの内容が使われます)
  // name は画面とスプレッドシートに出る名前、short は丸アイコンの字、color は色、icon は名前の横の絵文字
  MEMBERS: [
    { name: '長女', short: '長', color: 'pink',   icon: '🌸' },
    { name: '次女', short: '次', color: 'purple', icon: '🍓' },
    { name: '三女', short: '三', color: 'teal',   icon: '🐰' }
  ]
};
