// 1

/** Определяет является ли объект пустым
 * 
 * @param {obj} объект
 * @return true или false
 */

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let user = {};
// user.age = 12;
alert(isEmpty(user));



// 3

/**увеличивает зарплату на определенный процент
 * @param {number} perzent - процент, на который увеличивается зарплата
 * @param {number} allowance - сумма начисления
 * @param {number} salaries - размер зарплаты
 */

function raiseSalary(perzent, salaries) {
    for (let key in salaries) {
        let allowance = salaries[key] * perzent / 100;
        let newsalaries = salaries[key] + allowance;
        console.log(Math.floor(newsalaries));
    }
}

let salaries = {
    John: 100000,
    Ann: 160000,
    Pete: 130000,
};

let perzent = 5;

raiseSalary(perzent, salaries);