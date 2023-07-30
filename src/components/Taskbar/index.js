import { useState } from 'react';
import StartButton from '@/components/Taskbar/StartButton';
import StartMenu from '@/components/Taskbar/StartMenu';
import Clock from '@/components/Taskbar/Clock';

function Taskbar() {
  // Define a state variable named `menuVisible` with an initial value of `false`.
  const [menuVisible, setMenuState] = useState(false);

  // Create a function named `toggleMenu` which is used to toggle the value of `menuVisible`.
  const toggleMenu = () => {
    // The `setMenuState` function is used to update the value of `menuVisible`.
    setMenuState((prevState) => !prevState);
  };

  return (
    <div className="fixed bottom-0 h-[30px] w-full bg-taskbar-gradient border-t border-t-[#000000] z-[15]">
      <div className="relative w-full overflow-hidden h-full px-24">
        <div className="absolute top-[-5px] left-[15px] w-10 h-10 rounded-full shadow-start-button-shadow"></div>
      </div>
      <StartButton onClick={toggleMenu} />
      {menuVisible && <StartMenu />}
      <Clock />
    </div>
  );
}

export default Taskbar;
