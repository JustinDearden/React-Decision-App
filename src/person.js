export { isAdult, canDrink, adultCombo, newCombo };

const isAdult = (age) => age >= 18;
// const isAdult = (x) => {
//     if(x > 18)
//         return true;
//     else
//         return false;
// };

const canDrink = (age) => age >= 21;

// const canDrink = (x) => {
//     if (x > 21)
//         return true;
//     else    
//         return false;
// };

const newCombo = (age) => age >= 21 ? 'Is an adult and can drink' : 'Is an adult but cannot drink';

export default (age) => age > 64 ? 'They are a senior' : 'They are not a senior';


const adultCombo = (x) => {
    if(!isAdult(x)) {
        return 'Is an adult but cannot drink'
    } else if (isAdult(x) && canDrink(x)) {
        return 'Is an adult and can drink'
    }
};