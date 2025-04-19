function validation(){
   //for name
    let name=document.querySelector(".nam").value;
    if(name == ""){
        alert("enter name..");
    }
    var condition=/^[A-Z a-z]+$/;
    var result=name.match(condition);
    if(result==null){
        alert("enter valid name");
    }
    let email=document.querySelector(".em").value;
    if(email==""){
        alert("enter a email")
    }
    let condition1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var result1=email.match(condition1)
    if(result1== null){
        alert("email must be in valid format(eg., example@example.com")
    }

    //for password
    let password = document.querySelector(".pass").value;

    if (password === "") {
      alert("Enter a password");
    }
    
    let condition2 = /^[A-Za-z].*[A-Za-z]$/;  
    let result2 = password.match(condition2);
    
    if (result2 === null) {
      alert("Password must start and end with a letter");
    }
    

    //for gender
    let male=document.querySelector(".male").checked;
    let female=document.querySelector(".female").checked;
    if(male==false && female==false){
        alert("gender need to be selected");
    }

    //for interest
    let coding=document.querySelector(".coding").checked;
    let singing=document.querySelector(".singing").checked;
    let football=document.querySelector(".football").checked;
    let dancing=document.querySelector(".dancing").checked;
    let basketball=document.querySelector(".basketball").checked;

    if(coding==false && singing==false && football==false && dancing==false && basketball==false){
        alert("interest need to selected");
    }
}
