import classes from './Privacy/privacy.module.css';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

const PrivacyPolicyScreen = () => {
    return (
        <div>
        <div>
        <Header/>
            <div className={classes.root}>
                <div className={classes.head}>
                    <h3 className={classes.heading}> Privacy Policy </h3>
                </div>

                <div className={classes.section}>
                    <div className={classes.content}>
                        <div className={classes.wrap}>
                            <span className={classes.s_title}>Effective: June 1,2022</span>
                            <h2 className={classes.s_title}>Key Information</h2>

                            <ul className={classes.s_content} style={{ marginLeft: "2.5%" }}>
                                <li ><b>Poem Techinvest LLC </b> is the data controller of the personal information we collect about you (i.e., the entity that determines the means and purposes of collecting,
                                    using, and disclosing the personal information)</li>

                                <li >We collect the personal information set out in the “What Information We Collect” section of this Privacy Notice below, including account
                                    registration details such as name and email, details of Content Offerings you undertake, survey information (where you provide it), identity
                                    verification data, and information about your use of our App and Services.</li>

                                <li >We use your personal information for the purposes set out in the “How We Use the Information” section of this Privacy Notice below, including
                                    providing our app and Services to you, ensuring the security and performance of our App, conducting research relating to Content Offerings, sharing information with
                                    our Content Providers and our suppliers, direct marketing, and performing statistical analysis of the use of our App and Services.</li>

                                <li >You have a number of rights that you can exercise in relation to our use of your personal information, as set out in the “Updating or Deleting
                                    Your Personally Identifiable Information” section of this Privacy Notice below.</li>
                            </ul>
                            <br />
                            <br />
                            <span className={classes.privacy}>You can find information about us and how we collect, use and store your personal data in each section of this Privacy Notice:
                                <ol style={{ marginLeft: "2.5%" }}>
                                    <li className={classes.s_content}> Purpose and who we are</li>
                                    <li className={classes.s_content}> What information this Privacy Notice Cover</li>
                                    <li className={classes.s_content}> What You Agree to by Using Our Site</li>
                                    <li className={classes.s_content}> What Information We Collect</li>
                                    <li className={classes.s_content}> How We Use the Information</li>
                                    <li className={classes.s_content}> External Links</li>
                                    <li className={classes.s_content}> Social Media Integrations</li>
                                    <li className={classes.s_content}> Retention of Personally Identifiable Information</li>
                                    <li className={classes.s_content}> Confidentiality & Security of Personally Identifiable Information</li>
                                    <li className={classes.s_content}> Updating or Deleting Your Personally Identifiable Information</li>
                                    <li className={classes.s_content}> Questions, Suggestions and Complaints</li>
                                    <li className={classes.s_content}> California Privacy RightsInternational Privacy Practices</li>
                                    <li className={classes.s_content}> Changing Our Privacy Notice </li>
                                    <li className={classes.s_content}> No Information from Children Under 13</li>
                                </ol>
                            </span>
                            <br />
                            <div>
                                <h2 className={classes.s_title}>1. Purpose and who we are</h2>
                                <p className={classes.s_content}>The purpose of this Privacy Notice is to describe how Poem Techinvest LLC, our subsidiaries, and our international branches, (“JEGO,” “us,” “we,” or “our”) collects, uses, and shares information about you through our online interfaces (E.g. Websites and mobile applications) – including but not limited to “JEGO App” and “www.jego.co.in” (collectively referred to herein as the “App”). Please read this Privacy Notice carefully to understand what we do. If you do not understand any aspects of our Privacy Notice, please feel free to contact us at contact@jego.co.in. Your use of our App is also governed by our <a style={{ color: "blue" }} href="/TermConditionScreen">Terms of Use</a>. Terms used but not defined in this Privacy Notice can be found in our Terms of Use. Poem Techinvest LLC’s principal place of business is at Sharjah Media City, Sharjah, United Arab Emirates. If you reside or are located in the European Economic Area (“EEA”) JEGO is the data controller of all Personal Data (as defined below) collected via the App and of certain Personal Data collected from third parties, as set out in this Privacy Notice.</p>
                            </div>

                            <div>
                                <h2 className={classes.s_title}>2. What Information this Privacy Notice Covers</h2>
                                <p className={classes.s_content}>This Privacy Notice covers information we collect from you through the JEGO App. Some of our App’s functionality can be used without revealing any Personal Data, but for features or Services related to the Content Offerings, Personal Data is required. In order to access certain features and benefits on our Site, you may need to submit, or we may collect, “Personal Data” (i.e., information that can be used to identify you and which may also be referred to as “personally identifiable information” or “personal information”). Personal Data can include information such as your name, email address, IP address, and device identifier, among other things. You are responsible for ensuring the accuracy of the Personal Data you submit to JEGO. Inaccurate information may affect your ability to use the App, the information you receive when using the App, and our ability to contact you. For example, your email address should be kept current because that is one of the primary manners in which we communicate with you.</p>
                            </div>

                            <div>
                                <h2 className={classes.s_title}>3. What You Agree to by Using Our Site</h2>
                                <p className={classes.s_content}>We consider that the legal bases for using your personal information as set out in this Privacy Notice are as follows:</p>

                                <p className={classes.para3_c}>1. Our use of your personal information is necessary to perform our obligations under any contract with you (for example, to comply with the  Terms of Use of our App which you accept by browsing our website and/or installing our App and/or to comply with our contract to provide Services  to you, your academic institution, your employer, or other organization that may be providing you with access to our Services); or</p>
                                <p className={classes.para3_c}>2. Our use of your personal information is necessary for complying with our legal obligations; or</p>
                                <div className={classes.para3_c}>3. Use of your personal information is necessary for our legitimate interests or the legitimate interests of others. Our legitimate interests are to:
                                    <ul style={{ marginLeft: "2.5%" }}>
                                        <li>run, grow and develop our business;</li>
                                        <li>operate our App and provide our Services;</li>
                                        <li>select appropriately skilled and qualified suppliers;</li>
                                        <li>build relationships with partners and academic institutions;</li>
                                        <li>carry out research and statistical analysis;</li>
                                        <li>carry out marketing and business development; and</li>
                                        <li>for internal administrative and auditing purposes.</li>
                                    </ul>
                                </div>
                                <p className={classes.para3_c}>4.Consent, to send you certain communications or where you submit certain information to us, or where required to rely upon consent by local law.</p>

                                <p className={classes.s_content}>Which legal basis applies to a specific activity will depend on the type of personal information used and the context in which it is being used.</p>
                                <p className={classes.s_content}>If we rely on our (or another party’s) legitimate interests for using your personal information, we will undertake a balancing test to ensure that our (or the other party’s) legitimate interests are not outweighed by your interests or fundamental rights and freedoms which require protection of the personal information.</p>
                                <p className={classes.s_content}>We may process your personal information in some cases for marketing purposes on the basis of your consent. Consent can be withdrawn at any time by deleting your account. You can navigate to the Contact Us page and message us to initiate the deletion or alternately, email us on contact@jego.co.in. Please note that we may also rely on legitimate interests or fulfilment of a contract to continue processing your data.</p>
                            </div>

                            <div>
                                <h2 className={classes.s_title}>4. What Information We Collect</h2>
                                <p className={classes.s_content}>We gather two types of information about users through the App:</p>
                                <p className={classes.para3_c}><b>1.Information relating to your use of our App.</b> When users come to our App, we may track, collect, and aggregate information indicating, among other things, which pages of our App were visited, the order in which they were visited, when they were visited, and which hyperlinks were clicked. We also collect information from the URLs from which you linked to our App. Collecting such information may involve logging the IP address, operating system, and device information used by each user of the App. We may be able to determine from an IP address a user’s Internet Service Provider and the geographic location of their point of connectivity. Location data may be used to route your traffic to the nearest regional server to reduce latency and improve your experience. We may also use cookies and web beacons when you visit our App. For more information on our use of cookies and web beacons, please refer to our Cookies Policy.</p>
                                <div className={classes.para3_c}><b>2.Personal Data provided directly by you or via third parties.</b> We collect Personal Data that you provide to us when you register for an account, update or change information for your account, purchase products or Services, complete a survey, sign-up for email updates, send us email messages, and/or participate in Content Offerings or other Services on our Site. We may use the Personal Data that you provide to respond to your questions, provide you the specific Content Offering and/or Services you select, send you updates about Content Offerings or other JEGO events, and send you email messages about App maintenance or updates. Your Personal Data may include, but is not limited to:
                                    <ul style={{ marginLeft: "2.5%" }}>
                                        <li> Email address</li>
                                        <li>operate our App and provide our Services;</li>
                                        <li>First name and last name</li>
                                        <li>build relationships with partners and academic institutions;</li>
                                        <li>Phone number</li>
                                        <li>Address, State, Province, ZIP/Postal code, City</li>
                                        <li>We may access and collect, with your prior permission, pictures and other information from your device’s camera and photo library.</li>
                                    </ul>
                                </div>

                                <p className={classes.s_content}><b>– Account Registration.</b> If you register for an account on our App, you may be required to provide us with Personal Data such as your name and email address.</p>
                                <p className={classes.s_content}><b>– Updates.</b> JEGO may offer you the ability to receive updates either via email or by posting on portions of the App only accessible to registered users. In order to subscribe to these Services, you may be required to provide us with Personal Data such as your name and email address.</p>
                                <p className={classes.s_content}><b>– Forums.</b> JEGO may offer public forums from time to time (the “Forums”) where you can share comments and thoughts. In order to participate in the Forums, you may be required to register with us and/or provide us with Personal Data such as your name and email address. Please keep in mind that information you post or make available in Forums will be publicly available. You should not include any personal information or other information of a personal or sensitive nature, whether relating to you or another person, in a Forum post. Please also reference our Terms of Use for additional information about proper use of our Forums.</p>
                                <p className={classes.s_content}><b>– Participation in Content Offerings.</b> JEGO offers users the opportunity to participate in Content Offerings on or through the App. If you desire to participate in a Content Offering, you will be asked to provide us with certain information necessary to conduct such a Content Offering. This information may include, among other things, your name and email address.</p>
                                <p className={classes.s_content}>If you participate in a Content Offering, we may collect certain user-generated content, such as responses to knowledge checks and quizzes, records of achieved JEGO, surveys, assignments you submit,. We also collect course data, such as responses to in-video quizzes, standalone quizzes, exams, and surveys. You should not include any Personal Data or other information of a personal or sensitive nature, whether relating to you or another person, on achieved JEGO, quizzes or surveys, assignments, exams, or surveys, except for information required to participate in or submit such achieved JEGO, quizzes or surveys. assignments, exams, or surveys.</p>
                                <p className={classes.s_content}>If you participate in a Content Offering, we may collect certain user-generated content, such as responses to knowledge checks and quizzes, records of achieved JEGO, surveys, assignments you submit,. We also collect course data, such as responses to in-video quizzes, standalone quizzes, exams, and surveys. You should not include any Personal Data or other information of a personal or sensitive nature, whether relating to you or another person, on achieved JEGO, quizzes or surveys, assignments, exams, or surveys, except for information required to participate in or submit such achieved JEGO, quizzes or surveys. assignments, exams, or surveys.</p>
                                <p className={classes.s_content}><b>– Identity Verification.</b> JEGO may offer you the ability to verify your identity for select Services. In order to enroll for these Services, you may be required to provide us or our third-party identity verification vendor with Personal Data such as your name, address, date of birth, a headshot taken using a webcam, and a photo identification document. Additionally, if you apply for financial aid in connection with these Services, you may be required to provide information regarding your income.</p>
                                <p className={classes.s_content}><b>– Communications with JEGO.</b> We may receive Personal Data when you send us an email message or otherwise contact us.</p>
                                <p className={classes.s_content}><b>– Third Party Sites.</b> We may receive Personal Data when you access or log-in to a third party site, e.g., Facebook, from our Sites. This may include the text and/or images of your Personal Data available from the third party site.</p>
                                <p className={classes.s_content}><b>– Surveys.</b> We may receive Personal Data when you provide information in response to a survey operated by us or a Content Provider.</p>
                                <p className={classes.s_content}><b>– Partner sites.</b> Partner sites providing Content Offering-related tools and services to JEGO users may collect nonfinancial individual-level user data regarding the individual’s use of that partner site while the partner sites provide those services to JEGO. The partner sites may share that data with JEGO for the purpose of improving our Services, the partner site’s services, and the individual’s education experience. This data includes information such as the amount of time spent on the partner site and pages viewed.</p>
                                <p className={classes.s_content}><b>– Third Party Payment Processing.</b> JEGO provides you with the ability to pay for Content Offerings and other Services using Google Playstore Billing and Apple App Store Billing Please note that our service provider – not JEGO – collects and processes your financial information.</p>
                            </div>

                            <div>
                                <h2 className={classes.s_title}>5. How We Use the Information</h2>
                                <ul style={{ marginLeft: "2.5%" }} className={classes.para3_c}>
                                    <li><b>Information relating to your use of our App.</b> We use information relating to your use of the Site to build higher quality, more useful Services by performing statistical analyses of the collective characteristics and behavior of our users, and by measuring demographics and interests regarding specific areas of our App. This will be done through <Link style={{ color: "blue" }} href="https://privacy.microsoft.com/en-us/privacystatement">Microsoft’s Power BI tool</Link>. We may also use this information to ensure the security of our Services and the App.</li>
                                    <li><b>Personally Identifiable Information provided directly by you or via third parties.</b> Except as set forth in this Privacy Notice or as specifically agreed to by you, JEGO will not disclose any of your Personal Data. In addition to the other uses set forth in this Privacy Notice, we may disclose and otherwise use Personal Data as described below.</li>
                                    <li><b>Providing the App and our Services.</b> We use Personal Data which you provide to us in order to allow you to access and use the App and in order to provide any information, products, or Services that you request from us.</li>
                                    <li><b>Technical support and security.</b> We may use Personal Data to provide technical support to you, where required, and to ensure the security of our Services and the App.</li>
                                    <li><b>Updates.</b> We use Personal Data collected when you sign-up for our various email or update services to send you the messages in connection with the App or Content Offerings. We may also archive this information and/or use it for future communications with you, where we are legally entitled to do so.</li>
                                    <li><b>Forums.</b> You should not post any personally identifiable information or other information of a personal or sensitive nature, whether relating to you or another person, within a Forum post. If you choose to post personally identifiable information, such personally identifiable information may be collected during your use of the Forums. We may publish this information via extensions of our platform that use third-party services, like mobile applications. We reserve the right to reuse Forum posts that contain personally identifiable information in future versions of the Content Offerings, and to enhance future Content Offerings. We may archive this information and/or use it for future communications with you and/or your designee(s), and/or provide it to the Content Provider, business partners, or the instructor(s) associated with the courses you have taken. We may also use or publish posts submitted on the Forums without using personally identifiable information.</li>
                                    <li><b>Participation in Content Offerings.</b> We use the Personal Data that we collect from you when you participate in a Content Offering through the Site for processing purposes, including but not limited to tracking attendance, progress, and completion of the Content Offerings. We may also share your Personal Data and your performance in a given Content Offering with the Guide or Guides who taught it, with teaching assistants or other individuals designated by the Guide or Guides to assist with the creation, modification, or operation of the Content Offering, and with the Content Provider(s) with which they are affiliated. We may also use the information generated when taking a Content Offering or using the Services for predictive analysis of your performance in the Content Offerings. Also, we may archive this information and/or use it for future communications with you, where we are legally entitled to do so.</li>
                                    <li><b>Identity Verification.</b> For Services that require identity verification, we may use the Personal Data that we collect for verifying your identity, and for authenticating that submissions made on the Site were made by you. This service may be provided through a third-party identity verification vendor. Your photo identification document will be deleted after successful verification of your profile information.</li>
                                    <li><b>Communications with or from JEGO.</b> When you send us an email message or otherwise contact us, we may use the information provided by you to respond to your communication and/or as described in this Privacy Notice. We may also archive this information and/or use it for future communications with you where we are legally entitled to do so. Where we send you emails, we may track the way that you interact with these emails (such as when you open an email or click on a link inside an email). We use this information for the purposes of optimizing and better tailoring our communications to you.</li>
                                    <li><b>Communications with JEGO Business Partners.</b> We may share your Personal Data with Content Providers and other business partners of JEGO so that Content Providers and other business partners may share information about their products and services that may be of interest to you where they are legally entitled to do so.</li>
                                    <li><b>Advertisements:</b> JEGO uses Google AdSense to display advertisements to certain users while using the App.
                                        <p className={classes.para3_c}>
                                            <li>Third party vendors, including Google, use cookies to serve ads based on a user’s prior visits to our App or other websites.</li>
                                            <li>Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our website, mobile app and/or other sites on the Internet.</li>
                                            <li>Users may opt out of personalized advertising by visiting <Link style={{ color: "blue" }} href="https://www.google.com/settings/ads">Ads Settings</Link> Users can also choose to opt out of a third-party vendor’s use of cookies for personalized advertising by visiting <Link href="url">www.aboutads.info.</Link></li>
                                        </p>
                                    </li>
                                    <li><b>Research.</b> We may share general course data (including quiz or assignment submissions, and recorded JEGO and forum discussions), information about your activity on our App, and demographic data from surveys operated by us with our Content Providers and other business partners so that our Content Providers and other business partners may use the data for research related to online education.</li>
                                    <li><b>Disclosure to JEGO Operations and Maintenance Contractors.</b> We use various service providers, vendors, and contractors (collectively, “Contractors”) to assist us in providing our Services to you. Our Contractors may have limited access to your Personal Data in the course of providing their products or services to us, so that we in turn can provide our Services to you. These Contractors may include vendors and suppliers that provide us with technology, services, and/or content related to the operation and maintenance of the App or the Content Offerings. Access to your Personal Data by these Contractors is limited to the information reasonably necessary for the Contractor to perform its limited function for us.</li>
                                    <li><b>Government Authorities; Legal Rights and Actions.</b> JEGO may share your Personal Data with various government authorities in response to subpoenas, court orders, or other legal processes; to establish or exercise our legal rights or to protect our property; to defend against legal claims; or as otherwise required by law. In such cases we reserve the right to raise or waive any legal objection or right available to us. We also may share your Personal Data when we believe it is appropriate to investigate, prevent, or take action regarding illegal or suspected illegal activities; to protect and defend the rights, property, or safety of JEGO, the App, our users, customers, or others; and in connection with our Terms of Use and other agreements.</li>
                                    <li><b>Disclosure to Acquirers.</b> JEGO may disclose and/or transfer your Personal Data to an acquirer, assignee or other successor entity in connection with a sale, merger, or reorganization of all or substantially all of the equity, business, or assets of JEGO to which your Personal Data relates.</li>
                                    <li><b>e-Readers.</b> If we receive any Personal Data related to the extent to which you use designated e-Readers or other devices to access JEGO materials, we may archive it, and use it for research, business, or other purposes.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className={classes.s_title}>6. External Links</h2>
                                <p className={classes.s_content}>For your convenience we may provide links to sites operated by organizations other than JEGO (“Third Party Sites”) that we believe may be of interest to you. We do not disclose your Personal Data to these Third Party Sites unless we have a lawful basis on which to do so. We do not endorse and are not responsible for the privacy practices of these Third Party Sites. If you choose to click on a link to one of these Third Party Sites, you should review the privacy policy posted on the other site to understand how that Third Party Site collects and uses your Personal Data.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>7. Social Media Integrations</h2>
                                <h2 className={classes.sub_title}>7.1 Logging in through Social Media Services</h2>
                                <p className={classes.s_content}>We allow you to create an account and log in to use the App through the following Third-party Social Media Services:</p>
                                <ul className={classes.para3_c} style={{ marginLeft: "2.5%" }}>
                                    <li>Google</li>
                                    <li>Facebook</li>
                                </ul>
                                <p className={classes.s_content}>If you decide to register through or otherwise grant us access to a Third-Party Social Media Service, we may collect Personal data that is already associated with Your Third-Party Social Media Service’s account, such as your name, your email address, or your contact list associated with that account.</p>

                                <h2 className={classes.sub_title}>7.2 Social Plug-ins from Facebook</h2>
                                <p className={classes.s_content}>We use social plug-ins from facebook.com, operated by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA. The plug-ins can be recognized by way of the Facebook logo or the supplement “Facebook Social Plug-in”. For example, if you click on the “Like” button or leave a comment, the relevant information is transmitted directly from your browser or the App to Facebook and stored there. Furthermore, Facebook makes your likes public for your Facebook friends. If you are logged into Facebook, it can assign the invocation of our page directly to your Facebook account. Even if you are not logged in or don’t have a Facebook account, your browser sends information (e.g. which web pages you have called up, your IP address) which is then stored by Facebook. For details about handling of your personal data by Facebook and your related rights, please refer to the data privacy policy of Facebook: http://www.facebook.com/policy.php. If you do not want Facebook to map data collected about you via our App to your Facebook account, you must log out of Facebook before you visit our website and mobile application.</p>

                                <h2 className={classes.sub_title}>7.3 Social Plug-ins from Twitter</h2>
                                <p className={classes.s_content}>With Twitter and its Retweet functions, we use social plug-ins from Twitter.com, operated by Twitter Inc. 795 Folsom St., Suite 600, San Francisco, CA 94107. If you use Retweet, the websites visited by you are announced to third parties and associated with your Twitter account. Details about handling of your data by Twitter as well as your rights and setting options for protecting your personal information can be found in Twitter’s data privacy policy: http://twitter.com/privacy</p>

                                <h2 className={classes.sub_title}>7.4 Newsletters</h2>
                                <p className={classes.s_content}>Once you register with our App, your e-mail address is used by our e-mail marketing tool for our own advertising purposes, until you cancel the newsletter subscription. Cancellation is possible at any time. The following consent has been granted by you when signing up for the JEGO App.
                                    You may revoke your consent at any time with future effect. If you no longer want to receive the newsletter, then unsubscribe by:</p>
                                <p className={classes.s_content}>Using the Opt Out Link at the bottom of the newsletter.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>8. Retention of Personally Identifiable Information</h2>
                                <p className={classes.s_content}>We keep your Personal Data for no longer than necessary for the purposes for which the Personal Data is collected and processed. The length of time we retain Personal Data for depends on the purposes for which we collect and use it and/or as required to comply with applicable laws and to establish, exercise, or defend our legal rights.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>9. Confidentiality & Security of Personally Identifiable Information</h2>
                                <p className={classes.s_content}>We will use industry standard physical, technical, and administrative security measures to keep your Personal Data confidential and secure, and will not share it with third parties, except as otherwise provided in this Privacy Notice, or unless such disclosure is necessary in special cases, such as a physical threat to you or others, as permitted by applicable law. Because the Internet is not a 100% secure environment, we cannot guarantee the security of Personal Data, and there is some risk that an unauthorized third party may find a way to circumvent our security systems or that transmission of your information over the Internet will be intercepted. It is your responsibility to protect the security of your login information. Please note that e-mail communications are typically not encrypted and should not be considered secure.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>10. Updating or Deleting Your Personal Data</h2>
                                <p className={classes.s_content}>You have certain rights in relation to your Personal Data. You can access your Personal Data and confirm that it remains correct and up-to-date, and choose whether or not you wish to receive material from us or some of our partners, by logging into the App, selecting ‘My Profile’ from the menu in the top left, and scrolling down to find the appropriate option. You can also request that we delete your account or provide you with a copy of your personal data by sending us a message through the ‘Contact Us’ page or writing to us on contact@jego.co.in.</p>
                                <div className={classes.s_content}>If you would like further information in relation to your rights or would like to exercise any of them, you may also contact us via contact@jego.co.in. If you reside or are located in the EEA, United Kingdom, Switzerland, or other region that offers similar protections, you have the right to request that we:
                                    <ul style={{ marginLeft: "2.5%" }} >
                                        <li>provide access to any Personal Data we hold about you;</li>
                                        <li>prevent the processing of your Personal Data for direct-marketing purposes;</li>
                                        <li>update any Personal Data which is out of date or incorrect;</li>
                                        <li>delete any Personal Data which we are holding about you;</li>
                                        <li>restrict the way that we process your Personal Data;</li>
                                        <li>provide your Personal Data to a third party provider of services; or</li>
                                        <li>provide you with a copy of any Personal Data which we hold about you.</li>
                                    </ul>
                                </div>
                                <p className={classes.s_content}>You can choose to delete your account (as mentioned above), which will result in the deletion of your Personal Data from our records. This will be an irreversible change. Keep in mind, however, that when deleting your Personal Data there may be residual information that will remain within our databases, access logs, and other records, which may or may not contain your Personal Data. Please also note that certain Personal Data may be exempt from such requests in certain circumstances, which may include if we need to retain your Personal Data to comply with a legal obligation. When you email us with a request, we may ask that you provide us with information necessary to confirm your identity. We try to answer every request promptly where possible, and provide our response within the time period stated by applicable law.
                                    If you are a resident of California, please also see our CCPA Notice.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>11. Questions, Suggestions, and Complaints</h2>
                                <p className={classes.s_content}>
                                    If you have any privacy-related questions, suggestions, unresolved problems, or complaints, you may contact us via contact@jego.co.in.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>12. California Privacy Rights</h2>
                                <h2 className={classes.sub_title}>12.1 Shine the Light</h2>
                                <p className={classes.s_content}>Shine the Light Under California’s “Shine the Light” law, California residents who provide personal information in obtaining products or services for personal, family, or household use are entitled to request and obtain from us, once a calendar year, information about the customer information we shared, if any, with other businesses for their own direct marketing uses. If applicable, this information would include the categories of customer information and the names and addresses of those businesses with which we shared customer information for the immediately prior calendar year (e.g. requests made in 2018 will receive information regarding 2017 sharing activities).</p>
                                <p className={classes.sub_title}>To obtain this information, please send an email message to contact@jego.co.in with “Request for California Privacy Information” on the subject line and in the body of your message. We will provide the requested information to you at your email address in response. Please be aware that not all information sharing is covered by the “Shine the Light” requirements and only information on covered sharing will be included in our response.</p>

                                <h2 className={classes.sub_title}>12.2 California Consumer Privacy Act</h2>
                                <p className={classes.s_content}>Under the California Consumer Privacy Act (“CCPA”), California residents have the right to know what personal information about them is collected, request deletion of their personal data, opt-out of the sale of their personal data, and not be discriminated against if they choose to exercise any of these rights. JEGO does not sell any of the data we collect about you. If you’d like to exercise any of the other rights afforded to you, log in to your JEGO account, contact us at contact@jego.co.in.</p>
                                <p className={classes.s_content}>For more information about how we process the personal information of California residents and the rights that California residents have under the CCPA, please review our full CCPA Notice here.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>13. International Privacy Practices</h2>
                                <p className={classes.s_content}>In order to provide our products and Services to you, you may be sending your Personal Data outside of the country where you reside or are located, including to the United States. Accordingly, if you reside or are located outside of the United States, your Personal Data may be transferred outside of the country where you reside or are located, including to countries that may not or do not provide the same level of protection for your Personal Data. We are committed to protecting the privacy and confidentiality of Personal Data when it is transferred.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>14. Changing Our Privacy Notice</h2>
                                <p className={classes.s_content}>Please note that we review our privacy practices from time to time, and that these practices are subject to change. Any change, update, or modification will be effective immediately upon posting on our mobile app and website. We will notify you of any material change to this Privacy Notice by sending an email to the email address associated with your user account, and by changing the effective date (located at the top and bottom of this page). Be sure to return to this page periodically to ensure familiarity with the most current version of this Privacy Notice.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>15. No Information from Children Under 13</h2>
                                <p className={classes.s_content}>JEGO strongly believes in protecting the privacy of children. Any use or access by anyone under the age of 13 is prohibited, and certain regions and Content Offerings may have additional requirements and/or restrictions. In line with this belief, we do not knowingly collect or maintain Personal Data on our App from persons under 13 years of age, and no part of our App is directed to persons under 13 years of age. If you are under 13 years of age, then please do not use or access this App at any time or in any manner. We will take appropriate steps to delete any Personal Data of persons less than 13 years of age that has been collected on our App without verified parental consent upon learning of the existence of such Personal Data.</p>
                                <p className={classes.s_content}>If you have any questions about how we handle your information, please contact us at contact@jego.co.in.</p>
                                <p className={classes.s_content}>Addendum 1</p>
                                <p className={classes.s_content}>California Consumer Privacy Act Notice</p>
                                <p className={classes.s_content}>Effective: June 1, 2022.</p>
                                <p className={classes.s_content}>This notice addresses the specific disclosure requirements under the California Consumer Privacy Act of 2018 (“CCPA”). It is incorporated into the JEGO Privacy Notice and applies to personal information about California residents using our App and Services (“Consumers,” “You,” or “Your”) that we collected over the previous 12 months. For purposes of the CCPA, personal information means information that identifies, relates to, describes, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular California resident or household.</p>
                                <p className={classes.s_content}>In the event of a conflict between this CCPA Notice and any of our other privacy notices, this CCPA Notice shall control only with respect to the personal information of California residents.For more information about the data we collect and how we use it, please review our Privacy Notice.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>Add 1.1 Personal Information Purposes of Processing</h2>
                                <div className={classes.s_content}>This section describes the purposes for which we collect and use personal information. We collect and use personal information regarding California residents for the purposes described below:
                                    <ul style={{ marginLeft: "2.5%" }} >
                                        <li>run, grow and develop our business;</li>
                                        <li>operate our App and provide our Services;</li>
                                        <li>select appropriately skilled and qualified suppliers;</li>
                                        <li>build relationships with partners and academic institutions;</li>
                                        <li>carry out research and statistical analysis;</li>
                                        <li>carry out marketing and business development; and</li>
                                        <li>for internal administrative and auditing purposes.</li>
                                    </ul>
                                </div>
                                <div className={classes.s_content}>We do not sell your personal information and we do not have actual knowledge that we sell the personal information of minors under 16 years of age. We may disclose personal information to other parties as follows:
                                    <ul style={{ marginLeft: "2.5%" }}>
                                        <li><b>Service Providers:</b> We may disclose personal information to our service providers in order to have them perform services that assist us in fulfilling the purposes listed above. Our service providers provide us with a range of services including: hosting our App, processing payments, legal and accounting professional services, postal and email delivery, conducting analysis to improve our products and App, fulfilling requests you make, managing payments, and answering your questions. We don’t allow our service providers to retain, use, or otherwise handle the data we provide to them for their own purposes.</li>
                                        <li><b>Security:</b> We may disclose personal information to our partners, service providers, and law enforcement to secure our App and Services, including to detect, prevent, and investigate security incidents or violations of our Terms of Use or applicable laws.</li>
                                        <li><b>Audits:</b> We may disclose personal information to our partners and service providers in order to audit interactions and transactions for legal compliance and other purposes.</li>
                                        <li><b>Service Improvements:</b> We may disclose personal information to our service providers in order to improve our App and Services, such as to identify bugs, repair errors, or ensure that services function as intended, or conduct internal research and analysis to improve our technology.We may disclose personal information to third parties at your direction.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>Add1.2 Personal Information Categories</h2>
                                <div className={classes.s_content}>Our Privacy Notice covers our personal information collection and usage more fully. The chart below describes the categories of personal information we collect and the sources from which we collect the personal information, organized into the categories specified by the CCPA.
                                    <ul style={{ marginLeft: "2.5%" }}>
                                        <li>Personal information described in Cal. Civ. Code §1798.80(e)(such as name, address, telephone number): Information you provide directly or through your interactions with our Services Information from our partners or customers</li>
                                        <li>Identifiers (e.g., real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, or other similar identifiers): Information you provide to us directly or through your interactions with our App and Services (as defined in our Terms of Use and Privacy Notice) Vendors that provide information to help us serve relevant ads and understand the ads’ effectiveness</li>
                                        <li>Characteristics of protected classifications under California or Federal law (e.g., your gender or age) (“Characteristics of Protected Classifications”): Information you provide to us directly</li>
                                        <li>Commercial information (e.g., information regarding products or services purchased, obtained, or considered): Information you provide to us directly, such as purchasing a standalone course or subscription Your interactions with our App and Services Information from our partners and customers</li>
                                        <li>Internet or Other Electronic Network Activity Information (e.g., browsing history, search history, and information regarding your interactions with our Services): Your interactions with our App and Services</li>
                                        <li>Geolocation Data: Information you provide to us directly or through your interactions with our App and Services</li>
                                        <li>Professional or Employment-Related Information: Information you provide to us directly Information from our customers, partners, or your employer</li>
                                        <li>Inferences: Information you provide to us directly or through your interactions with our App and Services Information from our partners and customers</li>
                                        <li>Audio, electronic, visual or similar information: Information you provide directly or through your interactions with our Services, customers or partners</li>
                                    </ul>
                                </div>
                                <p className={classes.s_content}>We use this personal information for the purposes outlined in our Privacy Notice.</p>
                            </div>
                            <div>
                                <h2 className={classes.s_title}>Add 1.3 California Residents’ Privacy Rights</h2>
                                <p className={classes.s_content}>California residents have rights to request access to or deletion of their personal information and may not be discriminated against because they exercise any of their rights under the California Consumer Privacy Act in violation of Cal. Civ. Code §1798.125. You can make requests as follows: send an email to contact@jego.co.in with details of your specific request. We may ask that you provide certain information to verify your identity, and the information we request from you will depend on your prior interactions with us and the sensitivity of the personal information at issue. Once confirmed, we will respond to your request in accordance with the CCPA. If we deny your request, we will explain why.</p>
                                <p className={classes.s_content}>You may designate an authorized agent to make a request under the CCPA on your behalf if: (1) the authorized agent is a natural person or a business entity registered with the Secretary of State of California; and (2) you sign a written declaration that you authorize the authorized agent to act on your behalf. We may ask that you provide certain information to verify your identity and that you authorized the authorized agent to act on your behalf. If you provide an authorized agent with power of attorney pursuant to Probate Code sections 4000 to 4465, it may not be necessary to perform these steps and we will respond to any request from such authorized agent in accordance with the CCPA.</p>
                                <p className={classes.s_content}>California residents also have the right to opt out of the sale of their personal information; JEGO does not provide this option as we do not sell your personal information. If you have any questions or concerns regarding this CCPA Notice, please email contact@jego.co.in.</p>
                                <p className={classes.s_content}>Addendum 2</p>
                                <p className={classes.s_content}>Data Protection Addendum</p>
                                <p className={classes.s_content}>Effective: June 1, 2022.</p>
                                <p className={classes.s_content}>“Data Protection Laws” means any laws and regulations in any relevant jurisdiction, relating to privacy or the use or processing of data relating to natural persons, including without limitation: (a) EU Regulation 2016/679 (“GDPR”) and any laws or regulations ratifying, implementing, adopting, supplementing, or replacing GDPR; and (b) the California Consumer Privacy Act of 2018 (“CCPA”) and any laws or regulations ratifying, implementing, adopting, supplementing, or replacing the CCPA; in each case, to the extent in force, and as such are updated, amended, or replaced from time to time.</p>
                                <p className={classes.s_content}>“DP Regulator” means any governmental or regulatory body or authority with responsibility for monitoring or enforcing compliance with the Data Protection Laws.</p>
                            </div>

                            <div>
                                <h2 className={classes.s_title}>Add 2.1 Data protection</h2>
                                <ul style={{ marginLeft: "2.5%" }} className={classes.para3_c}>
                                    <li>1.1 The terms “Data Subject”, “Data Controller”, “Personal Data” and “processing” shall have the meanings set out in in GDPR, except to the extent that any personal data or information applies to a California resident, in which case the equivalent and/or additional meanings (including for “Business”, “Service Provider”, and “Resident”) set out in the CCPA, shall apply.</li>
                                    <li>1.2 The parties shall comply with the provisions and obligations imposed on them by the Data Protection Laws at all times when processing Personal Data in connection with this Agreement.</li>
                                    <li>1.3 Each party shall maintain records of all processing operations under its responsibility that contain at least the minimum information required by the Data Protection Laws, and shall make such information available to any DP Regulator on request.</li>
                                    <li>1.4 For avoidance of doubt, JEGO is the processor of the Personal Data your organization provides in order to invite users to the JEGO platform (such as name and email address) or any additional profile information (such as title, team, manager, location, and others) that your organization may provide (collectively the “Invitation Data”). JEGO is the controller of user data, information that is confirmed, inputted, or generated by users on the JEGO platform.(a) JEGO, in its capacity as a processor of Invitation Data, uses the following subprocessors to carry out its processing activities:Subprocessor Name: Microsoft AzurePurpose: Cloud service providerLocation:(b) Your organization grants JEGO permission to use the above named subprocessors (that may change from time to time) in order to send invitation messages to the employees you designate to JEGO.</li>
                                    <li>1.5 To the extent that JEGO (the “Receiving Party”) receives Invitation Data from the other party (the “Providing Party”), the Receiving Party, acting as a new Data Processor/Service Provider of such Invitation Data, shall:
                                        <p className={classes.para3_c}>
                                            <li>(a) comply with the provisions and obligations imposed on it as a Data Processor/Service Provider by Data Protection Laws at all times;</li>
                                            <li>(b) take reasonable steps to ensure the reliability of all its personnel who have access to such Invitation Data, and ensure that any such personnel are committed to binding obligations of confidentiality when processing such Invitation Data;</li>
                                            <li>(c) implement and maintain technical and organisational measures and procedures to ensure an appropriate level of security for such Invitation Data, including protecting such Invitation Data against the risks of accidental, unlawful or unauthorised destruction, loss, alteration, disclosure, dissemination or access;</li>
                                            <li>(d) not transfer such Invitation Data outside the European Economic Area unless in accordance with applicable Data Protection Laws and, as applicable, in accordance with;</li>
                                            <li>(i) the Privacy Shield framework; or</li>
                                            <li>(ii) Standard Contractual Clauses;</li>
                                            <li>(e) inform the Providing Party within 48 hours of becoming aware that any such Invitation Data is (while within the Receiving Party or its subprocessor’ or affiliates’ possession or control) subject to a personal data breach (as defined in Article 4 of GDPR) or is lost or destroyed or becomes damaged, corrupted or unusable;</li>
                                            <li>(f) provide to the Providing Party and any DP Regulator all information and assistance necessary or desirable to demonstrate or ensure compliance with the obligations in this clause and/or Data Protection Laws;</li>
                                            <li>(g) notify the Providing Party within two (2) business days if it receives a request from a Data Subject to exercise their rights under the Data Protection Laws in relation to that Data Subject’s Invitation Data; and</li>
                                            <li>(h) provide the Providing Party with its full co-operation and assistance in relation to any request made by a Data Subject to exercise their rights under the Data Protection Laws in relation to that Data Subject’s Invitation Data.</li>
                                        </p>
                                    </li>
                                    <li>1.6 To the extent that a Receiving Party receives any Personal Data from the Providing Party, the Providing Party warrants and represents that is has the right under applicable Data Protection Laws to share such Personal Data with the Receiving Party and that, where applicable, it has obtained all necessary consents from the Data Subjects whose Personal Data is being shared to do so.</li>
                                    <li>1.7 If either party receives any complaint, notice, or communication which relates directly or indirectly to the processing of Personal Data by the other party or to either party’s compliance with the Data Protection Laws, it shall as soon as reasonably practicable notify the other party and it shall provide the other party with reasonable co-operation and assistance in relation to any such complaint, notice or communication.</li>
                                    <li>1.8 To the extent that a party is a Service Provider, as that term is defined in the CCPA, that party certifies that it shall not (a) sell the Invitation Data, (b) retain, use, or disclose the Invitation Data for any purpose other than for the specific purpose of performing its obligations under the Agreement, or (c) retain, use, or disclose the Invitation Data outside of the direct business relationship between the parties.</li>
                                    <li>1.9 Please note that we review our privacy practices from time to time, and that these practices are subject to change. Any change, update, or modification will be effective immediately upon posting.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

export default PrivacyPolicyScreen;