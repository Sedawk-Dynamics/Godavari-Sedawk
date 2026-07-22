import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import GallerySection from '@/components/GallerySection'
import PricingSection from '@/components/PricingSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import LocationSection from '@/components/LocationSection'
import EnquiryForm from '@/components/EnquiryForm'

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <GallerySection />
      <PricingSection />
      <WhyChooseUs />
      <LocationSection />
      <EnquiryForm />
    </main>
  )
}
