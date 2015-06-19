import Immutable from 'immutable';
import {CargoType, PropertyType} from 'types';

/**
 * @returns {CargoType}
 */
export function parseCargo(data) {
    return new CargoType({
        name: data.name,
        properties: Immutable.Map(
            data.properties.map(property => [property.id, new PropertyType(property)])
        )
    });
}

export function parseCategories(data) {
    return Object.keys(data).reduce((result, key) => {
        data[key].id = key;
        result[key] = data[key];
        return result
    }, {});
}

export function parseConfig(data) {
    return {
        categories: parseCategories(data.categories),
        selectedCategory: null,
        properties: data.general,
        cargos: Immutable.List(),
        editingCargo: null
    }
}
