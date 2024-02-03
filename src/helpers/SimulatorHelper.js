class SimulatorHelperFunctions {
    static getCurrentFacingAfterLeft = (robotCurrentFacing = 0) => {
        let currentFacing = robotCurrentFacing - 90;
        currentFacing = currentFacing === -360 ? 0 : currentFacing;
        return currentFacing;
    };

    static getRobotCurrentFacing = (robotCurrentFacing = 0) => {
        let facing = '';
        switch(robotCurrentFacing) {
            case 0:
            case 360:
            default:
                facing = 'East';
                break;
            case 90:
            case -90:
                facing = 'North';
                break;
            case 180:
            case -180:
                facing = 'West';
                break;
            case 270:
            case -270:
                facing = 'South';
                break;                
        }
        return facing;
    };

    static isNotValidPosition = (
        robotCurrentFacing = 0,
        x = 0,
        y = 0
    ) => {
        return (robotCurrentFacing === -90 && y === 4) || (robotCurrentFacing === 0 && x === 4) || (x === 4 && y === 4);
    }

    static getCurrentFacingAfterRight = (robotCurrentFacing = 0) => {
        let currentFacing = robotCurrentFacing + 90;
        currentFacing = currentFacing === 360 ? 0 : currentFacing;
        return currentFacing;
    };

    static getUpdatedRobotPlacement = (
        robotCurrentFacing = 0,
        x = 0,
        y = 0
    ) => {
        let updatedRobotPlacement = {x: 0, y: 0};
        x = robotCurrentFacing === 0 ? ++x : x;
        y = robotCurrentFacing === -90 ? ++y : y;
        updatedRobotPlacement = {x: x, y: y};
        return updatedRobotPlacement;
    };
}

export default SimulatorHelperFunctions;