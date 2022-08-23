// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(toDo=`go to the office`) {
    return `This Monday, I will ${toDo}.`;
}
mondayWork("work from home");

function wrapAdjective(result = '*') {
    return function(emphatic="special") {
        return `You are ${result}${emphatic}${result}!`;
    }
}
wrapAdjective()();