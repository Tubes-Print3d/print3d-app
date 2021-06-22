import React from "react";
import { Container } from "@material-ui/core";
import { useAddProductMutation } from "./products.api";
import { useSnackbar } from "notistack";
import HeadTitle from "../../components/HeadTitle";
import { usePengguna } from "../../hooks/pengguna";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import ProductForm from "./ProductForm";

function AddProduct(props) {
  const { data: dataPengguna } = usePengguna();
  const [addProduct] = useAddProductMutation();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const formikSetup = {
    initialValues: {
      nama: "",
      royalty: null,
      deskripsi: "",
      pemilik: dataPengguna?.nama,
    },
    validationSchema: Yup.object({
      nama: Yup.string().required(),
      royalty: Yup.number()
        .typeError("Royalti harus berupa angka")
        .min(0)
        .required("Penting"),
      deskripsi: Yup.string(),
    }),
    onSubmit: async (values) => {
      const packet = { ...values };
      delete packet.pemilik;
      try {
        await addProduct(packet).unwrap();
        enqueueSnackbar("Produk berhasil ditambahkan", { variant: "success" });
        history.push("/produk");
      } catch (error) {
        enqueueSnackbar(error.data?.error, { variant: "error" });
      }
    },
  };

  return (
    <Container>
      <HeadTitle top="TAMBAH" bottom="PRODUK" />
      <ProductForm formikSetup={formikSetup} />
    </Container>
  );
}

AddProduct.propTypes = {};

export default AddProduct;
