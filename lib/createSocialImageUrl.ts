import { Cloudinary } from '@cloudinary/url-gen';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { TextFitQualifier } from '@cloudinary/url-gen/qualifiers/textFit';

export function createSocialImageUrl(title: string) {
    const cloudinary = new Cloudinary({
        cloud: { cloudName: 'zachsnoek' },
        url: { secure: true },
    });

    const image = cloudinary.image('background-test_ea6zbw.jpg');

    image.overlay(
        source(
            text(
                title,
                new TextStyle('Arial', 50).textAlignment('center')
            ).textFit(new TextFitQualifier(700, 300))
        )
    );

    return image.toURL();
}
