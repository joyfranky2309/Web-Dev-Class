// function searchFilter() {
//     debugger

//     const ip = document.getElementById("searchText");
//     const searchD = document.getElementById("searchTable");
//     const tableData = searchD.getElementsByTagName("tr");
  
//     // ip.addEventListener("input", searchFilter);
  
  
//     for (var i = 0; i < tableData.length; i++) {
//         const searchKeys = ip.value.toLowerCase();
//       var roles = tableData.getElementsByTagName("td")[0].textContent.toLowerCase();
  
//       console.log(i);
  
//       if(roles.includes(searchKeys)) {
//         tableData[i].style.display = '';
  
//       } else {
//         tableData[i].style.display = 'none';
//       }
//     }
//   };
  

function searchFilter() {
    var input, filter, table, tr, td, i, txtValue;
    
    input = document.getElementById("searchText");
    
    filter = input.value.toUpperCase();
    
    table = document.getElementById("searchTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }