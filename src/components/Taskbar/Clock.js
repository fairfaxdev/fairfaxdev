import { useRef, useEffect } from "react";

function Clock() {
    // Create a ref to hold a reference to the span to display the clock in
    const displayClock = useRef(null);

    // Use the useEffect hook to run code after the component is mounted
    useEffect(() => {
    // Get the span using the ref created earlier
    const displayTime = displayClock.current;

    // Function to get the current time in the format HH:mm AM/PM
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    }

    // Function to update the time display with the current time
    function updateTime() {
        const currentTime = getCurrentTime();
        displayTime.innerHTML = currentTime;
    }

    // Call updateTime immediately to set the initial time on component mount
    updateTime();

    // Set up a timer to update the time every second (1000ms)
    const interval = setInterval(updateTime, 1000);

    // Clean up the timer when the component is unmounted to avoid memory leaks
    return () => clearInterval(interval);
    }, []); // The empty dependency array ensures that this effect runs only once, on component mount

    return (
        <span ref={displayClock} className="absolute text-[#ffffff] right-[15px] top-[25%] text-xs" />
    )
}

export default Clock;