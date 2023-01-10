import React from 'react';
import Card from '../../Component/Shared/Card/Card';
import img1 from "../../Assets/bullimg.png";
import img2 from "../../Assets/image2.png";
import img3 from "../../Assets/image3.png";
import img4 from "../../Assets/image4.png";
import img5 from "../../Assets/image5.png";

import './Home.css';
const Home = () => {
  return (
    <section id='header' className="d-flex ">
    
      <div className='container-fluid '>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row'>
          <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column'>
          <div className='topdiv'>
          <h1 className='my-3' >Meet</h1>
             <h1>the  next</h1><h1> Investing</h1>
            <h5 className='my-3'>Get to know the most promising stocks </h5>
            <h5 className=''>in the tech industry. Build your portfolio </h5>
            <h5 className=''> with as much or as little risk as you wish. </h5>
          </div>
    

            <div className='mt-3 row'>
            
            <div className='col-6 '>
            <a className='header-btn' ><span className='btn-text headerbtn-txt' >GetStarted</span></a>
            </div>
       
            <div className='col-6 justify-content-center  aligh-items-center'>
            <a href='#' className="learnmorebtn">Learn more <span><svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.71169 8.71744H7.85803H16.6418L14.99 10.5735L14.6022 11.0117C14.5754 11.0415 14.5566 11.0765 14.5322 11.1081C14.4875 11.1622 14.4457 11.2193 14.4071 11.279C14.3875 11.3123 14.3741 11.3491 14.356 11.3833C14.3207 11.4481 14.2891 11.5154 14.2616 11.5848C14.2522 11.6102 14.2482 11.6365 14.2396 11.6628C14.2116 11.7446 14.1895 11.8287 14.1735 11.9143C14.1735 11.9239 14.1735 11.9336 14.1735 11.9432C14.1571 12.0369 14.1473 12.1318 14.1444 12.2272H14.1499C14.1467 12.4614 14.1859 12.694 14.2653 12.911C14.3446 13.128 14.4624 13.3249 14.6116 13.49C14.7573 13.6521 14.9302 13.7806 15.1205 13.8681C15.3109 13.9557 15.5148 14.0005 15.7207 14C15.9281 14.0005 16.1335 13.9551 16.325 13.8663C16.5165 13.7776 16.6903 13.6472 16.8361 13.483L21.5454 8.20741C21.558 8.19427 21.5658 8.1776 21.5776 8.16358C21.6353 8.09547 21.688 8.0222 21.7349 7.9445C21.7546 7.91119 21.768 7.87528 21.7853 7.8411C21.8208 7.77756 21.8523 7.71137 21.8797 7.64304C21.8962 7.59922 21.9049 7.5554 21.9182 7.50633C21.9385 7.44406 21.9556 7.38059 21.9694 7.31618C21.9819 7.23389 21.9892 7.15073 21.9914 7.0673C21.9914 7.03488 22 7.0042 22 6.97177V6.9665C21.9999 6.85111 21.9893 6.73603 21.9686 6.62298C21.9488 6.51499 21.9198 6.40937 21.882 6.30751V6.29612C21.8435 6.19509 21.7967 6.09826 21.742 6.00691L21.7365 5.99466C21.6788 5.90033 21.6132 5.81229 21.5406 5.73175L16.8267 0.509662C16.5308 0.182014 16.1303 -0.00130768 15.7131 7.02282e-06C15.296 0.00132173 14.8964 0.187161 14.6022 0.516669C14.3169 0.836598 14.154 1.26722 14.1475 1.71813H14.1413V1.75319C14.1448 1.83783 14.1532 1.92212 14.1664 2.00557C14.1664 2.03624 14.1664 2.0669 14.1759 2.09757C14.1853 2.12824 14.1869 2.13614 14.1916 2.15542C14.2112 2.24847 14.2375 2.33962 14.2703 2.42796C14.275 2.44111 14.2828 2.4525 14.2884 2.46564C14.3228 2.55485 14.3639 2.64074 14.4111 2.72241C14.4686 2.82117 14.5347 2.91334 14.6085 2.99758L16.6198 5.22172H1.57317C1.15594 5.22172 0.755821 5.40637 0.460794 5.73506C0.165767 6.06375 0 6.50956 0 6.97439C0 7.43923 0.165767 7.88503 0.460794 8.21372C0.755821 8.54241 1.15594 8.72707 1.57317 8.72707H4.71322L4.71169 8.71744Z" fill="black"/>
</svg>
</span></a>
            </div>
            <div></div>

            </div>
          </div>

          <div className='col-lg-8 order-1 order-lg-2 header-img'>
            <img src={img1} className="img-fluid animated" alt='bullimg'/>
            <div className='row cards-container -my-3'>
            <Card imgage={img2} title="Stocks"/>
          
            <Card imgage={img3} title="us stocks"/>
            </div>

            <div className='row cards-container my-3'>
            <Card imgage={img5} title="Mutual  Funds"/>
            <Card imgage={img4} title="Future & Options"/>
           

            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Home
