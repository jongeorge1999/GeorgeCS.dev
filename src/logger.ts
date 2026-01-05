export class Logger {
    static log(msg: string, ...args: any[]) {
        console.log(`[LOG] ${msg}`, ...args);
    }

    static error(msg: string, ...args: any[]) {
        console.error(`[ERR] ${msg}`, ...args);
    }

    static warn(msg: string, ...args: any[]) {
        console.warn(`[WARN] ${msg}`, ...args);
    }
}
