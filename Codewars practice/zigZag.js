function solution(numbers) {
  let temp;
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > numbers[i + 1]) temp = numbers[i];
  numbers[i] = numbers[i + 1];
  numbers[i + i] = temp;
  return temp;
}
