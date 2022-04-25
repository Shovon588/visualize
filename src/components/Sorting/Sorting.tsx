import { useState } from "react";
import Bar from "./Bar";
import "./style.scss";

const NUMBERS = [50, 45, 75, 50, 80, 80, 50, 45, 75, 80, 18];
const Sorting = () => {
    const [numbers, setNumbers] = useState(NUMBERS);

    return (
        <div className="sorting">
            {numbers.map((number, index) => (
                <Bar number={number} className={`bar${index}`} />
            ))}
        </div>
    );
};

export default Sorting;
