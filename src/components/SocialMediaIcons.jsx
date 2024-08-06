import './socialMediaIcon.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons'






const SocialMediaIcons = () => {
  return (
    <>
   
      <div className="social-buttons">
     <a href="https://www.instagram.com/shubhraaj_interiors_creations?igsh=MWoxNzN6N3c4Z2tqMg==" className="social-button social-button--instagram" aria-label="Instgram" target="_blank" >
       
        <SocialIcon className='ico' network='instagram' fgColor="currentColor"  />
    
  </a>
  <a href="#" className="social-button social-button--mail" aria-label="Gmail">
            <SocialIcon className='ico' network='google' fgColor="currentColor"  />
  </a>
  <a href="#" className="social-button social-button--whatsapp" aria-label="whatsapp">
  <SocialIcon className='ico' network='whatsapp' fgColor="currentColor"  />
  </a>
  
</div>

    </>
  );
};
export default SocialMediaIcons;
