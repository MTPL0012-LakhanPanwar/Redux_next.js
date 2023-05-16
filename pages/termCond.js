import classes from './Privacy/privacy.module.css';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

const TermConditionScreen = () => {
    return (
        <div>
        <div>
            <Header/>
            <div className={classes.root}>
                <div className={classes.head}>
                    <h3 className={classes.heading}>Terms & Conditions</h3>
                </div>

                <div className={classes.section}>
                    <div className={classes.content}>
                        <div className={classes.wrap}>
                            <span className={classes.t_title}>Effective: June 1,2022</span>

                            <p className={classes.s_content}>Thank you for using JEGO!</p>

                            <p className={classes.s_content}>JEGO offers products and services provided by Poem Techinvest LLC, our subsidiaries, and our international branches (“JEGO,” “us,” “we,” or “our”). These Terms of Use (“Terms”) govern your use of our website, apps, and other products and services (“Services”). As some of our Services may be software that is downloaded to your computer, phone, tablet, or other device, you agree that we may automatically update this software, and that these Terms will apply to such updates. Please read these Terms carefully, and contact us if you have any questions. By using our Services, you agree to be bound by these Terms, including the policies referenced in these Terms.</p>

                            <p className={classes.s_content}>THESE TERMS INCLUDE AN ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT APPLY TO ALL CLAIMS BROUGHT AGAINST JEGO. PLEASE READ THEM CAREFULLY; THEY AFFECT YOUR LEGAL RIGHTS.</p>

                            <h2 className={classes.s_title}>Using JEGO</h2>
                            <h2 className={classes.sub_title}>Who May Use our Services</h2>
                            <p className={classes.s_content}>You may use our Services only if you can form a binding contract with JEGO, and only in compliance with these Terms and all applicable laws. When you create your JEGO account, and subsequently when you use certain features, you must provide us with accurate and complete information, and you agree to update your information to keep it accurate and complete.<b> Any use or access by anyone under the age of 13 is prohibited, and certain regions and Content Offerings may have additional requirements and/or restrictions.</b></p>

                            <h2 className={classes.sub_title}>Our License to You</h2>
                            <p className={classes.s_content}>Subject to these Terms and our policies (including the Acceptable Use Policy, Honor Code, course-specific eligibility requirements, and other terms), we grant you a limited, personal, non-exclusive, non-transferable, and revocable license to use our Services. You may download content from our Services only for your personal, non-commercial use, unless you obtain our written permission to otherwise use the content. You also agree that you will create, access, and/or use only one user account, unless expressly permitted by JEGO, and you will not share access to your account or access information for your account with any third party. Using our Services does not give you ownership of or any intellectual property rights in our Services or the content you access.</p>

                            <h2 className={classes.s_title}>Content Offerings</h2>
                            <h2 className={classes.sub_title}>Changes to Content Offerings</h2>
                            <p className={classes.s_content}>JEGO offers courses and content (“Content Offerings”) from instructors and other providers (“Content Providers”). While we seek to provide world-class Content Offerings from our Content Providers, unexpected events do occur. JEGO reserves the right to cancel, interrupt, reschedule, or modify any Content Offerings, or change the point value or weight of any assignment, quiz, or other assessment, either solely, or in accordance with Content Provider instructions. Content Offerings are subject to the Disclaimers and Limitation of Liability sections below.</p>

                            <h2 className={classes.sub_title}>No Academic Credit</h2>
                            <p className={classes.s_content}>Unless otherwise explicitly indicated by a credit-granting institution, participation in or completion of Content Offerings does not confer any academic credit. Even if credit is awarded by one institution, there is no presumption that other institutions will accept that credit. You agree not to accept credit for completing a Content Offering unless you have earned a course certificate or other equivalent documentation of your completion of the Content Offering. JEGO, instructors, and the associated Content Providers have no obligation to have Content Offerings recognized by any educational institution or accreditation organization.</p>

                            <h2 className={classes.sub_title}>Disclaimer of Student-Content Provider Relationship</h2>
                            <p className={classes.s_content}>Nothing in these Terms or otherwise with respect to your participation in any Content Offerings by Content Providers : (a) establishes any relationship between you and any Content Provider; (b) enrols or registers you in any Content Provider institution, or in any Content Offering offered by any Content Provider institution; or (c) entitles you to use the resources of any Content Provider institution beyond participation in the Content Offering.</p>

                            <h2 className={classes.s_title}>Your Content</h2>
                            <h2 className={classes.sub_title}>User Content</h2>
                            <p className={classes.s_content}>The Services enable you to share your content, such as homework, quizzes, experiences and other assignments you submit, posts you make in the forums, and the like (“User Content”), with JEGO, instructors, and/or other users. You retain all intellectual property rights in, and are responsible for, the User Content you create and share. User Content does not include course content or other materials made available on or placed on to the JEGO platform by or on behalf of Content Providers or their instructors using the Services or Content Offerings. As between JEGO and Content Providers, such Content Offerings are governed by the relevant agreements in place between JEGO and Content Providers.</p>

                            <h2 className={classes.sub_title}>How JEGO and Others May Use User Content</h2>
                            <p className={classes.s_content}>To the extent that you provide User Content, you grant JEGO a fully-transferable, royalty-free, perpetual, sublicensable, non-exclusive, worldwide license to copy, distribute, modify, create derivative works based on, publicly perform, publicly display, and otherwise use the User Content. This license includes granting JEGO the right to authorize Content Providers to use User Content with their registered students, on-campus learners, or other learners independent of the Services. Nothing in these Terms shall restrict other legal rights JEGO may have to User Content, for example under other licenses. We reserve the right to remove or modify User Content for any reason, including User Content that we believe violates these Terms or other policies including our Acceptable Use Policy and Code of Conduct.</p>

                            <h2 className={classes.sub_title}>Feedback</h2>
                            <p className={classes.s_content}>We welcome your suggestions, ideas, comments, and other feedback regarding the Services (“Feedback”). By submitting any Feedback, you grant us the right to use the Feedback without any restriction or any compensation to you. By accepting your Feedback, JEGO does not waive any rights to use similar or related Feedback previously known to JEGO, developed by our employees, contractors, or obtained from other sources.</p>

                            <h2 className={classes.s_title}>Security</h2>
                            <p className={classes.s_content}>We care about the security of our users. While we work to protect the security of your account and related information, JEGO cannot guarantee that unauthorized third parties will not be able to defeat our security measures. Please notify us immediately of any compromise or unauthorized use of your account by emailing contact@jego.co.in.</p>

                            <h2 className={classes.s_title}>Third Party Content</h2>
                            <p className={classes.s_content}>Through the Services, you will have the ability to access and/or use content provided by instructors, other users, and/or other third parties and links to websites and services maintained by third parties. JEGO cannot guarantee that such third party content, in the Services or elsewhere, will be free of material you may find objectionable or otherwise inappropriate or of malware or other contaminants that may harm your mobile device, or any files therein. JEGO disclaims any responsibility or liability related to your access or use of, or inability to access or use, such third party content.</p>

                            <h2 className={classes.s_title}>Copyright and Trademark</h2>
                            <p className={classes.s_content}>JEGO respects the intellectual property rights of our users, Content Providers, and other third parties and expects our users to do the same when using the Services. We have adopted and implemented the JEGO Copyright and Trademark Policy below in accordance with applicable law, including the Digital Millennium Copyright Act.</p>

                            <h2 className={classes.s_title}>Education Research</h2>
                            <p className={classes.s_content}>JEGO is committed to advancing the science of learning and teaching, and records of your participation in courses may be used for education research. In the interest of this research, you may be exposed to variations in the Content Offerings. Research findings will typically be reported at the aggregate level. Your personal identity will not be publicly disclosed in any research findings without your express consent.</p>

                            <h2 className={classes.s_title}>Paid Services from JEGO</h2>
                            <p className={classes.s_content}>JEGO offers paid Services (e.g. course certificates for certain course, event registrations, merchandise) and platinum courses for a fee. Unless otherwise stated, all fees are quoted in U.S. Dollars. You are responsible for paying all fees charged by or for JEGO and applicable taxes in a timely manner with a payment mechanism associated with the applicable paid Services. If your payment method fails or your account is past due, we may collect fees using other collection mechanisms. Fees may vary based on your location and other factors, and JEGO reserves the right to change any fees at any time at its sole discretion. Any change, update, or modification will be effective immediately upon posting through the relevant Services. Refunds may be available for paid Services as described in our Refund Policy below.</p>

                            <h2 className={classes.s_title}>Degree, Diploma and Masteries Certificate Programs</h2>
                            <p className={classes.s_content}>The Services may allow you to enroll in degree, diploma and Masteries certificate programs or similar programs offered by the platform or our Content Providers on the JEGO platform. Our Content Providers serve as the distance education providers of these programs and determine admissions, refunds, and graduation or completion policies and requirements. Nothing in these Terms shall restrict the applicability to you of any institutional policies established by our Content Provider in connection with these programs (e.g., student codes of conduct); such policies shall supplement these Terms and to the extent there is a conflict between such policies and these Terms, as between you and our Content Provider, our Content Provider’s policies shall govern.</p>

                            <h2 className={classes.s_title}>Modifying or Terminating our Services</h2>
                            <p className={classes.s_content}>We are constantly changing and improving our Services. We may add or remove functions, features, or requirements, and we may suspend or stop part of our Services altogether. Accordingly, JEGO may terminate your use of any Service for any reason. If your use of a paid Service is terminated, a refund may be available under our Refund Policy. We may not be able to deliver the Services to certain regions or countries for various reasons, including due to applicable export control requirements or internet access limitations and restrictions from governments. None of JEGO, its Content Providers and instructors, its contributors, sponsors, and other business partners, and their employees, contractors, and other agents (the “JEGO Parties”) shall have any liability to you for any such action. You can stop using our Services at any time, although we’ll be sorry to see you go.</p>

                            <h2 className={classes.s_title}>Disclaimers</h2>
                            <p className={classes.s_content}>THE SERVICES AND ALL INCLUDED CONTENT ARE PROVIDED ON AN “AS IS” BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED. THE JEGO PARTIES SPECIFICALLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. THE JEGO PARTIES FURTHER DISCLAIM ANY AND ALL LIABILITY RELATED TO YOUR ACCESS OR USE OF THE SERVICES OR ANY RELATED CONTENT. YOU ACKNOWLEDGE AND AGREE THAT ANY ACCESS TO OR USE OF THE SERVICES OR SUCH CONTENT IS AT YOUR OWN RISK.</p>

                            <h2 className={classes.s_title}>Limitation of Liability</h2>
                            <p className={classes.s_content}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE JEGO PARTIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY PARTY OTHER THAN THE APPLICABLE JEGO PARTY, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR CONTENT OR INFORMATION. IN NO EVENT SHALL JEGO’S AGGREGATE LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICES EXCEED TWENTY U.S. DOLLARS ($20) OR THE TOTAL AMOUNT OF FEES RECEIVED BY JEGO FROM YOU FOR THE USE OF PAID SERVICES DURING THE PAST SIX MONTHS, WHICHEVER IS LESSER.</p>
                            <p className={classes.s_content}>YOU ACKNOWLEDGE AND AGREE THAT THE DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET FORTH IN THIS TERMS OF USE REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND THE JEGO PARTIES, AND THAT THESE LIMITATIONS ARE AN ESSENTIAL BASIS TO JEGO’S ABILITY TO MAKE THE SERVICES AVAILABLE TO YOU ON AN ECONOMICALLY FEASIBLE BASIS.</p>
                            <p className={classes.s_content}>YOU AGREE THAT ANY CAUSE OF ACTION RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.</p>

                            <h2 className={classes.s_title}>Indemnification</h2>
                            <p className={classes.s_content}>You agree to indemnify, defend, and hold harmless the JEGO Parties from any and all claims, liabilities, expenses, and damages, including reasonable attorneys’ fees and costs, made by any third party related to: (a) your use or attempted use of the Services in violation of these Terms; (b) your violation of any law or rights of any third party; or (c) User Content, including without limitation any claim of infringement or misappropriation of intellectual property or other proprietary rights.</p>

                            <h2 className={classes.s_title}>Governing Law and Venue</h2>
                            <p className={classes.s_content}>The Services are managed by JEGO, which is located in United Arab Emirates. You agree that any dispute related to these Terms will be governed by the laws of the United Arab Emirates, excluding its conflicts of law provisions. In the event of any dispute related to these Terms that is not subject to binding arbitration, you and JEGO will submit to the personal jurisdiction of and exclusive venue in the federal and state courts located in and serving United Arab Emirates as the legal forum for any such dispute.</p>

                            <h2 className={classes.s_title}>Binding Arbitration and Class Action Waiver</h2>
                            <p className={classes.s_content}>You and JEGO agree to submit to binding arbitration any and all disputes, claims, or controversies of any kind, whether based on statute, regulation, constitution, common law, equity, or any other legal basis or theory, and whether pre-existing, present, or future, that arise out of or relate to our Services, these Terms, and/or any other relationship or dispute between you and us, including without limitation (i) the scope, applicability, or enforceability of these Terms and/or this arbitration provision, and (ii) relationships with third parties who are not parties to these Terms or this arbitration provision to the fullest extent permitted by applicable law (each a “Claim,” and collectively the “Claims”).</p>
                            <p className={classes.s_content}>Any and all Claims shall be submitted for binding arbitration in accordance with the Consumer Arbitration Rules of the American Arbitration Association (the “AAA Rules”), as amended, in effect at the time arbitration is initiated. The AAA Rules are available online at www.adr.org or by calling (800) 778-7879, and are hereby incorporated by reference. In the event of any inconsistency between this arbitration provision and the AAA Rules, such inconsistency shall be resolved in favour of this provision. If you decide to initiate arbitration, you agree to pay the initiation fee of $200 (or the amount otherwise required by the AAA Rules), and we agree to pay the remaining arbitration initiation fee and any additional deposit required by AAA to initiate your arbitration. We will pay the costs of the arbitration proceeding, including the arbitrator’s fees; however, other fees, such as attorney’s fees and expenses of travel to the arbitration, shall be paid in accordance with the AAA Rules and applicable law. We will pay all costs associated with any arbitration that we commence. A single, neutral arbitrator selected in accordance with the AAA Rules shall decide all Claims.</p>
                            <p className={classes.s_content}>The arbitrator shall be an active member in good standing of the bar for any state in the continental United States and shall be either actively engaged in the practice of law for at least five years or a retired judge. The arbitrator shall honor claims of privilege recognized at law. Unless inconsistent with applicable law, and except as otherwise provided herein, each party shall bear the expense of its respective attorney, expert, and witness fees, regardless of which party prevails in the arbitration. Any arbitration proceedings shall be conducted in the federal judicial district of your residence, and you will be given the opportunity to attend the proceeding and be heard. The arbitrator’s decision will be final and binding upon the parties and may be enforced in any federal or state court that has jurisdiction. You and we agree that the arbitration shall be kept confidential and that the existence of the proceeding and any element of it (including, without limitation, any pleadings, briefs or other documents submitted or exchanged and any testimony or other oral submissions and awards) will not be disclosed beyond the arbitration proceedings, except as may lawfully be required in judicial proceedings relating to the arbitration or by applicable disclosure rules and regulations of governmental agencies.</p>
                            <p className={classes.s_content}>Neither you nor JEGO may act as a class representative, nor participate as a member of a class of claimants, with respect to any Claim. The Claims may not be arbitrated on a class or representative basis. The arbitrator can decide only your and/or JEGO individual Claims. The arbitrator may not consolidate or join the claims of other persons or parties who may be similarly situated. Accordingly, you and we agree that the AAA Supplementary Rules for Class Arbitrations do not apply to our arbitration. This arbitration provision and the procedures applicable to the arbitration contemplated by this provision are governed by the Federal Arbitration Act, notwithstanding any state law that may be applicable.</p>
                            <p className={classes.s_content}>This arbitration agreement does not preclude you or us from seeking action by federal, state, or local government agencies. You and we also have the right to exercise self-help remedies, such as set-off, or to bring qualifying claims in small claims court so long as the matter remains in such court and advances only on an individual (non-class, non-representative) basis. In addition, you and we retain the right to apply to any court of competent jurisdiction for provisional or ancillary relief, including pre-arbitral attachments or preliminary injunctions, and any such request shall not be deemed incompatible with any of these Terms, nor a waiver of the right to have disputes submitted to arbitration as provided in this provision.</p>
                            <p className={classes.s_content}>A court may sever any portion of this Binding Arbitration and Class Action Waiver Section that it finds to be unenforceable, except for the prohibitions on any Claim being handled on a class or representative basis, and the remaining portions of this arbitration provision will remain valid and enforceable. No waiver of any provision of this Section will be effective or enforceable unless recorded in a writing signed by the party waiving such a right or requirement. Such a waiver shall not waive or affect any other portion of these Terms.</p>
                            <p className={classes.s_content}>THIS BINDING ARBITRATION AND CLASS ACTION WAIVER SECTION LIMITS CERTAIN RIGHTS, INCLUDING THE RIGHT TO MAINTAIN A COURT ACTION, THE RIGHT TO A JURY TRIAL, THE RIGHT TO PARTICIPATE IN ANY FORM OF CLASS OR REPRESENTATIVE CLAIM, AND THE RIGHT TO ENGAGE IN DISCOVERY EXCEPT AS PROVIDED IN THE AAA RULES. OTHER RIGHTS THAT YOU OR JEGO WOULD HAVE IN COURT ALSO MAY NOT BE AVAILABLE IN ARBITRATION.</p>

                            <h2 className={classes.s_title}>General Terms</h2>
                            <h2 className={classes.sub_title}>Revisions to the Terms</h2>
                            <p className={classes.s_content}>We reserve the right to revise the Terms at our sole discretion at any time. Any revisions to the Terms will be effective immediately upon posting by us. For any material changes to the Terms, we will take reasonable steps to notify you of such changes, via a banner on the website, notification on the mobile app, email notification, another method, or combination of methods. In all cases, your continued use of the Services after publication of such changes, with or without notification, constitutes binding acceptance of the revised Terms.We reserve the right to revise the Terms at our sole discretion at any time. Any revisions to the Terms will be effective immediately upon posting by us. For any material changes to the Terms, we will take reasonable steps to notify you of such changes, via a banner on the website, notification on the mobile app, email notification, another method, or combination of methods. In all cases, your continued use of the Services after publication of such changes, with or without notification, constitutes binding acceptance of the revised Terms.We reserve the right to revise the Terms at our sole discretion at any time. Any revisions to the Terms will be effective immediately upon posting by us. For any material changes to the Terms, we will take reasonable steps to notify you of such changes, via a banner on the website, notification on the mobile app, email notification, another method, or combination of methods. In all cases, your continued use of the Services after publication of such changes, with or without notification, constitutes binding acceptance of the revised Terms.</p>

                            <h2 className={classes.sub_title}>Severability; Waiver</h2>
                            <p className={classes.s_content}>If it turns out that a particular provision of these Terms is not enforceable, this will not affect any other terms. If you do not comply with these Terms, and we do not take immediate action, this does not indicate that we relinquish any rights that we may have (such as taking action in the future).</p>

                            <h2 className={classes.sub_title}>Content Providers</h2>
                            <p className={classes.s_content}>Our Content Providers and integrated service providers are third party beneficiaries of the Terms and may enforce those provisions of the Terms that relate to them.</p>

                            <h2 className={classes.sub_title}>Notice for California Users</h2>
                            <p className={classes.s_content}>Under California Civil Code Section 1789.3, California website users are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210.</p>

                            <h2 className={classes.s_title}>Acceptable Use Policy</h2>
                            <p className={classes.s_content}>Effective: June 1, 2022</p>
                            <p className={classes.s_content}>Our mission is to provide universal access to the content, products, communities and events to help people live a full spectrum life. We believe strongly in preserving free speech and expression for our users as well as academic freedom for our Content Providers, masters, experts and instructors. We also want to make sure that all of our users and instructors feel safe and comfortable while using our Services. We have drafted this policy to ensure that people understand and follow the rules when participating in our online community and otherwise using our Services.</p>
                            <p className={classes.s_content}>We may remove or edit inappropriate content or activity identified by or reported to us. We may separately suspend, disable, or terminate a user’s access to all or part of the Services.</p>

                            <h2 className={classes.s_title}>You are prohibited from using our Services to share content that:</h2>
                            <ul className={classes.para3_c} style={{ marginLeft: "2.5%" }}>
                                <li>Contains illegal content or promotes illegal activities with the intent to commit such activities. Please keep in mind that users who are as young as 13 use JEGO, and we do not allow content that is inappropriate for these younger users.</li>
                                <li>Contains credible threats or organizes acts of real-world violence. We don’t allow content that creates a genuine risk of physical injury or property damage, credibly threatens people or public safety, or organizes or encourages harm.</li>
                                <li>Harrasses others. We encourage commentary about people and matters of public interest, but abusive or otherwise inappropriate content directed at private individuals is not allowed.</li>
                                <li>Violates intellectual property, privacy, or other rights. Do not share content that you do not have the right to share, claim content that you did not create as your own, or otherwise infringe or misappropriate someone else’s intellectual property or other rights. Always attribute materials used or quoted by you to the original copyright owner.</li>
                                <li>Spams others. Do not share irrelevant or inappropriate advertising, promotional, or solicitation content.</li>
                                <li>Otherwise violates the JEGO Terms of Use.</li>
                            </ul>

                            <p className={classes.s_content}>Please note that specific Content Offerings may have additional rules and requirements.</p>

                            <h3 className={classes.sub_title}>You aren’t allowed to:</h3>
                            <ul className={classes.para3_c} style={{ marginLeft: "2.5%" }}>
                                <li>Do anything that violates local, state, national, or international law or breaches any of your contractual obligations or fiduciary duties.</li>
                                <li>Share your password, let anyone besides yourself access your account, or do anything that might put your account at risk.</li>
                                <li>Attempt to access any other user’s account.</li>
                                <li>Reproduce, transfer, sell, resell, or otherwise misuse any content from our Services, unless specifically authorized to do so.</li>
                                <li>Access, tamper with, or use non-public areas of our systems, unless specifically authorized to do so.</li>
                                <li>Break or circumvent our authentication or security measures or otherwise test the vulnerability of our systems or networks, unless specifically authorized to do so.</li>
                                <li>Try to reverse engineer any portion of our Services.</li>
                                <li>Try to interfere with any user, host, or network, for example by sending a virus, overloading, spamming, or mail-bombing.</li>
                                <li>Use our Services to distribute malware.</li>
                                <li>Use our Services or any functionality of the JEGO platform for anything other than for completing online courses or for pedagogical purposes.</li>
                                <li>Impersonate or misrepresent your affiliation with any person or entity.</li>
                                <li>Encourage or help anyone do any of the things on this list.</li>
                            </ul>

                            <h2 className={classes.s_title}>Copyright and Trademark Policy</h2>
                            <p className={classes.s_content}>Effective as of June 1, 2022</p>
                            <p className={classes.s_content}>JEGO respects the intellectual property rights of our Content Providers, instructors, users, and other third parties and expects our users to do the same when using the Services. We reserve the right to suspend, disable, or terminate the accounts of users who repeatedly infringe or are repeatedly charged with infringing the copyrights, trademarks, or other intellectual property rights of others.</p>
                            <p className={classes.s_content}>The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you would like to read the DMCA, please visit the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf.</p>
                            <p className={classes.s_content}>If you believe in good faith that materials on the JEGO platform infringe your copyright, the DMCA provides that you (or your agent) may send us a notice requesting that the material be removed or access to it blocked.</p>
                            <p className={classes.s_content}>The notice must include the following information:</p>

                            <ol className={classes.num_list} style={{ marginLeft: "2.5%" }}>
                                <li>the physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
                                <li>identification of the copyrighted work claimed to have been infringed (or, if multiple copyrighted works located on the platform are covered by a single notification, a representative list of such works);</li>
                                <li>identification of the material that is claimed to be infringing or the subject of infringing activity, and information reasonably sufficient to allow JEGO to locate the material on the platform;</li>
                                <li>the name, address, telephone number, and email address (if available) of the complaining party;</li>
                                <li>a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; an</li>
                                <li>a statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                            </ol>

                            <p className={classes.s_content}>Notices must meet the then-current statutory requirements imposed by the DMCA. Notices and counter-notices with respect to the Services can either be sent:</p>
                            <ol className={classes.num_list} style={{ marginLeft: "2.5%" }}>
                                <li>via mail: Poem Techinvest LLC, Sharjah Media City, Sharjah UAE, 515000</li>
                                <li>via email: contact@jego.co.in</li>
                            </ol>

                            <p className={classes.s_content}>We suggest that you consult your legal advisor before filing a notice. Also, be aware that there can be penalties for false claims under the DMCA.</p>
                            <p className={classes.s_content}>JEGO also respects the trademark rights of others. Accounts with any other content that misleads others or violates another’s trademark may be updated, suspended, disabled, or terminated by JEGO in its sole discretion. If you are concerned that someone may be using your trademark without proper permission on our Services, please email us at contact@jego.co.in, and we will review your submission. If we deem appropriate, we may remove the offending content, warn the individual who posted the content, and/or temporarily or permanently suspend or disable the individual’s account.</p>

                            <h2 className={classes.s_title}>Refund Policy</h2>
                            <p className={classes.s_content}>Effective as of June 1, 2022</p>
                            <p className={classes.s_content}>For details on our refund deadlines and policies, please refer to the information below. Please note that our policies differ between subscription payments and one-time payments made for course, specialization, and guided project purchases, and that payment options may vary from one offering to another. Please also note that we treat violations of our Terms of Use and Honor Code very seriously, and we have no obligation to offer refunds to users who violate these or other JEGO policies, even if their requests are made within the designated refund period.
                                Similarly, we have no obligation to offer late refunds to users who do not receive a passing mark in a Content Offering, or who are otherwise unsatisfied with their final grade.</p>

                            <h2 className={classes.sub_title}>For Monthly and Annual Subscriptions</h2>
                            <p className={classes.s_content}>JEGO does not offer refunds for payments made on a monthly or annual subscription plan. To avoid being charged during a free trial promotion, you must cancel your subscription before your free trial ends. If you complete a course during the free trial period, JEGO reserves the right to require you to pay for a one-month subscription in order to receive a course and/or specialization certificate.</p>
                            <p className={classes.s_content}>Your subscription will continue on recurring basis as per the chosen subscription plan unless and until you cancel or the subscription is suspended or discontinued by JEGO. You must cancel your subscription before your renewal date to avoid the next billing.</p>
                            <p className={classes.s_content}>If you cancel your subscription, cancellation will be effective at the end of the current subscription period; you will continue to have access to your subscription for the remainder of that period, but you will not receive a refund.</p>

                            <h2 className={classes.sub_title}>For One-time Platinum Course Purchases</h2>
                            <p className={classes.s_content}>If you cancel your paid purchase for a platinum course, JEGO will offer you a complete refund until 14 days after payment, only if the user has not completed more than 10% of the course. However, if you’re taking a course through your company, organization, or a JEGO sponsored program then you can earn your certificate as long as your company’s contract with JEGO is active and your access has not expired in accordance with the terms of that contract or JEGO is still running a sponsored program. Similarly, refunds and cancellations will also be governed by the terms of that contract between your organization and JEGO.</p>
                            <p className={classes.s_content}>Notwithstanding the foregoing, shorter refund periods may apply to specific courses (e.g., for courses that are part of certain programs, you will only be eligible for a full refund until seven days after your payment date). In these cases, the shorter period will be stated as part of the sign-up process for the course or specialization.</p>

                            <h2 className={classes.sub_title}>For Events</h2>
                            <p className={classes.s_content}>All event registrations are non-cancellable and non-refundable.</p>

                            <h2 className={classes.sub_title}>For Merchandise</h2>
                            <p className={classes.s_content}>This section will be updated before the launch of the merchandise store.</p>

                            <h2 className={classes.sub_title}>For Other Paid Services</h2>
                            <p className={classes.s_content}>Except as described in this Refund Policy or as explicitly stated as part of the sign-up process for a Service, JEGO has no obligation to provide refunds or vouchers for any other Services.</p>

                            <h2 className={classes.sub_title}>Third Party Marketplaces</h2>
                            <p className={classes.s_content}>Notwithstanding the foregoing, if you purchase or subscribe for a course, event or purchase any other paid Service, through a third party marketplace (e.g., in-app purchases through the Apple App Store or purchases made through certain alternative payment services), the refund policy applicable to that third party marketplace will apply, unless otherwise explicitly stated by JEGO. Except as otherwise explicitly stated by JEGO, the third party marketplace will be solely responsible for making refunds under its refund policy, and JEGO will have no refund obligations. JEGO disclaims any responsibility or liability related to any third party marketplace’s refund policy or the third party’s compliance or noncompliance with such policy.</p>

                            <h2 className={classes.s_title}>Honour Code</h2>
                            <p className={classes.s_content}>Effective as of June 1, 2022</p>
                            <p className={classes.s_content}>All users participating in Content Offerings must agree to abide by the following code:</p>
                            <ol className={classes.num_list} style={{ marginLeft: "2.5%" }}>
                                <li>I will register for only one account, unless expressly permitted to register for additional accounts by JEGO.</li>
                                <li>My answers to homework, quizzes, projects, and other assignments will be my own work (except for assignments that explicitly permit collaboration).</li>
                                <li>I will not make solutions to homework, quizzes, projects, and other assignments available to anyone else (except to the extent an assignment explicitly permits sharing solutions). This includes both solutions written by me, as well as any solutions provided by the course staff or others.</li>
                                <li>I will not engage in any other activities that will dishonestly improve my results or dishonestly improve or hurt the results of others.</li>
                                <li>Any violation of this code may result in your access to all or part of the Services being suspended, disabled, or terminated.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div> 
        </div>
    )
}

export default TermConditionScreen;
