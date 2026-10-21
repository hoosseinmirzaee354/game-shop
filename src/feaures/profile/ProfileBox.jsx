import Button from "../../ui/Button.jsx";

function ProfileBox() {
    return (
        <form className="w-2/3 bg-brand-2 rounded-lg">

            <h2 className='text-center text-2xl font-semibold mb-4'>Profile</h2>

            <div className="flex flex-col items-center gap-2">

                <div className='flex justify-center items-center relative'>
                    <img className='size-40 rounded-full cursor-pointer' src="/img/games/images%20(17).png" alt=""/>
                    <input className='size-40 rounded-full cursor-pointer opacity-0 absolute' type="file"/>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 px-4">
                    <input className='input w-full lg:w-2/5' placeholder="Full Name"/>
                    <input className='input w-full lg:w-2/5' placeholder="Nick Name"/>
                    <input className='input w-full lg:w-2/5' placeholder="Mobile"/>
                    <input className='input w-full lg:w-2/5' placeholder="Email"/>
                    <input className='input w-full lg:w-2/5' placeholder="New Password"/>
                    <input className='input w-full lg:w-2/5' placeholder="Confirm New Password"/>
                </div>

                <div className='flex justify-center w-full px-4'>
                    <input className='input w-full lg:w-2/5 '
                           placeholder="Current Password For Accept Save Settings"/>
                </div>

                <Button customClasses="my-4">Save Changes</Button>

            </div>

        </form>
    );
}

export default ProfileBox;