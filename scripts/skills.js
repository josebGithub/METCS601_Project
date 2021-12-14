/* To get the skills data from JSON file, process it and print it to the DOM. Catch the errors if there is any. */
async function getSkillsInfo(url) {
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
  
  function addSpanClass(element, level) {
      for (var i=0; i < level; i++)
      {
       var span = document.createElement("span");
       span.className='fa fa-star fa-lg checked';
       element.appendChild(span);
      }
  }

 
  /* Process the data and print it to the table */
  const process = function(data) {

    var ele=document.getElementById("skills-level");
    
    for ( s of data.skills)
        {
            var skillDiv = document.createElement("div");
            skillDiv.setAttribute("class", "skillsstar");
            ele.appendChild(skillDiv);
            skillDiv.innerHTML+=s.skill;
            var div = document.createElement("div");
            skillDiv.appendChild(div);
           // ele.appendChild(document.createElement("div"));
            addSpanClass(div, s.level);
           // ele.appendChild(document.createElement("div"));
        }
  }
    
    /* Print the error message to the DOM */
    const errorMessage = function(err) {
        let errorMsg = document.getElementById("error-message");
         errorMsg.innerHTML = err;
    }
  
    getSkillsInfo('./data/skills.json');
  
    