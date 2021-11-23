
/* Dislay Welcome message */
function welcomeMessage()
{
    var msg ="Welcome to Josephine's website!";
    alert(msg);
}

/* Validate if it is num */
function isNumber(num) {
    if (isNaN(num))
        { return false;}
    else 
        {return true;}
}

/* Return sum of the two numbers. */
function sum(n1, n2) {
    return Number(n1)+Number(n2);
}

/* Message for small and big number. */
function sumMessage(total) {
    if (total > 10)
    {
        alert("That is a big number!");
    }
    else if (total <=10)
    {
        alert("That is a small number!");
    }
}

/* Main function for the welcome script. */
function main() {
    var stop=false;
    welcomeMessage();
    visitorName=prompt("Please enter your name :");
    if (visitorName!=null) {
        alert("Welcome \'"+visitorName+" \' to my website!");
    
        while (!stop) {
            var num1 = prompt("Please enter the first number : ");
            if (num1!=null) 
            {
                var num2 = prompt("Please enter the second number : ")
                
              if (num2!=null) 
              {
                    if (!isNumber(num1) || (!isNumber(num2))) 
                    {
                        alert("Your input is/are not a number, please enter the numbers again!")
                    }

            
                    if (isNumber(num1) && (isNumber(num2)))
                    {
                        alert("The sum of your two numbers is "+sum(num1, num2)+".");
                        sumMessage(sum(num1, num2));
                        {
                            let again=true;
                            while (again)
                            {
                                let ans=prompt("Do you want to add two numbers again, yes or no?");
                                if (ans.toLowerCase()==="yes")
                                {
                                    again=false;
                                }
                                else if (ans.toLowerCase()==="no")
                                {
                                    alert("Thanks for using the program!");
                                    again=false;
                                    stop=true;
                                }
                                else 
                                { again=true;}

                            }
                        }
                    }
               } else { stop=true;}
            } else { stop=true;}
        } /* while */
    }
}


