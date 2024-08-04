import { useQuery } from "@tanstack/react-query";

const Card = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading..
      </div>
    );
  }

  //   if (isError) {
  //     console.log("Error while fetching data");
  //     return <div>Error fetching data</div>;
  //   }

  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data</div>;
  }
  console.log("data...", data);
  return (
    <div className=" grid grid-cols-3 grid-rows-3 gap-10 p -10 m-5  ">
      {data.map((item) => (
        <div
          className=" bg-fuchsia-600 shadow-2xl shadow-fuchsia-400 rounded-lg hover:bg-neutral-700"
          key={item.id}
        >
          <img
            className=" rounded-2xl w-[300px] h-[300px] p-5 hover:rounded-full"
            src={item.image}
            alt="products"
          />
          <h1 className=" p-5 text-white font-bold text-2xl hover:text-white ">
            {item.title}
          </h1>
          <p className=" p-5 text-justify text-black text-lg font-bold hover:text-yellow-400 ">
            {item.description}
          </p>
          <p className=" p-5 text-lg text-white font-bold hover:text-orange-300 ">
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
