import { APIGatewayProxyEvent } from 'aws-lambda';

import { getGuestsFile } from '../data';
import { HttpStatus } from '../utils/consts';
import { errorMessage, successResponse } from '../utils';

/**
 * This method retrieves guests list
 * @param event
 * @returns list of guests
 */
export const retrieveGuestsList = async (event: APIGatewayProxyEvent) => {
    try {
        const fileName = event.queryStringParameters?.fileName;
        if (!fileName) {
            throw { message: 'Unable to retrieve file.' };
        }
        const response = await getGuestsFile(`${fileName}.json`);
        return successResponse(HttpStatus.OK, response);
    } catch (error) {
        return errorMessage(
            error.statusCode || HttpStatus.BAD_REQUEST,
            error,
            error.message || 'Error updating the guest.',
        );
    }
};
