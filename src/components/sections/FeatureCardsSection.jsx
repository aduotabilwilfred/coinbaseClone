import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import zeroFeeImg from '../../assets/zero_trading_fees_us.avif';
import baseAppImg from '../../assets/countless_ways_to_earn_crypto.avif';

const FeatureCardsSection = () => {
    return (
        <section className="bg-white py-16 md:py-24 lg:py-32 w-full">
            <div className="max-w-[1140px] mx-auto px-6">
                <div className="flex flex-col gap-24">
                    {/* 1. Coinbase One Card */}
                    <div className="flex flex-col lg:flex-row items-stretch min-h-[420px] bg-white group gap-12">
                        <div className="flex-1 bg-white py-12 lg:py-20 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-[12px] font-medium text-gray-80 mb-6 bg-white self-start px-3 py-1.5 rounded-lg border border-gray-20 font-sans tracking-widest uppercase shadow-sm">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18.25C15.4518 18.25 18.25 15.4518 18.25 12C18.25 8.54822 15.4518 5.75 12 5.75C8.54822 5.75 5.75 8.54822 5.75 12C5.75 15.4518 8.54822 18.25 12 18.25ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                                </svg>
                                Coinbase One
                            </div>
                            <h3 className="text-4xl lg:text-[48px] text-gray-100 mb-6 leading-[1.1] tracking-tight font-sans font-bold">
                                Zero trading fees,<br />more rewards.
                            </h3>
                            <p className="text-gray-60 mb-10 max-w-sm text-[17px] leading-[1.6] font-sans">
                                Get more out of crypto with one membership: zero trading fees,
                                boosted rewards, priority support, and more.
                            </p>
                            <div className="self-start">
                                <Link to="/signup">
                                    <Button variant="tertiary" size="md">
                                        Claim free trial
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-[1.2] flex items-end justify-center px-12 pt-16 overflow-hidden bg-gray-5 rounded-[40px]">
                            <img src={zeroFeeImg} alt="Trade Successful" className="w-[85%] max-w-[380px] object-contain object-bottom group-hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </div>

                    {/* 2. Base App Card */}
                    <div className="flex flex-col-reverse lg:flex-row items-stretch min-h-[420px] bg-white group gap-12">
                        <div className="flex-[1.2] flex items-end justify-center overflow-hidden bg-[#F8FAFF] rounded-[40px] relative">
                            <img src={baseAppImg} alt="Base App" className="w-full h-full object-cover object-bottom group-hover:scale-[1.02] transition-transform duration-700 absolute inset-0" />
                        </div>
                        <div className="flex-1 bg-white py-12 lg:py-20 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-[12px] font-medium text-gray-80 mb-6 bg-white self-start px-3 py-1.5 rounded-lg border border-gray-20 font-sans tracking-widest uppercase shadow-sm">
                                <div className="w-4 h-4 bg-blue-60 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                Base App
                            </div>
                            <h3 className="text-4xl lg:text-[48px] text-gray-100 mb-6 leading-[1.1] tracking-tight font-sans font-bold">
                                Countless ways to<br />earn crypto.
                            </h3>
                            <p className="text-gray-60 mb-10 max-w-sm text-[17px] leading-[1.6] font-sans">
                                An everything app to trade, create, discover, and chat, all in one place.
                            </p>
                            <div className="self-start">
                                <Link to="/signup">
                                    <Button variant="tertiary" size="md">
                                        Get the app
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCardsSection;
