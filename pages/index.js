import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect,} from 'react';
import YouTube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { Button, Card, Grid, Hidden,} from '@material-ui/core';
import Navbar from "../pages/Navbar";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";
import HomeCard from "../pages/autoMate/HomeCard";
export default function HomePage(props) {

    useEffect(() => {
        Aos.init({
            duration:2000,
            throttleDelay: 99,
        })
    },[]);

    const Adviser = `
        One of the top most decision making authorities of the club.
        Acts as a bridge between the department and the club.
        Validate, coordinate and support the decisions of the team to attain the
        motto of the club.
    `;

    const SeniorMentor = `
        ■ PyMentors pursuing their final year of study will be upgraded to the
        position of Senior PyMentor from PyMentor.
        ■ Guide, assist and coordinate all the PyMentors of the club.
        ■ Have rights to hammer any suggestions and opinions during the
        discussion meet
        ■ Ensure whether all PyMentors have a good hold on their
        responsibilities.
        ■ Respect the advice on content, club maintenance and decisions of the
        Governing Committee.
        ■ Answerable to the faculty Advisor, Grand Master and Tech Champ
    `

    const Grandmaster = `
        One of the top most decision making authorities of the club
        Creates the agendas and hosts the club meetings in
        consultation with the governing committee.
        Presides over regular meetings of the club
        Master of Ceremonies at club social events.
        Coordinating the core team members and maintaining the club integrity
        Answerable to the Faculty Advisor.
    `

    const TechWizard = `
        Provides technical support to the team
        Ensures the technical feasibility of the planned events
        Create, publish and maintain weekly Hackerrank events.
        Authorized to give suggestions in designing the structure of events and
        curriculum if any.
        Scrutiny of PyMentors, if they did not abide by the points mentioned in
        Article V - Section II.
        Answerable to the Faculty Advisor, Grand Master and Tech Champ
    `

    const TechChamp =  `
        One of the top most decision making authorities of the club.
        Supports the Faculty Advisor and Grand Master in the decision making
        process.
        Designs the structure of events with the suggestions of core team
        members and allot works to the team.
        Provides support to Tech Wizards and validate the works of PyMentors
        Answerable to the Faculty Advisor and Grand Master
    `;

    const PyMessenger = `
        Maintaining the social media handles
        Ensures uniform circulation of the event information to the club
        members
        Must also act as a PyMentor
        Answerable to Faculty Advisor, Grand Master, Tech Champ and Tech
        Wizard.
    `

    const JuniorMentor = `
        ■ The members who top the Eligibility test will be assigned as PyMentors
        for the whole academic year.
        ■ Their role involves:
        ❖ Maintaining the integrity of the members in their respective
        classes.
        ❖ Acts as bridge between their class and the club
        ❖ Have rights to hammer any suggestions and opinions during
        the discussion meet
        ❖ Respect the advice on content, club maintenance and decisions
        of the Governing Committee.
        ❖ Handle and maintain the attendance of their class’s PYLAMP
        members
        ❖ Circulate the event information to their class members
        ■ Answerable to the Faculty Advisor, Grand Master, Tech Champ and
        Senior PyMentors
    `;


return (

<div className={styles.homeContainer}>
    <Head>
        <title>Pylamp</title>
        <meta name="description" content="code forever" />
        <link rel="icon" href="/pylampLogo.png" />
    </Head>

    <main className={styles.homeMain}>
        <div style={{backgroundColor:"#010003"}}>
            <Navbar />

            <ScrollAnimation animateIn="fadeIn">
        
            <div data-aos="fade-up" >

            <Grid container spacing={2} className={styles.firstDiv}>
                <Grid xs={12} md={6} sm={6} style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <div className={styles.quoteGrid}>
                        <h1>
                            You Dont GiveUp❔<br />
                            Still Have Chance➡️<br />
                            <span style={{color:"#566dee"}}>To Win...😎</span>
                        </h1>
                    </div>
                    
                </Grid>

                <Hidden >
                    <Grid xs={12} md={6} sm={6} >
                    <h1 className={styles.quoteGrid}>Logic & Language</h1>

                    <div className={styles.logicCard}>
                        <p className={styles.motoDiv}>
                            `Logic is the means of thinking right. 
                            Language is the dress of thought. 
                            It is essentially thought that shapes the language or shapes the language. 
                            Thoughts must be expressed in language, 
                            because if we do not express our thoughts in language, 
                            we will not be able to analyze them logically.`
                        </p><hr style={{width:"80%", fontWeight:"bold"}}/>
                    </div>
                    </Grid>  
                </Hidden>
                
            </Grid>
            </div><br /><br />
            </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn="fadeIn">
            <div className={styles.motoDiv} data-aos="fade-left" >
                    <h1 >About Pylamp!!</h1>

                    <p className={styles.aboutDiv}>
                        The Club PyLamp was developed to sow the seeds of coding, 
                        problem-solving, and domain knowledge among students. 
                        Mentoring sessions are conducted twice a week to build a consistent learning environment for students to help them master their coding skills. 
                        We conduct domain awareness programs to expose students to various fields of the industry. 
                        Personalized events are conducted regularly to check the understanding of students to organize future sessions accordingly.
                        Club Pylamp aims at making students confident in their programming skills and gets a clear vision to attain career growth.!!
                    </p>
            </div>
        </ScrollAnimation>
        

        <ScrollAnimation animateIn="fadeIn">
        <div className={styles.clubPostionDiv} data-aos="fade-up">
            <h1 style={{textAlign:"center", color:"black"}}>Club Positions..📝</h1>
            <Grid container spacing={2} className={styles.homeGrid}>
                <Grid xs={12} md={4} sm={4}>
                        <HomeCard 
                            data-aos="fade-left"
                            position="CLUB ADVISER" 
                            positonDetails={Adviser}
                            avatar="A"
                            candidate="K.VIJAYA, PRIYAVARSHINI" 
                            role="Faculty of VCET"
                        /><br />

                        <HomeCard 
                            position="SENIOR-PYMENTOR" 
                            positonDetails={SeniorMentor}
                            avatar="SM"
                            candidate="SABARINATHAN & SATHYASRI III & IV -yr" 
                        /><br />                   
                </Grid>
                <Grid xs={12} md={4} sm={4}>
                        <HomeCard 
                            position="GRAND MASTER" 
                            positonDetails={Grandmaster}
                            avatar="GM"
                            candidate="P.NITHESHPRAWIN"
                            role="IV-yr"
                        /><br />        
            
                        <HomeCard 
                            position="TECH WIZARD" 
                            positonDetails={TechWizard}
                            avatar="T"
                            candidate="THARUNKUMAR & UDAYA" 
                            role="IV-yr"
                        /><br />
                
                </Grid>
                <Grid xs={12} md={4} sm={4} >
                        <HomeCard 
                            position="TECH CHAMP" 
                            positonDetails={TechChamp}
                            avatar="TC"
                            candidate="SANJAY" 
                            role="III-yr"
                        /> <br />  
            
                        <HomeCard 
                            position="PY-MESSENGER" 
                            positonDetails={PyMessenger}
                            avatar="PM"
                            candidate="GOKUL" 
                            role="III-yr"
                    /><br />
                </Grid>
                <Grid xs={12} md={12} sm={12}>
                        <HomeCard 
                            position="JUNIOR-PYMENTOR" 
                            positonDetails={JuniorMentor}
                            avatar="JP"
                            candidate="SHARMATHA & SOWBARNIKA & HARINISHA & TAMILANJALI"
                            role="III-yr" 
                        /><br />        
                </Grid>
            </Grid>
        </div>
        </ScrollAnimation>

        <div className={styles.eventDiv}>
            <h1 style={{textAlign:"center"}}>PYLAMP EVENTS 🎉</h1>
        <Grid container spacing={2} className={styles.homeGrid}>
                <Grid p xs={12} md={6} sm={6}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Card className={styles.eventCard}  data-aos="fade-left">
                            <h2 className={styles.cardHead}>Weekly Session</h2>
                        </Card><br />
                        <Card className={styles.eventCard}  data-aos="fade-right">
                            <h2 className={styles.cardHead}>Solve Me</h2>
                        </Card><br />
                    </ScrollAnimation>

                    
                </Grid>
                <Grid p xs={12} md={6} sm={6}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Card className={styles.eventCard} data-aos="fade-left">
                            <h2 className={styles.cardHead}>Java Rover</h2>
                        </Card><br />
                        
                        <Card className={styles.eventCard} data-aos="fade-right">
                            <h2 className={styles.cardHead}>Domain Realm</h2>
                        </Card><br />
                    </ScrollAnimation>
                
                </Grid>
            </Grid>
        </div>
    </main>

    <footer className={styles.footer}>
        <a href="https://www.youtube.com/channel/UCJBaFNQuwfYXHDkICKpMYsg" target="blank"><YouTube  style={{color:'white'}}/></a>
        <a href="https://linkedin.com/in/pylampofficial" target="blank"><LinkedIn style={{color:'white'}}/></a>
        <a href="https://instagram.com/pylamp_official_" target="blank"><Instagram style={{color:'white'}}/></a>
    </footer>
    </div>
)}


/* 
                                    <div className={styles.logicCard}>
                        <h1 >Logic & Language</h1>
                        <p className={styles.motoDiv}>
                            `Logic programming is a programming paradigm that is based on logic. 
                            This means that a logic programming language has sentences that follow logic, so that they express facts and rules.
                            Computation using logic programming is done by making logical inferences based on all available data.`
                        </p><hr style={{width:"80%", fontWeight:"bold"}}/>

                        <div className={styles.logicBtns}>
                            <button style={{
                                borderRadius:"0.5rem",
                                backgroundColor:"black",
                                color:"white",
                                padding:"0.5rem"
                            }}>Reach Out</button>
                            <button onClick={() => window.scrollBy(0, 10000)} 
                            style={{
                                borderRadius:"0.5rem",
                                color:"black",
                                padding:"0.5rem"
                            }}>Follow Us</button>
                        </div>
                    </div>
*/