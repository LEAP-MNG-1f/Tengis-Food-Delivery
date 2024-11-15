type CardPropsType={
    img:string;
    title:string;
    price:number;
    discount?:number;
    color?:"red";
};

export const Card =(props: CardPropsType)=>{
    return(
        <div>
            <div>{props.img} </div>
            <p>{props.title}</p>
            <p>{props.price}</p>
          
        </div>
    )
}