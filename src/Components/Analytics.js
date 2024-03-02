import React from 'react';
import Sidebar from './Sidebar';
import { useSpring, animated } from 'react-spring';


export default function Analytics() {
    const slideIn = useSpring({
        transform: 'translateX(0)',
        from: { transform: 'translateX(100%)' },
        config: { duration: 2000 }
      });
    return (
        <div className="d-flex" id="wrapper" style={{height: '100vh'}}>
            <Sidebar />
            <div id="page-content-wrapper" style={{height: '100vh'}}>
                <div className="container-fluid">
                <animated.div style={slideIn}>
                    <h1 className="mt-4">Analytics Content</h1>
                    <p>(Slide in transition)</p>
                    <p>This is the content area.</p>
                    </animated.div>
                </div>
            </div>
        </div>
    );
}
