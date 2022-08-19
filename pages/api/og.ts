import { NextApiRequest, NextApiResponse } from 'next';
import { createSocialImageUrl } from '../../utils/createSocialImageUrl';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        res.status(405).json({});
        return;
    }

    const imageText = req.query.text;

    if (!imageText || typeof imageText !== 'string') {
        res.status(400).json({});
        return;
    }

    const url = createSocialImageUrl(imageText);

    const image = await fetch(url);
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.status(200).setHeader('Content-Type', 'image/png').send(buffer);
}
