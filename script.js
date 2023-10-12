$(document).ready(function() {
    // Fetch data from JSON file
    $.getJSON('stats111023.json', function(data) {
      // Iterate over each item in the JSON array
      $.each(data, (index, item) => {
              // Append a new row to the table for each item
              $('#rankings tbody').append('<tr><td>' + item.Rank + '</td><td>' + item.StudentName + '</td><td>' + item.CoursesCompleted + '</td><td>' + item.SkillBadgesCompleted + '</td><td>' + item.GenAIGameCompleted + '</td><td>' + item.TotalCompletions + '</td><td>' + item.RedemptionStatus + '</td></tr>');
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