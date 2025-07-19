import Header from '@/components/layout/Header';

const User: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                        User Page
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        This is the user page. More content will be added soon.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default User;