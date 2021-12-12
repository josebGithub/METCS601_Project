/* To get the skills data from JSON file, process it and print it to the DOM. Catch the errors if there is any. */
async function getEducationInfo(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then(getData )
      .then((data) => process(data) ) 
      .catch(err => errorMessage(err) )
  }
  
   /* Get the data from JSON file */
   function getData(response) {
  
    console.log(response);
    if (!response.ok) 
    {
        throw new Error(response.statusText);
    }
    return response.json();
  }
  
  /* Process the data and print it to the table */
  const process = function(data) {

    for (heading of Object.keys(data.skills)) 
    {
        document.getElementById("programming ")
    }
    

  
    //Create a table
    var skillsDiv = document.getElementById("skills-data");
    var table = document.createElement("table");
    var tr=table.insertRow(-1);
  
  //  var keys=Object.keys(data);
  //  var subkeys = Object.keys(data[keys[0]][0]);
    
    for (heading of Object.keys(data.skills[0]))
    {
      let th = document.createElement("th");
      th.innerHTML = heading.toUpperCase();
      tr.appendChild(th);  
    }
  
  
    for ( ed of data.education)
        {
          tr = table.insertRow(-1);
          for (field of Object.keys(ed))
          {
              tr.insertCell(-1).innerHTML = ed[field];
          }
        }
  
    table.setAttribute("class", "education-table");
    educationDiv.innerHTML = "";
    educationDiv.appendChild(table);
  
  }
    
    /* Print the error message to the DOM */
    const errorMessage = function(err) {
        let errorMsg = document.getElementById("error-message");
         errorMsg.innerHTML = err;
    }
  
    getEducationInfo('./data/education.json');
  
    