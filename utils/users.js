const users = []

const addUser = ({id}) => {
    
    var userType = "X";

    if(users[0]){
        userType = "O"
    }

    // Store user
    const user = {id, userType}
    users.push(user)
    return user
}

const getUsers = () =>{
    return users;
}

const removeUser = (id) => {
    const index = users.findIndex((user) =>{
        return user.id === id
    })

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}



module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsers
}