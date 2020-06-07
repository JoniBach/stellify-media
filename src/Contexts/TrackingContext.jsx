// Note: This context will hold our tracking data in a single state to be accessed across the lifecycle of the whole app
import React, { useState } from 'react';

export const TrackingContext = React.createContext();

export const TrackingProvider = (props) => {
const [tracking, setTracking] = useState([]);

        return (
            <TrackingContext.Provider value={[tracking, setTracking]}>
                {props.children}
            </TrackingContext.Provider>
        );

}