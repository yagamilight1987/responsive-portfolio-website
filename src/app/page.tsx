import { Fragment } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </Fragment>
  );
}
