var facilitatorsCount = 0;
var developersCount = 0;

function addFacilitator() {
  var facilitator = document.getElementById("facilitator").value;
  
  if (facilitator !== "") {
    if (facilitatorsCount < 6) {
      facilitatorsCount++;
      document.getElementById("room" + facilitatorsCount).getElementsByTagName("td")[1].textContent = facilitator;
    } else {
      alert("All facilitator rooms are occupied.");
    }
  } else {
    alert("Please select a facilitator.");
  }
}

function addDeveloper() {
  var developer = document.getElementById("developer").value;
  
  if (developer !== "") {
    if (developersCount < 18) {
      developersCount++;
      
      var developersTable = document.getElementById("room" + Math.ceil(developersCount / 3)).getElementsByTagName("td")[2];
      
      if (developersTable.textContent.indexOf(developer) === -1) {
        developersTable.textContent += developer + ", ";
      } else {
        alert("A developer with the same skill set is already allocated to this room.");
        developersCount--;
      }
    } else {
      alert("All developer rooms are occupied.");
    }
  } else {
    alert("Please select a developer.");
  }
}
var facilitatorsCount = 0;
var developersCount = 0;

function addFacilitator() {
  var facilitator = document.getElementById("facilitator").value;
  
  if (facilitator !== "") {
    if (facilitatorsCount < 6) {
      facilitatorsCount++;
      document.getElementById("room" + facilitatorsCount).getElementsByTagName("td")[1].textContent = facilitator;
    } else {
      alert("All facilitator rooms are occupied.");
    }
  } else {
    alert("Please select a facilitator.");
  }
}

function addDeveloper() {
  var developer = document.getElementById("developer").value;
  
  if (developer !== "") {
    if (developersCount < 18) {
      developersCount++;
      
      var developersTable = document.getElementById("room" + Math.ceil(developersCount / 3)).getElementsByTagName("td")[2];
      
      if (developersTable.textContent.indexOf(developer) === -1) {
        developersTable.textContent += developer + ", ";
      } else {
        alert("A developer with the same skill set is already allocated to this room.");
        developersCount--;
      }
    } else {
      alert("All developer rooms are occupied.");
    }
  } else {
    alert("Please select a developer.");
  }
}