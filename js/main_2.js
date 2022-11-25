let yourName = prompt("What's your name?").toLowerCase().trim()

if(yourName[0] === "a") {
    let yourAge = +prompt("How old are you?").trim()
    if (yourAge >= 20 && yourAge <= 40) {
        let money = prompt("How much money do you have?").trim() + "$"
        if (money >= "100$") {
            let manyPeople = prompt("How many people want to come in?").trim()
            if (manyPeople <= 10) {
                alert("Welcome to the club!")
                let arr = []

                arr[0] = yourName
                arr[1] = yourAge + " age"
                arr[2] = money
                arr[3] = manyPeople + " people"

                console.log(arr);
            } else {
                alert("Too many people")
            }
        } else {
            alert("Bomj")
        }
    } else if (yourAge < 20) {
        alert("Molokosos")
    } else {
        alert("Too old")
    }
} else {
    alert("Sorry, this place is not for you!")
}