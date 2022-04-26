import {useSelector} from "react-redux";

export const useContacts = () => {
    return useSelector(state => state.addReducer.itemList);
}
export const useContact = (id) => {
    return useSelector(state => state.addReducer.itemList.find(item => item.id === id));
}