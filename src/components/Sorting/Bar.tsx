import "./style.scss";

interface Props {
    number: number;
    className?: string;
}

const Sorting: React.FC<Props> = ({ className = "", number }) => {
    return (
        <div className={`${className}`} style={{ height: `${number}%` }}>
            <div className="bar-span">
                <span>{number}</span>
            </div>
            <div className="bar"></div>
        </div>
    );
};

export default Sorting;
