let a 
let b 
let c
function getDelta( a,b,c ) {
    let delta = Math.pow( b, 2 ) - 4 * a * c
    if ( a !== 0 ) {
    if ( delta < 0 ) {
        console.log(`Vo nghiem`)
    }
    else if ( delta == 0 ) {
        console.log(`Nghiem kep ${calculate_No_kep( a, b, c, delta)}`)
    }
    else {
        console.log(`Nghiem phan biet ${calculate_2_No( a, b, c, delta)}`)
    }
    }
    else if ( b != 0 ) {
        console.log(`Phuong trinh no = ${- c / b}`)
    }
    else if ( b == 0 && c == 0 ) {
        console.log(`Phuong trinh vo so no `)
    }
    else if ( b == 0 && c != 0 ) {
        console.log(`phuong trinh vo nghiem`)
    }
}
function calculate_2_No ( a,b,c,delta ) {
    let x1 = ( -b + Math.sqrt(delta) ) / ( 2 * a )
    let x2 = ( -b - Math.sqrt(delta) ) / ( 2 * a )
    console.log(`Nghiem x1 = ${x1} , Nghiem x2 = ${x2}`)
}
function calculate_No_kep ( a,b,c,delta ) {
    let x_kep =  -b / 2*a
    console.log(`Nghiem x_kep = ${x_kep}`)
}
getDelta( 0, 0, 3)

