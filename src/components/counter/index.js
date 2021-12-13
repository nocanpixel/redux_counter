import { deposit,withdraw } from "../store/amount/action"
import { connect } from "react-redux"

const getAmount =(state)=>{
    return {
        amount: state.amountReducer.amount,
    }
}

const Counter=({amount,deposit, withdraw})=>{
    return(
        <div>
            <h1>
                {amount}
            </h1>
            <button onClick={()=>deposit()}>Deposit $10</button>
            <button onClick={()=>withdraw()}>Withdraw $10</button>
        </div>
    )
}

export default connect(getAmount, {deposit,withdraw})(Counter)