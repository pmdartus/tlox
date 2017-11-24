export interface Logger {
    debug(msg: string): void;
    log(msg: string): void;
    warning(msg: string): void;
    error(msg: string): void;
}