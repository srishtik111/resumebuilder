document.getElementById("add-education").addEventListener("click", function() {
    var educationContainer = document.getElementById("education-container");
    var educationInputs = document.createElement("div");
    educationInputs.classList.add("education-inputs");
  
    var inputFields = ["School/University", "Degree", "Year"];
  
    inputFields.forEach(function(label) {
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("name", "education_" + label.toLowerCase() + "[]");
      input.setAttribute("placeholder", label);
      input.required = true;
      educationInputs.appendChild(input);
    });
  
    educationContainer.appendChild(educationInputs);
  });
  
  document.getElementById("add-experience").addEventListener("click", function() {
    var experienceContainer = document.getElementById("experience-container");
    var experienceInputs = document.createElement("div");
    experienceInputs.classList.add("experience-inputs");
  
    var inputFields = ["Company", "Position", "Year"];
  
    inputFields.forEach(function(label) {
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("name", "experience_" + label.toLowerCase() + "[]");
      input.setAttribute("placeholder", label);
      input.required = true;
      experienceInputs.appendChild(input);
    });
  
    experienceContainer.appendChild(experienceInputs);
  });
  
  document.getElementById("resume-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var formData = new FormData(this);
  
    var resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = "";
  
    var name = formData.get("name");
    var email = formData.get("email");
    var phone = formData.get("phone");
    var address = formData.get("address");
    var summary = formData.get("summary");
  
    var educationSchools = formData.getAll("education_school[]");
    var educationDegrees = formData.getAll("education_degree[]");
    var educationYears = formData.getAll("education_year[]");
  
    var experienceCompanies = formData.getAll("experience_company[]");
    var experiencePositions = formData.getAll("experience_position[]");
    var experienceYears = formData.getAll("experience_year[]");
  
    var html = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
      <h3>Summary</h3>
      <p>${summary}</p>
      <h3>Education</h3>
      <ul>
    `;
  
    for (var i = 0; i < educationSchools.length; i++) {
      html += `
        <li>
          <p><strong>${educationSchools[i]}</strong></p>
          <p>${educationDegrees[i]}</p>
          <p>${educationYears[i]}</p>
        </li>
      `;
    }
  
    
  
  
  
    html += "</ul>";
  
    resumeOutput.innerHTML = html;
  });
  