//6
//in angular the factory method calls a service

angularFormsApp.factory('efService',
    function () {
        return {
            employee: {
                fullName: "John WestShower",
                notes: "The employee of our company",
                department: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });