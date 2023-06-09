export function capitalize(input: string): string {
    if (input && input.length > 0) {
        return input.charAt(0).toUpperCase() + input.substring(1);
    } else {
        return '';
    }
}

export function arrayToString(array: string[]) {
    if (!array) return 'n/a';

    return array.join(', ');
}
