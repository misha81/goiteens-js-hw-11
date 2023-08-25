let logins = ["Mango", "Poly", "Ajax"];

function Length(login) {
    return login.length >= 4 && login.length <= 16;
}

function Unique(login, logins) {
    return !logins.includes(login);
}

function addLogin(login, logins) {
    if (Length(login) === false) {
        // 
        console.log("Логін має бути 4-16 символів:", login);
    } else if (Unique(login, logins) === false){
        console.log("Логін вже існує:", login);        
    } else {
        console.log("Логін додано:", login);
        logins.push(login);
        console.log(logins);   
    }
}
addLogin("User1", logins); // +
addLogin("Mango", logins); // -
addLogin("UsernameThatisfrommorethan16symbols", logins); // -