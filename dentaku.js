let display = document.getElementById("display");

function btn(button){
  // 画面にボタンを表示させる
  display.value += button.value;
  // 計算を実行させる、リセットさせるコード
  if(button.value == "="){
    display.value = eval(display.value);
  }else if(button.value == "AC"){
    display.value = "";
  }
}