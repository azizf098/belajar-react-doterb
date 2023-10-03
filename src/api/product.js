import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const apiUrl = "https://fakestoreapi.com/products";

export const useQueryProducts = () => {
  const queryClient = useQueryClient();

  return {
    queryKey: ['product'],
    queryFn: async () => {
      const { data } = await axios.get(apiUrl);
      return data;
    },
    onMutate: async () => {
      await queryClient.cancelQueries(['products']);
    },
  };
};

const useMutateProduct = () => {
  const queryClient = useQueryClient();

  const mutateProduct = async (mutationFn, params) => {
    await queryClient.cancelQueries(['products']);
    try {
      const response = await mutationFn(params);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return mutateProduct;
}

export const useGetProducts = () => useQuery(useQueryProducts());

export const useAddProducts = () => 
  useMutation((newProduct) => axios.post(apiUrl, newProduct), useMutateProduct());

export const useUpdateProducts = () => 
  useMutation(({ id, updatedProduct }) => axios.put(`${apiUrl}/${id}`, updatedProduct), useMutateProduct());

export const useDeleteProducts = () => {
  useMutation((id) => axios.delete(`${apiUrl}/${id}`), useMutateProduct());
};
