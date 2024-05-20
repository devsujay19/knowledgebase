export default function NotFoundComponent() {
    return (
        <>
            <div className="flex h-screen gap-6  justify-center items-center align-middle">
                <div>
                    <span className="font-bold text-lg text-gray-300">404</span>
                </div>
                <div>
                    <span className="font-normal text-gray-300">Page not found.</span>
                </div>
            </div>
        </>
    );
};