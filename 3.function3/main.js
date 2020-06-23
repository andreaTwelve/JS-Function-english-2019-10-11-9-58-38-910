//按字母顺序输出字符串
function alphabetSort(message){
  // wirte your code here
  let mes = message.split('').sort();
  let newMes = mes.join('');
  console.log(newMes);
  return newMes
}
alphabetSort('hello'); // should return 'ehllo'