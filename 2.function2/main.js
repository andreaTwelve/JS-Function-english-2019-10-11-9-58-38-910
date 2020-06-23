function palindrome(message){
  // wirte your code here
  let regex = /[\W_]/g;
  let newMes = message.replace(regex, '').toLowerCase();
  let reverseMes = newMes.split('').reverse().join('');
  console.log(newMes === reverseMes);
  return newMes === reverseMes;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true