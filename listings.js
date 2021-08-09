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
        console.log(elem.get("Created By").get("onboarded_boolean"))
        let availabilities = elem.get("availability_list_custom_availability").get(0, elem.get("availability_list_custom_availability").length());
        for (let el of availabilities) {
            if (!el.get("weekdays_custom_weekday_range")) return false;
//             console.log(el.get("weekdays_custom_weekday_range").get("days_list_text"));
//             console.log(days[selected_date.getDay()])
            let weekdays = el.get("weekdays_custom_weekday_range").get("days_list_text").get(0, el.get("weekdays_custom_weekday_range").get("days_list_text").length());
            if (weekdays.includes(days[selected_date.getDay()])) {
                return elem.get("Created By").get("onboarded_boolean"); // returns the onboarded status of the creator. If the creator is onboarded, the availability is visible
            }
        }
        return false;
    })
}

function filterByCancellationPolicy(listings, cancellation_policy) {
    return listings.filter(elem => {
        if (!elem.get("cancellation_policy_text")) return false;
        if (elem.get("cancellation_policy_text").toLowerCase().indexOf(`${cancellation_policy.toLowerCase()}`) !== -1) {
            return true;
        }
        return false;
    })
}

function filterByPrice(listings, price_range) {
    return listings.filter(elem => {
        if (!elem.get("availability_list_custom_availability")) return false;
        let availabilities = elem.get("availability_list_custom_availability").get(0, elem.get("availability_list_custom_availability").length());
        for (let el of availabilities) {
            return (el.get("hourly_rate_number") >= price_range[0] && el.get("hourly_rate_number") <= price_range[1])
        }
    })
}
