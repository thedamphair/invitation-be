import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

import { componentsBucket } from '../config';

const s3 = new S3Client({ region: 'us-east-1' });

/**
 * Retrieves a guest by Id
 * @param key email
 * @returns guest
 */
export const getGuestsFile = async (key: string) => {
    const command = new GetObjectCommand({
        Bucket: componentsBucket,
        Key: key,
    });
    const data = await s3.send(command);
    const bodyStream = data.Body;
    const bodyBuffer = await streamToBuffer(bodyStream);
    const processedBody = JSON.parse(bodyBuffer.toString());
    return processedBody;
};

const streamToBuffer = (stream): Promise<Buffer> =>
    new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
