"use client"

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OrderForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        toast.success("Order Placed Successful");
    }
    return (
        <div className="bg-base-300 p-5 rounded mt-5 md:mt-8">
            <h1 className="text-[#1F2A24] text-2xl font-bold">Booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Full Name</legend>
                    <input type="text" className="input" placeholder="Enter Full Name" {...register("name", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email Address</legend>
                    <input type="email" className="input validator" placeholder="mail@site.com" {...register("email", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Phone Number</legend>
                    <input type="tel" className="input validator tabular-nums" placeholder="Phone" pattern="[0-9]*" minLength="11" maxLength="11" title="Must be 11 digits" {...register("phone", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <p className="validator-hint">Must be 11 digits</p>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Delivery Adress</legend>
                    <textarea className="textarea h-10" placeholder="Address" {...register("address", { required: true })}></textarea>
                    {errors.exampleRequired && <span>This field is required</span>}
                </fieldset>
                <input className="btn bg-[#1F7A4D] text-white" type="submit" />
            </form>
        </div>
    );
};

export default OrderForm;