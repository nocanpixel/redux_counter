export function deposit(){
    return {
        type: "DEPOSIT_MONEY",
        payload: 10,
    };
};

export function withdraw(){
    return {
        type: "WITHDRAW_MONEY",
        payload: -10,
    }
}

