import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Blogtwo = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        
        <div style={{
                backgroundImage: `url(${'images/testtubes.jpg'})`
                }}
                 id='Who we are' className='h-[280px] w-full md:h-[450px] bg-center bg-no-repeat bg-cover'>
                <div className='bg-overlay-rgba w-full h-[280px] md:h-[450px] flex flex-col text-center items-center justify-center text-white'>
                </div>



                <div id='top international research institutes' className='flex flex-col '>
                <h1 className='text-[24px] md:text-[36px] font-bold text-[#008024] px-4 pt-8 pb-3'>
                    Top Biomedical Research Institutes With Cancer Research International PhD Programs
                </h1>
               
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
               
            <Footer/>    
        </div>
        
        
    </div>
  )
}

export default Blogtwo