import React, {useEffect, useRef} from 'react';
import {FloatingPanel} from "antd-mobile";

const anchors = [0, window.innerHeight, window.innerHeight]

const Drawer = ({children, open, setOpen, verticalRatio = 100}) => {

    const drawer = useRef();

    useEffect(() => {
        setTimeout(() => {
            let ratio = 1;
            switch (verticalRatio) {
                case verticalRatio > 100:
                    ratio = 1
                    break;
                case verticalRatio < 1:
                    ratio = 0.01
                    break;
                default:
                    ratio = verticalRatio / 100
            }
            if(drawer.current) {
                drawer.current.setHeight(open? window.innerHeight * ratio : 0);
                drawer.current.open = open;
            }
        }, 0)
    }, [open]);

    return (<>
        {open ? <FloatingPanel onHeightChange={(h)=>{
            setTimeout(() => {
                if(h === 0 && drawer.current.open){
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
