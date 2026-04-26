import BgGlassmorphism from "@/components/BgGlassmorphism";

export default async function AccountPass() {
    return (
        <main className="nc-PageHome relative overflow-hidden">
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                <div className="relative py-16 lg:py-28">
                    <div className="container">
                        <div className="max-w-4xl mx-auto space-y-5 text-center">
                            <h2 className="text-3xl font-semibold">Pages</h2>
                            <p className="mt-4 text-gray-500">
                                The custom pages feature backed by SQLite has been disabled.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}