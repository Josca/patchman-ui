import React from 'react';
import SystemDetail from '../../SmartComponents/SystemDetail/SystemDetail';

let initialState = {
    loaded: false
};

// Reducer
export const SystemDetailStore = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ENTITY_FULFILLED':
            return {
                ...state,
                loaded: true,
                activeApps: [
                    {
                        title: 'Patch',
                        name: 'patch',
                        component: () => <SystemDetail />
                    }
                ]
            };
        case 'LOAD_ENTITY_REJECTED':
            return {
                ...state,
                loaded: true,
                activeApps: [
                    {
                        title: 'Patch',
                        name: 'patch',
                        component: () => <SystemDetail />
                    }
                ]
            };
        default:
            return state;
    }
};
