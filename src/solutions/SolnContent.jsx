const SolnContent = ({title, features=[] }) => {
    return ( 
        <div className="service shadow-md rounded-md relative my-10 md:my-1">
                    <div className="title my-2">
                        <h3 className="p-4 bg-blue-900 text-white text-left text-lg rounded-t-md">{title}</h3>
                    </div>
                    <div className="text p-4 text-center">
                        {features.map((feature, index)=>(
                             <p key={index} className="font-sans text-left border-t-2 border-b-2 p-4">{feature}</p>
                        ))}
                       
                    </div>
                </div>
     );
}
 
export default SolnContent;