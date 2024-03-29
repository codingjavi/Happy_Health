import React from 'react';
import styles from '../static/Home.module.css'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <body>
            <header className={styles.header}>
                <h1>Welcome to Happy Health</h1>
            </header>
            <main>
                <div className={styles.box1}>
                    <p>We aim to cure people naturally by using vitamins instead of prescribed medications.</p>
                    <Link to ="/login"> Click here to get started </Link>
                    <br />
                    <br />
                </div>

                <div className={styles.happy}>
                    <img className={styles.img} src='/assets/images/happy.jpg' />
                    <div className={styles.text}> When doctors fail and you feel like you have no one to go to.</div>
                </div>

                <h2>My story</h2>
                <p>Ever since I was a kid, I was always very active and involved in every sport, I specifically fell in love with distance running. I was pretty good and would definitely put in the work that nobody else would. I was getting better exponentially, but out of nowhere during the racing season, it felt like I couldn't perform the same. It felt like my body was against me, my legs would hurt, my chest would ache, and I found myself slurring my words. I tried to brush it, but it was until my lung collapsed that I realized I couldn't brush it off anymore. I had to get surgery and a chest tube but the doctors said everything else was alright with me, there were no signs of anything wrong with my body. I believed them, but very shortly after I started feeling the same symptoms again. I felt trapped and didn’t know what to do. That was until my mom took me to a doctor that specialized in Contact Reflex Analysis (CRA). This doctor basically could sense the energy moving within my body and immediately could tell I had such a weak heart for someone my age. He said my heart was only working 30% while the doctors at the hospital said there wasn’t anything wrong with my heart. He prescribed me some of the vitamins, which I offer through my evaluation, and they changed my life. After I took them my running performance skyrocketed, I didn't get leg pains anymore, my chest didn’t ache, and my lungs never collapsed again. I trust in these vitamins and I wish more people knew about them, that’s why I created this website. There aren’t very many CRA doctors so I decided I would create an evaluation base on everything I learned from my CRA doctor and other research.

                </p>
            </main>
        </body>
    )
}
export default Home;