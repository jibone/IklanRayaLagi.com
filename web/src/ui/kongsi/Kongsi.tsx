"use client";

import type { Iklan } from "@/db/schema/iklan";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function KongsiModal({ iklan }: { iklan: Iklan }) {
  const textareaMsg = `Korang tengok lah iklan raya berjudul "${iklan.title}" ini di https://iklanrayalagi.com/v/${iklan.id}`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyText, setCopyText] = useState(textareaMsg);
  const [dahCopy, setDahCopy] = useState(false);
  const [bolehCopy, setBolehCopy] = useState(true);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleTextareaOnChange(e: any) {
    setCopyText(e.target.value);
  }

  function handleClipboardCopy() {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setDahCopy(true);
      })
      .catch(() => {
        setDahCopy(true);
        setBolehCopy(false);
      });
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={handleOpenModal}
          className="bg-white px-3 py-1 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 active:shadow-none"
        >
          Kongsi iklan pada kawan-kawan
        </button>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    <div>Kongsi Iklan pada kawan-kawan</div>
                    <div role="button" onClick={handleCloseModal}>
                      <XCircleIcon className="h-6 w-6" />
                    </div>
                  </Dialog.Title>

                  <div className="mt-2">
                    {dahCopy ? (
                      <div>
                        {bolehCopy
                          ? "Dah di-copy, awak paste lah kat mana awak nak paste..."
                          : "Ada masaalah copy text, cuba cara manual, select text dan copy."}
                      </div>
                    ) : (
                      <textarea
                        className="border-2 border-gray-600 text-gray-900 focus:outline-none p-2 w-full"
                        rows={4}
                        onChange={handleTextareaOnChange}
                        value={copyText}
                      />
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none bg-lila-300 px-4 py-2 text-sm font-medium focus:outline-none"
                      onClick={handleClipboardCopy}
                    >
                      Copy
                    </button>
                    <Link
                      onClick={handleCloseModal}
                      target="_blank"
                      href={`https://twitter.com/intent/tweet?hashtags=iklanrayalagi&text=${encodeURIComponent(copyText)}`}
                      className="ml-3 inline-flex justify-center rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none bg-green-300 px-3 py-2 text-sm font-medium"
                    >
                      X (twitter)
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
