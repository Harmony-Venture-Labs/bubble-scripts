var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

function filterByAvailability(listings, selected_date) {
    return listings.filter(elem => {
        if (!elem.get("availability_list_custom_availability")) return false;
        let availabilities = elem.get("availability_list_custom_availability").get(0, elem.get("availability_list_custom_availability").length());
        for (let el of availabilities) {
            if (!el.get("weekdays_custom_weekday_range")) return false;
            console.log(el.get("weekdays_custom_weekday_range").get("days_list_text"));
            console.log(days[selected_date.getDay()])
            let weekdays = el.get("weekdays_custom_weekday_range").get("days_list_text").get(0, el.get("weekdays_custom_weekday_range").get("days_list_text").length());
            if (weekdays.includes(days[selected_date.getDay()])) {
                return true;
            }
        }
        return false;
    })
}

function filterByCancellationPolicy(listings) {

}

function filterByPrice(listings) {

}