import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Loading from "./Loader";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import { useChangePasswordMutation } from "../redux/slices/api/userApiSLice";
import { toast } from "sonner";

const ChangePassword = ({ open, setOpen }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Use the mutation hook for password change
  const [changeUserPassword, { isLoading }] = useChangePasswordMutation();

  const handleOnSubmit = async (data) => {
    if (data.password !== data.cpass) {
      toast.warning("Passwords don't match");
      return;
    }

    try {
      const res = await changeUserPassword(data).unwrap();
      toast.success("Password changed successfully");

      // Close modal after successful password change
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="p-4">
        <Dialog.Title
          as="h2"
          className="text-base font-bold leading-6 text-gray-900 mb-4"
        >
          Change Password
        </Dialog.Title>
        <div className="mt-2 flex flex-col gap-6">
          <Textbox
            placeholder="New password"
            type="password"
            name="password"
            label="New Password"
            className="w-full rounded"
            register={register("password", {
              required: "New password is required",
            })}
            error={errors.password ? errors.password.message : ""}
          />
          <Textbox
            placeholder="Confirm new password"
            type="password"
            name="cpass"
            label="Confirm New Password"
            className="w-full rounded"
            register={register("cpass", {
              required: "Confirm new password is required",
            })}
            error={errors.cpass ? errors.cpass.message : ""}
          />
        </div>

        {isLoading ? (
          <div className="py-5">
            <Loading />
          </div>
        ) : (
          <div className="py-3 mt-4 flex justify-end gap-4">
            <Button
              type="submit"
              className="bg-blue-600 px-8 text-sm font-semibold text-white"
              label="Save"
            />
            <button
              type="button"
              className="bg-white px-5 text-sm font-semibold text-gray-900"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </ModalWrapper>
  );
};

export default ChangePassword;
