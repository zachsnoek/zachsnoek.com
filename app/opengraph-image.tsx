import { contentType, generateDefaultImage, size } from '../og';

export { contentType, size };

export default async function Image() {
    return generateDefaultImage();
}
