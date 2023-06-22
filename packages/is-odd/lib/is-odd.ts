import { isEven } from "@palam/is-even";

/**
 * Specifies if a number is even ot not
 * @param n the number to evaluate
 * @returns a boolean specifying if the number is even
 */
export const isOdd = (n: number): boolean => !isEven(n);
