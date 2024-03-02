import React from 'react';
import Sidebar from './Sidebar';
import { useSpring, animated } from 'react-spring';



export default function Chatsandtags() {
    const zoomIn = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0.5)' },
        config: { duration: 2000 }
    });
    return (
        <div className="d-flex" id="wrapper" style={{ height: '100vh' }}>
            <Sidebar />
            <div id="page-content-wrapper" style={{ height: '100vh' }}>
                <div className="container-fluid">
                    <animated.div style={zoomIn}>
                        <h1 className="mt-4">Chats and tags content</h1>
                        <p>(Zoom in transition)</p>
                        <p>This is the content area.</p>
                    </animated.div>
                </div>
            </div>
        </div>
    );
}
