import Bar from "./Bar";
import "./style.scss";

const NUMBERS = [50, 45, 75, 80, 50, 45, 75, 80];
const Sorting = () => {
    return (
        <div className="sorting">
            {NUMBERS.map((number, index) => (
                <Bar number={number} className={`bar${index}`} />
            ))}
        </div>
    );
};

export default Sorting;
