import "./style.scss";

interface Props {
    number: number;
    className?: string;
}

const Sorting: React.FC<Props> = ({ className = "", number }) => {
    return <div className={`${className}`} style={{ height: `${number}%` }} />;
};

export default Sorting;
