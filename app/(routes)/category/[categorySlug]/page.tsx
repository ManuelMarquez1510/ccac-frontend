"use client";
// import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
// import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FiltersControlsCategory from "./components/filters-controls-category";
// import SkeletonSchema from "@/components/skeletonSchema";
// import ProductCard from "./components/product-card";
// import { ProductType } from "@/types/product";
import { useState } from "react";
import { Expand, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import IconButton from "@/components/icon-button";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  // const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");
  const router = useRouter();

  // const filteredProducts =
  //   result !== null &&
  //   !loading &&
  //   (filterOrigin === ""
  //     ? result
  //     : result.filter(
  //         (product: ProductType) => product.attributes.origin === filterOrigin
  //       ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-medium">Arquitectura</h1> <Separator />
      <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        <div
          // href={`/product/${product.attributes.slug}`}
          className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
        >
          {/* <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p
              className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
            >
              {product.attributes.taste}
              cola1
            </p>
            <p
              className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
            >
              {product.attributes.origin}
              cola2
            </p>
          </div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {/* {product.attributes.images.data.map((image) => ( */}
              <CarouselItem key={1} className="group">
                <img
                  src={"/arquitectura.jpg"}
                  alt="Image"
                  className="rounded-xl"
                />
                <div
                  className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
                >
                  <div className="flex justify-center gap-x-6">
                    <IconButton
                      onClick={() =>
                        // router.push(`/product/${product.attributes.slug}`)
                        console.log("first")
                      }
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      onClick={() => console.log("product")}
                      icon={
                        <ShoppingCartIcon size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              {/* ))} */}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center">
            {/* {product.attributes.productName}
             */}
            AutoCAD Básico
          </p>
          <p className="font-bold text-center">
            {/* {formatPrice(product.attributes.price)} */}
            $5000
          </p>
        </div>
        <div
          // href={`/product/${product.attributes.slug}`}
          className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
        >
          {/* <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p
              className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
            >
              {product.attributes.taste}
              cola1
            </p>
            <p
              className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
            >
              {product.attributes.origin}
              cola2
            </p>
          </div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {/* {product.attributes.images.data.map((image) => ( */}
              <CarouselItem key={1} className="group">
                <img
                  src={"/arquitectura.jpg"}
                  alt="Image"
                  className="rounded-xl"
                />
                <div
                  className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
                >
                  <div className="flex justify-center gap-x-6">
                    <IconButton
                      onClick={() =>
                        // router.push(`/product/${product.attributes.slug}`)
                        console.log("first")
                      }
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      onClick={() => console.log("product")}
                      icon={
                        <ShoppingCartIcon size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              {/* ))} */}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center">
            {/* {product.attributes.productName}
             */}
            AutoCAD intermedio
          </p>
          <p className="font-bold text-center">
            {/* {formatPrice(product.attributes.price)} */}
            $1000
          </p>
        </div>
        <div
          // href={`/product/${product.attributes.slug}`}
          className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
        >
          {/* <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p
              className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
            >
              {product.attributes.taste}
              cola1
            </p>
            <p
              className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
            >
              {product.attributes.origin}
              cola2
            </p>
          </div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {/* {product.attributes.images.data.map((image) => ( */}
              <CarouselItem key={1} className="group">
                <img
                  src={"/arquitectura.jpg"}
                  alt="Image"
                  className="rounded-xl"
                />
                <div
                  className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
                >
                  <div className="flex justify-center gap-x-6">
                    <IconButton
                      onClick={() =>
                        // router.push(`/product/${product.attributes.slug}`)
                        console.log("first")
                      }
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      onClick={() => console.log("product")}
                      icon={
                        <ShoppingCartIcon size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              {/* ))} */}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center">
            {/* {product.attributes.productName}
             */}
            AutoCAD Básico
          </p>
          <p className="font-bold text-center">
            {/* {formatPrice(product.attributes.price)} */}
            $5000
          </p>
        </div>
        <div
          // href={`/product/${product.attributes.slug}`}
          className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
        >
          {/* <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p
              className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
            >
              {product.attributes.taste}
              cola1
            </p>
            <p
              className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
            >
              {product.attributes.origin}
              cola2
            </p>
          </div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {/* {product.attributes.images.data.map((image) => ( */}
              <CarouselItem key={1} className="group">
                <img
                  src={"/arquitectura.jpg"}
                  alt="Image"
                  className="rounded-xl"
                />
                <div
                  className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
                >
                  <div className="flex justify-center gap-x-6">
                    <IconButton
                      onClick={() =>
                        // router.push(`/product/${product.attributes.slug}`)
                        console.log("first")
                      }
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      onClick={() => console.log("product")}
                      icon={
                        <ShoppingCartIcon size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              {/* ))} */}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center">
            {/* {product.attributes.productName}
             */}
            AutoCAD intermedio
          </p>
          <p className="font-bold text-center">
            {/* {formatPrice(product.attributes.price)} */}
            $1000
          </p>
        </div>
        <div
          // href={`/product/${product.attributes.slug}`}
          className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
        >
          {/* <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p
              className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
            >
              {product.attributes.taste}
              cola1
            </p>
            <p
              className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
            >
              {product.attributes.origin}
              cola2
            </p>
          </div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {/* {product.attributes.images.data.map((image) => ( */}
              <CarouselItem key={1} className="group">
                <img
                  src={"/arquitectura.jpg"}
                  alt="Image"
                  className="rounded-xl"
                />
                <div
                  className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
                >
                  <div className="flex justify-center gap-x-6">
                    <IconButton
                      onClick={() =>
                        // router.push(`/product/${product.attributes.slug}`)
                        console.log("first")
                      }
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      onClick={() => console.log("product")}
                      icon={
                        <ShoppingCartIcon size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              {/* ))} */}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center">
            {/* {product.attributes.productName}
             */}
            AutoCAD Básico
          </p>
          <p className="font-bold text-center">
            {/* {formatPrice(product.attributes.price)} */}
            $5000
          </p>
        </div>
        <div
          // href={`/product/${product.attributes.slug}`}
          className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
        >
          {/* <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
            <p
              className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
            >
              {product.attributes.taste}
              cola1
            </p>
            <p
              className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
            >
              {product.attributes.origin}
              cola2
            </p>
          </div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {/* {product.attributes.images.data.map((image) => ( */}
              <CarouselItem key={1} className="group">
                <img
                  src={"/arquitectura.jpg"}
                  alt="Image"
                  className="rounded-xl"
                />
                <div
                  className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
                >
                  <div className="flex justify-center gap-x-6">
                    <IconButton
                      onClick={() =>
                        // router.push(`/product/${product.attributes.slug}`)
                        console.log("first")
                      }
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      onClick={() => console.log("product")}
                      icon={
                        <ShoppingCartIcon size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              {/* ))} */}
            </CarouselContent>
          </Carousel>
          <p className="text-2xl text-center">
            {/* {product.attributes.productName}
             */}
            AutoCAD intermedio
          </p>
          <p className="font-bold text-center">
            {/* {formatPrice(product.attributes.price)} */}
            $1000
          </p>
        </div>
      </div>{" "}
      {/* {result !== null && !loading && result.length !== 0 && (
        <h1 className="text-3xl font-medium">
          Café {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
        </div>
      </div> */}
    </div>
  );
}
