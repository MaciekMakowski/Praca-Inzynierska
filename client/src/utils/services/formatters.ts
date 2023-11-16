import { IsolationResponse } from "../types/responseTypes";
import { IsolationType } from "../types/basicTypes";

export const createIsolation = (isolation: IsolationResponse) => {
    const newIsolation: IsolationType = {
        id: isolation.id,
        attributes: {
          reason: isolation.attributes.reason,
          startDate: isolation.attributes.startDate,
          endDate: isolation.attributes.endDate,
          status: isolation.attributes.status,
          animal: isolation.attributes.animal.data,
          description: isolation.attributes.description,
        },
      };
      return newIsolation;
}