export type None = null | undefined;

export type Nullable<T> = T | None;

const isNone = <T>(nullable: Nullable<T>): nullable is None => nullable === null || nullable === undefined;

const isSome = <T>(nullable: Nullable<T>): nullable is T => nullable !== null && nullable !== undefined;

export const Nullable = {
    isNone,
    isSome,
};