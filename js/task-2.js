function formatMessage(message, maxLength) {
  // Перевірка довжини повідомлення
  if (message.length <= maxLength) {
    return message;
  }

  // Обрізання повідомлення
  const trimmedMessage = message.substring(0, maxLength - 3);

  // Додавання трьох крапок
  const formattedMessage = trimmedMessage + "...";

  // Повернення обрізаного повідомлення
  return formattedMessage;
}

// Приклади використання
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"