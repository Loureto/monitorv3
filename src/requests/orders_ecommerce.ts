import { api } from "@services/api";

export const getOrdersEcommerce = async (subsidiary) => {
  try {
    const response = await api.get(
      `excelenciaop/v1/pickup-digital/tasks/store/subsidiary/${subsidiary}?page=1&size=100&typesList=ECOMMERCE`
    );

    return response.data;
  } catch (error) {
    const data = error.response;

    return data;
  }
};

// VERSAO NOVA
// `excelenciaop/v1/pickup-digital/tasks/store/subsidiary/${subsidiary}?page=1&size=100&typesList=ECOMMERCE`

// VERSAO ANTIGA
// `appjobs/v1/tasks/pickup-digital/store/subsidiary/${subsidiary}?page=1&size=100&typesList=ECOMMERCE`
