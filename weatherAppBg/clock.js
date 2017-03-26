//localStorage.clear();
var getUserName = document.getElementById("getName");
getUserName.classList.remove("hidden");
var userName = localStorage.getItem("name");

clock();
setInterval(clock, 1000);

//get username and store it iff username is not already present
if (userName === null) {
    document.getElementById("getName").addEventListener("change", function() {
        userName = getUserName.value;
        getUserName.classList.add("hidden");
        storeUserData(userName)
        clock()
    })
} else{
    getUserName.classList.add("hidden");
    clock()
}

//The clock function
function clock() {
    var dateTime = new Date();
    var Hour = dateTime.getHours()
    //console.log(dateTime.getMinutes(), dateTime.getSeconds());
    document.getElementById("view").innerHTML = dateTime;
    var Phase = dayPhase(Hour);
    greetUser(Phase)

}

//Calculate the phase of the day
function dayPhase(hour) {
    if (hour > 04 & hour <= 12) {
        return "morning"
    } else if (hour > 12 & hour <= 16) {
        return "afternoon"
    } else if (hour > 16 & hour <= 24) {
        return "evening"
    } else if (hour > 24 & hour <= 16) {
        return "night"
    }
}

//greetUser
function greetUser(phase) {
    if (userName) {
        document.getElementById('showname').classList.remove("hidden");
        document.getElementById("showname").textContent = "Good " + phase + ' ' + userName;
    }
    return 1;
}

//store user data
function storeUserData(username) {
    localStorage.setItem("name", username);
}