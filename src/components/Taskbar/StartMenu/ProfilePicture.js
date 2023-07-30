function ProfilePicture() {
    return (
        <div className="relative flex items-center justify-center h-[75px] w-[75px] bg-profile-glass border-t border-l border-b border-r border-t-profile-top-left-border border-l-profile-top-left-border border-b-profile-bottom-right-border border-r-profile-bottom-right-border rounded-[3px] shadow-start-menu-shadow outline-offset-0 outline-[#555555] p-[5px] mx-auto overflow-hidden mt-[-45px] mb-[35px] after:bg-start-button-after-gradient after:content-[''] after:block after:absolute after:top-[-50%] after:left-[0px] after:w-full after:h-full">
            <div className="h-full w-full shadow-profile-shadow border border-profile-picture-border bg-profile-image bg-cover bg-center">

            </div>
        </div>

    )
}

export default ProfilePicture;