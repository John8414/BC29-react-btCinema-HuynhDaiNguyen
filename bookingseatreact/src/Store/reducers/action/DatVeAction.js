import { DAT_GHE, HUY_GHE } from "../type/datVeType";

const datVeAction = (ghe) => {
   return {
      type: DAT_GHE,
      payload: ghe
   };
};

const huyVeAction = (ghe) => {
   return {
      type: HUY_GHE,
      payload: ghe
   };
};

export { datVeAction, huyVeAction };