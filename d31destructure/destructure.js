

/**
 * 
 * @param {Object} salaries is an object with person's name and their salary
 * @returns {string} maxName is a person with highest salary.
 * Step 1: assign the property name of salaries object to name and salary variable
 * Step 2: Compare the salary of the first person to second. Whichever ones has highest salary, assign highest salary
 *         to another variable(maxSalary). 
 * Step 3: Compary maxSalary to next variable. Whichever one has highest salary, return the name
 */
export function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)){
        if(maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }   
    return maxName;

}

