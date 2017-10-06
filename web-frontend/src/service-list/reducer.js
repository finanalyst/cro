import * as ActionTypes from './actions';

const initialState = {
    services: new Map()
}

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.SERVICE_START:
        var updated_services = state.services;
        updated_services.get(action.id).status = 'Running';
        return { ...state, services: updated_services }
    case ActionTypes.SERVICE_STARTED:
        var service = { name: action.name, id: action.id, status: 'Running' };
        let new_services = state.services;
        new_services.set(service.name, service);
        return { ...state, services: new_services };
    case ActionTypes.SERVICE_RESTARTED:
        var updated_services = state.services;
        updated_services.get(action.id).status = 'Running';
        return { ...state, services: updated_services };
    case ActionTypes.SERVICE_STOPPED:
        var updated_services = state.services;
        updated_services.get(action.id).status = 'Stopped';
        return { ...state, services: updated_services };
    default:
        return state;
    }
}
