const LoadingSpinner = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-[#145C39]"></span>
            <p className="text-[#145C39] font-medium">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
