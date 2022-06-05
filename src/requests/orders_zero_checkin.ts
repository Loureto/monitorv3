import { api } from "@services/api";

const getOrdersZeroCheckin = async (subsidiary) => {
  try {
    const response = await api.get(
      `appjobs/v1/tasks/pickup-digital/store/subsidiary/${subsidiary}?page=1&size=100&typesList=CHECKIN&typesList=ZEROCONTACT`
    );

    return response;
  } catch (error) {
    return error;
  }
};

export default getOrdersZeroCheckin;

// VERSAO NOVA
// `excelenciaop/v1/pickup-digital/tasks/store/subsidiary/${subsidiary}?page=1&size=100&typesList=CHECKIN&typesList=ZEROCONTACT`

// VERSAO ANTIGA
// `appjobs/v1/tasks/pickup-digital/store/subsidiary/${subsidiary}?page=1&size=100&typesList=CHECKIN&typesList=ZEROCONTACT`
