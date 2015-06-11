export default {
    categories: [
        {
            id: 'household',
            name: 'Домашние вещи'
        },
        {
            id: 'vehicles',
            name: 'Транспорт'
        }
    ],
    selectedCategory: {
        id: 'household',
        name: 'Домашние вещи',
        cargos: [
            {
                id: 'table',
                name: 'Стол'
            },
            {
                id: 'chair',
                name: 'Стул'
            }
        ]
    },

    properties: [
        {
            id: 'payment_mode',
            label: 'Комментарий',
            placeholder: 'Комментарий к перевозке',
            type: 'textarea'
        },
        {
            id: 'loading_hand',
            label: 'Необходимы услуги грузчиков',
            type: 'checkbox'
        },
        {
            id: 'floor_loading',
            label: 'Этаж погрузки',
            type: 'text'
        },
        {
            id: 'floor_unloading',
            label: 'Этаж выгрузки',
            type: 'text'
        },
        {
            id: 'elevator_type',
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
    ],

    cargos: [
        {
            id: 'table',
            name: 'Стол',
            properties: [
                {
                    id: 'amount',
                    label: 'Количество',
                    type: 'text'
                },
                {
                    id: 'comment',
                    label: 'Комментарий',
                    type: 'textarea'
                }
            ]
        },
        {
            id: 'chair',
            name: 'Стул',
            properties: [
                {
                    id: 'amount',
                    label: 'Количество',
                    type: 'text'
                },
                {
                    id: 'comment',
                    label: 'Комментарий',
                    type: 'textarea'
                }
            ]
        }
    ],
    selectedCargo: null
}
