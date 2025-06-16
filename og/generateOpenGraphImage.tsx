import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

const karrikRegular = readFile(join(process.cwd(), 'og/Karrik-Regular.ttf'));
const portraitData = readFile(join(process.cwd(), 'og/portrait.jpg'));

async function generateImage(jsx: JSX.Element) {
    return new ImageResponse(jsx, {
        ...size,
        fonts: [
            {
                name: 'Karrik',
                data: await karrikRegular,
                style: 'normal',
                weight: 400,
            },
        ],
    });
}

async function getPortraitSrc() {
    return Uint8Array.from(await portraitData).buffer;
}

export async function generateDefaultImage() {
    const portraitSrc = await getPortraitSrc();
    return generateImage(
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
                Writing articles and tutorials about JavaScript, React, and more
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
                        gap: '24px',
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
    );
}

export async function generateBlogPostImage({ title }: { title: string }) {
    const portraitSrc = await getPortraitSrc();
    return generateImage(
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
                {title}
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
    );
}
