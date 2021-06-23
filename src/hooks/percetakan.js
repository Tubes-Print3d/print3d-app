import { useDispatch, useSelector } from "react-redux";
import { closeDrawer, openDrawer } from "../features/printing/printing.slice";

export const useDrawer = () => {
  const dispatch = useDispatch();

  const drawer = useSelector((state) => state.printing.drawer);

  return {
    drawerState: {
      ...drawer,
      onClose: () => {
        dispatch(closeDrawer());
      },
    },
    drawerControl: {
      onClick: () => {
        dispatch(openDrawer());
      },
    },
  };
};
