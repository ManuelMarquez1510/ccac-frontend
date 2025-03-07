"use client";

// import { useGetProductBySlug } from "@/api/getProductBySlug";
// import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;

  // const { result }: ResponseType = useGetProductBySlug(productSlug)

  // if (result === null) {
  //     return <SkeletonProduct />
  // }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
      <div className="grid sm:grid-cols-2">
        <div>
          <div className="sm:px-16">
            <Carousel>
              <CarouselContent>
                {/* {images.data.map((image) => ( */}
                <CarouselItem key={1}>
                  <img
                    src={"/arquitectura.jpg"}
                    alt="Image product"
                    className="rounded-lg"
                  />
                </CarouselItem>
                {/* ))} */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="sm:px-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ex!
          Impedit accusantium voluptatibus a molestiae repudiandae perspiciatis.
          Laudantium numquam vitae quis, aut voluptate ullam temporibus natus
          praesentium quaerat recusandae deleniti?
          {/* <InfoProduct product={result[0]} /> */}
        </div>
      </div>
    </div>
  );
}
