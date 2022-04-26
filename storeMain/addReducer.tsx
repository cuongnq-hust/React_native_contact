import * as types from './ActionTypes';

const initialState = {
    itemList: [],
};

export const removeItem = id => ({
    type: types.REMOVE_ITEM,
    payload: id,
});


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            console.log(action);
            return {
                ...state,
                itemList: [...state.itemList].concat({
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    company: action.payload.company,
                    phones: action.payload.phones,
                    image: action.payload.image,
                    emails: action.payload.emails,
                    address: action.payload.address,
                    birthday: action.payload.birthday,
                    note: action.payload.note,
                }),
            };

        case types.REMOVE_ITEM:
            console.log(action);
            return {
                ...state,
                itemList: state.itemList.filter(item => item.id !== action.payload),
            };

        case types.EDIT_ITEM:
            console.log(action);
            const _data = [...state.itemList];
            const index = _data.findIndex(_data => _data.id === action.payload.id);
            _data[index] = action.payload;
            return {
                ...state,
                itemList: _data,
            };
        default:
            return state;
    }
};

export default rootReducer;
