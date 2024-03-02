function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value; 
    var contact=document.myform.contact.value;  
    var email=document.myform.email.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if (contact==null || contact==""){  
      alert("contact information can't be blank");  
      return false;  
    }
    if (email==null || email==""){  
      alert("E-mail can't be blank");  
      return false;  
    }
    if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  