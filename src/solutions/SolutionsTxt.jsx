const SolutionsTxt = ({text}) => {
    return ( 
        <main className="about">
            <div className="w-11/12 p-2 mx-auto">
                <div className="mission_statement shadow-md bg-white p-5 md:p-10">
                    <p className="md:text-lg">
                    {text}
                    </p>
                </div>

                
            </div>
        </main>
     );
}
 
export default SolutionsTxt;