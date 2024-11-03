export function addPayment<T>(a: T, b: T, c: number): T {
  console.log(a, b, c);
  return <T>"Hey";
}
