$(document).ready(function() {
  // Fetch data from JSON file
  $.getJSON('data.json', function(data) {
    var tableBody = $('#rankings tbody');

    // Iterate over each item in the JSON array
    $.each(data, function(index, item) {
      // Append a new row to the table for each item
      var row = $('<tr>').appendTo(tableBody);
      row.append('<td>' + item.Rank + '</td>');
      row.append('<td>' + item.StudentName + '</td>');
      row.append('<td>' + item.CoursesCompleted + '</td>');
      row.append('<td>' + item.SkillBadgesCompleted + '</td>');
      row.append('<td>' + item.GenAIGameCompleted + '</td>');
      row.append('<td>' + item.TotalCompletions + '</td>');
      row.append('<td>' + item.RedemptionStatus + '</td>');

      if (item.TotalCompletions === "Yes" && item.Rank <= 40){
        row.addClass('completed');
      }
      // Apply alternate row colors
      if (index % 2 === 0) {
        row.addClass('even-row');
      } else {
        row.addClass('odd-row');
      }
    });
  });
});


  $(document).ready(function() {
    $('#search-leaderboard').keyup(function() {
      var searchTerm = $(this).val().toLowerCase();
      $('#rankings tbody tr').each(function() {
        var studentName = $(this).find('td:eq(1)').text().toLowerCase();
        if (studentName.includes(searchTerm)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });