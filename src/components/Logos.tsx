import Image from "next/image";

export default function Logos() {
    return (
        <>
            <div className="w-full flex flex-wrap justify-between gap-10">
                <Image
                    src="/images/logos/classroom-logo.png"
                    alt="Google Classroom"
                    width={302}
                    height={44}
                    style={{ objectFit: "contain" }}
                />
                <Image
                    src="/images/logos/maps-logo.png"
                    alt="Google Maps"
                    width={220}
                    height={45}
                    style={{ objectFit: "contain" }}
                />
                <Image
                    src="/images/logos/dojo-logo.webp"
                    alt="ClassDojo"
                    width={220}
                    height={63}
                    style={{ objectFit: "contain" }}
                />
                <Image
                    src="/images/logos/synthesis-logo.jpg"
                    alt="Synthesis"
                    width={180}
                    height={37}
                    style={{ objectFit: "contain" }}
                />
                <Image
                    src="/images/logos/ku-logo.png"
                    alt="Kindle Unlimited"
                    width={220}
                    height={32}
                    style={{ objectFit: "contain" }}
                />
            </div>
        </>
    );
}
