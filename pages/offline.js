import Head from "next/head";
import Link from "next/link";

export default function Offline() {
  return (
    <>
      <Head>
        <title>Offline - Portfolio</title>
        <meta name="description" content="You are currently offline" />
      </Head>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem'
        }}>
          📱
        </div>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#333'
        }}>
          You&apos;re Offline
        </h1>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: '#666',
          maxWidth: '400px'
        }}>
          It looks like you&apos;ve lost your internet connection. 
          Don&apos;t worry, you can still access previously cached content.
        </p>
        <Link href="/" passHref>
          <button style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            Try Again
          </button>
        </Link>
      </div>
    </>
  );
}
