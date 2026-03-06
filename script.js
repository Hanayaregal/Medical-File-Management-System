let patients = JSON.parse(localStorage.getItem("patients")) || [];

/* Add Patient */
function addPatient(){
  const card = document.getElementById("cardNumber").value;
  const name = document.getElementById("name").value;
  const disease = document.getElementById("disease").value;
  const date = document.getElementById("date").value;
  const doctor = document.getElementById("doctor").value;

  if(card=="" || name=="" || disease=="" || date=="" || doctor==""){
    document.getElementById("message").innerHTML="Please fill all fields";
    return;
  }

  // Check duplicate card number
  const exists = patients.some(p=>p.card===card);
  if(exists){
    document.getElementById("message").innerHTML="❌ Card Number Already Exists";
    return;
  }

  const patient={
    card:card,
    name:name,
    disease:disease,
    date:date,
    doctor:doctor
  };

  patients.push(patient);
  localStorage.setItem("patients",JSON.stringify(patients));
  document.getElementById("message").innerHTML="✅ Record Added Successfully";
  clearFields();
  showAll(); // Automatically refresh table
}

/* Search Patient */
function searchPatient(){
  const cardNumber = document.getElementById("searchCard").value;
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML="";
  const result = patients.find(p=>p.card===cardNumber);
  if(result){
    tableBody.innerHTML=`
      <tr>
        <td>${result.card}</td>
        <td>${result.name}</td>
        <td>${result.disease}</td>
        <td>${result.date}</td>
        <td>${result.doctor}</td>
      </tr>
    `;
    document.getElementById("message").innerHTML="";
  } else {
    document.getElementById("message").innerHTML="❌ Card Number not found";
  }
}

/* Show All Records */
function showAll(){
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML="";
  patients.forEach(p=>{
    const row=`
      <tr>
        <td>${p.card}</td>
        <td>${p.name}</td>
        <td>${p.disease}</td>
        <td>${p.date}</td>
        <td>${p.doctor}</td>
      </tr>
    `;
    tableBody.innerHTML+=row;
  });
}

/* Clear Form */
function clearFields(){
  document.getElementById("cardNumber").value="";
  document.getElementById("name").value="";
  document.getElementById("disease").value="";
  document.getElementById("date").value="";
  document.getElementById("doctor").value="";
}