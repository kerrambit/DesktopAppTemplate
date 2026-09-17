/**
 * Copyright (c) YEAR-now MyApp contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Your Name
 */

type Success<T> = {
    success: true;
    value: T;
};

type Failure = {
    success: false;
    error: Error;
};

export type Result<T> = Success<T> | Failure;
