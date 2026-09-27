import SectionTitle from '../common/SectionTitle'
import UsePortfolio from "../../hooks/UsePortfolio";
import { FaArrowRightToBracket } from "react-icons/fa6";
const Certifications = () => {

  const {certifications} = UsePortfolio();
  return (
    <section className='min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-20' id='certifications'>

      <div className='max-w-7xl mx-auto w-full'>

        <SectionTitle title = {"Certifications"} subtitle = {"My Learning "} spantitle = {"Journey "} />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {certifications.map((certificate)=>{
            return(
              <div key={certificate.id} className='bg-bg-card border border-card-border'>

                <div className='w-full h-52 md:h-55  overflow-hidden rounded-xl '>
                  <img src= {certificate.image} alt= {certificate.title} className='w-full object-cover transition-transform duration-500 hover:scale-105' />
                </div>

                <div className='p-4 flex flex-col md:p-6'>
                  <h2 className='text-text-main text-xl font-semibold'>{certificate.title} - <span className='text-accent'>{certificate.issuer}</span></h2>
                  <p className='mt-2 font-bold'>{certificate.date}</p>
                  <p className='text-text-body mt-2'>{certificate.description}</p>
                  
                <div className='mt-3'>
                  <a href= {certificate.credentialUrl} target='_blank' className='bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold'>View Certificate <FaArrowRightToBracket /></a>
                </div>
                </div>


         
              </div>
            )
          })}
         
        </div>

      </div>

    </section>
  )
}

export default Certifications