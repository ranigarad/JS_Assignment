const printVegetarianMenu = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday Menu: Veggie Burger");
            break;
        case 'tuesday':
            console.log("Tuesday Menu: Spinach and Feta Salad");
            break;
        case 'wednesday':
            console.log("Wednesday Menu: Mushroom Risotto");
            break;
        case 'thursday':
            console.log("Thursday Menu: Caprese Sandwich");
            break;
        case 'friday':
            console.log("Friday Menu: Margherita Pizza");
            break;
        case 'saturday':
            console.log("Saturday Menu: Quinoa Salad");
            break;
        case 'sunday':
            console.log("Sunday Menu: Vegetable Stir-Fry");
            break;
        default:
            console.log("Invalid day! Please enter a valid day of the week.");
    }
};
printVegetarianMenu('Monday');
printVegetarianMenu('Tuesday');
printVegetarianMenu('Wednesday');
printVegetarianMenu('Thursdday');
printVegetarianMenu('Friday');
printVegetarianMenu('Saturday');
printVegetarianMenu('Monday');
printVegetarianMenu('InvalidDay');