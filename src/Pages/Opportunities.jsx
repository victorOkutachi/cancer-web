import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Opportunities = () => {
  return (
    <div className='flex flex-col font-Lato w-full h-screen'>
        <Navbar/>

        <div style={{
                backgroundImage: `url(${'images/tubes.jpg'})`
                }}
                 id='Who we are' className='h-[280px] w-full md:h-[550px] bg-no-repeat bg-cover'>
                <div className='bg-overlay2-rgba w-full h-[280px] md:h-[550px] flex flex-col'>
                </div>      
        </div>

        <div className=' flex flex-col items-center px-4 '>
            <h1 className='text-[24px] md:text-[36px] text-center font-bold text-[#008024] pt-8 pb-3'>Road To A Career In Cancer Research</h1>
            <p className='md:text-[16px] text-center max-w-[750px]  py-3'>Here, we have put together a non exhaustive pathway for Life science, pharmacy, chemistry 
            etc. Graduates to land career in oncology and some important things to keep in my mind in your personal journey.
            </p>
        </div>

        <div className='flex flex-col w-full md:flex-row mx-auto mb-6 justify-evenly items-center' >
            <div className='h-[400px] w-5/6 md:w-[400px] rounded-md border-[2px] px-2 md:px-1 shadow-lg py-3 my-4 items-center flex flex-col'>
            <img className='h-[220px] w-6/7 md:w-[380px] rounded-md shadow-md brightness-50' src='images/scholar.jpg' />
            <h1 className='text-[16px] md:text-[20px] text-center font-bold text-[#008024] pt-8 pb-3'>A Guide To Successful Scholarship Applications</h1>
            <button className='text-[12px] font-medium mt-2'><Link to='/blogone'>Read more</Link></button>
            </div>


            <div className='h-[400px] w-5/6 md:w-[400px] rounded-md border-[2px] px-2  md:px-1 shadow-lg py-3 my-4 items-center flex flex-col'>
            <img className='h-[220px] w-6/7 md:w-[380px] rounded-md shadow-md brightness-50' src='images/testtubes.jpg' />
            <h1 className='text-[16px] md:text-[20px] text-center font-bold text-[#008024] pt-8 pb-3 md:pt-4 md:pb-0'>Top Biomedical Research Institutes With Cancer Research International PhD Programs</h1>
             <button className='text-[12px] font-medium mt-2'><Link to='/blogtwo'>Read more</Link></button>
            </div>
            
            
        </div>

       

        {/* *
        
  
        
    



            
            
            
                
            </div>

            <div id='a guide to successful scholarship application' className='flex flex-col '>
                <h1 className='text-[24px] px-4 md:text-[36px] font-bold text-[#008024] pt-8 pb-3'>A Guide To Successful Scholarship Applications</h1>
                <img  className='h-[280px] w-full md:h-2/3 bg-no-repeat bg-cover'
                src='images/scholar.jpg'/>
                <p className='md:text-[16px] px-4 text-center font-bold py-3'>By Chigozie Joseph Samuel</p>

                <p className='md:text-[16px] px-4  py-3'>
                For many Nigerian students in bachelor’s and master’s programs in life sciences, winning a 
                scholarship is critical for continuing their education. Having identified relevant 
                scholarships, candidates are usually faced with the arduous task of preparing a winning 
                application. This can be daunting considering that they have to impress the scholarship 
                selection committee enough to be considered outstanding amongst other highly qualified 
                applicants.
                </p>
                
                <p className='md:text-[16px] px-4 py-3'>
                If you are one such students and you have an interest in cancer research or other aspects of 
                biomedicine, we have put together this article for you. Part one will guide you in preparing 
                for scholarships. Part two highlights the things that you need to pay attention to when 
                applying for a scholarship to prepare a winning application.

                </p>

                <div className='flex flex-col px-4'>
                    <h2 className='text-[20px] md:text-[24px] font-bold text-[#008024] pt-8 pb-3'>
                        Part 1: Preparing For Scholarships Define Your Study Interest
                    </h2>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    For students who would like to do a PhD in biomedicine, taking this decision early in their 
                    degree programs is critical. You can choose the appropriate modules, join the right research 
                    groups and complete research projects that would put you on your desired path. As an 
                    undergraduate, discussing your options with mentors can help you make the right choices at any 
                    given time. 
                    </p>

                        <div id='Aim' className='flex flex-col'>
                            <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>
                                AIm For Excellent Grades
                            </h3>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            Good grades are very crucial criteria for the award of most Master’s and PhD scholarships. Since 
                            International scholarships are highly competitive due to a large number of applicants for a very 
                            limited number of awards, scholarship committees may eliminate applications with inferior grades. 
                            Most winners apply with a CGPA of 4.0 and above (on a 5.0 scale). However, candidates should be 
                            aware that a better result improves their chances of success. So, while you are still studying, 
                            aim for the highest grade within your reach as this will surely count during your scholarship 
                            applications.
                            </p>
                        </div>

                        <div id='your research experience' className='flex flex-col'>
                            <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>
                                Your Research Experience Is Crucial
                            </h3>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For candidates looking for PhD positions, this is vital. PhD is an independent research and if a 
                            university or supervisor is to support a candidate financially, they would surely want to hire the 
                            best possible applicant who can demonstrate that they have the relevant skills and experience to 
                            complete the project. This is where your publications list or past research involvement through 
                            internships and personal research projects completed as part of your degrees become important. 
                            Our advice to those still completing their degrees is to get as much experience as possible. 
                            One way to achieve this is by interning in labs for free whenever you have a break. 
                            Many labs may not be willing to accept a random student for only a few weeks but by stating strong 
                            reasons why you need the opportunity, in most cases, you will be accepted.  
                            Avoid long periods away from research or routine lab work as this may hurt your chances. After my 
                            MSc program, I continued working in my lab, 3 days a week for a few more months to learn more 
                            techniques that would boost my CV, and to avoid a long period of inactivity. 
                            </p>
                        </div>

                        <div id='Get ur docs ready' className='flex flex-col'>
                            <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>
                                Get Your Documents Ready
                            </h3>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            You do not want your near-perfect scholarship application rejected for failing to submit a single 
                            mandatory document. It is always a good idea to read application guidelines and carefully note 
                            down all required documents for any scholarship you are applying for. Scholarships usually 
                            attract a high number of quality candidates thereby making it difficult for the selection 
                            committee to decide who gets an award. Not submitting a mandatory document could lead to your 
                            application being rejected in very first round of screening not minding your academic excellence. 
                            The most common documents that we advise you to have as soon as you are finishing your bachelor’s 
                            program include an International passport, university transcript, degree certificate/statement of 
                            result, proof of English language proficiency (TOEFL, IELTS, Cambridge) and standardized tests 
                            such as GRE (for those wanting to study in the US and Canada). These documents are mandatory. 
                            However, most universities in the UK only require that you score a minimum of C6 in your English 
                            Language in your WAEC exam as a substitute for the standardized test of English language 
                            proficiency. Some other countries may accept a written confirmation from your last university 
                            that you were taught entirely in English Language throughout your degree program.
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            We recommend starting early to prepare these documents. During the application, it could also be 
                            helpful to make a checklist to be sure you have forwarded all necessary documents.

                            </p>
                        </div>


                <div id='part 2' className='flex flex-col'>
                    <h2 className='text-[20px] md:text-[24px] font-bold text-[#008024] pt-8 pb-3'>
                        Part 2: Scholarship Application- Tips To Win Start Early 
                    </h2>
                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    The importance of early scholarship search as well as preparing applications cannot be 
                    overemphasized. It is important to identify relevant funding bodies or scholarships and 
                    take note of the periods of the year when they start accepting applications and their 
                    deadlines. This will help you to not miss an opportunity. The procedure for many 
                    scholarships requires the applicant to first submit an application to their preferred 
                    department for admission before submitting a separate scholarship application to the 
                    funding body, all done within the scholarship deadline. Therefore, starting as soon the 
                    application portal opens leaves you with enough time for this. Additionally, if you 
                    begin early, you have enough time to get useful feedback on your whole application from 
                    your mentors.
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    For many scholarships, the application procedures, requirements essay question(s) remain largely the 
                    same every year. So, candidates can use the information from the previous round in preparing 
                    applications for the next intake. This is particularly helpful for scholarships that require the 
                    submission of essays. For instance, the theme for the Commonwealth Shared scholarship essay has been 
                    the same for as long as I can remember, so, it is possible to develop your essay around this question 
                    long before the scholarship commission starts accepting applications. However, you must always update 
                    yourself with the specific requirements and guidelines for each round of application when they are 
                    published.
                    </p>

                        <div id='letter of motivational' className='flex flex-col'>
                            <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>
                                Letter Of Motivational/Essay Is The Core Of Your Application
                            </h3>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For applicants of MSc scholarships, the letter of motivational sometimes called a personal 
                            statement or statement of purpose is a critical part of the application. This letter will be 
                            required when submitting an application for admission and as a part of the scholarship 
                            submissions. However, the content would be different depending on its purpose. Some schools 
                            have specific guidelines and formats for writing the letter of motivation for admission into 
                            their programs. You want to check the school websites to be sure that you are following their 
                            guidelines and addressing all questions asked. If no format is given, keep your essay concise 
                            and within a limit of 500 words. Popular questions to address would be: (1) why you are 
                            interested in the course (2) why you think you are suitable for the course (you can make 
                            references to specific modules, internships or research project you completed in the past that 
                            provides a solid background to the course. 
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            They will see this in your academic transcript) (3) What you will bring to the course/department 
                            (you can talk about any extra-curricular activity that you excelled in your last university. Talk about 
                            any leadership positions you held and your contribution and how it helped the department). (4) Why you 
                            are interested in that university, and perhaps, why you want to study in that country (5) talk about 
                            your future goals and how the course will help you achieve them.
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            Guidelines for writing motivational letters/essays for scholarships are usually provided in the 
                            scholarship forms. This would normally come either as a compound question or individual questions that 
                            the applicant is required to answer. If it is a compound question, underlining all the individual 
                            questions within the main question can be an efficient way to make sure all the issues are addressed in 
                            the letter. 
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            Write in a clear, concise and logical manner to capture the reader’s attention. Let your story be unique 
                            and passionate in a way that the reader would feel your emotions and motivation. Give specific answers 
                            when asked how you will apply the knowledge and skills gained from a scholarship to solve a problem in 
                            Nigeria. Do not make vague statements.  Avoid grammatical and spelling mistakes. Let someone else read 
                            and critique your essay. This is another reason why you need to start the process early so that there is 
                            sufficient time for proof-reading of your essay before submission.
 
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For candidates applying for PhD positions, your letter of motivation could decide if you are considered 
                            for an interview or not. In your letter, you should state why you want to do a PhD. Clearly define your 
                            area of interest, making make sure that this aligns with the focus of the lab, faculty or department 
                            that you are applying to. It is particularly relevant to state your motivation for looking In that 
                            direction. In this section, it would help your application to demonstrate the relevant experiences and 
                            skills that you possess, stressing on the core skills highlighted in the advert for the PhD position. 
                            Make it clear what your goals for the future are and how the project/lab will help you achieve them.
                            </p>

                        </div>

                        <div id='recommendation letter' className='flex flex-col'>
                            <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>Your Scholarship Is A Good Recommendation Letter Away</h3>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            Many applicants underestimate the impact of a recommendation letter otherwise called a reference letter. 
                            For scholarship selection committees, or a supervisor, this is a way to get an honest assessment of the 
                            applicant from someone else who has known them for a considerable amount of time. This is the reason 
                            they mostly accept references as a confidential document. A letter of only a few sentences is usually 
                            not ideal as it would not have sufficiently described the candidate’s personal qualities and their 
                            academic or professional abilities that would make them stand out from the rest. 
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For recent BSc graduates seeking MSc scholarships, the ideal person to write your recommendation letter 
                            would be a lecturer in your department who has known you for at least 2 sessions (least qualification is 
                            a PhD). He/she must be able to discuss your academic strengths, motivation and can say one or two 
                            positive attributes they have observed about you as a person. Your best choice would be your research 
                            supervisor. 
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For applicants competing for funded PhD positions, the recommendation letter is almost as important as 
                            your grades (smiles). A supervisor would not only want to hire someone with the right experience, skills 
                            and excellent grades, they want to hire someone they can work with… FOR 3-4 YEARS! A personality that 
                            can fit into their team. They rely a lot on a recommendation letter to know about you. A letter written 
                            by the head of the most recent lab where you worked in (preferably, someone who also taught you some 
                            modules) will be valued a lot more because they expect to get every information that they need about you. 
                            About your general work ethic, lab skills, performance, team work, and most importantly, your 
                            personality. To this day, my PhD supervisor still refers to my recommendation letter from my MSc 
                            supervisor. She makes it seem like that letter got me hired.
                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            Always ensure that your referees submit this letter by the deadline. We advise that you contact your 
                            nominated referees as soon as the application portal opens. They are always very busy, so it is your 
                            duty to frequently remind them to ensure that they submit a quality reference for you.
                            </p>
                        </div>

                        <div id='2 page cv' className='flex flex-col'>
                            <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>
                                A 2-Page CV Is Helpful
                            </h3>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For PhD applicants, develop a 2-page CV with a format that highlights mostly your research experience and relevant technical and soft skills. For MSc scholarship applicants, a simple academic CV will suffice.
                            Finally, always fill out all sections of scholarship application forms as long as they are applicable. Leave very few blank sections. 
                            You might think you have not have engaged in an activity worthy of including in that blank section. 
                            Speak to mentors to help you identify relevant activities to include and how to package them.

                            </p>

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                            For any scholarship you are applying for, there are probably 100s of past winners and a couple of 
                            present winners from Nigeria. Having mentors to guide you through any application could greatly boost 
                            your chances of winning. For aspirants with interest in biomedicine, we have a free mentorship program 
                            at CCIN. You can reach out to us and we would available to help you achieve your goal.
                            </p>

                        </div>


                </div>

                </div>

            </div>


            <div id='top international research institutes' className='flex flex-col '>
                <h1 className='text-[24px] md:text-[36px] font-bold text-[#008024] px-4 pt-8 pb-3'>
                    Top Biomedical Research Institutes With Cancer Research International PhD Programs
                </h1>
                <div style={{
                    backgroundImage: `url(${'images/testtubes.jpg'})`
                    }}
                    id='Who we are' className='h-[280px] w-full md:h-full bg-no-repeat bg-cover'>
                    <div className='bg-overlay2-rgba w-full h-[280px] md:h-[550px] flex flex-col'>
                    </div>      
                </div>
               
                <p  className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left px-4 pt-5'>
                    Here we have put together a comprehensive list of top biomedical research institutes in Europe and Asia 
                    (to be updated frequently). When making applications please endeavour to pay close attention to the instructions from 
                    from the institute website. If you are selected for interviews, A mentor from the CCIN can guide you through the process 
                    , providing you tips and strategies for landing an offer.
                </p>

                <div id='europe' className='flex flex-col px-4'>

                    <h2 className='text-[18px] md:text-[20px] font-bold  pt-8 pb-3'>Europe</h2>
                    
                    <a href='https://www.dkfz.de/en/phd-program/' target={'_blank'} >
                    <p className='text-blue-500'>The German Cancer Center</p>
                    </a>

                    <a href='https://www.cancerresearchuk.org/funding-for-researchers/opportunities-for-phd-students-and-postdoc-researchers' target={'_blank'} >
                    <p className='text-blue-500'>The CRUK PhD Opportunities</p>
                    </a>

                    <a href='https://www.embl.de/training/eipp/' target={'_blank'} >
                    <p className='text-blue-500'>EMBL</p>
                    </a>

                    <a href='https://www.mdc-berlin.de/application' target={'_blank'} >
                    <p className='text-blue-500'>The Max Delbruck Center</p>
                    </a>

                    <a href='https://www.fmi.ch/education-careers/programs/' target={'_blank'} >
                    <p className='text-blue-500'>Friedrich Miescher Institute</p>
                    </a>

                    <a href='https://www.crick.ac.uk/careers-study/students/phd-students/phd-student-recruitment' target={'_blank'} >
                    <p className='text-blue-500'>Crick Institute</p>
                    </a>

                    <a href='https://www2.mrc-lmb.cam.ac.uk/students/international-phd-programme/' target={'_blank'} >
                    <p className='text-blue-500'>Medical Research Council UK</p>
                    </a>

                    <a href='https://lifesciencesphd.unige.ch/' target={'_blank'} >
                    <p className='text-blue-500'>University Of Geneva</p>
                    </a>

                    <a href='https://www.dresden-ipp.de/' target={'_blank'} >
                    <p className='text-blue-500'>Dresden International PhD Program</p>
                    </a>

                    <a href='https://www.mpi-muenster.mpg.de/365788/applications' target={'_blank'} >
                    <p className='text-blue-500'>Max Planck Institute</p>
                    </a>
                   
                    
                    <a href='https://www.pasteur.fr/en/education/ppu#application-information' target={'_blank'} >
                    <p className='text-blue-500'>Institute Pasteur</p>
                    </a>

                    
                    <a href='https://cemm.at/phd-program/application/' target={'_blank'} >
                    <p className='text-blue-500'>CEMM Of The Austrian Academy Of Science</p>
                    </a>

                    
                    <a href='https://phd-school.i-med.ac.at/' target={'_blank'} >
                    <p className='text-blue-500'>Innsbruck PhD School Of Biomedical Sciences</p>
                    </a>

                    <a href='https://www.training.vbc.ac.at/phd-programme/' target={'_blank'} >
                    <p className='text-blue-500'>Vienna Biocenter PhD Program</p>
                    </a>

                    <a href='https://www.crg.eu/en/content/training-phd-students/crg-international-phd-programme' target={'_blank'} >
                    <p className='text-blue-500'>Center For Genomic Regulation Spain</p>
                    </a>

                    <a href='https://imm.medicina.ulisboa.pt/training/lisbonbiomed/public_html/en/about-phd-program' target={'_blank'} >
                    <p className='text-blue-500'>IMM Lisbon</p>
                    </a>


                </div>

                <div id='Asia' className='flex flex-col px-4'>
                    <h2 className='text-[18px] md:text-[20px] font-bold  pt-8 pb-3'>
                        Asia
                    </h2>


                    <a href='https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa' target={'_blank'} >
                    <p className='text-blue-500'>SINGA Awards Singapore</p>
                    </a>

                    <a href='https://www.duke-nus.edu.sg/education/our-programmes/phd/ibm-phd' target={'_blank'} >
                    <p className='text-blue-500'>DUKE-NUS Medical School Singapore</p>
                    </a>

                    <a href='https://zje.intl.zju.edu.cn/en/admission/entry-requirements-0' target={'_blank'} >
                    <p className='text-blue-500'>Dual PhD In Integrative Biomedical Science Zje China</p>
                    </a>

                    <h2 className='text-[18px] md:text-[20px] font-bold  pt-8 pb-3'>Note</h2>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                        Having an excellent MSc is crucial as these positions are extremely competitive.
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                        This list is not exhaustive, so please do your own search if you do not find any of these programs fitting.
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                        North American, Australian and New Zealand institutions have not been included as the application and selection 
                        process is somewhat different and will be covered in a later version of this list.
                    </p>

                   
                </div>






                <div className='flex flex-col px-4'>

                    <h2 className='text-[18px] md:text-[20px] text-[#008024] font-bold  pt-8 pb-3'>Fully Funded International Master's Scholarships</h2>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                        We have put together a list of fully funded MSc scholarships which support students in Life sciences and accept applications 
                        from Nigerian citizens. It is important to note that awarding institutions can change the application timelines 
                        for their scholarships, especially with the impact of COVID-19. Therefore, we advice interested candidates to frequently visit the website 
                        of each scholarship of interest for updated announcements regarding application deadlines.
                    </p>

                    <a href='https://mastercardfdn.org/all/scholars/becoming-a-scholar/apply-to-the-scholars-program/' target={'_blank'} >
                    <p className='text-blue-500'>MasterCard Scholarship</p>
                    </a>


                    <div className='flex flex-col'>
                        <h3 className='text-[18px] md:text-[20px] font-bold  pt-8 pb-3'>
                            Europe
                        </h3>

                        <a href='https://cscuk.dfid.gov.uk/apply/uk-universities/shared-scholarships/' target={'_blank'} >
                        <p className='text-blue-500'>Commonwealth Shared Scholarship</p>
                        </a>

                        <a href='https://eacea.ec.europa.eu/erasmus-plus/emjmd-catalogue_en' target={'_blank'} >
                        <p className='text-blue-500'>Erasmus Mundus</p>
                        </a>

                        <a href='https://www.chevening.org/scholarships/application-timeline/' target={'_blank'} >
                        <p className='text-blue-500'>Chevening Scholarship</p>
                        </a>

                        <a href='https://gsse.ku.edu.tr/en/admissions/financial-aid-packages/' target={'_blank'} >
                        <p className='text-blue-500'>Koc University Turkey MSc and PhD Scholarship</p>
                        </a>

                        <a href='https://eurireland.ie/2020/02/10/government-of-ireland-international-education-scholarships-2020/' target={'_blank'} >
                        <p className='text-blue-500'>Government Of Ireland International Education Scholarship</p>
                        </a>

                        <a href='https://www.gatescambridge.org/' target={'_blank'} >
                        <p className='text-blue-500'>Gates Cambridge Scholarships</p>
                        </a>

                        <a href='https://www.ox.ac.uk/clarendon/information-for-applicants' target={'_blank'} >
                        <p className='text-blue-500'>Clarendon Fund Scholarships For International Students At University Of Oxford </p>
                        </a>

                        <a href='https://www.ox.ac.uk/admissions/graduates/fees-and-funding/fees-funding-and-scholarship-search/scholarships-a-z-listing?wssl=1#sbdca' target={'_blank'} >
                        <p className='text-blue-500'>Standard Bank Africa Chairman's Scholarship At Oxford University</p>
                        </a>

                        <a href='https://www.westminster.ac.uk/study/fees-and-funding/scholarships/westminster-international-postgraduate-full-scholarship' target={'_blank'} >
                        <p className='text-blue-500'>Westminster International Postgraduate Full Scholarship</p>
                        </a>

                        <a href='https://masters-scholarships.leeds.ac.uk/dir/scholarships?query=&categoryID=-1&searchDirCategoryID=10062' target={'_blank'} >
                        <p className='text-blue-500'>Tetley And Lupton Masters Scholarship At The University Of Leeds</p>
                        </a>

                        <a href='https://www.maastrichtuniversity.nl/support/your-studies-begin/coming-maastricht-university-abroad/scholarships/maastricht-university' target={'_blank'} >
                        <p className='text-blue-500'>Maastricht University Holland-High Potential Scholarships </p>
                        </a>

                        <a href='https://www.tudelft.nl/en/education/practical-matters/scholarships/justus-louise-van-effen-excellence-scholarships/' target={'_blank'} >
                        <p className='text-blue-500'>Justus & Louise Van Effen Excellence Scholarships At Delft University Netherlands</p>
                        </a>

                        <a href='https://www.rug.nl/education/scholarships/eric-bleumink-fund' target={'_blank'} >
                        <p className='text-blue-500'>Eric Bleumink Scholarships At The University Of Groningen For Master's</p>
                        </a>

                        <a href='https://gss.uva.nl/scholarships/amsterdam-excellence-scholarship/amsterdam-excellence-scholarship.html#Requirements' target={'_blank'} >
                        <p className='text-blue-500'>Amsterdam Excellence Scholarships (AES) For Master's</p>
                        </a>

                        <a href='https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html' target={'_blank'} >
                        <p className='text-blue-500'>Excellence Scholarship & Opportunity Programme / ETH-D Scholarship At ETH Zurich (For Master's)</p>
                        </a>


                    </div>



                    <div className='flex flex-col'>
                        <h3 className='text-[18px] md:text-[20px] font-bold  pt-8 pb-3'>
                            Australia
                        </h3>

                        <a href='https://scholarships.adelaide.edu.au/Scholarships/postgraduate-research/all-faculties/adelaide-scholarships-international' target={'_blank'} >
                        <p className='text-blue-500'>Adelaide Scholarships International (ASI)</p>
                        </a>


                        <a href='https://www.sydney.edu.au/scholarships/e/university-sydney-international-scholarship.html' target={'_blank'} >
                        <p className='text-blue-500'>University Of Sydney International Strategic Scholarship</p>
                        </a>

                    </div>





                    <div className='flex flex-col mb-8'>
                        <h3 className='text-[18px] md:text-[20px] font-bold  pt-8 pb-3'>
                            Asia
                        </h3>

                        <a href='https://www.ng.emb-japan.go.jp/itpr_en/edu.html' target={'_blank'} >
                        <p className='text-blue-500'>Japan MEXT Scholarship</p>
                        </a>


                        <a href='https://isa.ustc.edu.cn/xs/list.asp?menu1=99&menu2=02&degree=2' target={'_blank'} >
                        <p className='text-blue-500'>University Of Science And Technology Chinese Government Scholarships For MSc & PhD</p>
                        </a>

                        <a href='https://iczu.zju.edu.cn/english/redir.php?catalog_id=22232' target={'_blank'} >
                        <p className='text-blue-500'>Zheijiang University Chinese Government Scholarship For MSc & PhD</p>
                        </a>

                    </div>


                </div>


            </div>


                </div> */}

        <Footer/>

    </div>
  )
}

export default Opportunities