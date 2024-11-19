import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useCartSelector } from "../hooks/useCartSelector";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().length(11),
  address: z.string().min(3),
  phoneNumber: z.string().trim().length(11),
});

type FormFields = z.infer<typeof schema>;

export const Register: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormFields | null>(null);
  const productItem = useCartSelector((state) => state.cart.items);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData(data);
      setOpen(true);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };
  return (
    <div className="container mx-auto mt-10">
      <form
        className="flex flex-col justify-center gap-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="py-2 px-3 text-lg"
          {...register("name")}
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
        <input
          className="py-2 px-3 text-lg"
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          className="py-2 px-3 text-lg"
          {...register("phone")}
          type="text"
          placeholder="Phone"
        />
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}
        <input
          className="py-2 px-3 text-lg"
          {...register("address")}
          type="text"
          placeholder="Address"
        />
        {errors.address && (
          <div className="text-red-500">{errors.address.message}</div>
        )}
        <input
          className="py-2 px-3 text-lg"
          {...register("phoneNumber")}
          type="text"
          placeholder="Phone Number"
        />
        {errors.phoneNumber && (
          <div className="text-red-500">{errors.phoneNumber.message}</div>
        )}
        <button
          className="py-2 px-4 text-lg font-semibold border-t-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Payment successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="text-sm text-gray-500">
                          {formData && (
                            <div>
                              <p>Name: {formData.name}</p>
                              <p>Email: {formData.email}</p>
                              <p>Phone: {formData.phone}</p>
                              <p>Address: {formData.address}</p>
                              <p>Phone Number: {formData.phoneNumber}</p>
                            </div>
                          )}
                          {productItem.map((item) => (
                            <div key={item.id}>
                              <p>orther:</p>
                              <p>
                                {item.title} : ${item.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      <a href="/">Go back to home</a>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
