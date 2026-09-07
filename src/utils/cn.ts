export function cn(...classes: unknown[]): string {
  return classes.filter((value): value is string => typeof value === 'string').join(' ')
}
