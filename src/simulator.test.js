import { render, screen } from '@testing-library/react';
import Simulator from './simulator';
import Popup from './components/Modal/Popup';
import SimulatorHelperFunctions from './helpers/SimulatorHelper';

test('renders header text', () => {
    render(<Simulator />);
    const headerElement = screen.getByText(/Toy Robot Simulator/i);
    expect(headerElement).toBeInTheDocument();
});

describe('current robot facing after left', () => {
    test('robot facing after turn left', () => {
        expect(SimulatorHelperFunctions.getCurrentFacingAfterLeft(0)).toBe(-90);
    });
});

test('renders module popup', () => {
    render(<Popup 
        isOpen={true}
        header={'Alert'}
        showCloseIcon={true}
        modalCtrCls={'alert-modal'}
        modalMessage={'test message'}
        />);
    const messageElement = screen.getByText(/test message/i);
    expect(messageElement).toBeInTheDocument();
});

test('renders place button', () => {
    render(<Simulator />);
    const placeButton = screen.getByText(/Place/i);
    expect(placeButton).toBeInTheDocument();
});

test('renders left button', () => {
    render(<Simulator />);
    const leftButton = screen.getByText(/Left/i);
    expect(leftButton).toBeInTheDocument();
});

test('renders right button', () => {
    render(<Simulator />);
    const rightButton = screen.getByText(/Right/i);
    expect(rightButton).toBeInTheDocument();
});

test('renders move button', () => {
    render(<Simulator />);
    const moveButton = screen.getByText(/Move/i);
    expect(moveButton).toBeInTheDocument();
});

test('renders report button', () => {
    render(<Simulator />);
    const reportButton = screen.getByText(/Report/i);
    expect(reportButton).toBeInTheDocument();
});

describe('check robot position valid', () => {
    test('robot position is not valid', () => {
        expect(SimulatorHelperFunctions.isNotValidPosition(0, 4, 0)).toBe(true);
    });
});

describe('current robot facing after right', () => {
    test('robot facing after turn right', () => {
        expect(SimulatorHelperFunctions.getCurrentFacingAfterRight(0)).toBe(90);
    });
});

describe('get current robot facing', () => {
    test('robot current facing for East', () => {
        expect(SimulatorHelperFunctions.getRobotCurrentFacing(0)).toBe('East');
    });
});

describe('get current robot facing', () => {
    test('robot current facing for North', () => {
        expect(SimulatorHelperFunctions.getRobotCurrentFacing(-90)).toBe('North');
    });
});

describe('get updated robot placement', () => {
    test('robot updated placement', () => {
        expect(SimulatorHelperFunctions.getUpdatedRobotPlacement(0, 0, 0)).toStrictEqual({"x": 1, "y": 0});
    });
});

describe('get updated robot placement', () => {
    test('robot updated placement', () => {
        expect(SimulatorHelperFunctions.getUpdatedRobotPlacement(-90, 2, 2)).toStrictEqual({"x": 2, "y": 3});
    });
});