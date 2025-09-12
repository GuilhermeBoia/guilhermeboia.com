import Image from 'next/image'

export const Logo = () => {
    return (
        <Image src="/logo-lp.png" alt="Logo" width={150} height={150} />
    );
}

export const LogoIcon = () => {
    return (
        <Image src="/logo.png" alt="Logo Icon" width={150} height={150} />
    );
}