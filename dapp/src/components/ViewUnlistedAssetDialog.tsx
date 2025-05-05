import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'lucide-react';

export interface Asset {
  id: string;
  name: string;
  collection: string;
  imageUrl: string;
  floorPrice: string;
}

interface ViewUnlistedAssetDialogProps {
  asset: Asset;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const currencies = ['STKR', 'USD', 'ETH'];
const durations = ['7 days', '14 days', '30 days'];

export const ViewUnlistedAssetDialog: React.FC<ViewUnlistedAssetDialogProps> = ({
  asset,
  open,
  onOpenChange,
  children,
}) => {
  const [step, setStep] = useState<'view' | 'terms' | 'review' | 'success'>('view');
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState(durations[0]);
  const [apr, setApr] = useState('');

  const closeAll = () => {
    setStep('view');
    onOpenChange && onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-[#0D0E29] p-6 rounded-2xl">
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </Dialog.Close>

          {/* View Step */}
          {step === 'view' && (
            <>
              <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
                <Image src={asset.imageUrl} alt={asset.name} fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-white">{asset.name}</h2>
                <p className="text-xs text-gray-400">{asset.collection}</p>
                <span className="inline-block text-xs uppercase bg-amber-400 text-gray-900 px-2 py-0.5 rounded mt-2">
                  Unlisted
                </span>
              </div>
              <div className="mt-6">
                <div className="flex items-center text-white text-sm font-semibold mb-2">
                  <span className="w-4 h-4 block mr-1">💰</span>
                  Price Information
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase text-gray-400">Collection Floor</p>
                    <p className="text-sm text-white">{asset.floorPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-400">Collection Floor</p>
                    <p className="text-sm text-white">{asset.floorPrice}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  The above data is for informational purposes only. Please conduct your own research before making decisions.
                </p>
              </div>
              <div className="mt-6">
                <button
                  className="w-full h-10 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  onClick={() => setStep('terms')}
                >
                  List As Collateral
                </button>
              </div>
            </>
          )}

          {/* Terms Step */}
          {step === 'terms' && (
            <>
              <h3 className="text-xl font-semibold text-white mb-4">List As Collateral</h3>
              {/* Tabs */}
              <div className="flex space-x-2 mb-4">
                {currencies.map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      currency === cur
                        ? 'bg-purple-600 text-white'
                        : 'bg-[#1c1f3f] text-gray-400'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 bg-[#1c1f3f] rounded-md text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Duration</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-2 bg-[#1c1f3f] rounded-md text-white text-sm"
                  >
                    {durations.map((d) => (
                      <option key={d} value={d} className="bg-[#0D0E29]">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">APR (%)</label>
                  <input
                    type="number"
                    value={apr}
                    onChange={(e) => setApr(e.target.value)}
                    className="w-full p-2 bg-[#1c1f3f] rounded-md text-white text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  className="px-4 py-2 h-10 border border-gray-500 rounded-md text-sm text-white"
                  onClick={() => setStep('view')}
                >
                  Go Back
                </button>
                <button
                  className="px-4 py-2 h-10 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700"
                  onClick={() => setStep('review')}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* Review Step */}
          {step === 'review' && (
            <>
              <h3 className="text-xl font-semibold text-white mb-4">List As Collateral</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 bg-[#1c1f3f] p-4 rounded-lg">
                  <div className="w-full h-36 relative rounded-lg overflow-hidden">
                    <Image src={asset.imageUrl} alt={asset.name} fill className="object-cover" />
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-white">{asset.name}</h4>
                  <p className="text-xs text-gray-400">{asset.collection}</p>
                  <span className="inline-block text-xs uppercase bg-amber-400 text-gray-900 px-2 py-0.5 rounded mt-1">
                    Unlisted
                  </span>
                </div>
                <div className="w-full lg:w-1/3 bg-[#1c1f3f] p-4 rounded-lg text-white text-sm">
                  <p className="uppercase text-xs text-gray-400">Currency</p>
                  <p className="mb-2">{currency}</p>
                  <p className="uppercase text-xs text-gray-400">Acceptable Amount</p>
                  <p className="mb-2">{amount} {currency}</p>
                  <p className="uppercase text-xs text-gray-400">Loan Duration</p>
                  <p className="mb-2">{duration}</p>
                  <p className="uppercase text-xs text-gray-400">APR</p>
                  <p className="mb-4">{apr}%</p>
                  <p className="text-xs text-gray-500">You can cancel your loan at any time.</p>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  className="px-4 py-2 h-10 border border-gray-500 rounded-md text-sm text-white"
                  onClick={() => setStep('terms')}
                >
                  Go Back
                </button>
                <button
                  className="px-4 py-2 h-10 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700"
                  onClick={() => setStep('success')}
                >
                  Confirm
                </button>
              </div>
            </>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <div className="text-center">
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-4">
                <Image src={asset.imageUrl} alt={asset.name} fill className="object-cover" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Your Asset has been Listed!</h4>
              <button
                className="w-full py-2 h-10 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                onClick={closeAll}
              >
                Check Offers
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ViewUnlistedAssetDialog; 