'use client';

import { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface ModalVideoProps {
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumbWidth,
  thumbHeight,
  thumbAlt,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div
              className="mx-auto flex items-center justify-center"
              style={{
                width: '100vw',
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
              }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `calc(100vh * ${2560 / 1707})`,
                  height: '100vh',
                  maxWidth: '100vw',
                }}
                src="https://www.youtube.com/embed/s2el-e0y1N4?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
