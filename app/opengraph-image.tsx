import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    const karrikRegular = await readFile(
        join(process.cwd(), 'assets/opengraph/Karrik-Regular.ttf')
    );

    const portraitData = await readFile(
        join(process.cwd(), 'assets/opengraph/portrait.jpg')
    );
    const portraitSrc = Uint8Array.from(portraitData).buffer;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#FFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '48px',
                    padding: '48px',
                    color: '#212224',
                }}
            >
                <div
                    style={{
                        color: '#000',
                        fontSize: 82,
                    }}
                >
                    Writing articles and tutorials about JavaScript, React, and
                    more
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '18px',
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                        <img
                            // @ts-expect-error I'm just doing what the docs say
                            src={portraitSrc}
                            style={{
                                borderRadius: '50%',
                                height: 200,
                            }}
                        />
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <span style={{ fontSize: 56 }}>Zach Snoek</span>
                            <span style={{ fontSize: 42, color: '#555774' }}>
                                zachsnoek.com
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Karrik',
                    data: karrikRegular,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    );
}
