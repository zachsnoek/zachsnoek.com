import { Cloudinary } from '@cloudinary/url-gen';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { TextFitQualifier } from '@cloudinary/url-gen/qualifiers/textFit';
import { Position } from '@cloudinary/url-gen/qualifiers';
import { compass } from '@cloudinary/url-gen/qualifiers/gravity';

const TEMPLATE_FILE = 'blog-post-og-template.png';
const FONT_FILE = 'karrik.ttf';

export function createSocialImageUrl(title: string) {
    const cloudinary = new Cloudinary({
        cloud: { cloudName: process.env.CLOUDINARY_CLOUD_NAME },
        url: { secure: true },
    });

    const image = cloudinary.image(TEMPLATE_FILE);

    image.overlay(
        source(
            text(title, new TextStyle(FONT_FILE, 96))
                .textColor('#FFF')
                .textFit(new TextFitQualifier(1036, 420))
        ).position(
            new Position()
                .gravity(compass('north_west'))
                .offsetX(82)
                .offsetY(72)
        )
    );

    return image.toURL();
}
