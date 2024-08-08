import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    clientData: {
        clientName: '',
        clientFirstLastName: '',
        clientSecondLastName: '',
        telefonNumber: '',
        folio: '',
        receivedDate: '',
        deliveryDate: '',
    },
    paymentData: {
        paidInFull: false,
        leftMoney: false,
        amountLeft: '',
        paymentMethod: '',
    },
    garmentData: {
        garmentQuantity: '',
        garmentType: '',
        garmentRepair: [],
        garmentDescription: '',
        garmentRepairCost: '',
        garmentRepairAmount: 0,
        garments: [],
        garmentCosts: 0,
    },
    submittedData: [], // State to hold submitted form data
};

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_CLIENT_DATA':
            return { ...state, clientData: { ...state.clientData, ...action.payload } };
        case 'SET_PAYMENT_DATA':
            return { ...state, paymentData: { ...state.paymentData, ...action.payload } };
        case 'SET_GARMENT_DATA':
            return { ...state, garmentData: { ...state.garmentData, ...action.payload } };
        case 'ADD_SUBMITTED_DATA':
            return { ...state, submittedData: [...state.submittedData, action.payload] };
        default:
            return state;
    }
}

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => useContext(FormContext);
