import { FormEvent, useRef, useState } from "react";
import "./style.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "Zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3, { message: "Description must not be empty." }),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(18),
  category: z.string().min(1, { message: "Category is required." }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [selected, setSelected] = useState("All Categories");

  const [products, setProducts] = useState([
    { description: "Eggs", amount: 10, category: "Groceries" },
    { description: "Electricity", amount: 100, category: "Utilities" },
    { description: "Movies", amount: 15, category: "Entertainment" },
    { description: "Milk", amount: 5, category: "Groceries" },
  ]);

  const filteredProducts = products.filter((item) => {
    if ("All Categories" === selected) return true;
    return item.category === selected;
  });

  let total = 0;

  filteredProducts.forEach((item) => {
    total += item.amount;
  });

  const handleDelete = (index: number) => {
    setProducts(
      products.filter((item, itemIndex) => {
        return index !== itemIndex;
      })
    );
  };

  interface expense {
    description: string;
    amount: number;
    category: string;
  }

  const onSubmit = (data:expense) => {
    setProducts([...products, { ...data }]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="Groceries">Groceries</option>
            <option value="utilities">utilities</option>
            <option value="entertainment">entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="mb-3 mt-3">
        <select
          id="selectCategory"
          className="form-select"
          onChange={(event) => {
            setSelected(event.target.value);
          }}
        >
          <option value="All Categories">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.description}</td>
              <td>{product.amount}</td>
              <td>{product.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Form;
