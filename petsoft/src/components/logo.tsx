import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/">
            <Image src={logo} alt="PetSoftLogo" />
        </Link>
    ); //height and width not neccessary for local files
}
