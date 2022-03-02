let display = document.getElementById("display");
// 先頭に表示させたくないボタンのidを取得
let Zero = document.getElementById("Zero");
let ZeroTwo = document.getElementById("ZeroTwo");
let equals = document.getElementById("equals");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");

  // ディスプレイにボタンの値を表示
function btn(button){
  display.value += button.value;
}


// ＝とACのボタンの機能
function operator(button){
    if(button.value == "="){
    display.value = eval(display.value);
  }else if(button.value == "AC"){
    display.value = "";
  }
}

if(display.value == ""){
  addDisabled();
}else{
  removeDisabled();
}


// ディスプレイに何も表示されていない場合、押せないようにする 
function addDisabled(){
    Zero.disabled = true;
    ZeroTwo.disabled = true;
    equals.disabled = true;
    plus.disabled = true;
    multi.disabled = true;
    divide.disabled = true;
}

function removeDisabled(){
    Zero.disabled = false;
    ZeroTwo.disabled = false;
    equals.disabled = false;
    plus.disabled = false;
    multi.disabled = false;
    divide.disabled = false;
}
// 演算子を連続で押した場合、最新のものに更新されるようにする
