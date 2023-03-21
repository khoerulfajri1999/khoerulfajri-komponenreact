import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
    state = {
        value : 0
    }

    tambah = ()=> {
        this.setState ({value: this.state.value + 1})
    }

    kurang = ()=> {
        if (this.state.value>0){
            this.setState({value: this.state.value -1})
        }
   
    }
    render() {
        return(
            <div>
                <center>
                    <h1>Komponen ini dibuat dengan class component</h1>
                    <h2>Halo {this.props.nama}</h2>
                    <button onClick={this.kurang}>-</button>
                    <span>{this.state.value}</span>
                    <button onClick={this.tambah}>+</button>
                </center>
               
            </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}
export default ClassComponent;