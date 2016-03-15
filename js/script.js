

$(document).ready(function() {

	// When the page is loaded,
	// call the loadData() function.
    loadData();
});




function loadData() {

	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
	$.getJSON("data/sectors.json", function(data){
		writeTable(data);

	});
}


function writeTable(data) {

	// 1. Call the `loadData()` function when the page is loaded.
	// 2. Load the emissions json from the `data/` directory.
	// 3. Pass the data to the `writeTable()` function.
	// 4. Loop through the data and append a table row (`<tr>`) to the table body (`<tbody>`) with values for state name, total emissions and a bar.
	// 5. Draw your bar as a div. You can reference the exercise-three project where we drew bars for graduation rates: https://github.com/chriscanipe/exercise-three
	// 6. The width of the bar should be expressed as a percent of the largest value in the data set, which is Texas (641.0 metric tons). To get the percent value, simply divide each state's total emissions by 641.0, then multiply by 100.
	// 7. Omit the United States total value
	// 8. Use the DataTables library to make it sortable.
	// 9. Sort by total emissions, most to least.
	// 10. Set the default view to show all 50 states plus DC. You'll want to reference the [Data Tables](https://www.datatables.net/) documentation for those last two.
	for (i=0; i<data.length; i++) {
				var State = data[i]["state"];
				var EmsTotal = data[i]["total"];
				var barWidth = EmsTotal/641.0 *100;
				
				if (State != "United States total"){
				$(".table").append(
					"<tr>"+"<td class = 'State'>"+State+"</td>"+"<td class = 'Emissions'>"+EmsTotal+"</td>"+"<td class = 'bColumn'>"+"<div class ='bar' style='width: "+barWidth+"px'>"+"</div>"+"</td>"+"</tr>"

					);
             }

	}	

		$('.emissions').DataTable(
		     {
		     	"order" : [[1, "desc"]],
		     	"lengthMenu":[[100], ["All"]],
		     }
	);
}

