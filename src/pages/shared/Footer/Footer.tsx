import { Component } from 'react';
import Container from '../../../components/ui/Container';
import { Button } from 'antd';

class Footer extends Component {
    render() {
        return (
            <div className='bg-base-200 text-base-content'>
               <Container>
               <footer className="footer bg-base-200 text-base-content p-10">
               
               <nav>
                     <h6 className="footer-title">Services</h6>
                     <a className="link link-hover">Branding</a>
                     <a className="link link-hover">Design</a>
                     <a className="link link-hover">Marketing</a>
                     <a className="link link-hover">Advertisement</a>
                 </nav>
                 <nav>
                     <h6 className="footer-title">Company</h6>
                     <a className="link link-hover">About us</a>
                     <a className="link link-hover">Contact</a>
                     <a className="link link-hover">Jobs</a>
                     <a className="link link-hover">Press kit</a>
                 </nav>
                 <nav>
                     <h6 className="footer-title">Legal</h6>
                     <a className="link link-hover">Terms of use</a>
                     <a className="link link-hover">Privacy policy</a>
                     <a className="link link-hover">Cookie policy</a>
                 </nav>
                 <form>
                     <h6 className="footer-title">Newsletter</h6>
                     <fieldset className="form-control w-80">
                         <label className="label">
                             <span className="label-text">Enter your email address</span>
                         </label>
                         <div className="join">
                             <input
                                 type="text"
                                 placeholder="username@site.com"
                                 className="input input-bordered join-item" />
                             <Button  className='btn join-item bg-[#FFF] '  size='large' type='default' >Subscribe</Button>
                         </div>
                     </fieldset>
                 </form>
              
             </footer>
             
               </Container>
               <footer className="footer footer-center bg-base-100 text-base-content p-4">
                 <aside>
                     <p>Copyright © ${new Date().getFullYear()} - All right reserved by Online Nursery</p>
                 </aside>
             </footer>
            </div>
        );
    }
}

export default Footer;