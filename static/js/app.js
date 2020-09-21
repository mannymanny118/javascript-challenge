// from data.js
var tableData = data;
// creates objects for the button and fillter
var form= d3.select("#form-control");
var btn= d3.select("#filter-btn");
// var that connects to table body
table_body = d3.select("tbody")
// var for holding filtered data
var sel_data;

function fill_table(table){
    // empties table
    table_body.html("");
    // adds data to table
    table.forEach(entry2 => {
        var row= table_body.append("tr");
        Object.values(entry2).forEach(val => {
         col = row.append("td").text(val);
        })
    })
}
  

// creates  function for 
function get_data() {
    d3.event.preventDefault();

  // Get the value property of the input element
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  console.log(date);
 

    // resets var
    sel_data = [];
    // filteres data based on user entered properties 
    tableData.forEach( function(entry) {
        if (( date === "" || entry.datetime === date) && (city === "" || entry.city === city) && (state === "" || entry.state === state) && (country === "" || entry.country === country) && (shape === "" || entry.shape === shape)) {
            sel_data.push(entry);
        }
    })

   
    console.log(sel_data);
    // inputs filtered data into table
    fill_table(sel_data);
    console.log(sel_data);
}
// runs function on button click or when enter is pressed
fill_table(tableData);
btn.on("click", get_data);
form.on("submit",get_data);
  