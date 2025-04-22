import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const linkStyles =
    'flex gap-x-2 items-center text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm';

export default function PaginationControls({
    prevUrl,
    nextUrl,
}: {
    prevUrl: string;
    nextUrl: string;
}) {
    return (
        <section className="flex justify-between w-full mt-2 mx-auto px-10 gap-10">
            <Link href={prevUrl} className={linkStyles}>
                <ArrowLeftIcon />
                Previous
            </Link>
            <Link href={nextUrl} className={linkStyles}>
                Next
                <ArrowRightIcon />
            </Link>
        </section>
    );
}
