import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectKeranjang,
  selectPengguna,
} from "../features/profile/profile.slice";

export const usePengguna = () => {
  // const pengguna = useSelector(selectPengguna);
  const pengguna = useSelector((state) => state.profile);
  const { data, keranjang } = pengguna;
  return useMemo(() => ({ data, keranjang }), [pengguna]);
};

export const useKeranjang = () => {
  const keranjang = useSelector(selectKeranjang);

  return useMemo(() => keranjang, [keranjang]);
};

export const useLoggedIn = () => {
  const token = useSelector((state) => state.profile.token);
  return useMemo(() => Boolean(token), [token]);
};
