import React from "react";
import { dbData } from "../data/state";

class BudgetRequestItem extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        alert(
            "Event: " + dbData.eventPlans[0].name +
            "\nBudget: " + dbData.eventPlans[0].budget +
            "\nPreferences: " + dbData.eventPlans[0].preferences
        );
    }

    onClickApprove = (e) => {
        e.preventDefault();
        const confirm = window.confirm('Sure you want to approve event request?');
        if (confirm) {
        alert('Event request approved');
        }
    }

    onClickReject = (e) => {
        e.preventDefault();
        const confirm = window.confirm('Sure you want to reject event request?');
        if (confirm) {
        alert('Event request rejected');
        }
    }

    render() {
        const { event, item, price, fromDepartment, comment } = this.props.event;
        return (
            <li>
                Event: {event}
                <br />
                Item: {item}
                <br/> 
                Price: {price} SEK
                <br/>
                Comment: {comment} 
                <br/>
                Requesting department: {fromDepartment}
                <br />
                <button onClick={this.onClickApprove}>Approve</button><button onClick={this.onClickReject}>Reject</button>
                <br/>
                <button onClick={this.onClick}>See original event request info</button>
            </li>
        )
    }
}

export default BudgetRequestItem;