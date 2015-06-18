var properties = {
    amount: {
        id: 'amount',
        type: 'text',
        name: 'Количество'
    },
    comment: {
        id: 'comment',
        type: 'textarea',
        name: 'comment',
        placeholder: 'Комментарий к перевозке'
    },
    brand: {
        id: 'brand',
        type: 'text',
        name: 'Марка'
    },
    weight: {
        id: 'weight',
        type: 'text',
        name: 'Вес'
    }
};

var cargos = {
    table: {
        id: 'table',
        name: 'Стол',
        properties: [
            properties.amount,
            properties.comment
        ]
    },
    chair: {
        id: 'chair',
        name: 'Стул',
        properties: [
            properties.amount,
            properties.comment
        ]
    },
    car: {
        id: 'car',
        name: 'Автомобили',
        properties: [
            properties.brand
        ]
    },
    motorcycle: {
        id: 'motorcycle',
        name: 'Мототехника',
        properties: [
            properties.brand
        ]
    },
    shortDistanceTravel: {
        id: 'shortDistanceTravel',
        name: 'Перевозки по городу',
        properties: [
            properties.amount
        ]
    },
    longDistanceTravel: {
        id: 'longDistanceTravel',
        name: 'Междугородние перевозки',
        properties: [
            properties.amount
        ]
    },
    sand: {
        id: 'sand',
        name: 'Песок',
        properties: [
            properties.weight
        ]
    },
    chipStone: {
        id: 'chipStone',
        name: 'Щебень',
        properties: [
            properties.weight
        ]
    },
    oil: {
        id: 'oil',
        name: 'Нефтепродукты',
        properties: [
            properties.weight
        ]
    },
    grain: {
        id: 'grain',
        name: 'Зерно',
        properties: [
            properties.weight
        ]
    }
};

var general = {
    payment_mode: {
        label: 'Комментарий',
        placeholder: 'Комментарий к перевозке',
        type: 'textarea'
    },
    loading_hand: {
        label: 'Необходимы услуги грузчиков',
        type: 'checkbox'
    },
    floor_loading: {
        label: 'Этаж погрузки',
        type: 'text'
    },
    floor_unloading: {
        label: 'Этаж выгрузки',
        type: 'text'
    },
    elevator_type: {
        label: 'Лифт',
        type: 'radio',
        options: [
            {
                value: 'passenger',
                label: 'Пассажирский'
            },
            {
                value: 'freight',
                label: 'Грузовой'
            }
        ]
    }
};

var categories = {
    household: {
        name: 'Домашние вещи',
        cargos: [cargos.table, cargos.chair]
    },
    moves: {
        name: 'Переезды',
        cargos: [cargos.table, cargos.chair, cargos.car, cargos.motorcycle]
    },
    vehicles: {
        name: 'Транспорт',
        cargos: [cargos.car, cargos.motorcycle]
    },
    passengers: {
        name: 'Пассажиры',
        cargos: [cargos.shortDistanceTravel, cargos.longDistanceTravel]
    },
    granular: {
        name: 'Насыпной груз',
        cargos: [cargos.sand, cargos.chipStone, cargos.grain]
    },
    effuse: {
        name: 'Наливной груз',
        cargos: [cargos.oil]
    },
    agriculture: {
        name: 'Сельхозпродукты',
        cargos: [cargos.grain]
    }
};

export default {general, categories, cargos}
