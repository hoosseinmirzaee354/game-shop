function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <main className="h-lvh bg-blue-900 flex justify-center items-center p-5">
            <div className="bg-blue-800 border border-blue-700 rounded-md p-5 text-center">
                <h1 className="mb-1.5">Something went wrong !</h1>
                <p className='text-blue-300 mb-3'>{error.message}</p>
                <button className='rounded-lg px-6 py-3 bg-blue-950 text-center' onClick={resetErrorBoundary}>
                    Try again
                </button>
            </div>
        </main>
    );
}

export default ErrorFallback;