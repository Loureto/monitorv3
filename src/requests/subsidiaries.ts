import { api } from "@services/api";
import { Subsidiaries } from "src/types/subsidiary_types";

async function getSubsidiaries(user: string, lat, long): Promise<Subsidiaries> {
  try {
    const { data: response } = await api.get<Subsidiaries>(
      `/appjobs/v1/subsidiaries/user/${user}?location=${lat},${long}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export default getSubsidiaries;
