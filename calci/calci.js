function insert(num){
  document.form.answer.value = document.form.answer.value+num
}
function equals(){
  var x = document.form.answer.value;
  if(x){
  document.form.answer.value = eval(x)
}
}
