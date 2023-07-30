import WindowsIcon from '@/components/Taskbar/StartButton/WindowsIcon';

function StartButton({ onClick }) {
    return (
        <div onClick={onClick} className="cursor-pointer absolute top-[-5px] left-[15px] w-10 h-10 rounded-full bg-start-button-gradient shadow-[inset_0_0_2px_0_rgba(0,0,0,0.5)] z-10 overflow-hidden p-1.5 after:content-[''] after:absolute after:left-0 after:top-[-50%] after:inline-block after:w-full after:h-full after:bg-start-button-after-gradient">
            <WindowsIcon />
        </div>
    );
}

export default StartButton;
