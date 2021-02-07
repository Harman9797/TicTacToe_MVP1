const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { addUser, getUsers } = require('../utils/users')
const { addToBaord } = require('../utils/gameLogic')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {

    socket.on('join', () => {
        var user =  addUser({ id : socket.id})
        console.log(user)
        console.log("A user was added")
        socket.emit('userTypeFound', user.userType)
        io.emit('message', `User ${user.userType} has joined.`)
        //var userList = getUsers()
        io.emit('userList', getUsers())
        console.log(getUsers())
    })

    socket.on('playMove', ({user, tile}) => {
        console.log('play move caught');
        io.emit('ReflectMove', ({user, tile}))
        var ifWon = addToBaord({user, tile})
        if (ifWon){
            io.emit('message', `User ${user} has won`)
        }
        console.log('reflect move intitated');
    })

})

server.listen( port, () => {
    console.log(`Server is running at ${port}`)
})