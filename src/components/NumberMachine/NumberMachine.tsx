import React from 'react';
import { useMachine } from '@xstate/react';
import { numberMachine } from '../../machines/numberMachine';

export const NumberMachine: React.FC = () => {
    const [state, send] = useMachine(numberMachine);

    return (
        <div>
            <h2>{`Current State: ${state.value}`}</h2>

            {state.matches('start') && (
                <button onClick={() => send('START')}>Start</button>
            )}

            {state.context.selectedNumber && (
                <h3>Selected Number: {state.context.selectedNumber}</h3>
            )}

            {state.matches('selection') && (
                <>
                    <button
                        onClick={() =>
                            send({
                                type: 'SELECT',
                                number: Math.ceil(Math.random() * 10),
                            })
                        }
                    >
                        Select Number
                    </button>
                    <button onClick={() => send('RECALCULATE')}>
                        Recalculate Number
                    </button>
                    <button onClick={() => send('CONFIRM')}>
                        Confirm and Finish
                    </button>
                    <button onClick={() => send('CANCEL')}>Cancel</button>
                </>
            )}

            {state.matches('final') && (
                <div>
                    <h3>Final State Reached!</h3>
                    <h4>Selected Number: {state.context.selectedNumber}</h4>
                </div>
            )}
        </div>
    );
};
