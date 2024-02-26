let day
let month
let year
let day_30 = [ 1, 4, 6, 9, 11 ]
let day_31 = [ 3, 5, 7, 8, 10, 12 ]
function check_year( year ) {
    if ( ( year % 100 != 0 && year % 4 == 0 ) || year % 400 == 0 ) {
        return true
    } else {
        return false
    }
}
// console.log(` ${check_year( 2023 ) }`)
function guess_next_date( day, month, year ) {
    if ( day > 31 || day <= 0 || month <= 0 || month > 12 || year <= 0) {
        console.log("CHOI AC QUA")
        return
    }
    if ( check_year(year) ) {
    if ( day_30.includes(month) ) {
        if ( day == 30 ) {
            day = 1
            month +=1
        } else {
            day += 1
        }
    }
    else if ( day_31.includes(month) ) {
        if ( day == 31 ) {
            day = 1
            if ( month == 12 ) {
                month = 1
                year += 1
            } else {
                month += 1
            }
        } else {
            day += 1
        }
    }
    else {
        if ( day == 28 ) {
            console.log("CHOI AC QUA")
            return
        }   
            if ( day == 29 ) {
                day = 1
                month +=1
            } else {
                day += 1
            }
    }
} else {
    if ( day_30.includes(month) ) {
        if ( day == 30 ) {
            day = 1
            month +=1
        } else {
        day += 1
        }
    }
    else if ( day_31.includes(month) ) {
        if ( day == 31 ) {
            day = 1
            if ( month == 12 ) {
                month = 1
                year += 1
            } else {
                month += 1
            }
        } else {
            day += 1
            }
    }
    else {
        if ( day == 29 ) {
            console.log("CHOI AC QUA")
            return
        }
            if ( day == 28 ) {
                day = 1
                month += 1
            } else {
                day += 1
            }
        }
    }
    console.log ( ` day : ${day} , month : ${month} , year : ${year}` )
    // console.lg ( ` ${day_31.includes(month)}` )
}
guess_next_date( 3,5,2024 )