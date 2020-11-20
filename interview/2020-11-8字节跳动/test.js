const func = ({ getState }) => next => (action) => {
    // Exit early if predicate function returns 'false'
    if (typeof predicate === 'function' && !predicate(getState, action)) {
        return next(action);
    }

    const logEntry = {};

    logBuffer.push(logEntry);

    logEntry.started = timer.now();
    logEntry.startedTime = new Date();
    logEntry.prevState = stateTransformer(getState());
    logEntry.action = action;

    let returnedValue;
    if (logErrors) {
        try {
            returnedValue = next(action);
        } catch (e) {
            logEntry.error = errorTransformer(e);
        }
    } else {
        returnedValue = next(action);
    }

    logEntry.took = timer.now() - logEntry.started;
    logEntry.nextState = stateTransformer(getState());

    const diff = loggerOptions.diff && typeof diffPredicate === 'function'
        ? diffPredicate(getState, action)
        : loggerOptions.diff;

    printBuffer(logBuffer, Object.assign({}, loggerOptions, { diff }));
    logBuffer.length = 0;

    if (logEntry.error) throw logEntry.error;
    return returnedValue;
};
