const axios = require('axios');

async function forwardRequest(originalRequest, destinationURL) {
    try {
        const { method, headers, body, params, query } = originalRequest;
        const response = await axios({
            method,
            url: destinationURL,
            headers,
            params,
            data: body,
            paramsSerializer: (params) => {
                return Object.entries(params)
                    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                    .join('&');
            },
        });
        return {status: response.status, data: response.data};
    } catch (error) {
        if (error.response) {
            console.error('Error forwarding request:', error.response.status, error.response.data);
            return {
                status: error.response.status,
                data: error.response.data,
            };
        } else if (error.request) {
            console.error('No response received:', error.request);
            return {
                status: 500,
                data: 'No response received from the other server',
            };
        } else {
            console.error('Error setting up the request:', error.message);
            return {
                error: true,
                status: 500,
                data: 'Error setting up the request',
            };
        }
    }
}

module.exports = forwardRequest;
