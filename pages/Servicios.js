import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@styles/Servicios.module.css'

export default function Servicios()
{
  return(

    <section className={styles.section}>
       <div>
          <Head>
          <title>Servicios - COSTA NORTE</title>
          <link rel="icon" href="/Costa.ico" />
          </Head>
          <Header logoSrc="/Logo.png" />

          <main>
            <div className={styles.container}>

              <h2></h2>

                <div className={styles.container_cards}>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='surgery.png' alt='Cirugia'/> </div>
                        <h2>Cirugia</h2>
                        <p>la cirugía se describe como un procedimiento médico en el que un cirujano realiza una intervención en el cuerpo de un paciente con el objetivo de tratar una enfermedad o lesión.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='pediatrics.png' alt='Pediatria'/> </div>
                        <h2>Pediatria</h2>
                        <p>La pediatría, o pediatría, es una rama de la medicina que se enfoca en la salud de los niños. Los pediatras son médicos especializados en la prevención, diagnóstico y tratamiento de las enfermedades y afecciones físicas y mentales de los niños, de la infancia a la adolescencia.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='Gynecology.png' alt='Ginecologia'/> </div>
                        <h2>Ginecologia</h2>
                        <p>La ginecología, o ginecología, es una rama de la medicina que estudia el funcionamiento y salud de los órganos femeninos de reproducción, así como las enfermedades y afecciones relacionadas con ellos.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='neurology.png' alt='Neurologia'/> </div>
                        <h2>Neurologia</h2>
                        <p>La neurología es una disciplina médica que estudia el sistema nervioso humano y sus enfermedades. Los profesionales de esta especialidad son los neurologos, quienes se enfocan en la prevención, diagnóstico y tratamiento de enfermedades de la cabeza, cuello y columna vertebral.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='ophthalmologist.png' alt='Oftalmologia'/> </div>
                        <h2>Oftalmologia</h2>
                        <p>La oftalmología es una rama de la medicina que se enfoca en el cuidado de los ojos y sistema visual humano. Los especialistas de esta disciplina son los oftalmólogos, quienes estudian y tratan enfermedades y problemas relacionados con la vista</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='odontology.png' alt='Odontologia'/> </div>
                        <h2>Odontologia</h2>
                        <p>La odontología, o dentistería, es una rama de la medicina que se enfoca en la salud de los dientes y la boca. Los profesionales de esta disciplina son los odontólogos, quienes son médicos especializados en la prevención, diagnóstico y tratamiento de los problemas de los dientes.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='ortopedic.png' alt='Ortopedia'/> </div>
                        <h2>Ortopedia</h2>
                        <p>La ortopedia es una rama de la medicina que se enfoca en el sistema musculoesquelético y se encarga del diagnóstico y tratamiento de las enfermedades y lesiones relacionadas con los huesos, articulaciones y músculos. Los médicos que se especializan en esta disciplina son los ortopedistas.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='cardiology.png' alt='Cardiologia'/> </div>
                        <h2>Cardiologia</h2>
                        <p>La cardiología es una rama de la medicina que se enfoca en el diagnóstico, tratamiento y prevención de enfermedades y problemas del corazón y los vasos sanguíneos. Los médicos que se especializan en esta disciplina son los cardiólogos, quienes estudian y tratan trastornos del corazón y las arterias.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='urology.png' alt='Urologia'/> </div>
                        <h2>Urologia</h2>
                        <p>La urología es una especialidad médica que trata las afecciones y enfermedades del sistema reproductivo urinario, como las de la próstata, los riñones, el tracto urinario y los genitales. Los médicos que se especializan en esta disciplina son los urológos.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='Otolaryngology.png' alt='otorrinolaringologia'/> </div>
                        <h2>Otorrinolaringologia</h2>
                        <p>La otorrinolaringología a veces abreviada como ORL es una rama de la medicina que se encarga del diagnóstico y tratamiento de las enfermedades y problemas relacionados con la cabeza y el cuello. En particular, se enfoca en el oído, la nariz, la garganta y la parte superior de la tráquea. Los médicos que se especializan en ORL son los otorrinolaringólogos.</p>
                    </div>

                    

                </div>
            </div>   
          </main>

      </div>
      <Footer/>
    </section>
  );
   
}
  