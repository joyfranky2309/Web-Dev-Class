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


  // // PRE DEFINED TABLE GRID

  // const columnDefs = [
  //   { field: "SerialNo" },
  //   { field: "Role" },
  //   { field: "Location" }
  // ];
  
  // // specify the data
  // const rowData = [
  //   { SerialNo: 1, Role: "Java", Location: 'chennai' },
  //   { SerialNo: 2, Role: "MERN", Location: 'delhi' },
  //   { SerialNo: 3, Role: "MERN", Location: 'Hyd' },
  //   { SerialNo: 4, Role: "DB", Location: 'Hyd' },
  //   { SerialNo: 5, Role: "Java", Location: 'Hyd' },
  //   { SerialNo: 6, Role: "Java", Location: 'Hyd' },
  //   { SerialNo: 7, Role: "Java", Location: 'Hyd' },
  //   { SerialNo: 8, Role: "Java", Location: 'Hyd' },
  //   { SerialNo: 9, Role: "Java", Location: 'Pune' },
  //   { SerialNo: 10, Role: "DB", Location: 'Pune' },
  //   { SerialNo: 11, Role: "DB", Location: 'Pune' },
  // ];
  
  // // let the grid know which columns and what data to use
  // const gridOptions = {
  //   columnDefs: columnDefs,
  //   rowData: rowData,
  //   rowHeight: 70,
  //   domLayout: 'autoHeight'
  // };
  
  // // setup the grid after the page has finished loading
  // document.addEventListener('DOMContentLoaded', () => {
  //   const gridDiv = document.querySelector('#myGrid');
  //   new agGrid.Grid(gridDiv, gridOptions);
  // });