

interface SpanProps {
    title: string;
    bool: boolean;
    clasName: string
}

const Span: React.FC<SpanProps> = ({title, bool, clasName }) =>{
    if(bool === true){
        return(
            <span className={clasName} >{title}</span>
        )
    }else{
        return(
            <span>{title}</span>
        )
    }
}

export default Span