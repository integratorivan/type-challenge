export type MyPick<T, E extends keyof T> = {
    [M in E]: T[M];
}