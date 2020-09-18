window.onload = function () {
let initialbuses = [{
    name:"shubham",
    source:"aligarh",
    destination:"delhi",
    number:"up81",
    capacity:"38",
}];
if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(initialbuses));
  }
};
 
    function display(superarray = undefined) {
        let tabledata = "";
        let buses;
        if (superarray == undefined) {
            buses = JSON.parse(localStorage.getItem("buses"));
        } else {
            buses = superarray;
        }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.capacity}</td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  display();
function addBus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let capacity = document.getElementById("capacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = number;
    bus.capacity = capacity;
  
    // buses.push(bus);
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("capacity").value= "";
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  

  function searchBySource() {
    let searchValue = document.getElementById("searchSource").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  function searchByDestination() {
    let searchValue = document.getElementById("searchDestination").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }


function showModal() {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

//   copySuperhero(index);
}

function hideModal(event) {
  if (event.target.className == "modal") {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
}