import { api } from "@services/api";

export const CleanOrders = async (subsidiary) => {
  try {
    const response = await api.delete(
      `/excelenciaop/v1/pickup-digital/tasks/subsidiary/${subsidiary}`
    );

    return response;
  } catch (error) {
    return error;
  }
};
