import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialIcons = () => {
    return ( 
        <ul className='flex gap-2 md:gap-5 mb-10'>
            <li className="hover:underline"><FacebookIcon fontSize='small' /></li>
            <li className="hover:underline"><XIcon fontSize='small' /></li>
            <li className="hover:underline"><InstagramIcon fontSize='small' /></li>
            <li className="hover:underline"><WhatsAppIcon fontSize='small' /></li>
            <li className="hover:underline"><EmailIcon fontSize='small' /></li>
        </ul>
     );
}
 
export default SocialIcons;