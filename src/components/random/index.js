import { connect } from "react-redux"
const getAmount =(state)=>{
    return {
        amount: state.amountReducer.amount,
    }
}
const Random =({amount})=>{
    return (
        <>
        <h1>{amount}</h1>
        <button>Dummy Button</button>
        </>
    )
}

export default connect(getAmount)(Random)