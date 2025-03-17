let name = 'John';
function login(){
    var sessionId = 123;
    let isLogin=true;
    let role = 'admin';

    if(isLogin){
        let welcome = `welcome ${role}`
        console.log(welcome);
    }
    // console.log(welcome); //  welcome is block scope variable` 
    console.log(sessionId); // sessionId is function scope variable
}
login();
console.log(name); // name is global scope variable
