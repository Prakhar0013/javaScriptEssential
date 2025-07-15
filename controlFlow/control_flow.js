let userRole="admin";
let accessLevel;

if(userRole=== "admin"){
    accessLevel="Full Access Granted";
}
else if(userRole==="manager"){
    accessLevel="Limited Access Granted";
}
else{
    accessLevel="No access Granted";
}

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="Welcome Admin!";
    }
    else{
        userMessage="Welcome, User!";
    }
}
console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);

let userType="subscriber";
let userCategory;
switch(userType){
    case "admin":
        userCategory= "Administrator";
        break;
    case "manager":
        userCategory= "Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory= "Unknown";
}
console.log("User CategorY:"+ userCategory);