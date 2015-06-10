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
            label: 'Способ оплаты',
            type: 'text'
        },
        {
            id: 'loading_hand',
            label: 'Необходимы услуги грузчиков',
            type: 'checkbox'
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
