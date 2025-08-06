import { format, compareAsc } from "date-fns";

format(new Date(2014, 1, 11), "MM/dd/yyyy");

const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];

// showing today's todos 
class today {
    getTodays(object) {
        // if object is an simple array then 
        // iterate through all the array item's date 
        // and call the object items which date is today

        // if object is an object that has array inside of it. 
        // get access to todos and iterate thorough all the array items
        // and call the object itmes which date is today
    }
}