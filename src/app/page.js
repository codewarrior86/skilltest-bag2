"use client";
import styles from './page.module.css'
import { useEffect, useState } from 'react';

const himpunan = [83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8];

export default function Home() {


  // 1. jumlah inputan
  const jumlah_himpunan = himpunan.length;

  // 2. terkecil
  const [minHimp, setMinHimp] = useState();
  const terkecil = () => {
    let min = 1;
    for (let i = 0; i < himpunan.length; i++) {
      if (himpunan[i] < min) {
        min = himpunan[i];
      }
      setMinHimp(min);
    }
  }


  // 3. 
  const [maxHimp, setMaxHimp] = useState();
  const terbesar = () => {
    let max = 1;
    for (let i = 0; i < himpunan.length; i++) {
      if (himpunan[i] > max) {
        max = himpunan[i];
      }
      setMaxHimp(max);
    }
  }


  // 4. 


  // 5. 


  // 6. 
  const [sumGenap, setSumGenap] = useState();
  const [sumGanjil, setSumGanjil] = useState();

  const jumlah_ganjil_genap = () => {
    let jumlah_genap = 0;
    let jumlah_ganjil = 0;

    for (let i = 0; i < himpunan.length; i++) {
      if (himpunan[i] % 2 == 0) {
        jumlah_genap += himpunan[i];
      } else {
        jumlah_ganjil += himpunan[i];
      }
    }

    setSumGenap(jumlah_genap);
    setSumGanjil(jumlah_ganjil);
  }


  // 7. 
  const [anggotaGenap, setAnggotaGenap] = useState();
  const [anggotaGanjil, setAnggotaGanjil] = useState();

  const anggota_ganjil_genap = () => {
    let genap = [];
    let ganjil = [];

    for (let i = 0; i < himpunan.length; i++) {
      if (himpunan[i] % 2 == 0) {
        genap.push(himpunan[i]);
      } else {
        ganjil.push(himpunan[i]);
      }
    }

    let genapString = genap.join(",");
    let ganjilString = ganjil.join(",");

    setAnggotaGenap(genapString);
    setAnggotaGanjil(ganjilString);
  }

  useEffect(() => {
    terkecil();
    terbesar();
    jumlah_ganjil_genap();
    anggota_ganjil_genap();
  }, [])


  return (
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //     <div className={styles.thirteen}>
    //       <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
    //     </div>
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>

    <div className='container'>
      <section>
        <h1>Skill Test</h1>
        {/* <input placeholder='Masukkan Himpunan' className='input_angka'/> */}

        <div>Himpunan Bilangan Asli  = [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8]</div>

        <ul>
          <li>
            <div>1. Jumlah Inputan Himpunan : <span className='bold'>{jumlah_himpunan}</span></div>
          </li>
          <li>
            <div>2. Anggota terkecil dari Inputan / Variable Himpunan Bilangan Asli : <span className='bold'>{minHimp}</span></div>
          </li>
          <li>
            <div>3. Anggota terbesar dari Inputan / Variable Himpunan Bilangan Asli : <span className='bold'>{maxHimp}</span></div>
          </li>
          <li>
            <div>4. Anggota dari Inputan / Variable Himpunan Bilangan Asli dengan nilai angka sama dan lebih dari satu : <span className='bold'></span></div>
          </li>
          <li>
            <div>5. Anggota yang memiliki nilai angka yang  sama dan lebih dari satu diurutan ke: <span className='bold'></span></div>
          </li>
          <li>
            <div>6. Jumlah bilangan ganjil dan bilangan genap: </div>
            <div className='bold'>Ganjil = {sumGanjil}</div>
            <div className='bold'>Genap = {sumGenap}</div>
          </li>
          <li>
            <div>7. Anggota himpunan bilangan asli dalam kelompok bilangan ganjil dan bilangan genap :</div>
            <div className='bold'>Anggota Ganjil : {anggotaGanjil}</div>
            <div className='bold'>Anggota Genap : {anggotaGenap}</div>
          </li>
        </ul>
      </section>
    </div>
  )
}
