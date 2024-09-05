import React, {useEffect, useRef} from 'react';
import {FloatingPanel} from "antd-mobile";

const anchors = [0, window.innerHeight, window.innerHeight]

const Drawer = ({children, open, setOpen}) => {

    const drawer = useRef();

    useEffect(() => {
        setTimeout(() => {
            if(drawer.current) {
                drawer.current.setHeight(open? window.innerHeight : 0);
                drawer.current.open = open;
            }
        }, 0)
    }, [open]);

    return (<>
        {open ? <FloatingPanel onHeightChange={(height)=>{
            setTimeout(() => {
                if(height === 0 && drawer.current.open){
                    drawer.current.open = false;
                    setOpen(false);
                }
            }, 1)
        }} anchors={anchors} ref={drawer}>
            {children}
        </FloatingPanel> : ''
        }
    </>)
}

export default Drawer;
