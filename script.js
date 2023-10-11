// $(document).ready(function() {
//     // Fetch data from JSON file
//     $.getJSON('stats111023.json', function(data) {
//       // Iterate over each item in the JSON array
//       $.each(data, (index, item) => {
//               // Append a new row to the table for each item
//               $('#rankings tbody').append('<tr><td>' + item.Rank + '</td><td>' + item.StudentName + '</td><td>' + item.CoursesCompleted + '</td><td>' + item.SkillBadgesCompleted + '</td><td>' + item.GenAIGameCompleted + '</td><td>' + item.TotalCompletions + '</td><td>' + item.RedemptionStatus + '</td></tr>');
//           });
//     });
//   });

function fetchDataAndAppendToTable() {
    // Fetch data from JSON file
    $.getJSON('stats111023.json', function(data) {
      // Iterate over each item in the JSON array
      $.each(data, (index, item) => {
        // Append a new row to the table for each item
        $('#rankings tbody').append('<tr><td>' + item.Rank + '</td><td>' + item.StudentName + '</td><td>' + item.CoursesCompleted + '</td><td>' + item.SkillBadgesCompleted + '</td><td>' + item.GenAIGameCompleted + '</td><td>' + item.TotalCompletions + '</td><td>' + item.RedemptionStatus + '</td></tr>');
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", fetchDataAndAppendToTable);
  
  $("#search-leaderboard").keyup(function() {
      //var value = this.value;

      var value = $(this).val();
      $("table").find("tr").each(function(index) {
          if (index === 0) return;
  
          var if_td_has = false;
          $(this).find('td').each(function () {
              if_td_has = if_td_has || $(this).text().indexOf(value) !== -1; //Check if td's text matches key and then use OR to check it for all td's
          });
  
          $(this).toggle(if_td_has);
  
      });
  });