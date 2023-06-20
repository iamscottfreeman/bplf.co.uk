import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Gallery, { PhotoClickHandler } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Header from '@/components/header/Header';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import PageHeader from '@/components/atoms/PageHeader';
import Container from '@/components/atoms/Container';
import Spinner from '@/components/atoms/Spinner';

type Photos = {
  src: string;
  width: number;
  height: number;
};

export default function Newsletter() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      });
  }, []);

  const openLightbox = useCallback<PhotoClickHandler>((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Gallery | British Powerlifting Federation</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <section>
          <PageHeader title='Gallery' />
          <Container className='py-10'>
            {isLoading && (
              <div className='text-center'>
                <Spinner />
              </div>
            )}
            {!isLoading && (
              <>
                <Gallery photos={photos} onClick={openLightbox} direction='column' margin={10} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          source: x.src
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
