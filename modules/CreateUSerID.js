let uniqueNumber = Date.now()

export default function(){
    let randomNumber = Math.floor(Math.random() * 10)
    if (firstName.value === ""){
        userID.value = '';
    }
    userID.value = `${firstName.value}-${randomNumber}${uniqueNumber}`
}