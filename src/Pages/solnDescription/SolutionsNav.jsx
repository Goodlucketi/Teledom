import SolnContent from "../../solutions/SolnContent";

const SolutionsNav = () => {
    return ( 
        <main className="p-2">
            <div className="mx-auto w-11/12 p-4 md:grid md:grid-cols-3 md:gap-5">
                        <SolnContent 
                            title={"Broadband connectivity solutions"}
                            features={[
                                "Wireless Connectivity",
                                "Fiber optics",
                                "VSAT",
                                "LAN /MAN/WAN",
                                "Visible Light Systems"
                            ]}
                        />
                        <SolnContent 
                            title={"Video communications solutions"}
                            features={[
                                'Video conferencing',
                                'Distance Learning',
                                'Telemedicine | Tele-health',
                                'Telepresence'
                            ]}
                        />
                        <SolnContent 
                            title={"Security Solutions"}
                            features={[
                                'Bulk Scanning',
                                'IP Surveillance',
                                'Access Control',
                                'SNOS (Security Network Operation System)',
                                'Smart Identities cards and cord readers',
                                'Firegate'
                            ]}
                        />

                        <SolnContent 
                            title={"Identity Capture & Tracking Solution"}
                            features ={[
                                'Identity Recognition',
                                'Facial Detection',
                                'Personnel & Student Smart Identity System (PERIDS)',
                                'Smart Identification system for schools, offices and government establishments',
                                'Smart Identities cards and cord readers'
                            ]}
                        /> 
                        <SolnContent 
                            title={"Smart classroom solutions"}
                            features ={[
                                'Nursery and primary Schools',
                                'Secondary Schools',
                                'Tertiary Institutions',
                                'Training Centres'
                            ]}
                        /> 
                        <SolnContent 
                            title={"Software & WeB Solutions"}
                            features={[
                                'Software development',
                                'Responsive website designs & development',
                                'MobileApp development for Android, Windows & iOS'
                            ]}
                        /> 
                        <SolnContent 
                            title={"Smart Solutions"}
                            features={[
                                'Internet of Things (IOT)',
                                'Smart Homes, Buildings, Towns, Cities',
                                'Smart Hospitals, Campuses, Hotels',
                                'Smart National Security Operations'
                            ]}
                        />
                        <SolnContent 
                            title={"Consultancy Services"}
                            features={[
                                'Project Management',
                                'Solutions Design',
                                'Quality Audit',
                                'Site Survey'
                            ]}
                        />
                    </div>

        </main>
     );
}
 
export default SolutionsNav;