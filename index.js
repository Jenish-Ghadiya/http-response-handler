const responseHandler = {
    success: (res, message, data, statusCode = 200) => {
        res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    },
    error: (res, message, statusCode = 500) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    validationError: (res, message, statusCode = 400) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    notFound: (res, message, statusCode = 404) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    unauthorized: (res, message, statusCode = 401) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    forbidden: (res, message, statusCode = 403) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    badRequest: (res, message, statusCode = 400) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    internalServerError: (res, message, statusCode = 500) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    conflict: (res, message, statusCode = 409) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    tooManyRequests: (res, message, statusCode = 429) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    serviceUnavailable: (res, message, statusCode = 503) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    gatewayTimeout: (res, message, statusCode = 504) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    unprocessableEntity: (res, message, statusCode = 422) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    created: (res, message, data, statusCode = 201) => {
        res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    },
    accepted: (res, message, data, statusCode = 202) => {
        res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    },
    noContent: (res, statusCode = 204) => {
        res.status(statusCode).send();
    },
    movedPermanently: (res, newLocation, statusCode = 301) => {
        res.status(statusCode).redirect(newLocation);
    },
    temporaryRedirect: (res, newLocation, statusCode = 307) => {
        res.status(statusCode).redirect(newLocation);
    },
    paymentRequired: (res, message, statusCode = 402) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    methodNotAllowed: (res, message, statusCode = 405) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    notAcceptable: (res, message, statusCode = 406) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    preconditionFailed: (res, message, statusCode = 412) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    unsupportedMediaType: (res, message, statusCode = 415) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    imATeapot: (res, message, statusCode = 418) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    upgradeRequired: (res, message, statusCode = 426) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    notImplemented: (res, message, statusCode = 501) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
    badGateway: (res, message, statusCode = 502) => {
        res.status(statusCode).json({
            success: false,
            message,
        });
    },
};

export default responseHandler;