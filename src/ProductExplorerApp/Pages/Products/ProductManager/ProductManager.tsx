import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../Store";
import { Product } from "../../../Components/Redux/ProductsData/ProductSlice";
import { addProductAsync, updateProductAsync } from "../../../Components/Redux/ProductsData/ProductsService";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Page,
  Title,
  Form,
  Input,
  ButtonWrapper,
  SubmitButton,
  BackButton,
} from "./ProductManager.Styled";


const ProductManager = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.ProductsData.products);
  const location = useLocation();
  const navigate = useNavigate();
  const productToEdit: Product | undefined = location.state?.product || [];
  const isEdit: boolean = location.state?.isEdit || false;

  const [formData, setFormData] = useState<Product>({
    id: productToEdit?.id || "",
    name: productToEdit?.name || "",
    price: productToEdit?.price || 0,
    description: productToEdit?.description || "",
    category: productToEdit?.category || "",
    stock: productToEdit?.stock || 0,
    image: productToEdit?.image || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    });
  };

  const handleAdd = () => {
    if (isEdit) {
      const existing = products.find(p => p.id === formData.id);
      if (!existing) {
        alert("Product ID does not exist. Use Add to create a new product.");
        return;
      }

      dispatch(updateProductAsync(formData));
    } else {
      dispatch(addProductAsync({ ...formData, id: crypto.randomUUID() }));
    }
    setFormData({
      id: "",
      name: "",
      price: 0,
      description: "",
      category: "",
      stock: 0,
      image: "",
    });
    navigate("/products");
  };

  return (
    <Page>
      <BackButton onClick={() => navigate("/products")}>← Back</BackButton>

      <Title>{isEdit ? "Update Product" : "Add Product"}</Title>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <Input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <Input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <Input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
        <Input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
        <Input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />

        <ButtonWrapper>
          <SubmitButton type="submit">
            {isEdit ? "Update Product" : "Add Product"}
          </SubmitButton>
        </ButtonWrapper>
      </Form>
    </Page>

  );

};

export default ProductManager;
