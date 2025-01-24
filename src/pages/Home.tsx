import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";
import { fetchGarments } from "@/services/api";
import { API_CONFIG } from "@/config/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['garments'],
    queryFn: fetchGarments,
    onError: () => {
      toast.error("Не удалось загрузить товары");
    }
  });

  const products = data?.data.results || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Каталог вышивки
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Изысканные дизайны, созданные с вниманием к каждой детали
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <ProductCard 
                      product={{
                        ...product,
                        image: `${API_CONFIG.baseURL}${product.image}`
                      }} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;