
export default function(){
    let uniqueNumber = Date.now()
    let randomNumber = Math.floor(Math.random() * 10)
    if (firstName.value === ""){
        userID.value = '';
    }
    userID.value = `${firstName.value}${randomNumber}${uniqueNumber}`
}