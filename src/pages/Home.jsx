import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Footer from '../components/Footer'
import TopInfoBar from '../components/TopInfoBar'
import LocatorFinder from './LocatorFinder'
import EMICalculator from '../components/EmiCalculator'
import LoanSection from '../components/LoanSection'
import InterestRateSection from '../components/InterestRateSection'
import DeafFundNotice from '../components/DeafFundNotice'


export default function Home() {
    return (
        <>
            <TopInfoBar />
            <Header />
            <Navbar />

            <div className="space-y-10">
                <HeroSlider />
                <EMICalculator />
                <DeafFundNotice />
                <InterestRateSection />
                <LoanSection />
                <LocatorFinder />
            </div>
            <Footer />
        </>
    )
}
