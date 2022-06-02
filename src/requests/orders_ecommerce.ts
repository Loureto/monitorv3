import { api } from "@services/api";

export const GetOrdersEcommerce = async (subsidiary) => {
  try {
    const response = await api.get(
      `appjobs/v1/tasks/pickup-digital/store/subsidiary/${subsidiary}?page=1&size=100&typesList=ECOMMERCE`
    );

    const data = response.data;

    return data;
  } catch (error) {
    const data = error.response;

    return data;
  }
};
