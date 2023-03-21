import { useState } from "react";

const FunctionalComponent = ({nama}) => {

    const [value, setValue] = useState(0);

    const tambah = () => {
        setValue(value + 1);
    }

    const kurang = () => {
        if (value > 0){
            setValue(value - 1);
        }
        
    }
    return (
        <div>
            <center>
                <h1>Membuat komponen dengan functional component</h1>;
                <h2>Hallo {nama}selamat belajar</h2>;
                <button onClick={kurang}>-</button>
                <span>{value}</span>
                <button onClick={tambah}>+</button>
            </center>
            
        </div>
        
    )
}

FunctionalComponent.defaultProps = {
    nama: "user"
}
export default FunctionalComponent;