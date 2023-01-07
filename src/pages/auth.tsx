
const Auth = () => {
    return <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Sign In</h2>
                <form className="mt-4">
                    <input type="text" className="input input-bordered" placeholder="Enter your email"/>
                    <input type="password" className="input input-bordered mt-4" placeholder="Enter your password"/>
                </form>
                <div className="card-actions mt-4 items-center">
                    <button>
                        Forgot Password?
                    </button>
                    <button className="btn btn-primary">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default Auth;