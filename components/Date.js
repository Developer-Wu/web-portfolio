var today = new Date();
var year = today.getFullYear()
var month = today.getMonth()+1
var day = today.getDate()
var hours = today.getHours()
var minute = today.getMinutes()
var seconds = today.getSeconds()
var date = `${year}-${month}-${day} ${hours}:${minute}:${seconds}`

export {date}