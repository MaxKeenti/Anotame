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
};

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_CLIENT_DATA':
            return {
                ...state,
                clientData: {
                    ...state.clientData,
                    ...action.payload,
                },
            };
        case 'SET_PAYMENT_DATA':
            return {
                ...state,
                paymentData: {
                    ...state.paymentData,
                    ...action.payload,
                },
            };
        case 'SET_GARMENT_DATA':
            return {
                ...state,
                garmentData: {
                    ...state.garmentData,
                    ...action.payload,
                },
            };
        case 'ADD_GARMENT':
            const updatedGarments = [...state.garmentData.garments, action.payload];
            const updatedGarmentCosts = updatedGarments.reduce((total, garment) => total + garment.garmentRepairAmount, 0);
            return {
                ...state,
                garmentData: {
                    ...state.garmentData,
                    garments: updatedGarments,
                    garmentCosts: updatedGarmentCosts,
                },
            };
        case 'UPDATE_GARMENT':
            const updatedGarmentsList = state.garmentData.garments.map((garment, index) =>
                index === action.payload.index ? action.payload.garment : garment
            );
            const updatedCosts = updatedGarmentsList.reduce((total, garment) => total + garment.garmentRepairAmount, 0);
            return {
                ...state,
                garmentData: {
                    ...state.garmentData,
                    garments: updatedGarmentsList,
                    garmentCosts: updatedCosts,
                },
            };
        case 'DELETE_GARMENT':
            const filteredGarments = state.garmentData.garments.filter((_, index) => index !== action.payload);
            const filteredGarmentCosts = filteredGarments.reduce((total, garment) => total + garment.garmentRepairAmount, 0);
            return {
                ...state,
                garmentData: {
                    ...state.garmentData,
                    garments: filteredGarments,
                    garmentCosts: filteredGarmentCosts,
                },
            };
        default:
            return state;
    }
}

const FormContext = createContext();

export function useFormContext() {
    return useContext(FormContext);
}

export function FormProvider({ children }) {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
}
