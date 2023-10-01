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

              <div className={styles.content}>

                <h2>

                Nuestros Servicios

                </h2>

              </div>

                <div className={styles.container_cards}>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='surgery.png' alt='Cirugia'/> </div>
                        <h2>Cirugia</h2>
                        <p>La cirugía se describe como un procedimiento médico en el que un cirujano realiza una intervención en el cuerpo de un paciente con el objetivo de tratar una enfermedad o lesión.</p>
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

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='intensivist.png' alt='itensivist'/> </div>
                        <h2>Itensivista</h2>
                        <p>Un intensivista es una persona que ha especializado su carrera en el cuidado de pacientes críticos en una UCI, o unidad de cuidados intensivos. Este tipo de médicos suelen trabajar con otros especialistas como anestesiólogos y cirujanos, y son responsables de la atención de pacientes que están bajo monitoreo continuo y que están en un estado de salud delicado.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='pneumology.png' alt='Neumologia'/> </div>
                        <h2>Neumologia</h2>
                        <p>La neumología es una rama de la medicina dedicada a los pulmones y el aparato respiratorio. Dentro de esta rama, los neumólogos se enfocan en la prevención, diagnóstico y tratamiento de enfermedades pulmonares tales como asma, neumonía, tuberculosis, pulmonía, fibrosis quística y problemas respiratorios crónicos.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='Endocrinology.png' alt='Endocrinologia'/> </div>
                        <h2>Endocrinologia</h2>
                        <p>La endocrinología es la rama de la medicina que estudia los hormonas y el sistema endocrino. Un endocrinólogo es un médico que se especializa en tratar trastornos y patologías relacionadas con el sistema endocrino, como el metabolismo, la diabetes, la menopausia y los trastornos de la tiroides.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='hematology.png' alt='hematologia'/> </div>
                        <h2>Hematologia</h2>
                        <p>La hematología es otra rama de la medicina. Los hematólogos estudian el sistema circulatorio y el sistema de producción de células sanguíneas, y se enfocan en las enfermedades relacionadas con estos sistemas, como anemia, enfermedades de la sangre, leucemia y más.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='gastroenterology.png' alt='Gastroenterologia'/> </div>
                        <h2>Gastroenterologia</h2>
                        <p>La gastroenterología es una rama de la medicina que se enfoca en el sistema digestivo. Los gastroenterólogos son médicos que se especializan en el tratamiento de enfermedades relacionadas con el tracto digestivo, como los problemas de la estructura y función de la boca, estómago, intestino, colon y ano.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='Dermatology.png' alt='Dermatology'/> </div>
                        <h2>Dermatologia</h2>
                        <p>La dermatología es la rama de la medicina que se enfoca en el estudio y tratamiento de las enfermedades de la piel. Los dermatólogos son médicos que se enfocan en los trastornos y problemas de la piel, como el acné, eczema, psoriasis y cáncer de piel.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='psychology.png' alt='Psicologia'/> </div>
                        <h2>Psicologia</h2>
                        <p>La psicología es la ciencia que se enfoca en el comportamiento humano, el desarrollo de la persona, y la mente y emociones. Los psicólogos son profesionales que ayudan a las personas a entender y tratar problemas mentales, emocionales y de comportamiento.</p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cover_cards}> <img src='sonography.png' alt='sonogragia'/> </div>
                        <h2>Sonografia</h2>
                        <p>La sonografía, también conocida como ultrasonido o ecografía, es una técnica médica que usa ondas de sonido para crear imágenes del interior del cuerpo. Es un método de diagnóstico seguro y sin riesgos, ya que no usa radiación. Las imágenes sonográficas son usadas para ayudar a identificar y evaluar diversas condiciones médicas.</p>
                    </div>
                    
                    

                    

                </div>
            </div>   
          </main>

      </div>
      <Footer/>
    </section>
  );
   
}
  