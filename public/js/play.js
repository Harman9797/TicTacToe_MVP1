const socket = io()

var mySymbol = "";
socket.emit('join')

socket.on('userTypeFound', (userType) =>{
  mySymbol = userType;
})

socket.on('message', (message) =>{
  joiningMessages(message)
  if(message.includes('has won')){
    document.getElementById("board").classList.add('disabled')
  }
})


socket.on('userList', (users) =>{
  console.log(users)
  var list = ""
  for(user of users){
     list += `<p>${user.userType}</p>`
  }
  displayUser(list)
})

socket.on('ReflectMove', ({user, tile}) => {
  
  console.log('reflect move caught');
  console.log(user)
  console.log(tile)
  document.getElementById(tile).innerHTML = `${user}`;
  
  document.getElementById(tile).removeAttribute("onclick");

  if(user == mySymbol){
    document.getElementById("board").classList.add('disabled')
  }
  else{
    document.getElementById("board").classList.remove("disabled");
  }

})

function a(num){
  var tile = num
 // var tile =  document.getElementById(num);
  socket.emit('playMove', {user: mySymbol, tile: tile})
  console.log('play move intitated');
 // tile.innerHTML = mySymbol;       
}


function displayUser(list){
  var userSpace =  document.getElementById("DisplayUsers");
  userSpace.innerHTML = list     
}

function joiningMessages(message){
  var user =  document.getElementById("joiningNotifs");
  user.innerHTML += "<p>" + message + "</p>"      
}