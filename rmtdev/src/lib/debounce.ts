// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends any[]>(
    func: (...args: T) => void,
    timeout = 300
) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: T) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    };
};
