

/**
 * Находит наибольший общий делитель алгоритмом Евклида.
 * @function euclid
 * @param {...number} numbers - Переменное число параметров.
 * @returns {number} Наибольший общий делитель
 */
const euclid = (...numbers) => {
    // Проверка на корректность входных данных
    if (numbers.some((element) => typeof element != 'number')) {
        throw TypeError('Incorrect input')
    }

    // Алгоритм Евклида
    const initialResult = numbers[0] === undefined ? 0: numbers[0];
    return numbers.reduce((result, currentValue) => {
        let a = result;
        let b = currentValue;
        while (a !== b) {
            if (a > b) {
                const tmp = a;
                a = b;
                b = tmp;
            }
            b = b - a;
        }
        return a;
    }, initialResult );
}




