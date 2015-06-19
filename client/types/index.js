import Immutable from 'immutable';

export var CargoType = Immutable.Record({
    name: undefined,
    properties: Immutable.Map()
});

export var PropertyType = Immutable.Record({
    id: undefined,
    type: undefined,
    name: undefined,
    placeholder: undefined,
    value: undefined
});
