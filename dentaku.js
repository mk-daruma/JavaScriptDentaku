function get_calc(button){
  if (button.value=="=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
  }else if(button.value=="AC"){
    document.dentaku.display.value = "";
  }else {
    if(button.value=="×"){
      button.value= "*";
    }else if(button.value=="÷"){
      button.value="/";
    }
    document.dentaku.display.value += button.value;
    document.dentaku.multi_btn.value="×";
    document.dentaku.div_btn.value="÷";
  }
}