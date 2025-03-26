import { Metadata } from "next";
import unsplash from "@/utils/api/unsplash";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Photos',
    alternates: {
        canonical: '/photos',
    },
    openGraph: {
        url: '/photos',
    },
};

const Photos = async () => {
    const photos = await unsplash.getImages();
    return (
        <section>
            <div className="columns-1 sm:columns-2 md:columns-3 2xl:columns-4 gap-3 mx-3 my-3">
                {photos.map((image: any, index: any) => (
                    <div key={image.id} className="mb-3 break-inside-avoid">
                        <Image
                            alt={`Photo ${index + 1} by ${image.author}`}
                            src={image.urls.full}
                            width={3905}
                            height={5849}
                            className="w-full h-auto"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1536px) 33vw, 25vw"
                            loading={index < 4 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photos;