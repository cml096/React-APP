import { assign, createMachine } from 'xstate';

interface NumberContext {
    selectedNumber: number | null;
}

type NumberEvent =
    | { type: 'START' }
    | { type: 'SELECT'; number: number }
    | { type: 'RECALCULATE' }
    | { type: 'CONFIRM' }
    | { type: 'CANCEL' };

export const numberMachine = createMachine<NumberContext, NumberEvent>(
    {
        id: 'number',
        initial: 'start',
        context: {
            selectedNumber: null,
        },
        states: {
            start: {
                on: {
                    START: 'selection',
                },
            },
            selection: {
                on: {
                    SELECT: {
                        actions: 'assignNumber',
                    },
                    RECALCULATE: {
                        actions: 'assignNumber',
                    },
                    CONFIRM: 'final',
                    CANCEL: 'start',
                },
            },
            final: {},
        },
    },
    {
        actions: {
            assignNumber: assign((context, event) => {
                if (event.type === 'SELECT' || event.type === 'RECALCULATE') {
                    return { selectedNumber: Math.ceil(Math.random() * 10) };
                }
                return context;
            }),
        },
    },
);
