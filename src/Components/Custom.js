import React from 'react';
import Sidebar from './Sidebar';
import { useSpring, animated } from 'react-spring';


export default function Custom() {
    const rotateIn = useSpring({
        transform: 'rotate(0deg)',
        from: { transform: 'rotate(360deg)' },
        config: { duration: 500 }
      });
    return (
        <div className="d-flex" id="wrapper" style={{height: '100vh'}}>
            <Sidebar />
            <div id="page-content-wrapper" style={{height: '100vh'}}>
                <div className="container-fluid">
                <animated.div style={rotateIn}>
                    <h1 className="mt-4">Custom Content</h1>
                    <p>(Rotate in transition)</p>
                    <p>This is the content area.</p>
                    </animated.div>
                </div>
            </div>
        </div>
    );
}
