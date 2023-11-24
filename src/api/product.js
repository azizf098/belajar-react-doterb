import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const apiUrl = "https://fakestoreapi.com/products";

export const useQueryProducts = () => {
  const queryClient = useQueryClient();

  return {
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axios.get(apiUrl);
      return data;
    },
    onMutate: async () => {
      await queryClient.cancelQueries(["products"]);
    },
  };
};

export const useQueryProduct = () => {
  const queryClient = useQueryClient();

  return {
    queryKey: ["product"],
    queryFn: async (id) => {
      const { data } = await axios.get(`${apiUrl}/${id}`);
      return data;
    },
    onMutate: async () => {
      await queryClient.cancelQueries(["products"]);
    },
  };
};

const useMutateProduct = () => {
  const queryClient = useQueryClient();

  const mutateProduct = async (mutationFn, params) => {
    await queryClient.cancelQueries(["products"]);
    try {
      const response = await mutationFn(params);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return mutateProduct;
};

export const useGetProducts = () => useQuery(useQueryProducts());

export const useSingleProduct = () => useQuery(useQueryProduct());

export const useAddProducts = () =>
  useMutation(
    (newProduct) => axios.post(apiUrl, newProduct),
    useMutateProduct()
  );

export const useUpdateProducts = () =>
  useMutation(
    ({ id, updatedProduct }) => axios.put(`${apiUrl}/${id}`, updatedProduct),
    useMutateProduct()
  );

export const useDeleteProduct = () =>
  useMutation((id) => axios.delete(`${apiUrl}/${id}`)
        .then(() => {
          alert(`Data berhasil dihapus`);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 404) {
              alert(`Data tidak ditemukan`);
            } else if (error.response.status === 400) {
              alert(`${error.response.status} BAD REQUEST`);
            } else if (error.response.status === 500) {
              alert(`${error.response.status} INTERNAL SERVER ERROR`);
            }
          }
        }),
    useMutateProduct()
  );

// export const useSingleProductt = () =>
//   useMutation(
//     ({ id }) => axios.get(`${apiUrl}/${id}`),
//     useMutateProduct()
//   );

// const getProductById = async (productId) => {
//   const response = await fetch(`/api/products/${productId}`);
//   const data = await response.json();
//   return data;
// };

export const useProductById = (productId) => {
  return useQuery(['product', productId], )
};
