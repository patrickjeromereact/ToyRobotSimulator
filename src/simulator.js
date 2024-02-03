import React, {useState} from 'react';

/* Assets */
import ToyRobot from './assets/images/robot.png';
import Table from './assets/images/table.jpg';
import Background from './assets/images/robotic-background.jpg';

/* Component */
import Popup from './components/Modal/Popup';

/* Helper */
import SimulatorHelperFunctions from './helpers/SimulatorHelper';

const Simulator = () => {
    const [robotPlacement, setRobotPlacement] = useState({x: 0, y: 0});
    const [robotCurrentFacing, setRobotCurrentFacing] = useState(0);
    const [showReport, setShowReport] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const moveRobot = () => {
        if (isNotValidPosition()) {
            setShowAlert(true);
        }
        else {
            let {x, y} = robotPlacement;
            setRobotPlacement(SimulatorHelperFunctions.getUpdatedRobotPlacement(robotCurrentFacing, x, y));
        }
    };

    const renderNotValidMove = () => {
        return (<div className='report-modal'>
            <Popup 
                isOpen={showAlert}
                header={'Alert'}
                showCloseIcon={true}
                modalCtrCls={'alert-modal'}
                isAlertType={true}
                modalMessage={'Not a valid move. Please check the robot facing and position.'}
                onModalClose={() => {setShowAlert(false)}}
                />
        </div>)
    };

    const turnLeft = () => {
        setRobotCurrentFacing(SimulatorHelperFunctions.getCurrentFacingAfterLeft(robotCurrentFacing));
    };

    const turnRight = () => {
        setRobotCurrentFacing(SimulatorHelperFunctions.getCurrentFacingAfterRight(robotCurrentFacing));
    };    

    const isNotValidPosition = () => {
        const {x, y} = robotPlacement;
        return SimulatorHelperFunctions.isNotValidPosition(robotCurrentFacing, x, y);
    };

    const initializeRobot = () => {
        setRobotPlacement({x: 0, y: 0});
        setRobotCurrentFacing(0);
    };

    const showReportModal = () => {
        setShowReport(true);
    };    

    const robotStyle = {
        background: `url(${ToyRobot})`,
        transform: `rotate(${robotCurrentFacing}deg)`,
        left: `${robotPlacement?.x * 100}px`,
        bottom: `${robotPlacement?.y * 100}px`,
        backgroundSize: '100%'
    }

    const renderReport = () => {
        const {x, y} = robotPlacement;
        const robotFacing = SimulatorHelperFunctions.getRobotCurrentFacing(robotCurrentFacing);
        return (<div className='report-modal'>
            <Popup 
                isOpen={showReport}
                header={'Robot Position'}
                showCloseIcon={true}
                modalCtrCls={'report-modal'}
                modalMessage={`x: ${x}, y: ${y}, f: ${robotFacing}`}
                onModalClose={() => {setShowReport(false)}}
                />
        </div>)
    };

    return (
        <div className='wrapper' style={{background: `url(${Background})`, backgroundSize: 'cover'}}>
            <header>{'Toy Robot Simulator'}</header>
            <div className='simulator'>
                <div className='table-holder' style={{background: `url(${Table})`, backgroundSize: '100%'}}>
                    <div className='toy-robot' style={robotStyle} />
                </div>
            </div>
            <div className='simulator-controller'>
                <button className='btn' onClick={initializeRobot}>{'Place'}</button>
                <button className='btn' onClick={turnLeft}>{'Left'}</button>
                <button className='btn' onClick={turnRight}>{'Right'}</button>
                <button className='btn' onClick={moveRobot}>{'Move'}</button>
                <button className='btn' onClick={showReportModal}>{'Report'}</button>
            </div>
            {!!showReport && renderReport()}
            {!!showAlert && renderNotValidMove()}
        </div>
    )
}

export default Simulator;

