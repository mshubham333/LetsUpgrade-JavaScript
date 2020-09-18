let persons = [
    {
        name:"shubham",
age:"24",
city:"Aligarh",
salary:"NA"
    },
    {
        name:"aman",
age:"24",
city:"Chharra",
salary:"65000",
    },
    {
        name:"hariom",
age:"24",
city:"Aligarh",
salary:"40000",
    },
    {
        name:"kapil",
age:"24",
city:"Chharra",
salary:"55000" ,         
    },
    {   name:"varun",
age:"25",
city:"Chharra",
salary:"42000",
    },
    ];

// function deleteData(){
//   var rs=  persons.splice(0,1);
//   console.log(rs);
        
// }        
// deleteData();
function display(persons) {
    let tabledata = "";
  
    persons.forEach(function (person, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${person.name}</td>
      <td>${person.age}</td>
      <td>${person.city}</td>
      <td>${person.salary}</td>
      <td>
      <button onclick='deletePerson(${index})'></button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
        document.getElementById("tdata").innerHTML = tabledata;
  
  }
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = persons.filter(function (person) {
      return (
        person.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = persons.filter(function (person) {
      return (
        person.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  display(persons);
  function deletePerson(index) {
    persons.splice(index, 1);
    display(persons);
  }
