//反序输出字符串
function reverseString(message){
  // wirte your code here
  let newMessage = message.split('').reverse().join('');
  console.log(newMessage)
}
reverseString('hello'); // should return 'olleh'