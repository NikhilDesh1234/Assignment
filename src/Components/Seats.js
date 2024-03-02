import React from 'react';
import Sidebar from './Sidebar';
import { useSpring, animated } from 'react-spring';

export default function Seats() {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 }
    });
    return (
        <div className="d-flex" id="wrapper" style={{ height: '100vh' }}>
            <Sidebar />
            <div id="page-content-wrapper" style={{ height: '100vh' }}>
                <div className="container-fluid">
                    <animated.div style={fadeIn}>
                        <h1 className="mt-4">Seats Content </h1>
                        <p>(Fade in transition)</p>
                        <p>This is the content area.</p>
                    </animated.div>
                </div>
            </div>
        </div>
    );
}
