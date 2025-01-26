import {filter, OperatorFunction} from 'rxjs';

export function filterNull<T>(): OperatorFunction<T, NonNullable<T>> {
  return filter<T, NonNullable<T>>((value): value is NonNullable<T> => value !== undefined && value !== null);
}
