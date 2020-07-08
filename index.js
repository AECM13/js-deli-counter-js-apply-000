// function takeANumber(line, name){
  
//   line.push(name)
//   var number = line.length
//   var greeting = `Welcome, ${name}. You are number ${number} in line.`
//   return greeting
// }

var counter = 0;

function takeANumber(line){

  couter++
  line.push(counter)
  var greeting = `Welcome, You are number ${counter} in line.`
  
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  var first = line.shift()
  return "Currently serving "+first+"."
}
function currentLine(line){
  if(line.length === 0)
    return "The line is currently empty."
  var arr=[]
  var cur = "The line is currently: "
  for(var i=0;i<line.length;i++){
    var number = `${i+1}. ${line[i]}`
    if(i === line.length-1){
      cur+=number
    }
    else{
      cur+=number+", "
    }
    
  }
  return cur
}