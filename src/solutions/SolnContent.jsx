const SolnContent = ({title, feature1, feature2, feature3, feature4, feature5, feature6 }) => {
    return ( 
        <div className="service shadow-md rounded-md relative my-10 md:my-1">
                    <div className="title my-2">
                        <h3 className="p-4 bg-blue-900 text-white text-left text-xl rounded-t-md">{title}</h3>
                    </div>
                    <div className="text p-4 text-center">
                        <p className="font-sans text-left border-t-2 border-b-2 p-4">{feature1}</p>
                        <p className="font-sans text-left border-b-2 p-4">{feature2}</p>
                        <p className="font-sans text-left border-b-2 p-4">{feature3}</p>
                        <p className="font-sans text-left border-b-2 p-4">{feature4}</p>
                        <p className="font-sans text-left border-b-2 p-4">{feature5}</p>
                        <p className="font-sans text-left border-b-2 p-4">{feature6}</p>
                    </div>
                </div>
     );
}
 
export default SolnContent;