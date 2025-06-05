import { ImageResponse } from 'next/og';
import { getPost } from '../../../utils/posts';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);

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
                }}
            >
                <div
                    style={{
                        flexGrow: 1,
                        padding: '32px 56px',
                        color: '#000',
                        fontSize: 96,
                    }}
                >
                    {post.title}
                </div>
                <div
                    style={{
                        flexGrow: 0,
                        flexShrink: 1,
                        display: 'flex',
                        fontSize: 56,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: '32px',
                        paddingRight: '32px',
                        paddingBottom: '32px',
                        color: '#212224',
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
                                height: 100,
                            }}
                        />
                        <span>Zach Snoek</span>
                    </span>
                    <span>zachsnoek.com</span>
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
