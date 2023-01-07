import React, {Component} from 'react';

class QuizzInfo extends Component {
    render() {
        return (
            <div className={"quizzInfo"} id={"quizzInfo"}>
                {this.props.data.infoTxt}
            </div>
        );
    }
}

export default QuizzInfo;