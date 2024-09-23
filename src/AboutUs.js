import { FaCircleCheck } from "react-icons/fa6";
import { IconContext } from "react-icons";

function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="heading">About Us</h1>
            <p className="text">The Directorate of Technical Education, Kerala, is organising UDYAMA' 24, an
Industry-Academia-Government Conclave, from July 23rd to 25th, 2024, to bridge the
gap between academia and industry. The conclave will emphasize skill development,
fostering interaction and innovation, industry collaboration, and technology
integration. It aims to create a sustainable collaboration model between academia
and industry to drive technological and educational advancements in Kerala. Key goals
include promoting intellectual development, improving the quality of technical
education, modernizing traditional industries, introducing joint research programmes
and new courses with industry support, fostering enhanced industry-academia
interaction to improve the employability quotient of students and promoting
entrepreneurship.</p>
            <p className="text">The conclave will establish a dedicated industry-academia collaboration
platform, launch long-term initiatives like joint research projects and student
exchange programmes, and conduct regular assessments to monitor and improve its
impact. The event is planned to align with the United Nations Sustainability
Development Goals by contributing to healthcare advancements, improving technical
education, fostering water conservation and sanitation innovations, promoting
renewable energy technologies, enhancing industry-academia collaboration, adopting
sustainable urban practices, and developing solutions for climate change mitigation
and adaptation. The conclave aims to create a sustainable collaboration model
between academia and industry, driving technological and educational advancements
in Kerala while supporting global sustainability goals.</p>
            <div className="lists">
                <div>
                    <h3 className="subheading">Focus Areas</h3>
                    <ul> 
                        <IconContext.Provider value={{ style: { verticalAlign: '-10%',color: '#0041E8' } }}>
                            <li><FaCircleCheck />&nbsp;&nbsp;Reduce skill gaps between industry and institutions</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Foster a better academic environment through hands-on skill training</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Enhance industry interaction experiences for students</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Showcase student-developed innovative products</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Modernize and integrate technology into traditional industries</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Familiarize students with real-world industrial environments during their studies</li>
                        </IconContext.Provider>
                    </ul>
                </div>
                <div>
                    <h3 className="subheading">Target Groups</h3>
                    <ul> 
                        <IconContext.Provider value={{ style: { verticalAlign: '-10%',color: '#0041E8' } }}>
                            <li><FaCircleCheck />&nbsp;&nbsp;Students and staff of technical campuses</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Academicians and researchers</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Industry representatives</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Government officials</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;Rural technocrats</li>
                            <li><FaCircleCheck />&nbsp;&nbsp;General public</li>
                        </IconContext.Provider>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs