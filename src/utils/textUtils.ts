// Utility functions for text manipulation and formatting
export function capitalize(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Safely converts text to lowercase, handling null or undefined values
export function toLowerCaseSafe(text: string | null | undefined): string {
  return text ? text.toLowerCase() : '';
}


// Truncates text to a specified length and appends an ellipsis if necessary
export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

// Formats a number as a price string in the specified currency
export function formatPrice(amount: number, currency: 'COP' | 'USD'): string {
  if (currency === 'COP') {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);
}