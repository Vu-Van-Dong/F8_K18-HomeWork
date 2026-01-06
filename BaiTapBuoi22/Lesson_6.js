

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

function getElectricityBill(electric) {
		if (electric <= 0) {
				return "Invalid consumption"
		} else if (electric <= 50) {
				return electric * 1678
		} else if (electric <= 100) {
				return 50 * 1678 + (electric - 50) * 1734
		} else if (electric <= 200) {
				return 50 * 1678 + 50 * 1734 + (electric - 100) * 2014
		} else {
				return (
						50 * 1678 + 50 * 1734 + 100 * 2014 + (electric - 200) * 2536
				)
		}
}

// Example
console.log(getElectricityBill(1020))












