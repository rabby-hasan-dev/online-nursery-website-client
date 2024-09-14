import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';


const PageRefreshWarning = () => {
    const cartItems = useAppSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (cartItems.length > 0) {
                event.preventDefault();
                event.returnValue = ''; // This triggers the browser's warning dialog
            }
        };

        // Add event listener for page unload
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [cartItems]);

    return null; // This component doesn't need to render anything
};

export default PageRefreshWarning;

