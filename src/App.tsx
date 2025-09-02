import './App.css';
import Header from "./components/Header";
import ButtonLink from "./components/ButtonLink";
import PromotionStripe from "./components/PromotionStripe";
import PromotionList from "./components/PromotionList";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="overflow-x-hidden bg-main min-h-screen font-figtree">
            <PromotionStripe/>
            <div className="max-w-main mx-auto px-5 relative">
                <img
                    className="lg:hidden absolute top-0 left-1/2 translate-x-[-50%]"
                    alt="Fametonik"
                    src="images/influe_mobile_mockup_sm.webp"
                    srcSet="images/influe_mobile_mockup_sm_2x.webp 1x, images/influe_mobile_mockup_sm_2x.webp 2x"
                    loading="lazy"
                />
                <div className="pb-12 lg:pb-30 relative ">
                    <Header/>
                    <div>
                        <div className="mt-70 relative z-1 lg:max-w-130 lg:flex lg:flex-col lg:mt-0 lg:pt-14.5 lg:pl-1">
                            <h2 className="font-urbanist text-white font-extrabold lg:font-bold text-25 text-center align-middle leading-[1.2] lg:text-left lg:text-35 lg:text-left ">
                                Want to Turn Social Media Into a Profitable Career?
                            </h2>
                            <h1 className="font-urbanist font-extrabold lg:font-bold text-25 text-center align-middle text-shadow-header text-light-blue leading-[1.2] lg:text-35 lg:text-left">
                                Discover your way to success with Fametonic:
                            </h1>
                            <PromotionList className="mt-5 lg:mt-4" text={[
                                'Start growing your influence right away—no waiting required!',
                                'Create viral TikToks and Reels step by step with easy-to-follow lessons',
                                'Use a Personal AI Worker to boost your content',
                                'Learn from expert-led courses designed for aspiring influencers'
                            ]}/>
                            <Footer />
                            <div className="mt-7 text-center lg:mt-4.5 lg:max-w-[313px]">
                                <div className="flex justify-center  lg:justify-start">
                                    <ButtonLink href="#" className="min-w-full min-h-[40px]">
                                    <span className="line-clamp-3">
                                        Get started
                                     </span>
                                        <img className="pl-2" src="images/arrow.svg" alt="Arrow"/>
                                    </ButtonLink>
                                </div>
                                <p className=" font-normal text-xs leading-[16px] text-center text-white pt-2.5 ">1-minute
                                    quiz for personalized Insights</p>
                            </div>
                        </div>
                        <img
                            className="hidden lg:block lg:absolute lg:right-[-112px] lg:top-[45px]"
                            alt="Fametonik"
                            src="images/influe_mobile_mockup_lg.webp"
                            srcSet="images/influe_mobile_mockup_lg.webp 1x, images/influe_mobile_mockup_lg_2x.webp 2x"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
