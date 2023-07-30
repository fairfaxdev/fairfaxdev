import ProfilePicture from "@/components/Taskbar/StartMenu/ProfilePicture";

function StartMenu() {
    return (
        <div className="absolute flex bottom-[30px] h-[600px] max-w-[405px] w-full bg-start-menu-glass rounded-[5px] shadow-start-menu-shadow py-2.5 pl-2.5 outline-offset-0 outline-[#555555] backdrop-blur-sm z-15">
            <div className="bg-[#ffffff] h-full max-w-[250px] w-full shadow-start-menu-apps-shadow border border-[#555555] rounded-[5px] p-3 shrink-0">
                <p className="text-xs">Testing Start Menu</p>
            </div>
            <div className="relative h-full w-full text-[#ffffff] px-2.5">
                <ProfilePicture />
                <span className="inline-block p-2 mb-2 rounded-[5px] w-full text-xs hover:bg-minimise-gradient hover:shadow-start-menu-shadow cursor-pointer">
                    Ben Fairfax
                </span>
                <span className="inline-block p-2 mb-2 rounded-[5px] w-full text-xs hover:bg-minimise-gradient hover:shadow-start-menu-shadow cursor-pointer">
                    Documents
                </span>
                <span className="inline-block p-2 mb-2 rounded-[5px] w-full text-xs hover:bg-minimise-gradient hover:shadow-start-menu-shadow cursor-pointer">
                    Pictures
                </span>
                <span className="inline-block p-2 mb-2 rounded-[5px] w-full text-xs hover:bg-minimise-gradient hover:shadow-start-menu-shadow cursor-pointer">
                    Control Panel
                </span>
                <span className="inline-block p-2 mb-2 rounded-[5px] w-full text-xs hover:bg-minimise-gradient hover:shadow-start-menu-shadow cursor-pointer">
                    Help and Support
                </span>
            </div>
        </div>
    )
}

export default StartMenu;
