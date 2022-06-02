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
