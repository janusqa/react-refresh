import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Evento';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return new ImageResponse(
        (
            <section>
                <h1>{slug}</h1>
                <p>Evento - Browse events around you</p>
            </section>
        )
    );
}
