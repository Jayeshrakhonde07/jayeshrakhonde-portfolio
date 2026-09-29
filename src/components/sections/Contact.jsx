import SectionTitle from '../common/SectionTitle'
import UsePortfolio from "../../hooks/UsePortfolio";
import MessageForm from '../layout/MessageForm';
const Contact = () => {

  const {contact} = UsePortfolio();
  return (
    <section className='min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-20' id='contact'>

      <div className='max-w-7xl mx-auto w-full'>
        <SectionTitle title = {"Get In Touch"} subtitle = {"Let's Work "} spantitle = {"Together"} />

        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
          
          <div className='max-w-xl'>
            
          <div className='text-center mt-2 md:text-start  '>
            <h3 className='text-2xl text-text-main md:text-3xl font-bold text-shadow-glow'>{contact.heading}</h3>
            <p className='text-text-body mt-2 text-justify md:text-start' >{contact.description}</p>

          </div>
            
            <div className='flex flex-col gap-4 mt-4'>
              {contact.contactLinks.map((link)=>{
                const Icons = link.icon;
                return(
                  <a key={link.id} href= {link.href} className='group bg-bg-card border border-card-border flex items-center px-3 py-2 gap-3 rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500'>
                    
                    <div className='bg-badge p-3 rounded-full border text-accent border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent  group-hover:border-card-hover transition duration-500'>
                      <Icons className = "text-xl" />
                    </div>
                    <div>
                      <p className='font-bold'>{link.label}</p>
                      <p className='text-accent font-medium'>{link.title}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>



          {/* form  */}

         <MessageForm />

        </div>
      </div>
    </section>
  )
}

export default Contact 