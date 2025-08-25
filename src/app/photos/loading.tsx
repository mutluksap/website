export default function Loading() {
    return (
        <section className="mx-3 my-3">
            <div className="columns-1 sm:columns-2 md:columns-3 2xl:columns-4 gap-3">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="mb-3 break-inside-avoid">
                        <div className="relative overflow-hidden w-full h-[400px] bg-gray-300">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}