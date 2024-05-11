import type { IEvent } from "~/common/dto";
import { useHelper } from "../useHelper";

export const eventsApi = () => {
  const listEvents = async (): Promise<IEvent[]> => {
    const resp = await $fetch<any>(useHelper().getUrl(`/events`), {
      method: "GET",
      params: {
        userId: localStorage.getItem("userId"),
      },
    }).catch((error) => {
      console.error(error, `Error fetching google auth`);
      return null;
    });

    return resp as IEvent[];
  };

  return {
    listEvents,
  };
};
