import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"


export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24'>
      <div className='container'>
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to track progress
          </h2>
          <p className='section-description mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            cumque nostrum aut eligendi. Provident, iste sed eius, non nobis
            fuga, aut commodi explicabo illum voluptates labore totam adipisci
            aperiam corporis?
          </p>
          <div className='relative'>
            <Image src={productImage} alt='Product Image' className='mt-10' />
            <Image
              src={pyramidImage}
              alt='Pyramid Image'
              height={262}
              width={262}
              className='hidden md:block absolute -right-36 -top-32'
            />
            <Image
              src={tubeImage}
              alt='Tube Image'
              height={248}
              className='hidden md:block absolute bottom-24 -left-36'
            />
          </div>
        </div>
      </div>
    </section>
  )
};
