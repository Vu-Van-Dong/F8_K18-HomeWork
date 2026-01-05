

//Lesson 6: Household Electricity Bill Calculation
// 	Assume the electricity tariff for a household is calculated using the progressive method (tiered pricing) as follows:
// 		Tier 1: For the first 50 kWh: 1,678 VND/kWh.
// 		Tier 2: From the 51st to 100th kWh: 1,734 VND/kWh.
// 		Tier 3: From the 101st to 200th kWh: 2,014 VND/kWh.
// 		Tier 4: Above 200 kWh: 2,536 VND/kWh.
//
// 	Write a function to calculate the electricity bill
// 		Input: electricity consumption (kWh)
// 		Output: amount to pay
//
//
//


let elctric = 109

function electricPrice(elctric) {
		if (elctric > 0 && elctric <= 50) {
				return elctric * 1678
		} else if ( elctric>50 && elctric <= 100 ) {
				return 50 * 1678 + (elctric - 50) * 1734
		} else if ( elctric >100 && elctric <= 200) {
				return 50 * 1678 + 50 * 1734 + (elctric - 100) * 2014
		} else {
				return 50 * 1678 + 50 * 1734 + 100 * 2014 + (elctric - 200) * 2536
		}
}

console.log("Tien dien:", electricPrice(elctric))













