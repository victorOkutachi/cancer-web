import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Blogone = () => {
  return (
    <div className='flex flex-col font-Lato w-full h-full'>
        <Navbar/>
        <div className='flex flex-col'>
        <div style={{
      backgroundImage: `url(${'images/scholar.jpg'})`
      }}
      className='h-[280px] w-full md:h-[450px] bg-center bg-no-repeat bg-cover'>
      <div className='bg-overlay-rgba w-full h-[280px] md:h-[450px] flex flex-col text-center items-center justify-center text-white'>
      </div>

    </div>

    <div className='w-full flex flex-col px-4'>
            <h1 className='text-[24px] md:text-[36px] font-bold text-[#008024] pt-8 pb-3'>A Guide To Successful Scholarship Applications</h1>
            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left  py-3'>Applying for a Scholarshipis a highly competitive process often riddled 
            with failures and rejections. We have taken valuable advice from serial scholarship winners to create a proven 
            strategy to successfully apply and win them. The guide provided here is free and should not be used for commercial purposes.
            </p>
    </div>

    <div className='flex flex-col'>
      <h1 className='text-[24px] px-4 md:text-[36px] font-bold text-[#008024] pt-8 pb-3'>Road Map To A Career In Cancer Research</h1>
      <div className='flex md:w-1/2 mx-auto p-4 md:justify-center items-center bg-pink-400'>
      <img src='images/roadmap.jpg' className='w-full h-[220px] md:h-[250px] md:w-1/2 bg-cover'/>
      </div>
      
    </div>


    <div  className=' flex flex-col px-4'>
                <h2 className='text-[20px] md:text-[24px] font-bold text-[#008024] pt-8 pb-3'>
                    Figure 1: Simplistic pathway to a non-clinical oncology career
                </h2>

                <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3' >
                Cancer is on the rise in Nigeria, our initiative is determined to help build capacity by guiding 
                young Nigerians to pursue a career in oncology. The best case scenario will be that our mentees 
                upon completing their training and building a career abroad will either return to Nigeria to 
                contribute their scientific knowledge, resources and networks to improve cancer research, care 
                and prevention in Nigeria or somewhat contribute significantly to the local cancer research 
                environment through collaborative projects and regular visits to Nigerian labs.
                </p>


                <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3' >
                For many of us, finding our way so far into the field of cancer research has not been quite 
                straightforward nor easy. A vast array of individuals with scientific backgrounds ranging from 
                classic biomedical programs to physics are known to be cancer researchers. However, for the sake 
                of convenience and clarity we have streamlined the range of backgrounds to those that can easily 
                find themselves in cancer research.

                </p>
                <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3' >
                    Below is a breakdown of the classic career stages and what you need to do to prepare effectively 
                    for the next phase 
                </p>

                <div id='bachelor degree' className='flex flex-col'>
                    <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>Bachelor's Degree</h3>
                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    There is a wide variety of backgrounds in the natural and medical sciences that can easily 
                    enter a master’s degree relevant to biomedicine. A bachelor’s degree in biochemistry, 
                    microbiology, biology, physiology, human anatomy, chemistry, biotechnology, genetics, cell 
                    biology, pharmacy etc. will be typically accepted into a European Master’s program in 
                    biomedical science. 
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    In order to best position yourself to land an MSc position in biomedicine in the developed 
                    world, good grades ideally a 4.0/5.0 is competitive for scholarship applications. BSc 
                    holders may take up additional leadership and extracurricular volunteering activities to 
                    boost their odds of being selected for a funded position. Furthermore, a solid grasp of the 
                    research area through online courses in cancer biology and biomedicine in general is a 
                    strong indicator of motivation.

                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    Finally, BSc students should within their service year obtain an international passport, 
                    their academic transcripts, language certifications (may be optional) and solid commitment 
                    from trusted referees. 
                    </p>

                </div>

                <div id='bachelor degree' className='flex flex-col'>
                    <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>Master's Degree</h3>
                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    Congratulations! You succeeded in landing a master’s position in biomedicine or related 
                    program (see figure above). A major point to now consider is your master’s research thesis 
                    topic. If you hope to get accepted into a competitive PhD position in cancer research, it 
                    helps if you already have hands on experience in the field. For instance, an applicant for a 
                    PhD in a cancer drug discovery lab will stand a good chance if they are already experienced 
                    in cell culturing, functional genomics and/or small molecule experiments. Another smart way 
                    to gather experience is through internships. Explore these opportunities if your program 
                    accommodates it. 
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    Furthermore, it is important to graduate your MSc with excellent grades, preferably with 
                    distinction! And if possible, try to publish a paper during your MSc. The competition is 
                    steep at leading institutes (please our summary of top institutes to apply). Finally, it 
                    helps a lot to begin your search very early in your MSc.
                    </p>

                </div>

                <div id='bachelor degree' className='flex flex-col'>
                    <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>Doctorate</h3>
                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    At this stage you are significantly more mature as a scientist and realizing that the same 
                    range of skills you have acquired in your prior training is applicable in most biomedical 
                    research areas, the major determinant of your specialty is the disease context. 
                    Consequently, irrespective of your previous degree specialization or the title of your 
                    doctoral program, a PhD candidacy in any area of cancer research qualifies you as a cancer 
                    researcher.   
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>   
                    PhDs are tough! Not just for the academic rigor required to create original science but also 
                    the mental and emotional roller-coaster the 3-6 years (depends on country, continent and/ or 
                    your performance) will take you. Identifying what career-path you plan to pursue 
                    subsequently should inform your decisions during the PhD. In general, having high quality 
                    publications, a number of leadership accomplishments, grant awards, certifications, 
                    transferrable skills experience etc. will help you stand out for either a postdoc or 
                    industry position afterwards.  
                    </p>

                </div>

                <div id='bachelor degree' className='flex flex-col'>
                    <h3 className='text-[18px] md:text-[20px] font-bold text-pink-300 pt-8 pb-3'>Post PhD Career Options</h3>
                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    At this stage and indeed in the previous stages, you may wish to consider your long-term 
                    career direction. Do you wish to pursue the classic academic route or transition to an 
                    industry role relevant to your background? In a classic academic route, you can expect to 
                    spend a number of years going through postdoctoral training before landing an assistant 
                    professorship and eventually a tenured full professorship position. However, the competition 
                    for tenure positions are extremely fierce and for many, a senior postdoc position may be the 
                    plateau for their careers in the developed world.
                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    For cancer researchers interested in industry roles in oncology. A myriad number of 
                    positions are constantly being advertised, you can expect positions with titles such as 
                    associate scientist, scientists, senior oncology specialist, team lead oncology, head of 
                    oncology program etc. off the bench, positions such as; medical science liaisons – oncology, 
                    clinical research associate -oncology etc. are quickly on the rise and may offer opportunity 
                    for cancer researchers to use their training in biology more practically in oncology 
                    management.

                    </p>

                    <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left py-3'>
                    In conclusion, pursuing a career in oncology is really rewarding first as your scientific 
                    efforts may be part of some future life-saving therapeutic and also because of the increasing 
                    range of opportunities available to you. We at CCIN believe that the oncology research environment 
                    in Nigeria is ripe for exploration, the more Nigerians are in this field, the more likely we are to 
                    influence positive changes in cancer research, treatment and management in Nigeria. 
                    </p>

                </div>

    </div>






    <div id='a guide to successful scholarship application' className='flex flex-col '>
                <h1 className='text-[24px] px-4 md:text-[36px] font-bold text-[#008024] pt-8 pb-3'>A Complete Guide To Successful Scholarship Applications</h1>
              

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

                            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left pb-8 pt-3'>
                            For any scholarship you are applying for, there are probably 100s of past winners and a couple of 
                            present winners from Nigeria. Having mentors to guide you through any application could greatly boost 
                            your chances of winning. For aspirants with interest in biomedicine, we have a free mentorship program 
                            at CCIN. You can reach out to us and we would available to help you achieve your goal.
                            </p>

                        </div>


                </div>

                </div>

    </div>
    
        
    </div>

    <Footer/>
  </div>
  )
}

export default Blogone