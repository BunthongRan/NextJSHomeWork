
import Layout from "../../../component/layout";
import { useRouter } from "next/router";
import { API_KEY, BASE_URL, BASE_PATH, YT } from "../../../lib/constant";
import { useEffect, useState } from "react";
import Image from "next/image";

// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'
// import Layout from '../../component/layout'
// import { API_KEY, BASE_URL, BASE_PATH } from '../../lib/constant'
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";





export default function About({ clips }) {
    const router = useRouter();
    const [m, setMovie] = useState(JSON.parse(router.query.movie));
    const [key, setKey] = useState("")
    useEffect(() =>  {
      setKey(clips[clips.length -1].key)
    }, [])
  
    return (
      <Layout>
          <div className="container pt-4 pb-5">
          <div className="d-flex flex-row justify-content-between">
          <div className="me-4">
            <img className="rounded-3" src={BASE_PATH + m.backdrop_path} alt="movie" width={400}></img>
          </div>
          <div>
            <h1>{m.original_title}</h1>
            <b>Overview</b>
            <p>{m.overview}</p>
            <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                WATCH NOW
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog  modal-dialog-centered modal-xl ">
                  <div class="modal-content">
  
                    <iframe style={{height: 687}} src={YT + key} frameborder="0" allowfullscreen></iframe>
  
                  </div>
                </div>
              </div>
  
          </div>
        </div>
          </div>
      </Layout>
    );
  }
  
  export async function getServerSideProps({ params }) {
    const res = await fetch(`${BASE_URL}/movie/${params.id}/videos?api_key=${API_KEY}`
    );
    const resp = await res.json();
    return {
      props: {
        clips: resp.results,
      },
    };
  }