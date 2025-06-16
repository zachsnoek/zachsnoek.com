import {
    contentType,
    generateDefaultImage,
    size,
} from '../og/generateOpenGraphImage';

export { contentType, size };

export default async function Image() {
    return generateDefaultImage();
}
