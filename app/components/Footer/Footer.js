import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="absolute top-[4786px] left-1/2 -translate-x-1/2 w-[1440px] flex flex-col items-start justify-start p-2 md:px-32">
      <div className="flex flex-col items-end justify-start gap-10">
        <div className="flex flex-row items-start justify-start gap-[59px]">
          <div className="flex flex-col items-start justify-start gap-4 text-sm text-gray-600">
            <div className="h-12 flex items-center justify-center p-1.5">
              {/* <Image className="w-[33px] h-[34px]" width={33} height={34} alt="" src="/elevateur.png" /> */}
            </div>
            <div className="flex flex-col items-start justify-start gap-8">
              <div className="w-[500px] relative inline-block">
                Inscrivez-vous à notre newsletter pour rester informé des fonctionnalités et mises à jour.
              </div>
              <div className="flex flex-col items-start justify-start gap-2 text-base text-gray-700">
                <div className="flex flex-row items-start justify-start gap-4">
                  <div className="w-[367px] bg-white border border-gray-600 flex flex-row items-center justify-start p-3">
                    <div className="flex-1 relative leading-[150%]">Entrez votre email</div>
                  </div>
                  <div className="rounded-full border border-gray-600 flex flex-row items-center justify-center px-6 py-3 text-gray-600">
                    S'abonner
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-2 text-xs text-gray-600">
                  En vous abonnant, vous acceptez notre politique de confidentialité et consentez à recevoir des mises à jour de notre entreprise.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="w-[169.3px] relative inline-block">À Propos</b>
            <div className="flex flex-col items-start justify-start gap-3 text-gray-600">
              <div>FAQ</div>
              <div>Contact</div>
              <div>Retours</div>
              <div>Blog</div>
              <div>Livraison</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <b className="w-[169.3px] relative inline-block">Service Client</b>
            <div className="flex flex-col items-start justify-start gap-3 text-gray-600">
              <div>Affiliés</div>
              <div>Paiements Apple Pay</div>
              <div>Retours</div>
              <div>Politique de Retour</div>
              <div>Remboursements</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="w-[169.3px] relative font-semibold leading-[150%] inline-block">
              Suivez-nous
            </div>
            <div className="flex flex-col items-start justify-start text-sm text-gray-600">
              {[
                { name: 'Facebook', icon: '/Facebook.svg' },
                { name: 'Instagram', icon: '/Instagram.svg' },
                { name: 'Twitter', icon: '/Twitter.svg' },
                { name: 'LinkedIn', icon: '/LinkedIn.svg' }
              ].map((social, index) => (
                <div key={index} className="flex flex-row items-center justify-start p-2 gap-3">
                  <Image className="w-6 h-6" width={24} height={24} alt="" src={social.icon} />
                  <div>{social.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between w-full text-xs text-gray-600">
          <div>© 2023 Accessoires maison et espaces. Tous droits réservés.</div>
          <div className="flex flex-row items-start justify-start gap-8">
            <div>Politique de confidentialité</div>
            <div>Conditions d'utilisation</div>
            <div>Paramètres des cookies</div>
          </div>
        </div>
      </div>
    </div>
  );
}
