import { APIGatewayProxyResult } from 'aws-lambda';

import { two } from './consts';
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Headers required to provide a correct answer to FE
 */
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
};

/**
 * It prepares a standardized `APIGatewayProxyResult` with
 * an object as response.
 * @param code HTTP Core of Success
 * @param response Response object to be propagated to consumer
 */
export const successResponse = (code: number, response: any): APIGatewayProxyResult => ({
    statusCode: code,
    headers: corsHeaders,
    body: JSON.stringify(response),
});

/**
 * It prepares a standardized `APIGatewayProxyResult` with
 * only a message as response as well as logs out the error.
 * @param code HTTP Code of Error
 * @param message Message to be propagated to consumer
 */
export const errorMessage = (code: number, error: any, message: string): APIGatewayProxyResult => {
    console.error(JSON.stringify(error, null, two));
    return {
        statusCode: code,
        headers: corsHeaders,
        body: JSON.stringify({
            statusCode: code,
            message,
        }),
    };
};
