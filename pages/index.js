import Head from 'next/head';
import Navbar from "../components/Navbar";
import CourseList from "../components/CourseList";
import AddCourse from "../components/AddCourse";
import Login from "../components/Login";
import { getSession } from 'next-auth/react';

export default function Home({session}) {
  if(!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Golf Stats App</title>

      </Head>
      <Navbar />

      <main>
        <AddCourse />
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props: { session },
  };
}
