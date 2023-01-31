//James Lear
//Mission 4



//use jQuery to find the correct button to activate this function with
$("#calcGrade").click(function () {
    //initialize all these variables and assign them to variables in this JS file to do some work with
    let assignments = parseFloat($("#assignments").val());
    let quizzes = parseFloat($("#quizzes").val());
    let groupProjects = parseFloat($("#groupProjects").val());
    let intex = parseFloat($("#intex").val());
    let midterm = parseFloat($("#midterm").val());
    let final = parseFloat($("#final").val());
    let extraCredit = parseFloat($("#extraCredit").val());

    //perform some simple calculations to figure out the final grade in the class.
    let totGrade = ((assignments * .5) + (quizzes * .1) + (intex * .1) + (groupProjects * .1) + (midterm * .1) + (final * .1) + (extraCredit * 0.0081));
    let letGrade = "";

    //this is a series of if statements to assign the total grade value to a letter grade
    if (totGrade >= 94) {
        letGrade = "A"
    }

    else if (totGrade >= 90) {
        letGrade = "A-"
    }

    else if (totGrade >= 87) {
        letGrade = "B+"
    }

    else if (totGrade >= 84) {
        letGrade = "B"
    }

    else if (totGrade >= 80) {
        letGrade = "B-"
    }

    else if (totGrade >= 77) {
        letGrade = "C+"
    }

    else if (totGrade >= 74) {
        letGrade = "C"
    }

    else if (totGrade >= 70) {
        letGrade = "C-"
    }

    else if (totGrade >= 67) {
        letGrade = "D+"
    }

    else if (totGrade >= 64) {
        letGrade = "D"
    }

    else if (totGrade >= 60) {
        letGrade = "D-"
    }

    else{
        letGrade = "E"
    }

    //print out the output using innerHTML and an empty tag in the html page
    $("#output").html("You got a(n) " + letGrade + " in IS 455!");
})