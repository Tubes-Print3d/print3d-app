import React from "react";
import { Container } from "@material-ui/core";
import { useEditProductMutation } from "./products.api";
import { useSnackbar } from "notistack";
import HeadTitle from "../../components/HeadTitle";
import { usePengguna } from "../../hooks/pengguna";
import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

function EditProduct(props) {
  const { data: dataPengguna } = usePengguna();
  const [editProduct] = useEditProductMutation();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();
  const history = useHistory();
  const product = history.location.state?.product;

  const formikSetup = {
    initialValues: {
      nama: product.nama,
      royalty: product.royalty,
      deskripsi: product.deskripsi,
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
        await editProduct({ id, body: packet }).unwrap();
        enqueueSnackbar("Produk berhasil diubah", { variant: "success" });
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

EditProduct.propTypes = {};

export default EditProduct;
