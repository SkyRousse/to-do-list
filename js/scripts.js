//business logic
function Tasks(task, date, notes) {
    this.task = task;
    this.date = date;
    this.notes = notes;
};


//user interface logic
$(document).ready(function() {
    var arrayDates = [];
  $("form#task-creator").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#task").val();
    var inputtedDate = $("input#due-date").val();
    var inputtedNotes = $("input#notes").val();

    arrayDates.push(inputtedDate);

    var newTask = new Tasks(inputtedTask, inputtedDate, inputtedNotes);

    $("table.to-do-list").append("<tr class='output-task'>" + "<td>" + inputtedTask + "</td>"  + "<td>" + inputtedDate + "</td>" + "<td>" + inputtedNotes + "</td>" + "<td>" + "<button class='remove'>" + "X" + "</button>" + "</td>" + "</tr>");


    $("#uncompleted-tasks").show();

    $("button.remove").click(function()  {
      // debugger;
      $(this).parent().parent().remove();
      $("#completed-tasks").show();
      $("table.completed-list").append("<tr class='output-task'>" + "<td>" + inputtedTask + "</td>"  + "<td>" + inputtedDate + "</td>" + "<td>" + inputtedNotes + "</td>" + "</tr>");
    });

    $("button.sort").click(function()  {
      console.log(arrayDates);
      arrayDates.sort(function(a, b) {
      a = new Date(a.dateModified);
      b = new Date(b.dateModified);
      return a>b ? -1 : a<b ? 1 : 0;

      });
    });
  });
});
