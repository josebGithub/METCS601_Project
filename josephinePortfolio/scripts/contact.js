
const firstNameId = "firstName";
const lastNameId = "lastName";
const emailId = "email";
const firstNameLabelId = "fnamelabel";
const lastNameLabelId = "lnamelabel";
const emailLabelId = "emaillabel";
const phoneId ="phoneno";
const phoneLabelId = "phonelabel"


/* Check if the value of the field is empty or not */
function isEmptyField(field, labelId) {
   
    if (field === "") 
    {
        let labelName = document.getElementById(labelId).innerHTML;
        let displayName = labelName.substring(0, labelName.length-2);
        errorMessage("Please enter your "+displayName+"!");
        //window.alert("Please enter your "+labelName+"!");
        return true;
    }
}

/* Display error message to the DOM */
function errorMessage(message) {
    var error = document.getElementById("errormsg");

    error.textContent=message;
}

/* Validate the fields of the form when submit button is clicked */
function validateForm() {
    var firstname = document.getElementById(firstNameId).value;
    var lastname = document.getElementById(lastNameId).value;
    var email = document.getElementById(emailId).value;
    var phone = document.getElementById(phoneId).value;
    var nameRegexpr=/^[a-zA-Z]*$/;
    //var emailRegexpr=/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var emailRegexpr=/^[^@]+@\w+(\.\w+)+\w$/;
    var phoneNoRegexpr=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  

    

    if (!isEmptyField(firstname, firstNameLabelId))
    {
        if (firstname.length < 2) 
        {
            //window.alert("The length of your firstname is not correct!");
            errorMessage("The length of your firstname is not correct!");
            firstname.focus;
            return false;
        }
    
    
        if (!nameRegexpr.test(firstname)) 
        {
            errorMessage("The firstname can only contains alpha characters(A-Z and a-z)!");
            firstname.focus;
            return false;
        }
    } else { return false;}

    
    if (!isEmptyField(lastname, lastNameLabelId))
    {
        if (lastname.length < 2) 
        {
            errorMessage("The length of your lastname is not correct!");
            lastname.focus;
            return false;
        }


        if (!nameRegexpr.test(lastname)) 
        {
            errorMessage("The lastname can only contains alpha characters(A-Z and a-z)!");
            lastname.focus;
            return false;
        }
    } else { return false;}


    if (!isEmptyField(email, emailLabelId))
    { 
        if (!emailRegexpr.test(email))
        {
            errorMessage("Please enter a valid email!");
            return false;
        } 
    } else { return false;}

    if (!isEmptyField(phone, phoneLabelId))
    { 
        window.alert("Phone number : "+phone);
        if (!phoneNoRegexpr(phone))
        {
            errorMessage("Your phone number format is wrong!");
            return false;
        } 
    } else { return false;}
}

/* Reset the form when the reset button is clicked */
function resetForm(formname) {
    document.getElementById(formname).reset();
}

