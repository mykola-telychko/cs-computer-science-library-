/**
 * Основна функція `expect`, яка ініціює асерцію.
 * Вона приймає фактичне значення (actual) і повертає об'єкт з методами асерції.
 *
 * @param {*} actual - Фактичне значення, яке буде перевірятися.
 * @returns {Object} - Об'єкт, що містить методи для виконання асерцій.
 */
function expect(actual) {
  return {
    /**
     * Метод асерції `toBe` перевіряє, чи є фактичне значення STRICTLY EQUAL
     * (тотожно рівним, ===) очікуваному значенню.
     *
     * @param {*} expected - Очікуване значення для порівняння.
     * @returns {void} - Нічого не повертає, але викидає помилку, якщо асерція не пройдена.
     */
    toBe: function(expected) {
      if (actual === expected) {
        console.log(`Passed: Expected ${actual} to be ${expected}`);
      } else {
        throw new Error(`Failed: Expected ${actual} to be ${expected}, but got ${actual}`);
      }
    },

    /**
     * Метод асерції `toEqual` перевіряє, чи є фактичне значення DEEPLY EQUAL
     * (глибоко рівним) очікуваному значенню. Це корисно для порівняння об'єктів та масивів.
     * (Проста реалізація - для повноцінної потрібна рекурсивна перевірка)
     *
     * @param {*} expected - Очікуване значення для порівняння.
     * @returns {void}
     */
    toEqual: function(expected) {
      // Для простоти, тут ми просто порівнюємо через JSON.stringify().
      // Для повноцінної реалізації потрібно написати функцію глибокого порівняння об'єктів.
      if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log(`Passed: Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`);
      } else {
        throw new Error(`Failed: Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
      }
    },

    /**
     * Властивість `not` повертає інший об'єкт з інвертованими асерціями.
     */
    not: {
      /**
       * Метод `toBe` в контексті `not` перевіряє, чи НЕ є фактичне значення тотожно рівним очікуваному.
       *
       * @param {*} expected - Очікуване значення для порівonвання.
       * @returns {void}
       */
      toBe: function(expected) {
        if (actual !== expected) {
          console.log(`Passed: Expected ${actual} NOT to be ${expected}`);
        } else {
          throw new Error(`Failed: Expected ${actual} NOT to be ${expected}, but got ${actual}`);
        }
      }
      // Тут можна додати інші інвертовані асерції, наприклад, not.toEqual
    }
  };
}

// --- Приклади використання ---

// Успішні асерції
try {
  expect(5).toBe(5);
  expect("hello").toBe("hello");
  expect([1, 2]).toEqual([1, 2]); // Порівняння масивів
  expect({ a: 1 }).toEqual({ a: 1 }); // Порівняння об'єктів
  expect(5).not.toBe(10);
} catch (e) {
  console.error(e.message);
}

console.log("\n--- Спроби невдалих асерцій ---");

// Невдалі асерції
try {
  expect(5).toBe(10); // Це викине помилку
} catch (e) {
  console.error(e.message);
}

try {
  expect(5).not.toBe(5); // Це викине помилку
} catch (e) {
  console.error(e.message);
}

try {
  expect([1, 2]).toEqual([1, 3]); // Це викине помилку
} catch (e) {
  console.error(e.message);
}
