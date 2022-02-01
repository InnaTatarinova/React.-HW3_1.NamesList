import React from "react";

class NameComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [this.props.names]
        }
    }


    render() {
        console.log(this.state.names);
        return (
            <div>
                <h2>Список имен</h2>
                {this.state.names[0]
                    .filter((elem, index) => {
                        return this.state.names[0].indexOf(elem) === index;
                    })
                    .map((elem) => {
                        return (
                            <li key={elem}>
                                {elem}
                            </li>
                        )
                    })}
            </div>
        )
    }
}

export default NameComp;