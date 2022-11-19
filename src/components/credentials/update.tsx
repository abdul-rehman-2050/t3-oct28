import React, { useEffect } from "react";
import { ICredential } from "../../types/global";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AllCredentialType } from "../../pages/admin/cred";

export const CredentialValidationSchema = z
  .object({
    id: z.number(),
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    role: z.string().min(1, { message: "Select a valid User Role" }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
export type CredentialValidationSchemaType = z.infer<
  typeof CredentialValidationSchema
>;

interface CredentialProps {
  credential?: ICredential | null;
  submitFunction?: (cred: AllCredentialType)=>void;
}

const UpdateCredential = (props: CredentialProps) => {
  const stylesInput = "mform-input";
  const stylesLabel = "mform-label";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CredentialValidationSchemaType>({
    resolver: zodResolver(CredentialValidationSchema),
  });
  const onSubmit: SubmitHandler<ICredential> = (data) => {
    console.log(data);
    if(props.submitFunction){
        props.submitFunction({
          id: data.id,
          username: data.username,
          email: data.email,
          password: data.password as string,
          role: data.role as string,
        })
    }
  };

  useEffect(() => {
    reset({
      username: props.credential?.username,
      email: props.credential?.email,
      id: props.credential?.id,
      password: "",
      confirmPassword: "",
      role: props.credential?.role,
    });
  }, [props.credential, reset]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="w-full space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="mtext-h1">Update Credentials</h1>
          <form className="mform" onSubmit={handleSubmit(onSubmit)}>
            <input name="id" type="hidden" />
            <div className="flex justify-between">
              <div>
                <label htmlFor="username" className="mform-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="mform-input w-48"
                  placeholder="username"
                  required
                  {...register("username")}
                />
                {errors.username && (
                  <p className="mt-2 text-xs italic text-error">
                    {errors.username?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="select" className={stylesLabel}>
                  User Role
                </label>

                <select
                  className="mform-input w-48"
                  {...register("role", { required: true })}
                >
                  <option disabled selected>
                    Pick User Role
                  </option>
                  <option>ADMIN</option>
                  <option selected>USER</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="email" className={stylesLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={stylesInput}
                placeholder="name@company.com"
                required
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-xs italic text-error">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <div>
                <label htmlFor="password" className={stylesLabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="mform-input w-48"
                  required
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-2 text-xs italic text-error">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="confirm-password" className={stylesLabel}>
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="mform-input w-48 ml-1"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-xs italic text-error">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={handleSubmit(onSubmit)}
                className="btn-primary btn-block btn"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateCredential;
