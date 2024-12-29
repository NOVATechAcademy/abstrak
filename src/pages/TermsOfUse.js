import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';

const TermsOfUse = () => {
    return (
        <>
            <SEO title="Terms Of Use" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                    title="Terms Of Use"
                    page="Terms Of Use"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <h1>Terms of Use</h1>
                                    <p>Welcome to NOVA Tech Academy. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern NOVA Tech Academy's relationship with you in relation to this website.</p>
                                    
                                    <h2>1. Terms</h2>
                                    <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                                    
                                    <h2>2. Use License</h2>
                                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on NOVA Tech Academy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                    <ul>
                                        <li>Modify or copy the materials;</li>
                                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                        <li>Attempt to decompile or reverse engineer any software contained on NOVA Tech Academy's website;</li>
                                        <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                        <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                                    </ul>
                                    <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by NOVA Tech Academy at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                                    
                                    <h2>3. Disclaimer</h2>
                                    <p>The materials on NOVA Tech Academy's website are provided "as is". NOVA Tech Academy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, NOVA Tech Academy does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.</p>
                                    
                                    <h2>4. Limitations</h2>
                                    <p>In no event shall NOVA Tech Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on NOVA Tech Academy's Internet site, even if NOVA Tech Academy or a NOVA Tech Academy authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                                    
                                    <h2>5. Revisions and Errata</h2>
                                    <p>The materials appearing on NOVA Tech Academy's website could include technical, typographical, or photographic errors. NOVA Tech Academy does not warrant that any of the materials on its website are accurate, complete, or current. NOVA Tech Academy may make changes to the materials contained on its website at any time without notice. NOVA Tech Academy does not, however, make any commitment to update the materials.</p>
                                    
                                    <h2>6. Links</h2>
                                    <p>NOVA Tech Academy has not reviewed all of the sites linked to its Internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by NOVA Tech Academy of the site. Use of any such linked website is at the user's own risk.</p>
                                    
                                    <h2>7. Site Terms of Use Modifications</h2>
                                    <p>NOVA Tech Academy may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
                                    
                                    <h2>8. Governing Law</h2>
                                    <p>Any claim relating to NOVA Tech Academy's website shall be governed by the laws of the State of [Your State] without regard to its conflict of law provisions.</p>
                                    
                                    <p>General Terms and Conditions applicable to Use of a Website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne />
            </main>
        </>
    );
}

export default TermsOfUse;