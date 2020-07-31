function check_prime(num) {
  for (i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function prime_sequences(num) {
  let pivot = num;
  let prime_sequence = [];
  while (prime_sequence.length < 5) {
    pivot = pivot + 1;
    if (check_prime(pivot)) {
      prime_sequence.push(pivot);
    }
  }
  return prime_sequence;
}

function create_list_index() {}

console.log(prime_sequences(3));
